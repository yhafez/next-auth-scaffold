// Path: ./pages/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import { sign } from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

import prisma from '../../../lib/prisma'

const FROM_EMAIL = process.env.FROM_EMAIL
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
const PASSWORD = process.env.GMAIL_APP_PASSWORD
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const sendVerifyEmailMessage = async (toEmail: string, verifyUrl: string) => {
	try {
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: FROM_EMAIL,
				pass: PASSWORD,
			},
		} as SMTPTransport.Options)
		const mailOptions = {
			from: `Next Auth Scaffold <${FROM_EMAIL}>`,
			to: toEmail,
			subject: 'Verify your email - Next Auth Scaffold',
			text: `Hello,

		Click the link below to verify your email:

Verify E-Mail (opens in a new tab): ${verifyUrl}

This link will expire in 1 hour.

If you did not create an account, please ignore this email.

Thanks,
Next Auth Scaffold`,
			html: `
		<p>Hello,</p>
		<p>Click the link below to verify your email:</p>
		<p><a href="${verifyUrl}">Verify E-Mail</a> (opens in a new tab)</p>
		<p>This link will expire in 1 hour.</p>
		<p>If you did not create an account, please ignore this email.</p>
		<p>Thanks,<br>Next Auth Scaffold</p>
		`,
		}

		const result = await transport.sendMail(mailOptions)
		return result
	} catch (e) {
		console.error(e)
		throw new Error('There was an error sending the password reset email: ' + e)
	}
}

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
				return res.status(400).json({
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
					if (!newUser) {
						return res.status(500).json({
							error: 'There was an error creating the user in the database',
						})
					}

					const secret = process.env.JWT_SECRET! + newUser?.password + newUser?.salt
					const token = sign({ email: newUser?.email }, secret, { expiresIn: '1d' })
					const verifyUrl = `${process.env.NEXTAUTH_URL}/verify-email/${newUser.id}/${token}`
					try {
						const response = await sendVerifyEmailMessage(email, verifyUrl)

						if (!response) {
							return res.status(500).json({
								error: 'There was an error sending the verification email',
							})
						}

						return res.status(201).json({
							token: token,
							user: { ...newUser, password: null, salt: null },
							success: 'User created',
						})
					} catch (e) {
						console.error(e)
						return res.status(500).json({
							error: e.message,
						})
					}
				} catch (err) {
					console.error('There was an error creating the user in the database', err)
					return res.status(500).json({
						error: 'There was an error creating the user in the database',
					})
				}
			}
		} catch (error) {
			console.error('There was an error checking if the user already exists in the database', error)
			return res.status(500).json({
				error: 'There was an error checking if the user already exists in the database',
			})
		}
	} else {
		return res.status(405).json({ error: 'Method not allowed' })
	}
}
