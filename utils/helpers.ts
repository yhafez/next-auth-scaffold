import { getContrast } from 'color2k'

const minorWords = [
	'a',
	'an',
	'and',
	'as',
	'at',
	'but',
	'by',
	'en',
	'for',
	'if',
	'in',
	'of',
	'on',
	'or',
	'the',
	'to',
	'v.',
	'v',
	'vs.',
	'vs',
	'via',
	'with',
]
// Create regex with minor words for exact matches
const minorWordsRegex = new RegExp(`\\b(${minorWords.join('|')})\\b`, 'gi')

export const toTitleCase = (str: string) => {
	// Remove any leading or trailing whitespace
	str = str.trim()
	// Lowercase the string
	str = str.toLowerCase()
	// Uppercase the first character in every word
	str = str.replace(/(^|\s)\S/g, t => t.toUpperCase())
	// Uppercase the first character in the string
	str = str.charAt(0).toUpperCase() + str.slice(1)
	// Replace any minor words with lowercase versions
	str = str.replace(minorWordsRegex, word => word.toLowerCase())
	// Return the string
	return str
}

export const clampAndRound = (value: number, min: number, max: number) => {
	return Math.round(Math.max(min, Math.min(max, value)))
}

export const getContrastColor = (color: string) =>
	getContrast(color, '#FFF') > 7 ? 'white' : 'black'

export const getSecondaryColor = (color: string) => {
	const cc = color.charAt(0) === '#' ? color.substring(1, 7) : color
	const c = parseInt(cc, 16)
	const r = c >> 16
	const b = (c >> 8) & 0x00ff
	const g = c & 0x0000ff
	const alpha = color.length === 9 ? color.substring(7, 9) : ''

	const yiq = (r * 299 + b * 587 + g * 114) / 1000

	return yiq >= 128
		? alpha
			? `rgba(0, 0, 0, ${alpha})`
			: 'rgba(0, 0, 0, 1)'
		: alpha
		? `rgba(255, 255, 255, ${alpha})`
		: 'rgba(255, 255, 255, 1)'
}
