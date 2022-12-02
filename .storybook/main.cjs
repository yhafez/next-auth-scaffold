const path = require('path')

const config = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
		'../stories/pages/**/*.stories.mdx',
		'../stories/pages/**/*.stories.@(js|jsx|ts|tsx)',
		'../stories/components/**/*.stories.mdx',
		'../stories/components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-next-router',
		'@storybook/addon-a11y',
	],
	core: {
		builder: 'webpack5',
	},
	async webpackFinal(config) {
		/**
		 * Fixes font import with /
		 * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
		 */
		config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules']

		// Fixes node_modules import with /
		config.resolve.fallback = {
			fs: false,
			path: false,
			os: false,
			http: false,
			https: false,
			stream: false,
			crypto: false,
			zlib: false,
			buffer: false,
			util: false,
			url: false,
			querystring: false,
			assert: false,
			vm: false,
			tty: false,
			net: false,
			dns: false,
			child_process: false,
		}

		config.module.rules.push({
			test: /.storybook\/preview.js/,
			resolve: { fullySpecified: false },
		})
		return config
	},
}

module.exports = config
