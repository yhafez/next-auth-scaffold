// Path: ./jest/__tests__/components/EmailInput.test.tsx
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import EmailInput from '../../../components/EmailInput'

describe('EmailInput', () => {
	it('Should have an enabled TextField element', async () => {
		const { container } = render(
			<EmailInput name="test" value="test" setValue={jest.fn()} disabled={false} />,
		)

		const test = container.querySelector('#test-email-input')
		expect(test).toHaveProperty('disabled', false)
	})

	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<EmailInput name="test" value="test" setValue={jest.fn()} disabled={false} />,
		)

		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})

	it('Should have a TextField element with id "test-email-input"', async () => {
		const { container } = render(
			<EmailInput name="test" value="test" setValue={jest.fn()} disabled={false} />,
		)

		const test = container.querySelector('#test-email-input')
		expect(test).toBeTruthy()
	})

	it('Should have a TextField element with text "test"', async () => {
		const { container } = render(
			<EmailInput name="test" value="test" setValue={jest.fn()} disabled={false} />,
		)

		const test = container.querySelector('#test-email-input')
		expect(test).toHaveProperty('value', 'test')
	})

	it('Should have a disabled TextField element', async () => {
		const { container } = render(
			<EmailInput name="test" value="test" setValue={jest.fn()} disabled={true} />,
		)

		const test = container.querySelector('#test-email-input')
		expect(test).toHaveProperty('disabled', true)
	})

	it('Should match snapshot', async () => {
		const { container } = render(
			<EmailInput name="test" value="test" setValue={jest.fn()} disabled={false} />,
		)

		expect(container).toMatchSnapshot()
	})
})
