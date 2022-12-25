// Path: ./jest/__tests__/components/SubmitButton.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { SubmitButton } from '../../../components'

describe('SubmitButton', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<SubmitButton name="test" label="test" loading={false} handleSubmit={jest.fn()} />
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Button element with id "test-submit-button"', async () => {
		const { container } = render(
			<SubmitButton name="test" label="test" loading={false} handleSubmit={jest.fn()} />,
		)

		const test = container.querySelector('#test-submit-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with text "test"', async () => {
		const { container } = render(
			<SubmitButton name="test" label="test" loading={false} handleSubmit={jest.fn()} />,
		)

		const test = await findByText(container, 'test')
		expect(test).toBeTruthy()
	})

	it('Should have an enabled Button element', async () => {
		const { container } = render(
			<SubmitButton name="test" label="test" loading={false} handleSubmit={jest.fn()} />,
		)

		const test = container.querySelector('#test-submit-button')
		expect(test).toHaveProperty('disabled', false)
	})

	it('Should have a Button element with id "test-submit-button"', async () => {
		const { container } = render(
			<SubmitButton name="test" label="test" loading={true} handleSubmit={jest.fn()} />,
		)

		const test = container.querySelector('#test-submit-button')
		expect(test).toBeTruthy()
	})

	it('Should have a disabled Button element', async () => {
		const { container } = render(
			<SubmitButton name="test" label="test" loading={true} handleSubmit={jest.fn()} />,
		)

		const test = container.querySelector('#test-submit-button')
		expect(test).toHaveProperty('disabled', true)
	})

	it('Should have a CircularProgress element with id "test-submit-button-loading"', async () => {
		const { container } = render(
			<SubmitButton name="test" label="test" loading={true} handleSubmit={jest.fn()} />,
		)

		const test = container.querySelector('#test-submit-button-loading')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<SubmitButton name="test" label="test" loading={false} handleSubmit={jest.fn()} />,
		)

		expect(container).toMatchSnapshot()
	})
})
