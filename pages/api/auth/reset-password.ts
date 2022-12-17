// Path: ./pages/api/auth/resetPassword.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'

export default async function resetPassword(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { id, password } = req.body

		if (!id || !password) {
			return res.status(400).json({ error: 'ID and password are required' })
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					id,
				},
			})

			if (!user) {
				return res.status(404).json({
					error: 'User does not exist',
				})
			}

			const salt = crypto.randomBytes(16).toString('hex')
			const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

			try {
				await prisma.user.update({
					where: {
						id,
					},
					data: {
						password: hash,
						salt: salt,
					},
				})

				const newToken = sign({ email: user?.email }, process.env.JWT_SECRET!, { expiresIn: '1d' })
				return res.json({
					token: newToken,
					message: 'Password reset',
				})
			} catch (error) {
				return res.status(500).json({
					error: "There was an error resetting the user's password" + error,
				})
			}
		} catch (error) {
			return res.status(500).json({
				error: 'There was an error finding the user in the database: ' + error,
			})
		}
	} else {
		return res.status(405).json({ error: 'Method not allowed' })
	}
}
