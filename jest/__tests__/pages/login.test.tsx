// Path: ./jest/__tests__/pages/login.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Login from '../../../pages/login'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

describe('Login', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<ThemeProvider theme={theme}>
					<Layout>
						<main>
							<Login />
						</main>
					</Layout>
				</ThemeProvider>,
			),
		)

		await waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<Login />
				</Layout>
			</ThemeProvider>,
		)

		expect(container).toMatchSnapshot()
	})
})
