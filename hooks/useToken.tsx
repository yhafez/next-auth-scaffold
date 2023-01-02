// Path: ./hooks/useToken.tsx
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import { useSnackbar } from 'notistack'

import { useBoundStore } from '../store'
import { TokenError } from '../errors'

const dashboardRedirectRoutes = ['/login', '/signup', '/forgot-password', '/reset-password']

export default function useToken(errorInit?: string, loadingInit?: boolean) {
	const { data: session, status } = useSession()
	const { setUser } = useBoundStore()
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()

	const [loading, setLoading] = useState(loadingInit)
	const [error, setError] = useState(errorInit)

	const getToken = useCallback(async () => {
		try {
			setError('')
			setLoading(true)
			const res = await fetch('/api/auth/token')
			const data = await res.json()

			if (data.error) {
				if (data.error === 'Invalid token') {
					throw new TokenError({
						name: 'TokenInvalid',
						message: 'The token is invalid',
						cause: data.error,
					})
				}
				throw new TokenError({
					name: 'Token',
					message: 'There was an error getting the token from the token',
					cause: null,
				})
			}
			setUser(data.user)
			setLoading(false)
			return true
		} catch (error) {
			if (error instanceof TokenError) {
				if (error.name === 'TokenInvalid') {
					setError(error.message)
					signOut()
					return false
				} else {
					setError(error.message)
					return false
				}
			}
			setError(`There was an error getting the token: ${error}`)
			return false
		}
	}, [])

	useEffect(() => {
		if (status === 'authenticated') {
			if (session?.token && session.token?.user) {
				setUser(session.token.user)
				if (dashboardRedirectRoutes.includes(router.pathname)) router.push('/')
			} else {
				getToken().then(data => {
					if (data) {
						if (dashboardRedirectRoutes.includes(router.pathname)) router.push('/')
					}
				})
			}
		}
	}, [status, session, getToken])

	useEffect(() => {
		if (status === 'loading') return setLoading(true)
		else return setLoading(false)
	}, [status])

	useEffect(() => {
		if (status === 'unauthenticated') {
			setUser(null)
			setLoading(false)
			if (!dashboardRedirectRoutes.includes(router.pathname)) {
				enqueueSnackbar('You must be logged in to access this page', {
					variant: 'error',
					autoHideDuration: 3000,
				})
				signOut({
					callbackUrl: '/login',
				})
			}
		}
	}, [status, router])

	return { loading, error, getToken }
}
