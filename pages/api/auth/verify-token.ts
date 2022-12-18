// Path: ./pages/api/auth/verify-token.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { verify } from 'jsonwebtoken'

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { token, id } = req.body

		if (!token || !id) {
			return res.status(400).json({
				error: 'Missing token or id',
			})
			return
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					id: id,
				},
			})

			if (!user?.id || !user?.email) {
				res.status(404).json({
					error: 'User does not exist',
				})
				return
			}

			const secret = process.env.JWT_SECRET! + user?.password + user?.salt

			try {
				const payload = verify(token, secret)

				if (payload) {
					return res.status(200).json({
						message: 'Token is valid',
						payload,
					})
				}
			} catch (error) {
				return res.status(401).json({
					error: 'Invalid token',
				})
			}
		} catch (error) {
			console.error('There was an error finding the user: ', error)
			return res.status(500).json({
				error: 'There was an error finding the user: ' + error,
			})
		}
	} else {
		return res.status(405).json({
			error: 'Method not allowed',
		})
	}
}
