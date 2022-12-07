// Path: ./jest/__tests__/pages/index.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Dashboard from '../../../pages'
import { Layout } from '../../../components/Layout'
import { defaultTheme } from '../../../theme'
import { SessionProvider } from 'next-auth/react'

describe('Dashboard', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<ThemeProvider theme={defaultTheme}>
					<SessionProvider
						session={{
							user: {
								name: 'Test User',
								email: 'test@example.com',
								image: 'https://example.com/image.png',
							},
							expires: '1',
						}}
					>
						<Layout name="test">
							<main>
								<Dashboard />
							</main>
						</Layout>
					</SessionProvider>
				</ThemeProvider>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={defaultTheme}>
				<SessionProvider
					session={{
						user: {
							name: 'Test User',
							email: 'test@example.com',
							image: 'https://example.com/image.png',
						},
						expires: '1',
					}}
				>
					<Layout name="test">
						<Dashboard />
					</Layout>
				</SessionProvider>
			</ThemeProvider>,
		)

		expect(container).toMatchSnapshot()
	})
})
