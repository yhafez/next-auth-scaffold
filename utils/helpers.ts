import { getContrast, parseToRgba } from 'color2k'

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
	Math.max(getContrast(color, '#000'), getContrast(color, '#FFF')) === getContrast(color, '#000')
		? 'black'
		: 'white'

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

export const mixColors = (baseColor: string, overlayColor: string, overlayOpacity: number) => {
	const baseColorRGB = parseToRgba(baseColor)
	const [r, g, b] = [baseColorRGB[0], baseColorRGB[1], baseColorRGB[2]]
	const overlayColorRGB = parseToRgba(overlayColor)
	const [r2, g2, b2] = [overlayColorRGB[0], overlayColorRGB[1], overlayColorRGB[2]]

	const mixedColor = {
		r: Math.round(r2 * overlayOpacity + r * (1 - overlayOpacity)),
		g: Math.round(g2 * overlayOpacity + g * (1 - overlayOpacity)),
		b: Math.round(b2 * overlayOpacity + b * (1 - overlayOpacity)),
	}

	return `rgb(${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b})`
}

export const getTextContrastWithBackgroundPlusOverlay = ({
	textColor,
	overlayColor,
	backgroundColor,
	overlayOpacity,
}: {
	textColor: string
	overlayColor: string
	backgroundColor: string
	overlayOpacity: number
}) => {
	const colorOfBackgroundPlusOverlay = mixColors(backgroundColor, overlayColor, overlayOpacity)
	const contrast = getContrast(textColor, colorOfBackgroundPlusOverlay)
	return contrast
}

export const isOverlayNecessary = (
	baseColor: string,
	textColor: string,
	desiredContrast: number,
) => {
	const contrastWithoutOverlay = getContrast(baseColor, textColor)
	return contrastWithoutOverlay > desiredContrast
}

export const findOptimalOverlayOpacity = (
	textColor: string,
	overlayColor: string,
	worstColor: string,
	desiredContrast: number,
) => {
	const overlayNecessary = isOverlayNecessary(worstColor, textColor, desiredContrast)
	if (!overlayNecessary) return 0

	const opacityGuessRange = {
		lowerBound: 0,
		midpoint: 0.5,
		upperBound: 1,
	}
	let numberOfGuesses = 0
	const maxGuesses = 8
	const opacityLimit = 0.99

	while (numberOfGuesses < maxGuesses) {
		numberOfGuesses++

		const currentGuess = opacityGuessRange.midpoint
		const contrastOfGuess = getTextContrastWithBackgroundPlusOverlay({
			textColor,
			overlayColor,
			backgroundColor: worstColor,
			overlayOpacity: currentGuess,
		})

		const isGuessTooLow = contrastOfGuess < desiredContrast
		const isGuessTooHigh = contrastOfGuess > desiredContrast

		if (isGuessTooLow) {
			opacityGuessRange.lowerBound = currentGuess
		} else if (isGuessTooHigh) {
			opacityGuessRange.upperBound = currentGuess
		}

		const newMidpoint =
			(opacityGuessRange.upperBound - opacityGuessRange.lowerBound) / 2 +
			opacityGuessRange.lowerBound
		opacityGuessRange.midpoint = newMidpoint
	}
	const optimalOpacity = opacityGuessRange.midpoint
	const hasNoSolution = optimalOpacity > opacityLimit

	if (hasNoSolution) return opacityLimit

	return optimalOpacity
}
