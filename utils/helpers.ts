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
	str = str.replace(/(^|\s)\S/g, (t) => t.toUpperCase())
	// Uppercase the first character in the string
	str = str.charAt(0).toUpperCase() + str.slice(1)
	// Replace any minor words with lowercase versions
	str = str.replace(minorWordsRegex, word => word.toLowerCase())
	// Return the string
	return str
}
