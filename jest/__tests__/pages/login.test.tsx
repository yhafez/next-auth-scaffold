// Path: ./jest/__tests__/pages/login.test.tsx
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Login from '../../../pages/login'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

describe('Login', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<Login />
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
					<Login />
				</Layout>
			</ThemeProvider>,
		)
		expect(container).toMatchSnapshot()
	})
})
