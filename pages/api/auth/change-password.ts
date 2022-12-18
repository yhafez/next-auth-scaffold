// Path: ./pages/api/auth/change-password.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import crypto, { BinaryLike } from 'crypto'

import prisma from '../../../lib/prisma'

export default async function changePassword(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'PATCH') {
		const session = await getSession({ req })

		if (session) {
			const { password, newPassword, confirmNewPassword, email } = req.body

			if (!password || !newPassword || !confirmNewPassword || !email) {
				return res.status(400).send({ error: 'Please fill out all fields' })
			}

			if (newPassword !== confirmNewPassword) {
				return res.status(400).send({ error: 'Passwords do not match' })
			}

			try {
				const user = await prisma.user.findUnique({
					where: {
						email: email,
					},
				})

				if (!user) {
					return res.status(400).send({ error: 'User not found' })
				}

				const hash = crypto
					.pbkdf2Sync(password, user.salt as BinaryLike, 1000, 64, 'sha512')
					.toString('hex')

				if (hash !== user.password) {
					return res.status(400).send({ error: 'Incorrect password' })
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

				return res.json({
					message: 'Password changed successfully',
					user: updatedUser,
				})
			} catch (error) {
				console.error(error)
				return res.status(500).send({ error: 'Something went wrong' })
			}
		} else {
			return res.status(401).send({ error: 'Unauthorized' })
		}
	} else {
		return res.status(405).json({ error: 'Invalid request method' })
	}
}
