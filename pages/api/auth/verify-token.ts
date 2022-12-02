// Path: ./pages/api/auth/verify-token.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'
import { verify } from 'jsonwebtoken'

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req })

	if (session) {
		res.json({
			error: 'You are already signed in',
		})
	}

	if (req.method === 'POST') {
		const { token } = req.body

		const decoded = verify(token, process.env.JWT_SECRET!)

		if (!decoded) {
			res.json({
				error: 'Invalid token',
			})
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: decoded.email,
				},
			})

			if (!user) {
				res.json({
					error: 'User does not exist',
				})
			}

			res.json({
				success: 'User verified',
				email: user?.email,
				token: token,
			})
		} catch (error) {
			res.json({
				error: 'Something went wrong',
			})
		}
	}
}
