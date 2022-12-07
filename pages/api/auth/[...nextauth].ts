// Path: ./pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async credentials => {
				if (!credentials?.username || !credentials?.password) {
					throw new Error('Please enter a username and password.')
				}

				try {
					const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email: credentials.username,
							password: credentials.password,
						}),
					})

					const user = await res.json()

					if (res.ok && user) {
						return user
					}

					return null
				} catch (error) {
					console.error('There was an error signing in', error)
					throw new Error(`There was an error signing in: ${error.message}`)
				}
			},
		}),
	],
	adapter: PrismaAdapter(prisma),
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
	database: process.env.DATABASE_URL,
	session: {
		strategy: 'jwt',
		jwt: true,
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	callbacks: {
		async jwt(token, user, account, profile, isNewUser) {
			if (user) {
				token.id = user.id
				token.email = user.email
				token.name = user.name
				token.image = user.image
			}
			return token
		},
	},
}

export default NextAuth(authOptions)
