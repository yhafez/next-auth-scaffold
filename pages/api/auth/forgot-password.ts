// Path: ./pages/api/auth/forgotPassword.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import sgMail from '@sendgrid/mail'
import { sign } from 'jsonwebtoken'

export default async function forgotPassword(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { email } = req.body

		if (!email) {
			return res.status(400).json({ error: 'Email is required' })
		}

		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		})

		if (!user) {
			res.status(404).json({
				error: 'User does not exist',
			})
		}

		// Create JWT
		const token = sign({ email: user?.email }, process.env.JWT_SECRET!, { expiresIn: '1d' })

		// Send email with link to reset password. To send emails, we will use the SendGrid API.
		const link = `http://localhost:3000/reset-password?token=${token}`
		const msg = {
			to: email,
			from: 'teach.ai.project@gmail.com',
			subject: 'Reset your password',
			text: `Click the link below to reset your password:

${link}

This link will expire in 1 day.

If you did not request a password reset, please ignore this email.

Thanks,
Teach.ai
`,
			html: `Click the link below to reset your password:

${link}

This link will expire in 1 day.

If you did not request a password reset, please ignore this email.

Thanks,
Teach.ai
`,
		}

		sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
		sgMail
			.send(msg)
			.then(() => {
				res.json({
					success: 'Email sent',
				})
			})
			.catch(error => {
				res.json({
					error: error.message,
				})
			})

		res.json({
			message: 'Email sent',
		})
	} else {
		res.status(405).json({ error: 'Method not allowed' })
	}
}
