// Path: ./jest/__tests__/components/ActionButtonsContainer.test.tsx
import { render, findByText } from '@testing-library/react'
import { axe } from 'jest-axe'

import ActionButtonsContainer from '../../../components/ActionButtonsContainer'

describe('ActionButtonsContainer', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<ActionButtonsContainer name="test">
				<div>Test</div>
			</ActionButtonsContainer>,
		)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})

	it('Should have children with text "Test"', async () => {
		const { container } = render(
			<ActionButtonsContainer name="test">
				<div>Test</div>
			</ActionButtonsContainer>,
		)
		const test = await findByText(container, 'Test')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-buttons-container"', async () => {
		const { container } = render(
			<ActionButtonsContainer name="test">
				<div>Test</div>
			</ActionButtonsContainer>,
		)
		const test = container.querySelector('#test-buttons-container')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<ActionButtonsContainer name="test">
				<div>Test</div>
			</ActionButtonsContainer>,
		)
		expect(container).toMatchSnapshot()
	})
})
