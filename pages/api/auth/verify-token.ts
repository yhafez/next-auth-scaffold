// Path: ./pages/api/auth/verify-token.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { verify } from 'jsonwebtoken'

export default async function verifyToken(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { token } = req.body

		if (!token) return res.status(400).json({ error: 'Token is required' })

		try {
			const decoded = verify(token, process.env.JWT_SECRET!)

			if (!decoded) {
				res.status(401).json({
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
					res.status(404).json({
						error: 'User does not exist',
					})
				}

				res.json({
					message: 'Token verified',
					email: user?.email,
					token: token,
				})
			} catch (error) {
				res.status(500).json({
					error: 'There was an error finding the user in the database' + error,
				})
			}
		} catch (error) {
			res.status(401).json({
				error: 'Invalid token',
			})
		}
	} else {
		res.status(405).json({
			error: 'Method not allowed',
		})
	}
}
