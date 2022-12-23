// Path: ./jest/__tests__/pages/forgot-password.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@mui/material/styles'

import ForgotPassword from '../../../pages/forgot-password'
import { Layout } from '../../../components'
import { defaultTheme } from '../../../theme'

describe('ForgotPassword', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<SessionProvider
					session={{
						token: {
							user: {
								id: '1',
								email: 'test@example.com',
								emailVerified: null,
								image: 'test',
								isDeactivated: false,
								name: null,
								role: 'USER',
								createdAt: new Date(),
								updatedAt: new Date(),
								isNewUser: false,
							},
						},
						expires: '1d',
					}}
				>
					<ThemeProvider theme={defaultTheme}>
						<Layout name="test" pageTitle="test">
							<ForgotPassword />
						</Layout>
					</ThemeProvider>
				</SessionProvider>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
