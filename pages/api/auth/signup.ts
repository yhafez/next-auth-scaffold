// Path: ./pages/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'

export default async function signup(req: NextApiRequest, res: NextApiResponse) {
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

			if (user) {
				res.json({
					error: 'User already exists',
				})
			} else {
				const salt = crypto.randomBytes(16).toString('hex')
				const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

				const newUser = await prisma.user.create({
					data: {
						email: email,
						password: hash,
						salt: salt,
					},
				})

				const token = sign({ id: newUser.id }, process.env.JWT_SECRET!, {
					expiresIn: '1d',
				})

				res.json({
					token: token,
					user: newUser,
					success: 'User created',
				})
			}
		} catch (error) {
			console.error('There was an error creating the user', error)
			res.json({
				error: 'There was an error creating the user',
				message: error.message,
			})
		}
	}
}
