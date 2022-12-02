// Path: ./pages/api/auth/forgotPassword.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prisma'
import sgMail from '@sendgrid/mail'
import { sign } from 'jsonwebtoken'

export default async function forgotPassword(req: NextApiRequest, res: NextApiResponse) {
	const session = await getSession({ req })

	if (session) {
		res.json({
			error: 'You are already signed in',
		})
	}

	if (req.method === 'POST') {
		const { email } = req.body

		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		})

		if (!user) {
			res.json({
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
			success: 'Email sent',
		})
	} else {
		res.json('Invalid request method')
	}
}
