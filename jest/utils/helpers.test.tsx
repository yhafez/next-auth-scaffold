// Path: ./jest/__tests__/utils/helpers.test.tsx
import {
	toTitleCase,
	clampAndRound,
	darkenColor,
	lightenColor,
	getContrast,
} from '../../utils/helpers'

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

describe('darkenColor', () => {
	it('Should return a string with the color darkened', () => {
		const test = darkenColor('#000000', 100)
		expect(test).toBe('rgb(0, 0, 0)')
	})

	it('Should return a string with the color darkened', () => {
		const test = darkenColor('#FFFFFF', 100)
		expect(test).toBe('rgb(155, 155, 155)')
	})

	it('Should return a string with the color darkened', () => {
		const test = darkenColor('#000000', 300)
		expect(test).toBe('rgb(0, 0, 0)')
	})

	it('Should return a string with the color darkened', () => {
		const test = darkenColor('#FFFFFF', 300)
		expect(test).toBe('rgb(0, 0, 0)')
	})

	it('Should return a string with the color darkened', () => {
		const test = darkenColor('#000000', -100)
		expect(test).toBe('rgb(100, 100, 100)')
	})

	it('Should return a string with the color darkened', () => {
		const test = darkenColor('#FFFFFF', -100)
		expect(test).toBe('rgb(255, 255, 255)')
	})
})

describe('lightenColor', () => {
	it('Should return a string with the color lightened', () => {
		const test = lightenColor('#000000', 100)
		expect(test).toBe('rgb(100, 100, 100)')
	})

	it('Should return a string with the color lightened', () => {
		const test = lightenColor('#FFFFFF', 100)
		expect(test).toBe('rgb(255, 255, 255)')
	})

	it('Should return a string with the color lightened', () => {
		const test = lightenColor('#000000', 300)
		expect(test).toBe('rgb(255, 255, 255)')
	})

	it('Should return a string with the color lightened', () => {
		const test = lightenColor('#FFFFFF', 300)
		expect(test).toBe('rgb(255, 255, 255)')
	})

	it('Should return a string with the color lightened', () => {
		const test = lightenColor('#000000', -100)
		expect(test).toBe('rgb(0, 0, 0)')
	})

	it('Should return a string with the color lightened', () => {
		const test = lightenColor('#FFFFFF', -100)
		expect(test).toBe('rgb(155, 155, 155)')
	})
})

describe('getContrast', () => {
	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#000000')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#FFFFFF')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#FF0000')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#00FF00')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#0000FF')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#FFFF00')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#00FFFF')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#FF00FF')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#808080')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#C0C0C0')
		expect(test).toBe('black')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#808000')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#008080')
		expect(test).toBe('white')
	})

	it('Should return either black or white depending on the contrast', () => {
		const test = getContrast('#800080')
		expect(test).toBe('white')
	})
})
