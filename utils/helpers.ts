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
const minorWordsRegex = new RegExp(minorWords.join('|'), 'gi')

export const toTitleCase = (str: string) => {
	// Remove any leading or trailing whitespace
	str = str.trim()
	// Lowercase the string
	str = str.toLowerCase()
	// Uppercase the first character in the string
	str = str.charAt(0).toUpperCase() + str.slice(1)
	// Uppercase the first character in every word
	str = str.replace(
		/([^\W_]+[^\s-]*) */g,
		txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
	)
	// Replace any minor words with lowercase versions
	str = str.replace(minorWordsRegex, word => word.toLowerCase())
	// Return the string
	return str
}
