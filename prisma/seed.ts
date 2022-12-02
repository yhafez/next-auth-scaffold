// Path: ./prisma/seed.ts
import crypto from 'crypto'
import prisma from '../lib/prisma.js'

async function main() {
	const hashedPassword = crypto
		.createHash('sha256')
		.update('password' + 'salt')
		.digest('hex')

	const user = await prisma.user.create({
		data: {
			name: 'admin',
			email: 'yhafez3@gmail.com',
			password: hashedPassword,
			salt: 'salt',
			role: 'ADMIN',
		},
	})
	console.log(`Created user with id: ${user.id}`)
}

main()
	.catch(e => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
