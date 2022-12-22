// Path: ./jest/__tests__/components/Drawer.test.tsx
import { render, findByText, act, screen, waitFor } from '@testing-library/react'
import { axe } from 'jest-axe'

import { Drawer } from '../../../components'

jest.mock('@mui/material', () => {
	const originalModule = jest.requireActual('@mui/material')
	return {
		...originalModule,
		Drawer: (props: any) => {
			return <div {...props} />
		},
		IconButton: (props: any) => {
			return <div {...props} />
		},
		Box: (props: any) => {
			return <div {...props} />
		},
		Typography: (props: any) => {
			return <div {...props} />
		},
		useMediaQuery: () => {
			return true
		},
	}
})

describe('Drawer', () => {
	let container: HTMLElement
	beforeEach(() => {
		act(() => {
			container = render(
				<main>
					<Drawer open={true} handleDrawerClose={() => {}}>
						<div>Test</div>
					</Drawer>
				</main>,
			).container

			return container
		})
	})

	it('Should have no accessibility violations', async () => {
		waitFor(async () => expect(await axe(screen.getByRole('main'))).toHaveNoViolations())
	})

	it('Should have children with text "Test"', async () => {
		const test = await findByText(container, 'Test')
		expect(test).toBeTruthy()
	})

	it('Should have a Drawer element with id "drawer"', () => {
		const test = container.querySelector('#drawer')
		expect(test).toBeTruthy()
	})

	it('Should have a Box element with id "drawer-close-button-container"', () => {
		const test = container.querySelector('#drawer-close-button-container')
		expect(test).toBeTruthy()
	})

	it('Should have an IconButton element with id "drawer-close-button"', () => {
		const test = container.querySelector('#drawer-close-button')
		expect(test).toBeTruthy()
	})

	it('Should have a ChevronLeft element with id "drawer-close-button-icon"', () => {
		const test = container.querySelector('#drawer-close-button-icon')
		expect(test).toBeTruthy()
	})

	it('Should have a label element with id "drawer-close-button-label"', () => {
		const test = container.querySelector('#drawer-close-button-label')
		expect(test).toBeTruthy()
	})

	it('Should have a Typography element with id "drawer-close-button-label-text"', () => {
		const test = container.querySelector('#drawer-close-button-label-text')
		expect(test).toBeTruthy()
	})

	it('Should match snapshot', () => {
		expect(container).toMatchSnapshot()
	})
})
