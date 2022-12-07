// Path: ./jest/__tests__/components/ColorPickerPopover.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import ColorPickerPopover from '../../../components/ColorPickerPopover'

import canvas from 'canvas'

describe('ColorPickerPopover', () => {
	it('Should have no accessibility violations', async () => {
		act(() =>
			render(
				<main>
					<ColorPickerPopover
						name="test"
						open={true}
						anchorEl={document.createElement('button')}
						handleColorChange={() => jest.fn()}
						handleClose={() => jest.fn()}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					/>
				</main>,
			),
		)

		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have a Popover element with id "test-color-picker-popover"', async () => {
		act(() =>
			render(
				<main>
					<ColorPickerPopover
						name="test"
						open={true}
						anchorEl={document.createElement('button')}
						handleColorChange={() => jest.fn()}
						handleClose={() => jest.fn()}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					/>
				</main>,
			),
		)

		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toBeTruthy()
		})
	})

	it('Should have a Popover element with id "test-color-picker-popover" and open prop set to true', () => {
		act(() =>
			render(
				<main>
					<ColorPickerPopover
						name="test"
						open={true}
						anchorEl={document.createElement('button')}
						handleColorChange={() => jest.fn()}
						handleClose={() => jest.fn()}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					/>
				</main>,
			),
		)

		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toHaveProperty('open', 'true')
		})
	})

	it('Should have a Popover element with id "test-color-picker-popover" and open prop set to false', () => {
		act(() =>
			render(
				<main>
					<ColorPickerPopover
						name="test"
						open={true}
						anchorEl={document.createElement('button')}
						handleColorChange={() => jest.fn()}
						handleClose={() => jest.fn()}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					/>
				</main>,
			),
		)

		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toHaveProperty('open', 'false')
		})
	})

	it('Should have a Popover element with id "test-color-picker-popover" and anchorEl prop set to a button element', () => {
		act(() =>
			render(
				<main>
					<ColorPickerPopover
						name="test"
						open={true}
						anchorEl={document.createElement('button')}
						handleColorChange={() => jest.fn()}
						handleClose={() => jest.fn()}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					/>
				</main>,
			),
		)

		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toHaveProperty('anchorEl', 'button')
		})
	})

	it('Should match snapshot', () => {
		act(() =>
			render(
				<main>
					<ColorPickerPopover
						name="test"
						open={true}
						anchorEl={document.createElement('button')}
						handleColorChange={() => jest.fn()}
						handleClose={() => jest.fn()}
						anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						transformOrigin={{ vertical: 'top', horizontal: 'left' }}
					/>
				</main>,
			),
		)

		waitFor(async () => {
			const test = await screen.getByTestId('test-color-picker-popover')
			expect(test).toMatchSnapshot()
		})
	})
})
