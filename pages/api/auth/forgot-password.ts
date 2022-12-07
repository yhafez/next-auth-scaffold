// Path: ./pages/api/auth/forgotPassword.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { sign } from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const FROM_EMAIL = process.env.FROM_EMAIL
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const sendForgotPasswordEmailMail = async (toEmail: string, forgotPasswordUrl: string) => {
	try {
		const accessToken = await oAuth2Client.getAccessToken()
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: FROM_EMAIL,
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken,
			},
		})

		const mailOptions = {
			from: `Next Auth Scaffold <${FROM_EMAIL}>`,
			to: toEmail,
			subject: 'Reset your password - Next Auth Scaffold',
			text: `Hello,

		Click the link below to reset your password:

${forgotPasswordUrl}

This link will expire in 1 hour.

If you did not request a password reset, please ignore this email.

Thanks,
Next Auth Scaffold`,
			html: `
		<p>Hello,</p>
		<p>Click the link below to reset your password:</p>
		<a href="${forgotPasswordUrl}">${forgotPasswordUrl}</a>
		<p>This link will expire in 1 hour.</p>
		<p>If you did not request a password reset, please ignore this email.</p>
		<p>Thanks,<br>Next Auth Scaffold</p>
		`,
		}

		const result = await transport.sendMail(mailOptions)
		if (result.rejected.length > 0) {
			throw new Error('Email was rejected')
		}
		return result
	} catch (error) {
		console.error(error)
		throw new Error('There was an error sending the password reset email: ' + error)
	}
}

export default async function forgotPassword(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { email } = req.body

		if (!email) return res.status(400).json({ error: 'Email is required' })

		try {
			const user = await prisma.user.findUnique({
				where: {
					email: email,
				},
			})

			if (!user?.id || !user?.email) {
				res.status(404).json({
					error: 'User does not exist',
				})
				return
			}

			const secret = process.env.JWT_SECRET! + user?.password + user?.salt
			const token = sign({ email: user?.email }, secret, { expiresIn: '1d' })
			const link = `${process.env.NEXTAUTH_URL}/reset-password/${user.id}/${token}`

			try {
				const result = await sendForgotPasswordEmailMail(user?.email, link)

				if (result.rejected.length > 0) {
					res.status(400).json({
						error: 'There was an error sending the forgot password email. Email not sent',
					})
				} else {
					res.status(200).json({
						message: 'Email sent',
					})
				}
			} catch (error) {
				console.error('There was an error sending the forgot password email: ', error)
				res.status(500).json({
					error: 'There was an error sending the forgot password email: ' + error,
				})
			}
		} catch (error) {
			console.error('There was an error finding the user in the database: ', error)
			res.status(500).json({
				error: 'There was an error finding the user in the database: ' + error,
			})
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' })
	}
}
