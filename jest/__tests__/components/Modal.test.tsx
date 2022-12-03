// Path: ./jest/__tests__/components/Modal.test.tsx
import { render, findByText } from '@testing-library/react'
import { axe } from 'jest-axe'

import Modal from '../../../components/Modal'
import { toTitleCase } from '../../../utils/helpers'

describe('Modal', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})

	it('Should have a Box element with id "test-test-modal-container"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-container')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-test-modal-title"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-title')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "test test"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = await findByText(container, toTitleCase('test test'))
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-test-modal-notification-container"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-notification-container')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "test-test-modal-form"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-form')
		expect(test).toBeTruthy()
	})

	it('Should have a Div element with text "Children"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = await findByText(container, 'Children')
		expect(test).toBeTruthy()
	})

	it('Should have a CircularProgress element with id "test-test-modal-loading"', async () => {
		const { container } = render(
			<Modal name="test test" loading={true} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-loading')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-test-modal-error"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="test error" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-error')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "test error"', async () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="test error" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = await findByText(container, 'test error')
		expect(test).toBeTruthy()
	})

	it('Should not have a Typography element with id "test-test-modal-error"', async () => {
		const { container } = render(
			<Modal name="test test" loading={true} error="test error" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-error')
		expect(test).toBeFalsy()
	})

	it('Should have a CircularProgress element with id "test-test-modal-loading"', async () => {
		const { container } = render(
			<Modal name="test test" loading={true} error="test error" small={false}>
				<div>Children</div>
			</Modal>,
		)

		const test = container.querySelector('#test-test-modal-loading')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<Modal name="test test" loading={false} error="" small={false}>
				<div>Children</div>
			</Modal>,
		)

		expect(container).toMatchSnapshot()
	})
})
