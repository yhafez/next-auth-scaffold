// Path: ./jest/__tests__/components/DrawerButton.test.tsx
import { render, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'
import MenuIcon from '@mui/icons-material/Menu'

import { DrawerButton } from '../../../components'

describe('DrawerButton', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<DrawerButton
						name="test"
						label="label-test"
						icon={<MenuIcon id="test-drawer-button-menu-icon" />}
						handleClick={() => jest.fn()}
					/>
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('button'))).toHaveNoViolations())
	})

	it('Should have an Icon Button element with id "test-drawer-button"', () => {
		const test = container.querySelector('#test-drawer-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "test-drawer-button-label"', () => {
		const test = container.querySelector('#test-drawer-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with text "label-test"', () => {
		const test = container.querySelector('#test-drawer-button-label')?.textContent
		expect(test).toBe('label-test')
	})

	it("Should have a MenuIcon element with id 'test-drawer-button-menu-icon'", () => {
		const test = container.querySelector('#test-drawer-button-menu-icon')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
