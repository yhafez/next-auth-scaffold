// Path: ./jest/__tests__/pages/signup.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@mui/material/styles'

import Signup from '../../../pages/signup'
import { Layout } from '../../../components/Layout'
import { defaultTheme } from '../../../theme'

describe('Signup', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<ThemeProvider theme={defaultTheme}>
					<Layout name="test" pageTitle="test">
						<Signup />
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
