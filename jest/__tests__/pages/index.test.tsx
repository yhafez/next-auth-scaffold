// Path: ./jest/__tests__/pages/index.test.tsx
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Dashboard from '../../../pages/index'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

describe('Dashboard', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<Dashboard />
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
					<Dashboard />
				</Layout>
			</ThemeProvider>,
		)
		expect(container).toMatchSnapshot()
	})
})
