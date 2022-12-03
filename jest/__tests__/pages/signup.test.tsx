// Path: ./jest/__tests__/pages/signup.test.tsx
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Signup from '../../../pages/signup'
import { Layout } from '../../../components/Layout'
import { theme } from '../../../theme'

describe('Signup', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Layout>
					<Signup />
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
					<Signup />
				</Layout>
			</ThemeProvider>,
		)
		expect(container).toMatchSnapshot()
	})
})
