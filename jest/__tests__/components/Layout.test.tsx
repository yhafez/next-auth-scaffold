// Path: ./jest/__tests__/components/Layout.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import { SessionProvider } from 'next-auth/react'

import { Layout } from '../../../components'

describe('Layout', () => {
	let container: HTMLElement

	beforeEach(() => {
		act(() => {
			container = render(
				<SessionProvider
					session={{
						user: {
							name: 'test',
							email: 'test@example.com',
							image: 'test',
						},
						expires: '1d',
					}}
				>
					<Layout name="test" pageTitle="test">
						<div id="children">Children</div>
					</Layout>
				</SessionProvider>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "test-layout-container"', () => {
		const test = container.querySelector('#test-layout-container')
		expect(test).toBeTruthy()
	})

	it('Should have an Appbar element with id "test-app-bar"', () => {
		const test = container.querySelector('#test-app-bar')
		expect(test).toBeTruthy()
	})

	it('Should have a Toolbar element with id "test-toolbar"', () => {
		const test = container.querySelector('#test-toolbar')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-toolbar-title"', () => {
		const test = container.querySelector('#test-toolbar-title')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Next Auth Scaffold"', () => {
		const test = container.querySelector('#test-toolbar-title')?.textContent
		expect(test).toBe('Next Auth Scaffold')
	})

	it('Should have a Box element with id "test-layout-content"', () => {
		const test = container.querySelector('#test-layout-content')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Children"', () => {
		const test = container.querySelector('#children')
		expect(test?.textContent).toBe('Children')
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
