// Path: ./jest/__tests__/pages/reset-password-.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import ResetPassword from '../../../pages/reset-password/[id]/[token]'
import { Layout } from '../../../components/Layout'
import { defaultTheme } from '../../../theme'

describe('ResetPassword', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<ThemeProvider theme={defaultTheme}>
					<Layout name="test">
						<main>
							<ResetPassword />
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
					<ResetPassword />
				</Layout>
			</ThemeProvider>,
		)

		expect(container).toMatchSnapshot()
	})
})
