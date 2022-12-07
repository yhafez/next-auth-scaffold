// Path: ./pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import crypto, { BinaryLike } from 'crypto'

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
			return
		}

		const hash = crypto
			.pbkdf2Sync(password, user.salt as BinaryLike, 1000, 64, 'sha512')
			.toString('hex')
		if (hash !== user?.password) {
			res.json({
				error: 'Incorrect password',
			})
		}

		res.json({ user })
	} else {
		res.status(405).json('Invalid request method')
	}
}
