// Path: ./jest/__tests__/components/Layout.test.tsx

import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Layout } from '../../../components/Layout'

describe('Layout', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<Layout name="test">
						<div>Children</div>
					</Layout>
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "test-layout-container"', () => {
		const { container } = render(
			<Layout name="test">
				<div>Children</div>
			</Layout>,
		)
		const test = container.querySelector('#test-layout-container')
		expect(test).toBeTruthy()
	})

	it('Should have an Appbar element with id "test-app-bar"', () => {
		const { container } = render(
			<Layout name="test">
				<div>Children</div>
			</Layout>,
		)
		const test = container.querySelector('#test-app-bar')
		expect(test).toBeTruthy()
	})

	it('Should have a Toolbar element with id "test-toolbar"', () => {
		const { container } = render(
			<Layout name="test">
				<div>Children</div>
			</Layout>,
		)
		const test = container.querySelector('#test-toolbar')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-toolbar-title"', () => {
		const { container } = render(
			<Layout name="test">
				<div>Children</div>
			</Layout>,
		)
		const test = container.querySelector('#test-toolbar-title')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Next Auth Scaffold"', () => {
		const { container } = render(
			<Layout name="test">
				<div>Children</div>
			</Layout>,
		)
		const test = container.querySelector('#test-toolbar-title')?.textContent
		expect(test).toBe('Next Auth Scaffold')
	})

	it('Should have a Box element with id "test-layout-content"', () => {
		const { container } = render(
			<Layout name="test">
				<div>Children</div>
			</Layout>,
		)
		const test = container.querySelector('#test-layout-content')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Children"', () => {
		const { container } = render(
			<Layout name="test">
				<div id="children">Children</div>
			</Layout>,
		)
		const test = container.querySelector('#children')
		expect(test?.textContent).toBe('Children')
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<Layout name="test">
				<div>Children</div>
			</Layout>,
		)
		expect(container).toMatchSnapshot()
	})
})
