// Path: ./pages/api/auth/change-password.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import crypto, { BinaryLike } from 'crypto'

import prisma from '../../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') return res.status(405).send('Method not allowed')

	const session = await getSession({ req })

	if (session) {
		const { password, newPassword, confirmNewPassword, email } = req.body

		if (!password || !newPassword || !confirmNewPassword || !email) {
			return res.status(400).send('Please fill out all fields')
		}

		if (newPassword !== confirmNewPassword) {
			return res.status(400).send('Passwords do not match')
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email,
				},
			})

			if (!user) {
				return res.status(400).send('User not found')
			}

			const hash = crypto
				.pbkdf2Sync(password, user.salt as BinaryLike, 1000, 64, 'sha512')
				.toString('hex')

			if (hash !== user.password) {
				return res.status(400).send('Incorrect password')
			}

			const newSalt = crypto.randomBytes(16).toString('hex')
			const newHash = crypto.pbkdf2Sync(newPassword, newSalt, 1000, 64, 'sha512').toString('hex')

			const updatedUser = await prisma.user.update({
				where: {
					email: email,
				},
				data: {
					password: newHash,
					salt: newSalt,
				},
			})

			res.json(updatedUser)
		} catch (error) {
			console.error(error)
			res.status(500).send('Something went wrong')
		}
	} else {
		res.status(401).send('Unauthorized')
	}
}
