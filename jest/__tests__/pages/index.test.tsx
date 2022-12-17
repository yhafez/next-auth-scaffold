// Path: ./jest/__tests__/pages/index.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@mui/material/styles'

import Dashboard from '../../../pages'
import { Layout } from '../../../components/Layout'
import DashboardDrawer from '../../../components/Drawers/DashboardDrawer'
import { defaultTheme } from '../../../theme'

describe('Dashboard', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<SessionProvider
					session={{
						user: {
							name: 'Test User',
							email: 'test@example.com',
							image: 'https://example.com/image.png',
						},
						expires: '1d',
					}}
				>
					<ThemeProvider theme={defaultTheme}>
						<Layout name="test" pageTitle="test" drawerChildren={<DashboardDrawer />}>
							<Dashboard />
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
