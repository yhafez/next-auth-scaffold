/** @type {import('jest').Config} */
import nextJest from 'next/jest'

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/config/jest/__mocks__/svg.js',
	},
	setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/.next/',
		'/out/',
		'/config/',
		'/.vscode/',
		'/tests_playwright/',
		'/tests_mocha/',
	],
}

export default createJestConfig(customJestConfig)
