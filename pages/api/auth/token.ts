// path: ./pages/api/auth/get-auth-token.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

export default async function getAuthToken(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const data = await getToken({ req })

		if (data && data.token) {
			res.json({ token: data.token })
		} else {
			res.status(401).json({ error: 'Invalid token' })
		}
	} else {
		res.status(405).json('Invalid request method')
	}
}
