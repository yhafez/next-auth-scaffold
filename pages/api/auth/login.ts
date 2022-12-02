// Path: ./pages/api/auth/login.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req })

	if (session) {
		res.json({
			error: 'You are already signed in',
		})
	}

	if (req.method === 'POST') {
		const { email, password } = req.body

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

		// Check if password is correct
		const hashedPassword = crypto
			.createHash('sha256')
			.update(password + user?.salt)
			.digest('hex')

		if (hashedPassword !== user?.password) {
			res.json({
				error: 'Incorrect password',
			})
		}

		// Create JWT
		const token = sign({ email: user?.email }, process.env.JWT_SECRET!, { expiresIn: '1d' })

		res.json({ token })
	} else {
		res.json('Invalid request method')
	}
}
