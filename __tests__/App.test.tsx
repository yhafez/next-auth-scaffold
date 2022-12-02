// Use axe to test the accessibility of the app
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Dashboard from '../pages/index'
import Login from '../pages/login'
import Signup from '../pages/signup'
import ForgotPassword from '../pages/forgot-password'
import ResetPassword from '../pages/reset-password/[...token]'
import { Layout } from '../components/Layout'

import { theme } from '../theme'

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

expect.extend(toHaveNoViolations)

describe('Dashboard', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<Dashboard />
				</Layout>
			</ThemeProvider>,
		)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})

describe('Login', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<Login />
				</Layout>
			</ThemeProvider>,
		)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})

describe('Signup', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<Signup />
				</Layout>
			</ThemeProvider>,
		)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})

describe('ForgotPassword', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<ForgotPassword />
				</Layout>
			</ThemeProvider>,
		)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})

describe('ResetPassword', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<ResetPassword />
				</Layout>
			</ThemeProvider>,
		)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})
