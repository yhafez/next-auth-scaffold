// Path: ./jest/__tests__/components/PasswordInput.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { PasswordInput } from '../../../components'

describe('PasswordInput', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<PasswordInput
						name="test"
						value="test"
						setValue={jest.fn()}
						disabled={false}
						isConfirmPassword={false}
					/>
				</main>,
			),
		)

		await waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have an enabled TextField element', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input')
		expect(test).toHaveProperty('disabled', false)
	})

	it('Should have a TextField element with id "test-password-input"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "test-password-input-show-hide-button"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input-show-hide-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-password-box"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a TextField element with id "test-password-input"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input')
		expect(test).toBeTruthy()
	})

	it('Should have a VisibilityIcon element with id "test-password-input-visibility-off-icon"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a VisibilityIcon or VisibilityOffIcon with id "test-password-input-visibility-on-icon" or "-password-input-visibility-off-icon"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test =
			container.querySelector('#test-password-input-visibility-on-icon') ??
			container.querySelector('#test-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-password-input-hide-password-text" or "test-password-input-show-password-text"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test =
			container.querySelector('#test-password-input-hide-password-text') ??
			container.querySelector('#test-password-input-show-password-text')
		expect(test).toBeTruthy()
	})

	it('Should have a TextField element with text "test"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input')
		expect(test).toHaveProperty('value', 'test')
	})

	it('Should have an IconButton element with text "Show"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={false}
			/>,
		)

		const test = await findByText(container, 'Show')
		expect(test).toBeTruthy()
	})

	it('Should have an enabled TextField element', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input')
		expect(test).toHaveProperty('disabled', false)
	})

	it('Should have a TextField element with id "test-confirm-password-input"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "test-confirm-password-input-show-hide-button"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input-show-hide-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-confirm-password-box"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a TextField element with id "test-confirm-password-input"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input')
		expect(test).toBeTruthy()
	})

	it('Should have a VisibilityIcon element with id "test-confirm-password-input-visibility-off-icon"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a VisibilityIcon with id "test-confirm-password-input-visibility-off-icon"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-confirm-password-input-show-password-text"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input-show-password-text')
		expect(test).toBeTruthy()
	})

	it('Should have a TextField element with text "test"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input')
		expect(test).toHaveProperty('value', 'test')
	})

	it('Should have an IconButton element with text "show" or "hide"', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={false}
				isConfirmPassword={true}
			/>,
		)

		const test = await findByText(container, 'Show')
		expect(test).toBeTruthy()
	})

	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={true}
				isConfirmPassword={false}
			/>,
		)

		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})

	it('Should have a disabled TextField element', async () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={true}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input')
		expect(test).toHaveProperty('disabled', true)
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<PasswordInput
				name="test"
				value="test"
				setValue={jest.fn()}
				disabled={true}
				isConfirmPassword={false}
			/>,
		)

		expect(container).toMatchSnapshot()
	})
})
