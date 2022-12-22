// Path: ./jest/__tests__/components/VisibilityIconButton.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { VisibilityIconButton } from '../../../components'

describe('VisibilityIconButton', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<VisibilityIconButton
						name="test"
						showPassword={false}
						setShowPassword={() => {}}
						isConfirmPassword={false}
					/>
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "test-password-box"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a VisbilityOffIcon element with id "test-password-input-visibility-off-icon"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-password-input-show-password-text"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Show"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		const test = await findByText(container, 'Show')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-confirm-password-box"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-box')
		expect(test).toBeTruthy()
	})

	it('Should have a VisbilityOffIcon element with id "test-confirm-password-input-visibility-off-icon"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-confirm-password-input-show-password-text"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={true}
			/>,
		)

		const test = container.querySelector('#test-confirm-password-input-visibility-off-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Show"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={true}
			/>,
		)

		const test = await findByText(container, 'Show')
		expect(test).toBeTruthy()
	})

	it('Should have a VisbilityIcon element with id "test-password-input-visibility-on-icon"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={true}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input-visibility-on-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-password-input-hide-password-text"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={true}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		const test = container.querySelector('#test-password-input-hide-password-text')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Hide"', async () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={true}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		const test = await findByText(container, 'Hide')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<VisibilityIconButton
				name="test"
				showPassword={false}
				setShowPassword={() => {}}
				isConfirmPassword={false}
			/>,
		)

		expect(container).toMatchSnapshot()
	})
})
