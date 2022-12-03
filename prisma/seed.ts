// Path: ./prisma/seed.ts
import crypto from 'crypto'
import prisma from '../lib/prisma.js'

async function main() {
	const hashedPassword = crypto
		.createHash('sha256')
		.update('password' + 'salt')
		.digest('hex')

	// const user = await prisma.user.create({
	// 	data: {
	// 		name: 'admin',
	// 		email: 'yhafez3@gmail.com',
	// 		password: hashedPassword,
	// 		salt: 'salt',
	// 		role: 'ADMIN',
	// 	},
	// })

	// const user1 = await prisma.user.create({
	// 	data: {
	// 		name: 'user',
	// 		email: 'test@example.com',
	// 		password: hashedPassword,
	// 		salt: 'salt',
	// 		role: 'USER',
	// 	},
	// })

	// const user2 = await prisma.user.create({
	// 	data: {
	// 		name: 'user2',
	// 		email: 'test1@example.com',
	// 		password: hashedPassword,
	// 		salt: 'salt',
	// 		role: 'USER',
	// 	},
	// })
}

main()
	.catch(e => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
