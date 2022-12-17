// path: ./pages/api/auth/get-auth-token.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

export default async function getAuthToken(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const data = await getToken({ req })
		console.log('data', data)

		if (data?.token) return res.json({ ...data.token })
		else return res.status(401).json({ error: 'Invalid token' })
	} else {
		return res.status(405).json('Invalid request method')
	}
}
