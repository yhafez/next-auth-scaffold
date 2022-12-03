// Path: ./pages/api/auth/index.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.json({
			message: 'API is healthy',
		})
	} else {
		res.status(405).json({
			error: 'Invalid request method',
		})
	}
}
