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
const minorWordsRegexWithSpace = new RegExp(`\\s(${minorWords.join('|')})\\s`, 'gi')

export const toTitleCase = (str: string) => {
	return str
		.replace(/([A-Z])/g, ' $1')
		.replace(minorWordsRegexWithSpace, match => match.toLowerCase())
		.replace(minorWordsRegex, match => match.toLowerCase())
		.replace(/^./, match => match.toUpperCase())
		.trim()
}
