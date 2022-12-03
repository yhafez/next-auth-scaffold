// Path: ./jest/__tests__/utils/helpers.test.tsx
import { toTitleCase } from '../../utils/helpers'

describe('toTitleCase', () => {
	it('Should return a string with the first letter capitalized', () => {
		const test = toTitleCase('test')
		expect(test).toBe('Test')
	})

	it('Should return a string with the first letter capitalized and the rest lowercased', () => {
		const test = toTitleCase('TEST')
		expect(test).toBe('Test')
	})

	it('Should return a string with multiple words capitalized', () => {
		const test = toTitleCase('test test')
		expect(test).toBe('Test Test')
	})

	it('Should return a string with multiple words capitalized and the rest lowercased', () => {
		const test = toTitleCase('TEST TEST')
		expect(test).toBe('Test Test')
	})

	it('Should return a string with multiple words capitalized in title case', () => {
		const test = toTitleCase('test in test')
		expect(test).toBe('Test in Test')
	})

	it('Should return a string with multiple words capitalized in title case and the rest lowercased', () => {
		const test = toTitleCase('TEST IN TEST')
		expect(test).toBe('Test in Test')
	})
})
