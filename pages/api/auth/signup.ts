// Path: ./pages/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'

export default async function signup(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { email, password, name } = req.body

		if (!email || !password) {
			return res.status(400).json({ error: 'Missing email or password' })
		}

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email,
				},
			})

			if (user) {
				res.status(400).json({
					error: 'User already exists',
				})
			} else {
				const salt = crypto.randomBytes(16).toString('hex')
				const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

				try {
					const newUser = await prisma.user.create({
						data: {
							email: email,
							password: hash,
							salt: salt,
							name: name || null,
						},
					})

					const token = sign({ id: newUser.id }, process.env.JWT_SECRET!, {
						expiresIn: '1d',
					})

					res.status(201).json({
						token: token,
						user: newUser,
						success: 'User created',
					})
				} catch (err) {
					console.error('There was an error creating the user in the database', err)
					res.status(500).json({
						error: 'There was an error creating the user in the database',
					})
				}
			}
		} catch (error) {
			console.error('There was an error checking if the user already exists in the database', error)
			res.status(500).json({
				error: 'There was an error checking if the user already exists in the database',
			})
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' })
	}
}
