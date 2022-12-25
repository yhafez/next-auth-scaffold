// Path: ./jest/__tests__/components/ModalNote.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { ModalNote } from '../../../components'

describe('ModalNote', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<ModalNote name="test" label="test" href="/test" />
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Box element with id "test-modal-note-container"', async () => {
		const test = container.querySelector('#test-modal-note-container')
		expect(test).toBeTruthy()
	})

	it('Should have a Link element with id "test-modal-note-link"', async () => {
		const test = container.querySelector('#test-modal-note-link')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-modal-note-link-text"', async () => {
		const test = container.querySelector('#test-modal-note-link-text')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "test"', async () => {
		const test = await findByText(container, 'test')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
