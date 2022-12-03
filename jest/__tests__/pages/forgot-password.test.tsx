// Path: ./jest/__tests__/pages/forgot-password.test.tsx
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import ForgotPassword from '../../../pages/forgot-password'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

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

	it('Should match snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<ForgotPassword />
				</Layout>
			</ThemeProvider>,
		)
		expect(container).toMatchSnapshot()
	})
})
