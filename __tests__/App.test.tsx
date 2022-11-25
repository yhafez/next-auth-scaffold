// Use axe to test the accessibility of the app
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Home from '../pages'

expect.extend(toHaveNoViolations)

describe('App', () => {
	it('should work as expected', () => {
		render(<Home />)
	})

	it('should be accessible', async () => {
		const { container } = render(<Home />)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	})
})
