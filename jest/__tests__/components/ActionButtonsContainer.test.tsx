// Path: ./jest/__tests__/components/ActionButtonsContainer.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import ActionButtonsContainer from '../../../components/ActionButtonsContainer'

describe('ActionButtonsContainer', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<ActionButtonsContainer name="test">
						<div>Test</div>
					</ActionButtonsContainer>
				</main>,
			),
		)

		await waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
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
