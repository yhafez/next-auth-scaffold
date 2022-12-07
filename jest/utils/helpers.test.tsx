// Path: ./jest/__tests__/utils/helpers.test.tsx
import { toTitleCase, clampAndRound, getContrastColor } from '../../utils/helpers'

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

describe('clampAndRound', () => {
	it('Should return a number that is clamped and rounded', () => {
		const test = clampAndRound(100, 0, 255)
		expect(test).toBe(100)
	})

	it('Should return a number that is clamped and rounded', () => {
		const test = clampAndRound(300, 0, 255)
		expect(test).toBe(255)
	})

	it('Should return a number that is clamped and rounded', () => {
		const test = clampAndRound(-100, 0, 255)
		expect(test).toBe(0)
	})
})

describe('getContrast', () => {
	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#000000')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#FFFFFF')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#FF0000')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#00FF00')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#0000FF')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#FFFF00')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#00FFFF')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#FF00FF')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#808080')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#C0C0C0')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#808000')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#008080')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrastColor('#800080')
		expect(test).toBe('white')
	})
})
