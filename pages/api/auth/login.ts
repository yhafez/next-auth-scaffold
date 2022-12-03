// Path: ./pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { email, password, ...rest } = req.body

		if (rest && Object.keys(rest).length > 0) {
			return res.status(400).json({ error: 'Invalid request. Too many arguments.' })
		}

		if (!email || !password) {
			res.status(400).json({
				error: 'Missing email or password',
			})
		}

		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		})

		if (!user) {
			res.status(401).json({
				error: 'User does not exist',
			})
		}

		const hashedPassword = crypto
			.createHash('sha256')
			.update(password + user?.salt)
			.digest('hex')

		if (hashedPassword !== user?.password) {
			res.json({
				error: 'Incorrect password',
			})
		}

		const token = sign({ email: user?.email }, process.env.JWT_SECRET!, { expiresIn: '1d' })

		res.json({ token })
	} else {
		res.status(405).json('Invalid request method')
	}
}
