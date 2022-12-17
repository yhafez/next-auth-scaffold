// Path: ./jest/__tests__/pages/forgot-password.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import ForgotPassword from '../../../pages/forgot-password'
import { Layout } from '../../../components/Layout'
import { defaultTheme } from '../../../theme'

describe('ForgotPassword', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<ThemeProvider theme={defaultTheme}>
					<Layout name="test" pageTitle="test">
						<ForgotPassword />
					</Layout>
				</ThemeProvider>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
