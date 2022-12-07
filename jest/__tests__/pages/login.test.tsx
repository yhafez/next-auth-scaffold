// Path: ./jest/__tests__/pages/login.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Login from '../../../pages/login'
import { Layout } from '../../../components/Layout'
import { defaultTheme } from '../../../theme'

describe('Login', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<ThemeProvider theme={defaultTheme}>
					<Layout name="test">
						<main>
							<Login />
						</main>
					</Layout>
				</ThemeProvider>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={defaultTheme}>
				<Layout name="test">
					<Login />
				</Layout>
			</ThemeProvider>,
		)

		expect(container).toMatchSnapshot()
	})
})
