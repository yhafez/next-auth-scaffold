// Path: ./pages/api/auth/resetPassword.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'

export default async function resetPassword(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req })

	if (session) {
		res.json({
			error: 'You are already signed in',
		})
	}

	if (req.method === 'POST') {
		const { email, password } = req.body

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email,
				},
			})

			if (!user) {
				res.json({
					error: 'User does not exist',
				})
			}

			const salt = crypto.randomBytes(16).toString('hex')
			const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

			await prisma.user.update({
				where: {
					email: email,
				},
				data: {
					password: hash,
					salt: salt,
				},
			})

			const newToken = sign({ email: user?.email }, process.env.JWT_SECRET!, { expiresIn: '1d' })

			res.json({
				token: newToken,
				success: 'Password reset',
			})
		} catch (error) {
			res.json({
				error: error.message,
			})
		}
	} else {
		res.json('Invalid request method')
	}
}
