// Path: ./prisma/seed.ts
import crypto from 'crypto'
import prisma from '../lib/prisma.js'

export const salt = crypto.randomBytes(16).toString('hex')
const hash = crypto.pbkdf2Sync('password', salt, 1000, 64, 'sha512').toString('hex')

const user = {
	email: 'yhafez3@gmail.com',
	password: hash,
	salt: salt,
	name: 'Youssef Hafez',
}

const user1 = {
	email: 'test@example.com',
	password: hash,
	salt: salt,
	name: 'Test User',
}

const user2 = {
	email: 'test1@example.com',
	password: hash,
	salt: salt,
	name: 'Test User 1',
}

async function main() {
	const salt = crypto.randomBytes(16).toString('hex')

	try {
		const users = await prisma.user.findMany({
			where: {
				email: {
					in: [user.email, user1.email, user2.email],
				},
			},
		})

		if (users.length === 0) {
			await prisma.user.createMany({
				data: [user, user1, user2],
			})
		} else {
			// Delete all users
			await prisma.user.deleteMany({
				where: {
					email: {
						in: [user.email, user1.email, user2.email],
					},
				},
			})

			// Create all users
			const users = await prisma.user.createMany({
				data: [user, user1, user2],
			})

			// find new users
			const newUsers = await prisma.user.findMany({
				where: {
					email: {
						in: [user.email, user1.email, user2.email],
					},
				},
			})

			console.info('Users created: ', newUsers)
		}
	} catch (error) {
		console.error('There was an error seeding the db: ', error)
	}
}

main()
	.catch(e => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
