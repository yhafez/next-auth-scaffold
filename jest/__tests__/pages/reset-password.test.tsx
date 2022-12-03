// Path: ./jest/__tests__/pages/reset-password-.test.tsx
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import ResetPassword from '../../../pages/reset-password/[...token]'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

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
