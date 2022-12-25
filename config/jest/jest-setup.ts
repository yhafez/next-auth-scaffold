import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'
import 'whatwg-fetch'

window.matchMedia = query => ({
	matches: false,
	media: query,
	onchange: null,
	addEventListener: jest.fn(),
	removeEventListener: jest.fn(),
	dispatchEvent: jest.fn(),
	addListener: jest.fn(),
	removeListener: jest.fn(),
})

Object.defineProperty(URL, 'createObjectURL', {
	writable: true,
	value: jest.fn(),
})

// Mock next router and router.push
jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '',
			query: '',
			asPath: '',
			push: jest.fn(),
		}
	},
}))

// Mock notistack
jest.mock('notistack', () => ({
	useSnackbar() {
		return {
			enqueueSnackbar: jest.fn(),
		}
	},
}))

// Mock react-hydrate
jest.mock('react-hydration-provider', () => ({
	useHydrated() {
		return {
			hydrate: true,
		}
	},
}))

expect.extend(toHaveNoViolations)
