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
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-docs',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'storybook-addon-next-router',
	],
	framework: '@storybook/react',
	emotionAlias: false,
	core: {
		builder: '@storybook/builder-webpack5',
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			// speeds up storybook build time
			allowSyntheticDefaultImports: false,
			// speeds up storybook build time
			esModuleInterop: false,
			// makes union prop types like variant and size appear as select controls
			shouldExtractLiteralValuesFromEnum: true,
			// makes string and boolean types that can be undefined appear as inputs and switches
			shouldRemoveUndefinedFromOptional: true,
			shouldIncludePropTagMap: true,
			// Filter out third-party props from node_modules except @mui packages
			propFilter: prop =>
				prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
		},
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
