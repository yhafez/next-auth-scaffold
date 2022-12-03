// Path: ./jest/__tests__/pages/reset-password-.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import ResetPassword from '../../../pages/reset-password/[...token]'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

describe('ResetPassword', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<ThemeProvider theme={theme}>
					<Layout>
						<main>
							<ResetPassword />
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
					<ResetPassword />
				</Layout>
			</ThemeProvider>,
		)

		expect(container).toMatchSnapshot()
	})
})
