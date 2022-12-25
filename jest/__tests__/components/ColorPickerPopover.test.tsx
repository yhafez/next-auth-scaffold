// Path: ./jest/__tests__/components/ColorPickerPopover.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { ColorPickerPopover } from '../../../components'

describe('ColorPickerPopover', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<ColorPickerPopover
						name="test"
						anchorEl={document.createElement('button')}
						handleClose={() => jest.fn()}
						handleColorChange={() => jest.fn()}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					/>
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Popover element with id "test-color-picker-popover"', async () => {
		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toBeTruthy()
		})
	})

	it('Should have a Popover element with id "test-color-picker-popover" and open prop set to true', () => {
		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toHaveProperty('open', 'true')
		})
	})

	it('Should have a Popover element with id "test-color-picker-popover" and open prop set to false', () => {
		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toHaveProperty('open', 'false')
		})
	})

	it('Should have a Popover element with id "test-color-picker-popover" and anchorEl prop set to a button element', () => {
		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toHaveProperty('anchorEl', 'button')
		})
	})

	it('Should match snapshot', () => {
		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toMatchSnapshot()
		})
	})
})
