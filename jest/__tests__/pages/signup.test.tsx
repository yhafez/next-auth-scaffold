// Path: ./jest/__tests__/pages/signup.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Signup from '../../../pages/signup'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

describe('Signup', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<ThemeProvider theme={theme}>
					<Layout>
						<main>
							<Signup />
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
					<Signup />
				</Layout>
			</ThemeProvider>,
		)

		expect(container).toMatchSnapshot()
	})
})
