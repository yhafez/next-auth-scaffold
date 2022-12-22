// Path: ./jest/__tests__/components/ConfirmPasswordInput.test.tsx
import { render, findAllByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { ConfirmPasswordInput } from '../../../components'

describe('ConfirmPasswordInput', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<ConfirmPasswordInput
						name="test"
						password="test"
						setPassword={jest.fn()}
						confirmPassword="test"
						setConfirmPassword={jest.fn()}
						disabled={false}
					/>
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a TextField element with id "test-password-input"', async () => {
		const test = container.querySelector('#test-password-input')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "test-password-input-show-hide-button"', async () => {
		const test = container.querySelector('#test-password-input-show-hide-button')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "test-confirm-password-input-show-hide-button"', async () => {
		const test = container.querySelector('#test-confirm-password-input-show-hide-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-password-box"', async () => {
		const test = container.querySelector('#test-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-confirm-password-box"', async () => {
		const test = container.querySelector('#test-confirm-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-password-box"', async () => {
		const test = container.querySelector('#test-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-confirm-password-box"', async () => {
		const test = container.querySelector('#test-confirm-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a TextField element with id "test-confirm-password-input"', async () => {
		const test = container.querySelector('#test-confirm-password-input')
		expect(test).toBeTruthy()
	})

	it('Should have a VisibilityIcon element with id "test-confirm-password-input-visibility-off-icon"', async () => {
		const test = container.querySelector('#test-confirm-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a VisibilityIcon or VisibilityOffIcon with id "test-password-input-visibility-on-icon" or "-password-input-visibility-off-icon"', async () => {
		const test =
			container.querySelector('#test-password-input-visibility-on-icon') ??
			container.querySelector('#test-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a VisibilityIcon or VisibilityOffIcon with id "test-confirm-password-input-visibility-on-icon" or "-confirm-password-input-visibility-off-icon"', async () => {
		const test =
			container.querySelector('#test-confirm-password-input-visibility-on-icon') ??
			container.querySelector('#test-confirm-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-password-input-hide-password-text" or "test-password-input-show-password-text"', async () => {
		const test =
			container.querySelector('#test-password-input-hide-password-text') ??
			container.querySelector('#test-password-input-show-password-text')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-confirm-password-input-hide-password-text" or "test-confirm-password-input-show-password-text"', async () => {
		const test =
			container.querySelector('#test-confirm-password-input-hide-password-text') ??
			container.querySelector('#test-confirm-password-input-show-password-text')
		expect(test).toBeTruthy()
	})

	it('Should have a TextField element with text "test"', async () => {
		const test = container.querySelector('#test-confirm-password-input')
		expect(test).toHaveProperty('value', 'test')
	})

	it('Should have an IconButton element with text "Show"', async () => {
		const test = await findAllByText(container, 'Show')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', async () => {
		expect(container).toMatchSnapshot()
	})
})
