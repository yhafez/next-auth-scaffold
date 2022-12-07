// Path: ./jest/__tests__/components/ModalNote.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import ModalNote from '../../../components/ModalNote'

describe('ModalNote', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<ModalNote name="test" label="test" href="/test" />
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "test-modal-note-container"', async () => {
		const { container } = render(<ModalNote name="test" label="test" href="/test" />)

		const test = container.querySelector('#test-modal-note-container')
		expect(test).toBeTruthy()
	})

	it('Should have a Link element with id "test-modal-note-link"', async () => {
		const { container } = render(<ModalNote name="test" label="test" href="/test" />)

		const test = container.querySelector('#test-modal-note-link')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-modal-note-link-text"', async () => {
		const { container } = render(<ModalNote name="test" label="test" href="/test" />)

		const test = container.querySelector('#test-modal-note-link-text')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "test"', async () => {
		const { container } = render(<ModalNote name="test" label="test" href="/test" />)

		const test = await findByText(container, 'test')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		const { container } = render(<ModalNote name="test" label="test" href="/test" />)

		expect(container).toMatchSnapshot()
	})
})
