// Path: ./jest/__tests__/components/ColorPickerIcon.test.tsx

import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import React from 'react'

import ColorPickerIcon from '../../../components/ColorPickerIcon'

describe('ColorPickerIcon', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<ColorPickerIcon name="test" />
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('button'))).toHaveNoViolations())
	})

	it('Should have a Box icon with id "test-color-picker-container"', async () => {
		const { container } = render(<ColorPickerIcon name="test" />)
		const test = container.querySelector('#test-color-picker-container')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon Button element with id "test-color-picker-button"', async () => {
		const { container } = render(<ColorPickerIcon name="test" />)
		const test = container.querySelector('#test-color-picker-button')
		expect(test).toBeTruthy()
	})

	it('Should have an Icon element with id "test-color-picker-icon"', async () => {
		const { container } = render(<ColorPickerIcon name="test" />)
		const test = container.querySelector('#test-color-picker-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-color-picker-label"', async () => {
		const { container } = render(<ColorPickerIcon name="test" />)
		const test = container.querySelector('#test-color-picker-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "Theme Color"', async () => {
		const { container } = render(<ColorPickerIcon name="test" />)
		const test = container.querySelector('#test-color-picker-label')
		expect(test?.textContent).toBe('Theme Color')
	})

	it('Should match snapshot', () => {
		const { container } = render(<ColorPickerIcon name="test" />)
		expect(container).toMatchSnapshot()
	})
})
