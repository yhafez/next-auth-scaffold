// Path: ./mocks/handlers.ts
import { rest } from 'msw'

export const handlers = [
	rest.get('/api/auth/token', (req, res, ctx) => {
		return res(
			ctx.json({
				user: {
					id: 1,
					name: 'John Doe',
					email: 'test@example.com',
					image: null,
				},
			}),
		)
	}),
]
