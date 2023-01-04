// Path: ./errors.ts
type FetchErrorName = 'FetchError' | 'ServerError' | 'UnknownError'

type SignInErrorName =
	| 'MissingCredentials'
	| 'MissingEmail'
	| 'MissingPassword'
	| 'UserDoesNotExist'
	| 'IncorrectPassword'
	| 'UnknownError'

type TokenErrorName =
	| 'TokenError'
	| 'TokenExpired'
	| 'TokenInvalid'
	| 'TokenMissing'
	| 'UnknownError'

export class ErrorBase<T extends string> extends Error {
	name: T
	message: string
	cause: any

	constructor({ name, message, cause }: { name: T; message: string; cause: any }) {
		super()
		this.name = name
		this.message = message
		this.cause = cause
	}
}

export class SignInError extends ErrorBase<SignInErrorName> {}
export class TokenError extends ErrorBase<TokenErrorName> {}
export class FetchError extends ErrorBase<FetchErrorName> {}

export const handleSignInError = (error: string) => {
	if (error === 'Invalid credentials') {
		throw new SignInError({
			name: 'IncorrectPassword',
			message: 'Password incorrect',
			cause: error,
		})
	} else if (error === 'User does not exist') {
		throw new SignInError({
			name: 'UserDoesNotExist',
			message: 'Email not found',
			cause: error,
		})
	}
	throw new SignInError({
		name: 'UnknownError',
		message: 'There was an unknown error logging in',
		cause: error,
	})
}
