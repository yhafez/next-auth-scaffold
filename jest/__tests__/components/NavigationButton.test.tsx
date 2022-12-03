// Path: ./jest/__tests__/components/NavigationButton.test.tsx
import { render, findByText } from '@testing-library/react'
import { axe } from 'jest-axe'

import NavigationButton from '../../../components/NavigationButton'

describe('NavigationButton', () => {
	it('Should have no accessibility violations', async () => {
		const { container } = render(
			<NavigationButton name="test" label="test" handleClick={jest.fn()} />,
		)

		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})

	it('Should have a Button element with id "test-navigation-button"', async () => {
		const { container } = render(
			<NavigationButton name="test" label="test" handleClick={jest.fn()} />,
		)

		const test = container.querySelector('#test-navigation-button')
		expect(test).toBeTruthy()
	})

	it('Should have a Button element with text "test"', async () => {
		const { container } = render(
			<NavigationButton name="test" label="test" handleClick={jest.fn()} />,
		)

		const test = await findByText(container, 'test')
		expect(test).toBeTruthy()
	})

	it('Should have an enabled Button element', async () => {
		const { container } = render(
			<NavigationButton name="test" label="test" handleClick={jest.fn()} />,
		)

		const test = container.querySelector('#test-navigation-button')
		expect(test).toHaveProperty('disabled', false)
	})

	it('Should match snapshot', () => {
		const { container } = render(
			<NavigationButton name="test" label="test" handleClick={jest.fn()} />,
		)

		expect(container).toMatchSnapshot()
	})
})
