export interface Session {
	token: {
		user: {
			id: string
			email: string
			emailVerified: Date | null
			image: string | null
			isDeactivated: boolean
			name: string | null
			role: 'USER' | 'ADMIN'
			createdAt: Date
			updatedAt: Date
			isNewUser?: boolean
		}
	}
}
