// Path: ./pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'
import { ErrorBase } from '../../../errors'

type AuthorizationErrorName =
	| 'MissingCredentialsError'
	| 'MissingEmailError'
	| 'MissingPasswordError'
	| 'UserDoesNotExistError'
	| 'IncorrectPasswordError'
	| 'UnknownError'

class AuthorizationError extends ErrorBase<AuthorizationErrorName> {}

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			authorize: async credentials => {
				try {
					if (!credentials?.username && !credentials?.password) {
						throw new AuthorizationError({
							name: 'MissingCredentialsError',
							message: 'Missing username and password',
							cause: null,
						})
					} else if (!credentials?.username) {
						throw new AuthorizationError({
							name: 'MissingEmailError',
							message: 'Missing email',
							cause: null,
						})
					} else if (!credentials?.password) {
						throw new AuthorizationError({
							name: 'MissingPasswordError',
							message: 'Missing password',
							cause: null,
						})
					}
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
					const data = await res.json()

					if (data.error) {
						if (data.error === 'User does not exist') {
							throw new AuthorizationError({
								name: 'UserDoesNotExistError',
								message: 'User does not exist',
								cause: data.error,
							})
						} else if (data.error === 'Incorrect password') {
							throw new AuthorizationError({
								name: 'IncorrectPasswordError',
								message: 'Invalid credentials',
								cause: data.error,
							})
						} else {
							throw new AuthorizationError({
								name: 'UnknownError',
								message: 'An unknown error occurred while signing in',
								cause: data.error,
							})
						}
					}

					if (res.ok && data.user) {
						delete data.user.password
						delete data.user.salt
						return data.user
					}

					return null
				} catch (error) {
					if (error instanceof AuthorizationError) throw error

					throw new AuthorizationError({
						name: 'UnknownError',
						message: 'An unknown error occurred while signing in',
						cause: error,
					})
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
		strategy: 'jwt' as const,
		jwt: true,
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	callbacks: {
		async jwt({ token, user, _account, isNewUser }: any) {
			if (user) {
				token = { user }
				if (isNewUser) token.user.isNewUser = true
			}
			return token
		},
		async session({ session, token }: any) {
			return { expires: session.expires, token }
		},
	},
}

export default NextAuth(authOptions)
