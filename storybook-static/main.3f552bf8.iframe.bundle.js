/*! For license information please see main.3f552bf8.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunknext_template = self.webpackChunknext_template || []).push([
	[179],
	{
		'./components/ActionButtonsContainer.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => ActionButtonsContainer })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Box/Box.js',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function ActionButtonsContainer(_ref) {
				var name = _ref.name,
					children = _ref.children
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,
					{
						id: name + '-buttons',
						sx: {
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							gap: 2,
							margin: '8px 4px',
							width: '80%',
						},
						children,
					},
				)
			}
			ActionButtonsContainer.displayName = 'ActionButtonsContainer'
			try {
				;(ActionButtonsContainer.displayName = 'ActionButtonsContainer'),
					(ActionButtonsContainer.__docgenInfo = {
						description: '',
						displayName: 'ActionButtonsContainer',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES[
							'components/ActionButtonsContainer.tsx#ActionButtonsContainer'
						] = {
							docgenInfo: ActionButtonsContainer.__docgenInfo,
							name: 'ActionButtonsContainer',
							path: 'components/ActionButtonsContainer.tsx#ActionButtonsContainer',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/ConfirmPasswordInput.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => ConfirmPasswordInput })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			)
			var _PasswordInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./components/PasswordInput.tsx',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function ConfirmPasswordInput(_ref) {
				var name = _ref.name,
					password = _ref.password,
					setPassword = _ref.setPassword,
					confirmPassword = _ref.confirmPassword,
					setConfirmPassword = _ref.setConfirmPassword,
					_ref$disabled = _ref.disabled,
					disabled = void 0 !== _ref$disabled && _ref$disabled
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
					{
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
								_PasswordInput__WEBPACK_IMPORTED_MODULE_1__.Z,
								{ name, value: password, setValue: setPassword, disabled },
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
								_PasswordInput__WEBPACK_IMPORTED_MODULE_1__.Z,
								{
									name,
									value: confirmPassword,
									setValue: setConfirmPassword,
									disabled,
									isConfirmPassword: !0,
								},
							),
						],
					},
				)
			}
			try {
				;(ConfirmPasswordInput.displayName = 'ConfirmPasswordInput'),
					(ConfirmPasswordInput.__docgenInfo = {
						description: '',
						displayName: 'ConfirmPasswordInput',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							password: {
								defaultValue: null,
								description: '',
								name: 'password',
								required: !0,
								type: { name: 'string' },
							},
							setPassword: {
								defaultValue: null,
								description: '',
								name: 'setPassword',
								required: !0,
								type: { name: 'Dispatch<SetStateAction<string>>' },
							},
							confirmPassword: {
								defaultValue: null,
								description: '',
								name: 'confirmPassword',
								required: !0,
								type: { name: 'string' },
							},
							setConfirmPassword: {
								defaultValue: null,
								description: '',
								name: 'setConfirmPassword',
								required: !0,
								type: { name: 'Dispatch<SetStateAction<string>>' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/ConfirmPasswordInput.tsx#ConfirmPasswordInput'] = {
							docgenInfo: ConfirmPasswordInput.__docgenInfo,
							name: 'ConfirmPasswordInput',
							path: 'components/ConfirmPasswordInput.tsx#ConfirmPasswordInput',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/EmailInput.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => EmailInput })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/TextField/TextField.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function EmailInput(_ref) {
				var name = _ref.name,
					value = _ref.value,
					setValue = _ref.setValue,
					_ref$disabled = _ref.disabled,
					disabled = void 0 !== _ref$disabled && _ref$disabled,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)().settings.darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
					{
						id: name + '-email-input',
						label: 'Email',
						variant: 'outlined',
						type: 'email',
						value,
						onChange: function onChange(e) {
							return setValue(e.target.value)
						},
						disabled,
						sx: {
							color: darkMode ? 'white' : 'black',
							width: '80%',
							marginBottom: 1,
							'& .MuiOutlinedInput-root': {
								'& fieldset': { borderColor: darkMode ? 'white' : 'black' },
							},
							'& .MuiFormLabel-root': { color: darkMode ? 'white' : 'black' },
							'& .MuiInputBase-input': {
								color: darkMode ? 'white' : 'black',
								'&:disabled': {
									color: 'lightGray',
									'-webkit-text-fill-color': 'rgba(255, 255, 255, 0.7)',
								},
							},
							'& .Mui-disabled': {
								color: 'lightGray',
								'& .MuiOutlinedInput-notchedOutline': { borderColor: 'darkGray' },
							},
						},
					},
				)
			}
			EmailInput.displayName = 'EmailInput'
			try {
				;(EmailInput.displayName = 'EmailInput'),
					(EmailInput.__docgenInfo = {
						description: '',
						displayName: 'EmailInput',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							value: {
								defaultValue: null,
								description: '',
								name: 'value',
								required: !0,
								type: { name: 'string' },
							},
							setValue: {
								defaultValue: null,
								description: '',
								name: 'setValue',
								required: !0,
								type: { name: 'Dispatch<SetStateAction<string>>' },
							},
							disabled: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/EmailInput.tsx#EmailInput'] = {
							docgenInfo: EmailInput.__docgenInfo,
							name: 'EmailInput',
							path: 'components/EmailInput.tsx#EmailInput',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/Layout.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { A: () => Layout })
			var AppBar = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/AppBar/AppBar.js',
				),
				Toolbar = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Toolbar/Toolbar.js',
				),
				Typography = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				react = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				Box = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Box/Box.js',
				),
				Switch = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Switch/Switch.js',
				),
				WbSunny = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_ge2ne5gh5gcqikeclw577gsblu/node_modules/@mui/icons-material/WbSunny.js',
				),
				Brightness2 = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_ge2ne5gh5gcqikeclw577gsblu/node_modules/@mui/icons-material/Brightness2.js',
				),
				store = __webpack_require__('./store/index.ts'),
				jsx_runtime = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function DarkModeSwitch() {
				var _useBoundStore = (0, store.w)(),
					darkMode = _useBoundStore.settings.darkMode,
					setSettings = _useBoundStore.setSettings
				return (
					(0, react.useEffect)(
						function () {
							var darkMode = 'true' === localStorage.getItem('darkMode')
							setSettings({ darkMode })
						},
						[setSettings],
					),
					(0, jsx_runtime.jsxs)(Box.Z, {
						id: 'dark-mode-switch-container',
						sx: {
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 1,
							mt: 1,
						},
						children: [
							(0, jsx_runtime.jsx)(Switch.Z, {
								id: 'dark-mode-switch',
								checked: darkMode,
								onChange: function handleDarkMode() {
									localStorage.setItem('darkMode', darkMode ? 'false' : 'true'),
										setSettings({ darkMode: !darkMode })
								},
								inputProps: { 'aria-label': 'dark mode switch' },
								color: darkMode ? 'default' : 'primary',
								sx: {
									'& .MuiSwitch-track': {
										backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
									},
									'& .MuiSwitch-thumb': {
										backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
									},
								},
								checkedIcon: (0, jsx_runtime.jsx)(Brightness2.Z, { id: 'light-mode-icon' }),
								icon: (0, jsx_runtime.jsx)(WbSunny.Z, { id: 'dark-mode-icon' }),
							}),
							(0, jsx_runtime.jsxs)(Typography.Z, {
								id: 'layout-dark-mode-switch-label',
								variant: 'body2',
								sx: { fontWeight: 500, mb: 1 },
								'aria-label': 'dark mode switch label',
								children: [darkMode ? 'Dark' : 'Light', ' Mode'],
							}),
						],
					})
				)
			}
			function Layout(_ref) {
				var children = _ref.children,
					darkMode = (0, store.w)().settings.darkMode
				return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
					children: [
						(0, jsx_runtime.jsx)(AppBar.Z, {
							position: 'static',
							id: 'layout-appbar',
							sx: {
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
								color: darkMode ? 'white' : 'black',
								'& .MuiToolbar-root': { justifyContent: 'space-between' },
								'& .MuiTypography-root': { fontWeight: 'bold' },
							},
							'aria-label': 'appbar',
							children: (0, jsx_runtime.jsxs)(Toolbar.Z, {
								id: 'layout-toolbar',
								sx: { display: 'flex', justifyContent: 'space-between' },
								'aria-label': 'toolbar',
								children: [
									(0, jsx_runtime.jsx)(Typography.Z, {
										id: 'layout-title',
										variant: 'h6',
										component: 'div',
										sx: { flexGrow: 1 },
										'aria-label': 'title',
										children: 'Next Auth Scaffold',
									}),
									(0, jsx_runtime.jsx)(DarkModeSwitch, {}),
								],
							}),
						}),
						children,
					],
				})
			}
			DarkModeSwitch.displayName = 'DarkModeSwitch'
			try {
				;(Layout.displayName = 'Layout'),
					(Layout.__docgenInfo = { description: '', displayName: 'Layout', props: {} }),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/Layout.tsx#Layout'] = {
							docgenInfo: Layout.__docgenInfo,
							name: 'Layout',
							path: 'components/Layout.tsx#Layout',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/Modal.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => components_Modal })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.small.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.replace.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.regexp.exec.js',
				)
			var useMediaQuery = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js',
				),
				Box = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Box/Box.js',
				),
				Typography = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				CircularProgress = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js',
				),
				store = __webpack_require__('./store/index.ts'),
				minorWords =
					(__webpack_require__(
						'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.regexp.constructor.js',
					),
					__webpack_require__(
						'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.regexp.to-string.js',
					),
					__webpack_require__(
						'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.join.js',
					),
					__webpack_require__(
						'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.trim.js',
					),
					[
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
					]),
				minorWordsRegex = new RegExp(minorWords.join('|'), 'gi'),
				minorWordsRegexWithSpace = new RegExp('\\s(' + minorWords.join('|') + ')\\s', 'gi'),
				toTitleCase = function toTitleCase(str) {
					return str
						.replace(/([A-Z])/g, ' $1')
						.replace(minorWordsRegexWithSpace, function (match) {
							return match.toLowerCase()
						})
						.replace(minorWordsRegex, function (match) {
							return match.toLowerCase()
						})
						.replace(/^./, function (match) {
							return match.toUpperCase()
						})
						.trim()
				},
				jsx_runtime = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				),
				Modal = function Modal(_ref) {
					var children = _ref.children,
						name = _ref.name,
						_ref$loading = _ref.loading,
						loading = void 0 !== _ref$loading && _ref$loading,
						_ref$error = _ref.error,
						error = void 0 === _ref$error ? '' : _ref$error,
						_ref$small = _ref.small,
						small = void 0 !== _ref$small && _ref$small,
						darkMode = (0, store.w)().settings.darkMode,
						formattedName = name.replace(/ /g, '-').toLowerCase(),
						isMobile = (0, useMediaQuery.Z)('(max-width: 600px)'),
						isTablet = (0, useMediaQuery.Z)('(max-width: 960px)'),
						isDesktop = (0, useMediaQuery.Z)('(min-width: 960px)'),
						isLargeDesktop = (0, useMediaQuery.Z)('(min-width: 1280px)'),
						isExtraLargeDesktop = (0, useMediaQuery.Z)('(min-width: 1920px)')
					return (0, jsx_runtime.jsxs)(Box.Z, {
						id: formattedName + '-container',
						sx: {
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							margin: 'auto',
							gap: 2,
							backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							padding: 2,
							borderRadius: 2,
							boxShadow: 1,
							width: isMobile
								? '100%'
								: isTablet
								? '50%'
								: isDesktop
								? '30%'
								: isLargeDesktop
								? '20%'
								: isExtraLargeDesktop
								? '10%'
								: '100%',
							offset: 1,
						},
						children: [
							(0, jsx_runtime.jsx)(Typography.Z, {
								id: formattedName + '-title',
								variant: 'h3',
								sx: { color: darkMode ? '#fff' : '#000', fontWeight: 600, marginBottom: 1 },
								children: toTitleCase(name),
							}),
							(0, jsx_runtime.jsx)(Box.Z, {
								id: formattedName + '-notification-container',
								sx: {
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 1,
									width: '100%',
									height: small ? '15px' : '30px',
									marginBottom: 1,
								},
								children: loading
									? (0, jsx_runtime.jsx)(CircularProgress.Z, {
											id: formattedName + '-loading',
											sx: { color: darkMode ? 'primary.light' : 'primary.dark' },
									  })
									: error &&
									  (0, jsx_runtime.jsx)(Typography.Z, {
											id: formattedName + '-error',
											variant: 'h6',
											sx: { color: 'error.dark' },
											children: error,
									  }),
							}),
							(0, jsx_runtime.jsx)(Box.Z, {
								id: formattedName + '-form',
								sx: {
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 2,
									width: '100%',
								},
								children,
							}),
						],
					})
				}
			Modal.displayName = 'Modal'
			const components_Modal = Modal
			try {
				;(Modal.displayName = 'Modal'),
					(Modal.__docgenInfo = {
						description: '',
						displayName: 'Modal',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							loading: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'loading',
								required: !1,
								type: { name: 'boolean' },
							},
							error: {
								defaultValue: { value: '' },
								description: '',
								name: 'error',
								required: !1,
								type: { name: 'string' },
							},
							small: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'small',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/Modal.tsx#Modal'] = {
							docgenInfo: Modal.__docgenInfo,
							name: 'Modal',
							path: 'components/Modal.tsx#Modal',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/ModalNote.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => ModalNote })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.5_672uxklweod7ene3nqtsh262ca/node_modules/next/link.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
					next_link__WEBPACK_IMPORTED_MODULE_1__,
				),
				_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function ModalNote(_ref) {
				var name = _ref.name,
					label = _ref.label,
					href = _ref.href,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_2__.w)().settings.darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,
					{
						id: name + '-link-container',
						sx: {
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 2,
						},
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
							next_link__WEBPACK_IMPORTED_MODULE_1___default(),
							{
								href,
								id: name + '-link',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
									{
										id: name + '-text',
										variant: 'body1',
										sx: {
											color: darkMode ? 'white' : 'black',
											fontWeight: 500,
											marginBottom: 2,
											cursor: 'pointer',
											'&:hover': { color: darkMode ? 'primary.light' : 'primary.dark' },
										},
										children: label,
									},
								),
							},
						),
					},
				)
			}
			ModalNote.displayName = 'ModalNote'
			try {
				;(ModalNote.displayName = 'ModalNote'),
					(ModalNote.__docgenInfo = {
						description: '',
						displayName: 'ModalNote',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							label: {
								defaultValue: null,
								description: '',
								name: 'label',
								required: !0,
								type: { name: 'string' },
							},
							href: {
								defaultValue: null,
								description: '',
								name: 'href',
								required: !0,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/ModalNote.tsx#ModalNote'] = {
							docgenInfo: ModalNote.__docgenInfo,
							name: 'ModalNote',
							path: 'components/ModalNote.tsx#ModalNote',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/NavigationButton.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => NavigationButton })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Button/Button.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function NavigationButton(_ref) {
				var name = _ref.name,
					label = _ref.label,
					handleClick = _ref.handleClick,
					width = _ref.width,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)().settings.darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
					{
						id: name + '-button',
						variant: 'contained',
						onClick: handleClick,
						sx: { color: darkMode ? 'white' : 'black', width: width || '40%', height: 35 },
						children: label,
					},
				)
			}
			NavigationButton.displayName = 'NavigationButton'
			try {
				;(NavigationButton.displayName = 'NavigationButton'),
					(NavigationButton.__docgenInfo = {
						description: '',
						displayName: 'NavigationButton',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							label: {
								defaultValue: null,
								description: '',
								name: 'label',
								required: !0,
								type: { name: 'string' },
							},
							handleClick: {
								defaultValue: null,
								description: '',
								name: 'handleClick',
								required: !0,
								type: { name: '() => void' },
							},
							width: {
								defaultValue: null,
								description: '',
								name: 'width',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/NavigationButton.tsx#NavigationButton'] = {
							docgenInfo: NavigationButton.__docgenInfo,
							name: 'NavigationButton',
							path: 'components/NavigationButton.tsx#NavigationButton',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/PasswordInput.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => PasswordInput })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.replace.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.regexp.exec.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.from.js',
				)
			var react = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				TextField = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/TextField/TextField.js',
				),
				IconButton = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/IconButton/IconButton.js',
				),
				Visibility = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_ge2ne5gh5gcqikeclw577gsblu/node_modules/@mui/icons-material/Visibility.js',
				),
				VisibilityOff = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_ge2ne5gh5gcqikeclw577gsblu/node_modules/@mui/icons-material/VisibilityOff.js',
				),
				Box = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Box/Box.js',
				),
				Typography = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				store = __webpack_require__('./store/index.ts'),
				jsx_runtime = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function VisibilityIconComponent(_ref) {
				var showPassword = _ref.showPassword,
					name = _ref.name,
					hover = _ref.hover,
					_ref$isConfirmPasswor = _ref.isConfirmPassword,
					isConfirmPassword = void 0 !== _ref$isConfirmPasswor && _ref$isConfirmPasswor,
					darkMode = (0, store.w)().settings.darkMode
				return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
					children: (0, jsx_runtime.jsx)(Box.Z, {
						id: name + (isConfirmPassword ? '-confirm' : '') + '-password-box',
						sx: {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						},
						children: showPassword
							? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
									children: [
										(0, jsx_runtime.jsx)(Visibility.Z, {
											id:
												name +
												(isConfirmPassword ? '-confirm' : '') +
												'-password-input-visibility-on-icon',
											sx: { color: darkMode ? '#fff' : '#000' },
										}),
										(0, jsx_runtime.jsx)(Typography.Z, {
											id:
												name +
												(isConfirmPassword ? '-confirm' : '') +
												'-password-input-hide-password-text',
											variant: 'caption',
											sx: {
												color: darkMode ? '#fff' : '#000',
												fontWeight: hover ? 'bold' : 'normal',
											},
											children: 'Hide',
										}),
									],
							  })
							: (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
									children: [
										(0, jsx_runtime.jsx)(VisibilityOff.Z, {
											id:
												name +
												(isConfirmPassword ? '-confirm' : '') +
												'-password-input-visibility-off-icon',
											sx: { color: darkMode ? '#fff' : '#000' },
										}),
										(0, jsx_runtime.jsx)(Typography.Z, {
											id:
												name +
												(isConfirmPassword ? '-confirm' : '') +
												'-password-input-show-password-text',
											variant: 'caption',
											sx: {
												color: darkMode ? '#fff' : '#000',
												fontWeight: hover ? 'bold' : 'normal',
											},
											children: 'Show',
										}),
									],
							  }),
					}),
				})
			}
			try {
				;(VisibilityIcon.displayName = 'VisibilityIcon'),
					(VisibilityIcon.__docgenInfo = {
						description: '',
						displayName: 'VisibilityIcon',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							showPassword: {
								defaultValue: null,
								description: '',
								name: 'showPassword',
								required: !0,
								type: { name: 'boolean' },
							},
							hover: {
								defaultValue: null,
								description: '',
								name: 'hover',
								required: !0,
								type: { name: 'boolean' },
							},
							isConfirmPassword: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'isConfirmPassword',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/VisibilityIcon.tsx#VisibilityIcon'] = {
							docgenInfo: VisibilityIcon.__docgenInfo,
							name: 'VisibilityIcon',
							path: 'components/VisibilityIcon.tsx#VisibilityIcon',
						})
			} catch (__react_docgen_typescript_loader_error) {}
			function _slicedToArray(arr, i) {
				return (
					(function _arrayWithHoles(arr) {
						if (Array.isArray(arr)) return arr
					})(arr) ||
					(function _iterableToArrayLimit(arr, i) {
						var _i =
							null == arr
								? null
								: ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
						if (null != _i) {
							var _s,
								_e,
								_x,
								_r,
								_arr = [],
								_n = !0,
								_d = !1
							try {
								if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
									if (Object(_i) !== _i) return
									_n = !1
								} else
									for (
										;
										!(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
										_n = !0
									);
							} catch (err) {
								;(_d = !0), (_e = err)
							} finally {
								try {
									if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return
								} finally {
									if (_d) throw _e
								}
							}
							return _arr
						}
					})(arr, i) ||
					(function _unsupportedIterableToArray(o, minLen) {
						if (!o) return
						if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
						var n = Object.prototype.toString.call(o).slice(8, -1)
						'Object' === n && o.constructor && (n = o.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(o)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
							return _arrayLikeToArray(o, minLen)
					})(arr, i) ||
					(function _nonIterableRest() {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					})()
				)
			}
			function _arrayLikeToArray(arr, len) {
				;(null == len || len > arr.length) && (len = arr.length)
				for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
				return arr2
			}
			function PasswordInput(_ref) {
				var name = _ref.name,
					value = _ref.value,
					setValue = _ref.setValue,
					disabled = _ref.disabled,
					_ref$isConfirmPasswor = _ref.isConfirmPassword,
					isConfirmPassword = void 0 !== _ref$isConfirmPasswor && _ref$isConfirmPasswor,
					formattedName = name.replace(/ /g, '-').toLowerCase(),
					darkMode = (0, store.w)().settings.darkMode,
					_useState2 = _slicedToArray((0, react.useState)(!1), 2),
					showPassword = _useState2[0],
					setShowPassword = _useState2[1],
					_useState4 = _slicedToArray((0, react.useState)(!1), 2),
					hover = _useState4[0],
					setHover = _useState4[1]
				return (0, jsx_runtime.jsx)(TextField.Z, {
					id: formattedName + '-password-input',
					label: isConfirmPassword ? 'Confirm Password' : 'Password',
					variant: 'outlined',
					type: showPassword ? 'text' : 'password',
					value,
					onChange: function onChange(e) {
						return setValue(e.target.value)
					},
					disabled,
					sx: {
						color: darkMode ? 'white' : 'black',
						width: '80%',
						marginBottom: 1,
						'& .MuiOutlinedInput-root': {
							'& fieldset': { borderColor: darkMode ? 'white' : 'black' },
						},
						'& .MuiFormLabel-root': { color: darkMode ? 'white' : 'black' },
						'& .MuiInputBase-input': {
							color: darkMode ? 'white' : 'black',
							'&:disabled': {
								color: 'lightGray',
								'-webkit-text-fill-color': 'rgba(255, 255, 255, 0.7)',
							},
						},
						'& .Mui-disabled': {
							color: 'lightGray',
							'& .MuiOutlinedInput-notchedOutline': { borderColor: 'darkGray' },
						},
					},
					InputProps: {
						endAdornment: (0, jsx_runtime.jsx)(IconButton.Z, {
							id:
								formattedName +
								(isConfirmPassword ? '-confirm' : '') +
								'-password-input-show-hide-button',
							onClick: function onClick() {
								return setShowPassword(function (show) {
									return !show
								})
							},
							sx: {
								color: darkMode ? '#fff' : '#000',
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
							},
							onMouseEnter: function onMouseEnter() {
								return setHover(!0)
							},
							onMouseLeave: function onMouseLeave() {
								return setHover(!1)
							},
							children: (0, jsx_runtime.jsx)(VisibilityIconComponent, {
								name: formattedName,
								showPassword,
								hover,
								isConfirmPassword,
							}),
						}),
					},
				})
			}
			PasswordInput.displayName = 'PasswordInput'
			try {
				;(PasswordInput.displayName = 'PasswordInput'),
					(PasswordInput.__docgenInfo = {
						description: '',
						displayName: 'PasswordInput',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							value: {
								defaultValue: null,
								description: '',
								name: 'value',
								required: !0,
								type: { name: 'string' },
							},
							setValue: {
								defaultValue: null,
								description: '',
								name: 'setValue',
								required: !0,
								type: { name: 'Dispatch<SetStateAction<string>>' },
							},
							disabled: {
								defaultValue: null,
								description: '',
								name: 'disabled',
								required: !0,
								type: { name: 'boolean' },
							},
							isConfirmPassword: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'isConfirmPassword',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/PasswordInput.tsx#PasswordInput'] = {
							docgenInfo: PasswordInput.__docgenInfo,
							name: 'PasswordInput',
							path: 'components/PasswordInput.tsx#PasswordInput',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/SubmitButton.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => SubmitButton })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Button/Button.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function SubmitButton(_ref) {
				var name = _ref.name,
					label = _ref.label,
					loading = _ref.loading,
					handleSubmit = _ref.handleSubmit,
					width = _ref.width,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)().settings.darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
					{
						id: name + '-submit-button',
						variant: 'contained',
						onClick: handleSubmit,
						disabled: loading,
						sx: { color: darkMode ? 'white' : 'black', width: width || '40%', height: 35 },
						children: loading
							? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,
									{
										id: name + '-submit-button-progress',
										size: 20,
										sx: { color: darkMode ? 'white' : 'black' },
									},
							  )
							: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
									{
										id: name + '-submit-button-text',
										variant: 'button',
										sx: { color: darkMode ? 'white' : 'black' },
										children: label,
									},
							  ),
					},
				)
			}
			SubmitButton.displayName = 'SubmitButton'
			try {
				;(SubmitButton.displayName = 'SubmitButton'),
					(SubmitButton.__docgenInfo = {
						description: '',
						displayName: 'SubmitButton',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							label: {
								defaultValue: null,
								description: '',
								name: 'label',
								required: !0,
								type: { name: 'string' },
							},
							loading: {
								defaultValue: null,
								description: '',
								name: 'loading',
								required: !0,
								type: { name: 'boolean' },
							},
							handleSubmit: {
								defaultValue: null,
								description: '',
								name: 'handleSubmit',
								required: !0,
								type: { name: '() => void' },
							},
							width: {
								defaultValue: null,
								description: '',
								name: 'width',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/SubmitButton.tsx#SubmitButton'] = {
							docgenInfo: SubmitButton.__docgenInfo,
							name: 'SubmitButton',
							path: 'components/SubmitButton.tsx#SubmitButton',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/components/darkMode/ConfirmPasswordInput.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Disabled: () => Disabled,
					WithAll: () => WithAll,
					WithConfirmPassword: () => WithConfirmPassword,
					WithConfirmPasswordAndDisabled: () => WithConfirmPasswordAndDisabled,
					WithPassword: () => WithPassword,
					WithPasswordAndConfirmPassword: () => WithPasswordAndConfirmPassword,
					WithPasswordAndConfirmPasswordAndDisabled: () =>
						WithPasswordAndConfirmPasswordAndDisabled,
					WithPasswordAndConfirmPasswordMismatch: () => WithPasswordAndConfirmPasswordMismatch,
					WithPasswordAndConfirmPasswordMismatchAndDisabled: () =>
						WithPasswordAndConfirmPasswordMismatchAndDisabled,
					WithPasswordAndDisabled: () => WithPasswordAndDisabled,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__('./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js')
			var _components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./components/ConfirmPasswordInput.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ConfirmPasswordInput/DarkMode',
				component: _components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_3__.Z,
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.settings.darkMode,
					setSettings = _useBoundStore.setSettings
				return (
					darkMode || setSettings({ darkMode: !0 }),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_3__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'password',
					password: '',
					setPassword: function setPassword() {},
					confirmPassword: '',
					setConfirmPassword: function setConfirmPassword() {},
					disabled: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var Disabled = Template.bind({})
			Disabled.args = Object.assign({}, defaultArgs, { disabled: !0 })
			var WithPassword = Template.bind({})
			WithPassword.args = Object.assign({}, defaultArgs, { password: 'password' })
			var WithConfirmPassword = Template.bind({})
			WithConfirmPassword.args = Object.assign({}, defaultArgs, { confirmPassword: 'password' })
			var WithPasswordAndConfirmPassword = Template.bind({})
			WithPasswordAndConfirmPassword.args = Object.assign({}, defaultArgs, {
				password: 'password',
				confirmPassword: 'password',
			})
			var WithPasswordAndConfirmPasswordMismatch = Template.bind({})
			WithPasswordAndConfirmPasswordMismatch.args = Object.assign({}, defaultArgs, {
				password: 'password',
				confirmPassword: 'password1',
			})
			var WithPasswordAndConfirmPasswordMismatchAndDisabled = Template.bind({})
			WithPasswordAndConfirmPasswordMismatchAndDisabled.args = Object.assign({}, defaultArgs, {
				password: 'password',
				confirmPassword: 'password1',
				disabled: !0,
			})
			var WithPasswordAndConfirmPasswordAndDisabled = Template.bind({})
			WithPasswordAndConfirmPasswordAndDisabled.args = Object.assign({}, defaultArgs, {
				password: 'password',
				confirmPassword: 'password',
				disabled: !0,
			})
			var WithPasswordAndDisabled = Template.bind({})
			WithPasswordAndDisabled.args = Object.assign({}, defaultArgs, {
				password: 'password',
				disabled: !0,
			})
			var WithConfirmPasswordAndDisabled = Template.bind({})
			WithConfirmPasswordAndDisabled.args = Object.assign({}, defaultArgs, {
				confirmPassword: 'password',
				disabled: !0,
			})
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, defaultArgs, {
				password: 'password',
				confirmPassword: 'password',
				disabled: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(Disabled.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					Disabled.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithConfirmPassword.parameters,
				)),
				(WithPasswordAndConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithPasswordAndConfirmPassword.parameters,
				)),
				(WithPasswordAndConfirmPasswordMismatch.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithPasswordAndConfirmPasswordMismatch.parameters,
				)),
				(WithPasswordAndConfirmPasswordMismatchAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithPasswordAndConfirmPasswordMismatchAndDisabled.parameters,
				)),
				(WithPasswordAndConfirmPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithPasswordAndConfirmPasswordAndDisabled.parameters,
				)),
				(WithPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithPasswordAndDisabled.parameters,
				)),
				(WithConfirmPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithConfirmPasswordAndDisabled.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ConfirmPasswordInput {...args} />\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'Disabled',
				'WithPassword',
				'WithConfirmPassword',
				'WithPasswordAndConfirmPassword',
				'WithPasswordAndConfirmPasswordMismatch',
				'WithPasswordAndConfirmPasswordMismatchAndDisabled',
				'WithPasswordAndConfirmPasswordAndDisabled',
				'WithPasswordAndDisabled',
				'WithConfirmPasswordAndDisabled',
				'WithAll',
			]
		},
		'./stories/components/darkMode/DarkModeSwitch.stories.tsx': () => {},
		'./stories/components/darkMode/EmailInput.stories.tsx': () => {},
		'./stories/components/darkMode/Layout.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__('./components/Layout.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Layout/DarkMode',
				component: _components_Layout__WEBPACK_IMPORTED_MODULE_2__.A,
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
					darkMode = _useBoundStore.settings.darkMode,
					setSettings = _useBoundStore.setSettings
				return (
					darkMode || setSettings({ darkMode: !0 }),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
						_components_Layout__WEBPACK_IMPORTED_MODULE_2__.A,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {
				children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('div', {
					children: 'Children',
				}),
			}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Layout {...args} />\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/components/darkMode/Layout.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/components/darkMode/Layout.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/components/darkMode/Modal.stories.tsx': () => {},
		'./stories/components/darkMode/NavigationButton.stories.tsx': () => {},
		'./stories/components/darkMode/PasswordInput.stories.tsx': () => {},
		'./stories/components/darkMode/SubmitButton.stories.tsx': () => {},
		'./stories/components/darkMode/VisibilityIcon.stories.tsx': () => {},
		'./stories/components/lightMode/Layout.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__('./components/Layout.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Layout/LightMode',
				component: _components_Layout__WEBPACK_IMPORTED_MODULE_2__.A,
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
					darkMode = _useBoundStore.settings.darkMode,
					setSettings = _useBoundStore.setSettings
				return (
					darkMode && setSettings({ darkMode: !1 }),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
						_components_Layout__WEBPACK_IMPORTED_MODULE_2__.A,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {
				children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('div', {
					children: 'Children',
				}),
			}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode },\n        setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Layout {...args} />\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/components/lightMode/Layout.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/components/lightMode/Layout.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/darkMode/[...token].stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					WithPassword: () => WithPassword,
					WithPasswordAndConfirmPassword: () => WithPasswordAndConfirmPassword,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_reset_password_token___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./pages/reset-password/[...token].tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/ResetPassword/DarkMode',
				component: _pages_reset_password_token___WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = {
					errorInit: '',
					passwordInit: '',
					confirmPasswordInit: '',
					loadingInit: !1,
					emailInit: '',
				},
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode || setSettings({ darkMode: !0 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_reset_password_token___WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = initialProps
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithPassword = Template.bind({})
			WithPassword.args = Object.assign({}, initialProps, { passwordInit: 'password' })
			var WithPasswordAndConfirmPassword = Template.bind({})
			WithPasswordAndConfirmPassword.args = Object.assign({}, initialProps, {
				passwordInit: 'password',
				confirmPasswordInit: 'password',
			})
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				emailInit: 'test@example.com',
				passwordInit: 'password',
				confirmPasswordInit: 'password',
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithPasswordAndConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithPasswordAndConfirmPassword.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'WithError',
				'WithLoading',
				'WithPassword',
				'WithPasswordAndConfirmPassword',
				'WithEmail',
				'WithAll',
			]
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/darkMode/[...token].stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/darkMode/[...token].stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/darkMode/forgot-password.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_forgot_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./pages/forgot-password.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/ForgotPassword/DarkMode',
				component: _pages_forgot_password__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = { errorInit: '', emailInit: '', loadingInit: !1 },
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode || setSettings({ darkMode: !0 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_forgot_password__WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = Object.assign({}, initialProps)
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				errorInit: 'Invalid email or password',
				emailInit: 'test@example.com',
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = ['Default', 'WithError', 'WithEmail', 'WithLoading', 'WithAll']
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/darkMode/forgot-password.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/darkMode/forgot-password.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/darkMode/index.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			)
			var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./pages/index.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/Dashboard/DarkMode',
				component: _pages__WEBPACK_IMPORTED_MODULE_1__.Z,
			}
			var Default = function Default() {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_2__.w)(),
					darkMode = _useBoundStore.settings.darkMode,
					setSettings = _useBoundStore.setSettings
				return (
					darkMode || setSettings({ darkMode: !0 }),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
						_pages__WEBPACK_IMPORTED_MODULE_1__.Z,
						{},
					)
				)
			}
			;(Default.displayName = 'Default'),
				(Default.parameters = { nextRouter: { pathname: '/' } }),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'() => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Dashboard />;\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/darkMode/index.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/darkMode/index.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/darkMode/login.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					WithPassword: () => WithPassword,
					WithoutRemember: () => WithoutRemember,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./pages/login.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/Login/DarkMode',
				component: _pages_login__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = {
					errorInit: '',
					emailInit: '',
					passwordInit: '',
					rememberInit: !0,
					loadingInit: !1,
				},
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode || setSettings({ darkMode: !0 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_login__WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = Object.assign({}, initialProps)
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithPassword = Template.bind({})
			WithPassword.args = Object.assign({}, initialProps, { passwordInit: 'password' })
			var WithoutRemember = Template.bind({})
			WithoutRemember.args = Object.assign({}, initialProps, { rememberInit: !1 })
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				errorInit: 'Invalid email or password',
				emailInit: 'email@example.com',
				passwordInit: 'password',
				rememberInit: !1,
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithoutRemember.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithoutRemember.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'WithError',
				'WithEmail',
				'WithPassword',
				'WithoutRemember',
				'WithLoading',
				'WithAll',
			]
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/darkMode/login.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/darkMode/login.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/darkMode/signup.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithConfirmPasswordHidden: () => WithConfirmPasswordHidden,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					WithPasswordHidden: () => WithPasswordHidden,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./pages/signup.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/Signup/DarkMode',
				component: _pages_signup__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = {
					errorInit: '',
					emailInit: '',
					passwordInit: '',
					confirmPasswordInit: '',
					loadingInit: !1,
				},
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode || setSettings({ darkMode: !0 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_signup__WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = Object.assign({}, initialProps)
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithPasswordHidden = Template.bind({})
			WithPasswordHidden.args = Object.assign({}, initialProps, { passwordInit: 'password' })
			var WithConfirmPasswordHidden = Template.bind({})
			WithConfirmPasswordHidden.args = Object.assign({}, initialProps, {
				confirmPasswordInit: 'password',
			})
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				errorInit: 'Invalid email or password',
				emailInit: 'test@example.com',
				passwordInit: 'password',
				confirmPasswordInit: 'password',
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithPasswordHidden.parameters,
				)),
				(WithConfirmPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithConfirmPasswordHidden.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (!darkMode) {\n        setSettings({ darkMode: true });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'WithError',
				'WithEmail',
				'WithPasswordHidden',
				'WithConfirmPasswordHidden',
				'WithLoading',
				'WithAll',
			]
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/darkMode/signup.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/darkMode/signup.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/lightMode/[...token].stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					WithPassword: () => WithPassword,
					WithPasswordAndConfirmPassword: () => WithPasswordAndConfirmPassword,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_reset_password_token___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./pages/reset-password/[...token].tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/ResetPassword/LightMode',
				component: _pages_reset_password_token___WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = {
					errorInit: '',
					passwordInit: '',
					confirmPasswordInit: '',
					loadingInit: !1,
					emailInit: '',
				},
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode && setSettings({ darkMode: !1 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_reset_password_token___WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = initialProps
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithPassword = Template.bind({})
			WithPassword.args = Object.assign({}, initialProps, { passwordInit: 'password' })
			var WithPasswordAndConfirmPassword = Template.bind({})
			WithPasswordAndConfirmPassword.args = Object.assign({}, initialProps, {
				passwordInit: 'password',
				confirmPasswordInit: 'password',
			})
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				emailInit: 'test@example.com',
				passwordInit: 'password',
				confirmPasswordInit: 'password',
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithPasswordAndConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithPasswordAndConfirmPassword.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n    const { settings: { darkMode }, setSettings } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ResetPassword {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'WithError',
				'WithLoading',
				'WithPassword',
				'WithPasswordAndConfirmPassword',
				'WithEmail',
				'WithAll',
			]
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/lightMode/[...token].stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/lightMode/[...token].stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/lightMode/forgot-password.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_forgot_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./pages/forgot-password.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/ForgotPassword/LightMode',
				component: _pages_forgot_password__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = { errorInit: '', emailInit: '', loadingInit: !1 },
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode && setSettings({ darkMode: !1 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_forgot_password__WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = Object.assign({}, initialProps)
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				errorInit: 'Invalid email or password',
				emailInit: 'test@example.com',
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: { darkMode },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <ForgotPassword {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = ['Default', 'WithError', 'WithEmail', 'WithLoading', 'WithAll']
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/lightMode/forgot-password.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/lightMode/forgot-password.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/lightMode/index.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			)
			var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./pages/index.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/Dashboard/LightMode',
				component: _pages__WEBPACK_IMPORTED_MODULE_1__.Z,
			}
			var Default = function Default() {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_2__.w)(),
					darkMode = _useBoundStore.settings.darkMode,
					setSettings = _useBoundStore.setSettings
				return (
					darkMode && setSettings({ darkMode: !1 }),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
						_pages__WEBPACK_IMPORTED_MODULE_1__.Z,
						{},
					)
				)
			}
			;(Default.displayName = 'Default'),
				(Default.parameters = { nextRouter: { pathname: '/' } }),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'() => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Dashboard />;\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/lightMode/index.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/lightMode/index.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/lightMode/login.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					WithPassword: () => WithPassword,
					WithoutRemember: () => WithoutRemember,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./pages/login.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/Login/LightMode',
				component: _pages_login__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = {
					errorInit: '',
					emailInit: '',
					passwordInit: '',
					rememberInit: !0,
					loadingInit: !1,
				},
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode && setSettings({ darkMode: !1 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_login__WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = Object.assign({}, initialProps)
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithPassword = Template.bind({})
			WithPassword.args = Object.assign({}, initialProps, { passwordInit: 'password' })
			var WithoutRemember = Template.bind({})
			WithoutRemember.args = Object.assign({}, initialProps, { rememberInit: !1 })
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				errorInit: 'Invalid email or password',
				emailInit: 'email@example.com',
				passwordInit: 'password',
				rememberInit: !1,
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithoutRemember.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithoutRemember.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Login {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'WithError',
				'WithEmail',
				'WithPassword',
				'WithoutRemember',
				'WithLoading',
				'WithAll',
			]
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/lightMode/login.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/lightMode/login.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./stories/pages/lightMode/signup.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					WithAll: () => WithAll,
					WithConfirmPasswordHidden: () => WithConfirmPasswordHidden,
					WithEmail: () => WithEmail,
					WithError: () => WithError,
					WithLoading: () => WithLoading,
					WithPasswordHidden: () => WithPasswordHidden,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./pages/signup.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/Signup/LightMode',
				component: _pages_signup__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var initialProps = {
					errorInit: '',
					emailInit: '',
					passwordInit: '',
					confirmPasswordInit: '',
					loadingInit: !1,
				},
				Template = function Template(args) {
					var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
						darkMode = _useBoundStore.settings.darkMode,
						setSettings = _useBoundStore.setSettings
					return (
						darkMode && setSettings({ darkMode: !1 }),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_signup__WEBPACK_IMPORTED_MODULE_2__.Z,
							Object.assign({}, args),
						)
					)
				}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			Default.args = Object.assign({}, initialProps)
			var WithError = Template.bind({})
			WithError.args = Object.assign({}, initialProps, { errorInit: 'Invalid email or password' })
			var WithEmail = Template.bind({})
			WithEmail.args = Object.assign({}, initialProps, { emailInit: 'test@example.com' })
			var WithPasswordHidden = Template.bind({})
			WithPasswordHidden.args = Object.assign({}, initialProps, { passwordInit: 'password' })
			var WithConfirmPasswordHidden = Template.bind({})
			WithConfirmPasswordHidden.args = Object.assign({}, initialProps, {
				confirmPasswordInit: 'password',
			})
			var WithLoading = Template.bind({})
			WithLoading.args = Object.assign({}, initialProps, { loadingInit: !0 })
			var WithAll = Template.bind({})
			;(WithAll.args = Object.assign({}, initialProps, {
				errorInit: 'Invalid email or password',
				emailInit: 'test@example.com',
				passwordInit: 'password',
				confirmPasswordInit: 'password',
				loadingInit: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithPasswordHidden.parameters,
				)),
				(WithConfirmPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithConfirmPasswordHidden.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'(args) => {\n\n    const { settings: {\n        darkMode,\n    },\n        setSettings\n    } = useBoundStore();\n\n    if (darkMode) {\n        setSettings({ darkMode: false });\n    }\n\n    return <Signup {...args} />;\n}',
						},
					},
					WithAll.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'WithError',
				'WithEmail',
				'WithPasswordHidden',
				'WithConfirmPasswordHidden',
				'WithLoading',
				'WithAll',
			]
			try {
				;(Meta.displayName = 'Meta'),
					(Meta.__docgenInfo = {
						description: 'Metadata to configure the stories for a component.',
						displayName: 'Meta',
						props: {},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['stories/pages/lightMode/signup.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/lightMode/signup.stories.tsx#Meta',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./pages/forgot-password.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => ForgotPassword })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_SubmitButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/SubmitButton.tsx',
				),
				_components_EmailInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/EmailInput.tsx',
				),
				_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/ActionButtonsContainer.tsx',
				),
				_components_ModalNote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./components/ModalNote.tsx',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function _slicedToArray(arr, i) {
				return (
					(function _arrayWithHoles(arr) {
						if (Array.isArray(arr)) return arr
					})(arr) ||
					(function _iterableToArrayLimit(arr, i) {
						var _i =
							null == arr
								? null
								: ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
						if (null != _i) {
							var _s,
								_e,
								_x,
								_r,
								_arr = [],
								_n = !0,
								_d = !1
							try {
								if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
									if (Object(_i) !== _i) return
									_n = !1
								} else
									for (
										;
										!(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
										_n = !0
									);
							} catch (err) {
								;(_d = !0), (_e = err)
							} finally {
								try {
									if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return
								} finally {
									if (_d) throw _e
								}
							}
							return _arr
						}
					})(arr, i) ||
					(function _unsupportedIterableToArray(o, minLen) {
						if (!o) return
						if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
						var n = Object.prototype.toString.call(o).slice(8, -1)
						'Object' === n && o.constructor && (n = o.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(o)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
							return _arrayLikeToArray(o, minLen)
					})(arr, i) ||
					(function _nonIterableRest() {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					})()
				)
			}
			function _arrayLikeToArray(arr, len) {
				;(null == len || len > arr.length) && (len = arr.length)
				for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
				return arr2
			}
			function ForgotPassword(_ref) {
				var _ref$errorInit = _ref.errorInit,
					errorInit = void 0 === _ref$errorInit ? '' : _ref$errorInit,
					_ref$emailInit = _ref.emailInit,
					emailInit = void 0 === _ref$emailInit ? '' : _ref$emailInit,
					_ref$loadingInit = _ref.loadingInit,
					loadingInit = void 0 !== _ref$loadingInit && _ref$loadingInit,
					enqueueSnackbar = (0, notistack__WEBPACK_IMPORTED_MODULE_13__.Ds)().enqueueSnackbar,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(emailInit),
						2,
					),
					email = _useState2[0],
					setEmail = _useState2[1],
					_useState4 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(loadingInit),
						2,
					),
					loading = _useState4[0],
					setLoading = _useState4[1],
					_useState6 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(errorInit),
						2,
					),
					error = _useState6[0],
					setError = _useState6[1]
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(
					_components_Modal__WEBPACK_IMPORTED_MODULE_14__.Z,
					{
						name: 'forgot password',
						loading,
						error,
						small: !0,
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
								_components_EmailInput__WEBPACK_IMPORTED_MODULE_16__.Z,
								{ name: 'forgot-password', value: email, setValue: setEmail, disabled: loading },
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
								_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_17__.Z,
								{
									name: 'forgot-password',
									children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
										_components_SubmitButton__WEBPACK_IMPORTED_MODULE_15__.Z,
										{
											name: 'forgot-password',
											label: 'Submit',
											loading,
											handleSubmit: function handleForgotPassword() {
												if ('' !== email) {
													setLoading(!0)
													try {
														fetch('/api/auth/forgot-password', {
															method: 'POST',
															headers: { 'Content-Type': 'application/json' },
															body: JSON.stringify({ email }),
														})
															.then(function (res) {
																return res.json()
															})
															.then(function (data) {
																data.error
																	? (setError(data.error),
																	  enqueueSnackbar(data.error, {
																			variant: 'error',
																			autoHideDuration: 3e3,
																	  }))
																	: enqueueSnackbar(data.success, {
																			variant: 'success',
																			autoHideDuration: 2e3,
																	  })
															})
													} catch (error) {
														setError(null == error ? void 0 : error.meesage),
															enqueueSnackbar(error.message, { variant: 'error' })
													} finally {
														setLoading(!1)
													}
												} else
													enqueueSnackbar('Please enter your email', {
														variant: 'error',
														autoHideDuration: 3e3,
													})
											},
										},
									),
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
								_components_ModalNote__WEBPACK_IMPORTED_MODULE_18__.Z,
								{ name: 'forgot-password-back', label: 'Back to Login', href: '/login' },
							),
						],
					},
				)
			}
			ForgotPassword.displayName = 'ForgotPassword'
			try {
				;(forgotpassword.displayName = 'forgotpassword'),
					(forgotpassword.__docgenInfo = {
						description: '',
						displayName: 'forgotpassword',
						props: {
							errorInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'errorInit',
								required: !1,
								type: { name: 'string' },
							},
							emailInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'emailInit',
								required: !1,
								type: { name: 'string' },
							},
							loadingInit: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'loadingInit',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['pages/forgot-password.tsx#forgotpassword'] = {
							docgenInfo: forgotpassword.__docgenInfo,
							name: 'forgotpassword',
							path: 'pages/forgot-password.tsx#forgotpassword',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./pages/index.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => Dashboard })
			var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.5_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_components_NavigationButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./components/NavigationButton.tsx',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function Dashboard() {
				var router = (0, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
					enqueueSnackbar = (0, notistack__WEBPACK_IMPORTED_MODULE_1__.Ds)().enqueueSnackbar
				;(0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
					function () {
						localStorage.getItem('token') ||
							(router.push('/login'),
							enqueueSnackbar('You are not logged in', { variant: 'error', autoHideDuration: 3e3 }))
					},
					[enqueueSnackbar, router],
				)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
					{
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
								_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
								{ id: 'dashboard-title', variant: 'h1', sx: { color: 'white' }, children: 'Home' },
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
								_components_NavigationButton__WEBPACK_IMPORTED_MODULE_3__.Z,
								{
									name: 'logout',
									label: 'Logout',
									handleClick: function handleLogout() {
										localStorage.removeItem('token'),
											router.push('/login'),
											enqueueSnackbar('You have been logged out', {
												variant: 'success',
												autoHideDuration: 2e3,
											})
									},
									width: '20%',
								},
							),
						],
					},
				)
			}
		},
		'./pages/login.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => Login })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.from.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.define-property.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.async-iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.math.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.json.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.create.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.get-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.set-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.reverse.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.5_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__('./store/index.ts'),
				_mui_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/Checkbox/Checkbox.js',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_27__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_NavigationButton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
					'./components/NavigationButton.tsx',
				),
				_components_SubmitButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
					'./components/SubmitButton.tsx',
				),
				_components_EmailInput__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
					'./components/EmailInput.tsx',
				),
				_components_PasswordInput__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
					'./components/PasswordInput.tsx',
				),
				_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
					'./components/ActionButtonsContainer.tsx',
				),
				_components_ModalNote__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
					'./components/ModalNote.tsx',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function _regeneratorRuntime() {
				_regeneratorRuntime = function _regeneratorRuntime() {
					return exports
				}
				var exports = {},
					Op = Object.prototype,
					hasOwn = Op.hasOwnProperty,
					defineProperty =
						Object.defineProperty ||
						function (obj, key, desc) {
							obj[key] = desc.value
						},
					$Symbol = 'function' == typeof Symbol ? Symbol : {},
					iteratorSymbol = $Symbol.iterator || '@@iterator',
					asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
					toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'
				function define(obj, key, value) {
					return (
						Object.defineProperty(obj, key, {
							value,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						}),
						obj[key]
					)
				}
				try {
					define({}, '')
				} catch (err) {
					define = function define(obj, key, value) {
						return (obj[key] = value)
					}
				}
				function wrap(innerFn, outerFn, self, tryLocsList) {
					var protoGenerator =
							outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
						generator = Object.create(protoGenerator.prototype),
						context = new Context(tryLocsList || [])
					return (
						defineProperty(generator, '_invoke', {
							value: makeInvokeMethod(innerFn, self, context),
						}),
						generator
					)
				}
				function tryCatch(fn, obj, arg) {
					try {
						return { type: 'normal', arg: fn.call(obj, arg) }
					} catch (err) {
						return { type: 'throw', arg: err }
					}
				}
				exports.wrap = wrap
				var ContinueSentinel = {}
				function Generator() {}
				function GeneratorFunction() {}
				function GeneratorFunctionPrototype() {}
				var IteratorPrototype = {}
				define(IteratorPrototype, iteratorSymbol, function () {
					return this
				})
				var getProto = Object.getPrototypeOf,
					NativeIteratorPrototype = getProto && getProto(getProto(values([])))
				NativeIteratorPrototype &&
					NativeIteratorPrototype !== Op &&
					hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
					(IteratorPrototype = NativeIteratorPrototype)
				var Gp =
					(GeneratorFunctionPrototype.prototype =
					Generator.prototype =
						Object.create(IteratorPrototype))
				function defineIteratorMethods(prototype) {
					;['next', 'throw', 'return'].forEach(function (method) {
						define(prototype, method, function (arg) {
							return this._invoke(method, arg)
						})
					})
				}
				function AsyncIterator(generator, PromiseImpl) {
					function invoke(method, arg, resolve, reject) {
						var record = tryCatch(generator[method], generator, arg)
						if ('throw' !== record.type) {
							var result = record.arg,
								value = result.value
							return value && 'object' == typeof value && hasOwn.call(value, '__await')
								? PromiseImpl.resolve(value.__await).then(
										function (value) {
											invoke('next', value, resolve, reject)
										},
										function (err) {
											invoke('throw', err, resolve, reject)
										},
								  )
								: PromiseImpl.resolve(value).then(
										function (unwrapped) {
											;(result.value = unwrapped), resolve(result)
										},
										function (error) {
											return invoke('throw', error, resolve, reject)
										},
								  )
						}
						reject(record.arg)
					}
					var previousPromise
					defineProperty(this, '_invoke', {
						value: function value(method, arg) {
							function callInvokeWithMethodAndArg() {
								return new PromiseImpl(function (resolve, reject) {
									invoke(method, arg, resolve, reject)
								})
							}
							return (previousPromise = previousPromise
								? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
								: callInvokeWithMethodAndArg())
						},
					})
				}
				function makeInvokeMethod(innerFn, self, context) {
					var state = 'suspendedStart'
					return function (method, arg) {
						if ('executing' === state) throw new Error('Generator is already running')
						if ('completed' === state) {
							if ('throw' === method) throw arg
							return doneResult()
						}
						for (context.method = method, context.arg = arg; ; ) {
							var delegate = context.delegate
							if (delegate) {
								var delegateResult = maybeInvokeDelegate(delegate, context)
								if (delegateResult) {
									if (delegateResult === ContinueSentinel) continue
									return delegateResult
								}
							}
							if ('next' === context.method) context.sent = context._sent = context.arg
							else if ('throw' === context.method) {
								if ('suspendedStart' === state) throw ((state = 'completed'), context.arg)
								context.dispatchException(context.arg)
							} else 'return' === context.method && context.abrupt('return', context.arg)
							state = 'executing'
							var record = tryCatch(innerFn, self, context)
							if ('normal' === record.type) {
								if (
									((state = context.done ? 'completed' : 'suspendedYield'),
									record.arg === ContinueSentinel)
								)
									continue
								return { value: record.arg, done: context.done }
							}
							'throw' === record.type &&
								((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg))
						}
					}
				}
				function maybeInvokeDelegate(delegate, context) {
					var methodName = context.method,
						method = delegate.iterator[methodName]
					if (void 0 === method)
						return (
							(context.delegate = null),
							('throw' === methodName &&
								delegate.iterator.return &&
								((context.method = 'return'),
								(context.arg = void 0),
								maybeInvokeDelegate(delegate, context),
								'throw' === context.method)) ||
								('return' !== methodName &&
									((context.method = 'throw'),
									(context.arg = new TypeError(
										"The iterator does not provide a '" + methodName + "' method",
									)))),
							ContinueSentinel
						)
					var record = tryCatch(method, delegate.iterator, context.arg)
					if ('throw' === record.type)
						return (
							(context.method = 'throw'),
							(context.arg = record.arg),
							(context.delegate = null),
							ContinueSentinel
						)
					var info = record.arg
					return info
						? info.done
							? ((context[delegate.resultName] = info.value),
							  (context.next = delegate.nextLoc),
							  'return' !== context.method && ((context.method = 'next'), (context.arg = void 0)),
							  (context.delegate = null),
							  ContinueSentinel)
							: info
						: ((context.method = 'throw'),
						  (context.arg = new TypeError('iterator result is not an object')),
						  (context.delegate = null),
						  ContinueSentinel)
				}
				function pushTryEntry(locs) {
					var entry = { tryLoc: locs[0] }
					1 in locs && (entry.catchLoc = locs[1]),
						2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
						this.tryEntries.push(entry)
				}
				function resetTryEntry(entry) {
					var record = entry.completion || {}
					;(record.type = 'normal'), delete record.arg, (entry.completion = record)
				}
				function Context(tryLocsList) {
					;(this.tryEntries = [{ tryLoc: 'root' }]),
						tryLocsList.forEach(pushTryEntry, this),
						this.reset(!0)
				}
				function values(iterable) {
					if (iterable) {
						var iteratorMethod = iterable[iteratorSymbol]
						if (iteratorMethod) return iteratorMethod.call(iterable)
						if ('function' == typeof iterable.next) return iterable
						if (!isNaN(iterable.length)) {
							var i = -1,
								next = function next() {
									for (; ++i < iterable.length; )
										if (hasOwn.call(iterable, i))
											return (next.value = iterable[i]), (next.done = !1), next
									return (next.value = void 0), (next.done = !0), next
								}
							return (next.next = next)
						}
					}
					return { next: doneResult }
				}
				function doneResult() {
					return { value: void 0, done: !0 }
				}
				return (
					(GeneratorFunction.prototype = GeneratorFunctionPrototype),
					defineProperty(Gp, 'constructor', {
						value: GeneratorFunctionPrototype,
						configurable: !0,
					}),
					defineProperty(GeneratorFunctionPrototype, 'constructor', {
						value: GeneratorFunction,
						configurable: !0,
					}),
					(GeneratorFunction.displayName = define(
						GeneratorFunctionPrototype,
						toStringTagSymbol,
						'GeneratorFunction',
					)),
					(exports.isGeneratorFunction = function (genFun) {
						var ctor = 'function' == typeof genFun && genFun.constructor
						return (
							!!ctor &&
							(ctor === GeneratorFunction ||
								'GeneratorFunction' === (ctor.displayName || ctor.name))
						)
					}),
					(exports.mark = function (genFun) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
								: ((genFun.__proto__ = GeneratorFunctionPrototype),
								  define(genFun, toStringTagSymbol, 'GeneratorFunction')),
							(genFun.prototype = Object.create(Gp)),
							genFun
						)
					}),
					(exports.awrap = function (arg) {
						return { __await: arg }
					}),
					defineIteratorMethods(AsyncIterator.prototype),
					define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
						return this
					}),
					(exports.AsyncIterator = AsyncIterator),
					(exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
						void 0 === PromiseImpl && (PromiseImpl = Promise)
						var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl)
						return exports.isGeneratorFunction(outerFn)
							? iter
							: iter.next().then(function (result) {
									return result.done ? result.value : iter.next()
							  })
					}),
					defineIteratorMethods(Gp),
					define(Gp, toStringTagSymbol, 'Generator'),
					define(Gp, iteratorSymbol, function () {
						return this
					}),
					define(Gp, 'toString', function () {
						return '[object Generator]'
					}),
					(exports.keys = function (val) {
						var object = Object(val),
							keys = []
						for (var key in object) keys.push(key)
						return (
							keys.reverse(),
							function next() {
								for (; keys.length; ) {
									var key = keys.pop()
									if (key in object) return (next.value = key), (next.done = !1), next
								}
								return (next.done = !0), next
							}
						)
					}),
					(exports.values = values),
					(Context.prototype = {
						constructor: Context,
						reset: function reset(skipTempReset) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = void 0),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = void 0),
								this.tryEntries.forEach(resetTryEntry),
								!skipTempReset)
							)
								for (var name in this)
									't' === name.charAt(0) &&
										hasOwn.call(this, name) &&
										!isNaN(+name.slice(1)) &&
										(this[name] = void 0)
						},
						stop: function stop() {
							this.done = !0
							var rootRecord = this.tryEntries[0].completion
							if ('throw' === rootRecord.type) throw rootRecord.arg
							return this.rval
						},
						dispatchException: function dispatchException(exception) {
							if (this.done) throw exception
							var context = this
							function handle(loc, caught) {
								return (
									(record.type = 'throw'),
									(record.arg = exception),
									(context.next = loc),
									caught && ((context.method = 'next'), (context.arg = void 0)),
									!!caught
								)
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i],
									record = entry.completion
								if ('root' === entry.tryLoc) return handle('end')
								if (entry.tryLoc <= this.prev) {
									var hasCatch = hasOwn.call(entry, 'catchLoc'),
										hasFinally = hasOwn.call(entry, 'finallyLoc')
									if (hasCatch && hasFinally) {
										if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0)
										if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
									} else if (hasCatch) {
										if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0)
									} else {
										if (!hasFinally) throw new Error('try statement without catch or finally')
										if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
									}
								}
							}
						},
						abrupt: function abrupt(type, arg) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i]
								if (
									entry.tryLoc <= this.prev &&
									hasOwn.call(entry, 'finallyLoc') &&
									this.prev < entry.finallyLoc
								) {
									var finallyEntry = entry
									break
								}
							}
							finallyEntry &&
								('break' === type || 'continue' === type) &&
								finallyEntry.tryLoc <= arg &&
								arg <= finallyEntry.finallyLoc &&
								(finallyEntry = null)
							var record = finallyEntry ? finallyEntry.completion : {}
							return (
								(record.type = type),
								(record.arg = arg),
								finallyEntry
									? ((this.method = 'next'),
									  (this.next = finallyEntry.finallyLoc),
									  ContinueSentinel)
									: this.complete(record)
							)
						},
						complete: function complete(record, afterLoc) {
							if ('throw' === record.type) throw record.arg
							return (
								'break' === record.type || 'continue' === record.type
									? (this.next = record.arg)
									: 'return' === record.type
									? ((this.rval = this.arg = record.arg),
									  (this.method = 'return'),
									  (this.next = 'end'))
									: 'normal' === record.type && afterLoc && (this.next = afterLoc),
								ContinueSentinel
							)
						},
						finish: function finish(finallyLoc) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i]
								if (entry.finallyLoc === finallyLoc)
									return (
										this.complete(entry.completion, entry.afterLoc),
										resetTryEntry(entry),
										ContinueSentinel
									)
							}
						},
						catch: function _catch(tryLoc) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i]
								if (entry.tryLoc === tryLoc) {
									var record = entry.completion
									if ('throw' === record.type) {
										var thrown = record.arg
										resetTryEntry(entry)
									}
									return thrown
								}
							}
							throw new Error('illegal catch attempt')
						},
						delegateYield: function delegateYield(iterable, resultName, nextLoc) {
							return (
								(this.delegate = { iterator: values(iterable), resultName, nextLoc }),
								'next' === this.method && (this.arg = void 0),
								ContinueSentinel
							)
						},
					}),
					exports
				)
			}
			function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
				try {
					var info = gen[key](arg),
						value = info.value
				} catch (error) {
					return void reject(error)
				}
				info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
			}
			function _slicedToArray(arr, i) {
				return (
					(function _arrayWithHoles(arr) {
						if (Array.isArray(arr)) return arr
					})(arr) ||
					(function _iterableToArrayLimit(arr, i) {
						var _i =
							null == arr
								? null
								: ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
						if (null != _i) {
							var _s,
								_e,
								_x,
								_r,
								_arr = [],
								_n = !0,
								_d = !1
							try {
								if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
									if (Object(_i) !== _i) return
									_n = !1
								} else
									for (
										;
										!(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
										_n = !0
									);
							} catch (err) {
								;(_d = !0), (_e = err)
							} finally {
								try {
									if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return
								} finally {
									if (_d) throw _e
								}
							}
							return _arr
						}
					})(arr, i) ||
					(function _unsupportedIterableToArray(o, minLen) {
						if (!o) return
						if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
						var n = Object.prototype.toString.call(o).slice(8, -1)
						'Object' === n && o.constructor && (n = o.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(o)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
							return _arrayLikeToArray(o, minLen)
					})(arr, i) ||
					(function _nonIterableRest() {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					})()
				)
			}
			function _arrayLikeToArray(arr, len) {
				;(null == len || len > arr.length) && (len = arr.length)
				for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
				return arr2
			}
			function Login(_ref) {
				var _ref$errorInit = _ref.errorInit,
					errorInit = void 0 === _ref$errorInit ? '' : _ref$errorInit,
					_ref$emailInit = _ref.emailInit,
					emailInit = void 0 === _ref$emailInit ? '' : _ref$emailInit,
					_ref$passwordInit = _ref.passwordInit,
					passwordInit = void 0 === _ref$passwordInit ? '' : _ref$passwordInit,
					_ref$rememberInit = _ref.rememberInit,
					rememberInit = void 0 === _ref$rememberInit || _ref$rememberInit,
					_ref$loadingInit = _ref.loadingInit,
					loadingInit = void 0 !== _ref$loadingInit && _ref$loadingInit,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_26__.w)().settings.darkMode,
					router = (0, next_router__WEBPACK_IMPORTED_MODULE_24__.useRouter)(),
					enqueueSnackbar = (0, notistack__WEBPACK_IMPORTED_MODULE_25__.Ds)().enqueueSnackbar,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(emailInit),
						2,
					),
					email = _useState2[0],
					setEmail = _useState2[1],
					_useState4 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(passwordInit),
						2,
					),
					password = _useState4[0],
					setPassword = _useState4[1],
					_useState6 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(rememberInit),
						2,
					),
					remember = _useState6[0],
					setRemember = _useState6[1],
					_useState8 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(loadingInit),
						2,
					),
					loading = _useState8[0],
					setLoading = _useState8[1],
					_useState10 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(errorInit),
						2,
					),
					error = _useState10[0],
					setError = _useState10[1],
					handleLogin = (function () {
						var _ref2 = (function _asyncToGenerator(fn) {
							return function () {
								var self = this,
									args = arguments
								return new Promise(function (resolve, reject) {
									var gen = fn.apply(self, args)
									function _next(value) {
										asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
									}
									function _throw(err) {
										asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
									}
									_next(void 0)
								})
							}
						})(
							_regeneratorRuntime().mark(function _callee() {
								var res, data
								return _regeneratorRuntime().wrap(
									function _callee$(_context) {
										for (;;)
											switch ((_context.prev = _context.next)) {
												case 0:
													if ((setLoading(!0), setError(''), '' !== email && '' !== password)) {
														_context.next = 6
														break
													}
													return (
														setError('Please fill in all fields'),
														setLoading(!1),
														_context.abrupt('return')
													)
												case 6:
													return (
														remember
															? localStorage.setItem('email', email)
															: localStorage.removeItem('email'),
														(_context.prev = 7),
														(_context.next = 10),
														fetch('/api/auth/login', {
															method: 'POST',
															headers: { 'Content-Type': 'application/json' },
															body: JSON.stringify({ email, password }),
														})
													)
												case 10:
													return (res = _context.sent), (_context.next = 13), res.json()
												case 13:
													;(data = _context.sent).error
														? setError(data.error)
														: (localStorage.setItem('token', data.token),
														  router.push('/'),
														  enqueueSnackbar('Logged in successfully', {
																variant: 'success',
																autoHideDuration: 2e3,
														  })),
														(_context.next = 21)
													break
												case 17:
													;(_context.prev = 17),
														(_context.t0 = _context.catch(7)),
														setError(_context.t0.message),
														setLoading(!1)
												case 21:
													return (_context.prev = 21), setLoading(!1), _context.finish(21)
												case 24:
												case 'end':
													return _context.stop()
											}
									},
									_callee,
									null,
									[[7, 17, 21, 24]],
								)
							}),
						)
						return function handleLogin() {
							return _ref2.apply(this, arguments)
						}
					})()
				return (
					(0, react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(
						function () {
							localStorage.getItem('token') && router.push('/'),
								localStorage.getItem('email') && setEmail(localStorage.getItem('email'))
						},
						[router],
					),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(
						_components_Modal__WEBPACK_IMPORTED_MODULE_27__.Z,
						{
							name: 'login',
							loading,
							error,
							children: [
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(
									_components_EmailInput__WEBPACK_IMPORTED_MODULE_30__.Z,
									{ name: 'login', value: email, setValue: setEmail, disabled: loading },
								),
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(
									_components_PasswordInput__WEBPACK_IMPORTED_MODULE_31__.Z,
									{ name: 'login', value: password, setValue: setPassword, disabled: loading },
								),
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(
									_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_32__.Z,
									{
										name: 'login',
										children: [
											(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(
												_components_NavigationButton__WEBPACK_IMPORTED_MODULE_28__.Z,
												{
													name: 'login-signup',
													label: 'Sign up',
													handleClick: function handleClick() {
														return router.push('/signup')
													},
												},
											),
											(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(
												_components_SubmitButton__WEBPACK_IMPORTED_MODULE_29__.Z,
												{ name: 'login', label: 'Log in', loading, handleSubmit: handleLogin },
											),
										],
									},
								),
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_35__.Z,
									{
										id: 'login-forgot-password-container',
										sx: {
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'end',
											alignItems: 'center',
											gap: 1,
										},
										children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)('label', {
											id: 'login-forgot-password-label',
											htmlFor: 'remember-me-checkbox',
											style: {
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'center',
												alignItems: 'center',
												gap: 1,
												color: darkMode ? 'white' : 'black',
												cursor: 'pointer',
												fontWeight: 600,
											},
											children: [
												'Remember Me',
												(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(
													_mui_material__WEBPACK_IMPORTED_MODULE_36__.Z,
													{
														id: 'remember-me-checkbox',
														checked: remember,
														onChange: function onChange() {
															return setRemember(function (remember) {
																return !remember
															})
														},
														sx: {
															color: darkMode ? 'white' : 'black',
															'&.Mui-checked': {
																color: darkMode ? 'primary.light' : 'primary.dark',
															},
															'&.MuiIconButton-colorPrimary:hover': {
																backgroundColor: 'transparent',
															},
															'&.MuiIconButton-colorPrimary:active': {
																backgroundColor: 'transparent',
															},
															'&.MuiIconButton-colorPrimary:focus': {
																backgroundColor: 'transparent',
															},
															'&.MuiIconButton-colorPrimary.Mui-disabled': {
																color: darkMode ? 'white' : 'black',
															},
														},
													},
												),
											],
										}),
									},
								),
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(
									_components_ModalNote__WEBPACK_IMPORTED_MODULE_33__.Z,
									{
										name: 'login-forgot-password',
										label: 'Forgot password?',
										href: '/forgot-password',
									},
								),
							],
						},
					)
				)
			}
			Login.displayName = 'Login'
			try {
				;(login.displayName = 'login'),
					(login.__docgenInfo = {
						description: '',
						displayName: 'login',
						props: {
							errorInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'errorInit',
								required: !1,
								type: { name: 'string' },
							},
							emailInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'emailInit',
								required: !1,
								type: { name: 'string' },
							},
							passwordInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'passwordInit',
								required: !1,
								type: { name: 'string' },
							},
							rememberInit: {
								defaultValue: { value: 'true' },
								description: '',
								name: 'rememberInit',
								required: !1,
								type: { name: 'boolean' },
							},
							loadingInit: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'loadingInit',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['pages/login.tsx#login'] = {
							docgenInfo: login.__docgenInfo,
							name: 'login',
							path: 'pages/login.tsx#login',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./pages/reset-password/[...token].tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => ResetPassword })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.5_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./components/ConfirmPasswordInput.tsx',
				),
				_components_SubmitButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/SubmitButton.tsx',
				),
				_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./components/ActionButtonsContainer.tsx',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function _slicedToArray(arr, i) {
				return (
					(function _arrayWithHoles(arr) {
						if (Array.isArray(arr)) return arr
					})(arr) ||
					(function _iterableToArrayLimit(arr, i) {
						var _i =
							null == arr
								? null
								: ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
						if (null != _i) {
							var _s,
								_e,
								_x,
								_r,
								_arr = [],
								_n = !0,
								_d = !1
							try {
								if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
									if (Object(_i) !== _i) return
									_n = !1
								} else
									for (
										;
										!(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
										_n = !0
									);
							} catch (err) {
								;(_d = !0), (_e = err)
							} finally {
								try {
									if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return
								} finally {
									if (_d) throw _e
								}
							}
							return _arr
						}
					})(arr, i) ||
					(function _unsupportedIterableToArray(o, minLen) {
						if (!o) return
						if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
						var n = Object.prototype.toString.call(o).slice(8, -1)
						'Object' === n && o.constructor && (n = o.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(o)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
							return _arrayLikeToArray(o, minLen)
					})(arr, i) ||
					(function _nonIterableRest() {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					})()
				)
			}
			function _arrayLikeToArray(arr, len) {
				;(null == len || len > arr.length) && (len = arr.length)
				for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
				return arr2
			}
			function ResetPassword(_ref) {
				var _ref$errorInit = _ref.errorInit,
					errorInit = void 0 === _ref$errorInit ? '' : _ref$errorInit,
					_ref$passwordInit = _ref.passwordInit,
					passwordInit = void 0 === _ref$passwordInit ? '' : _ref$passwordInit,
					_ref$confirmPasswordI = _ref.confirmPasswordInit,
					confirmPasswordInit = void 0 === _ref$confirmPasswordI ? '' : _ref$confirmPasswordI,
					_ref$loadingInit = _ref.loadingInit,
					loadingInit = void 0 !== _ref$loadingInit && _ref$loadingInit,
					_ref$emailInit = _ref.emailInit,
					emailInit = void 0 === _ref$emailInit ? '' : _ref$emailInit,
					router = (0, next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)(),
					enqueueSnackbar = (0, notistack__WEBPACK_IMPORTED_MODULE_13__.Ds)().enqueueSnackbar,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(passwordInit),
						2,
					),
					password = _useState2[0],
					setPassword = _useState2[1],
					_useState4 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(confirmPasswordInit),
						2,
					),
					confirmPassword = _useState4[0],
					setConfirmPassword = _useState4[1],
					_useState6 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(emailInit),
						2,
					),
					email = _useState6[0],
					setEmail = _useState6[1],
					_useState8 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(errorInit),
						2,
					),
					error = _useState8[0],
					setError = _useState8[1],
					_useState10 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(loadingInit),
						2,
					),
					loading = _useState10[0],
					setLoading = _useState10[1]
				return (
					(0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(
						function () {
							router.query.token &&
								fetch('/api/auth/verify-token', {
									method: 'POST',
									headers: { 'Content-Type': 'application/json' },
									body: JSON.stringify({ token: router.query.token }),
								})
									.then(function (res) {
										return res.json()
									})
									.then(function (data) {
										data.error ? setError(data.error) : setEmail(data.email)
									})
						},
						[router.query],
					),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(
						_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
						{
							name: 'reset password',
							loading,
							error,
							small: !0,
							children: [
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
									_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_16__.Z,
									{
										name: 'reset-password',
										password,
										setPassword,
										confirmPassword,
										setConfirmPassword,
										disabled: loading,
									},
								),
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
									_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_18__.Z,
									{
										name: 'reset-password',
										children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
											_components_SubmitButton__WEBPACK_IMPORTED_MODULE_17__.Z,
											{
												name: 'reset-password',
												handleSubmit: function handleResetPassword() {
													if ('' !== password && '' !== confirmPassword)
														if (password === confirmPassword) {
															setLoading(!0)
															try {
																fetch('/api/auth/reset-password', {
																	method: 'POST',
																	headers: { 'Content-Type': 'application/json' },
																	body: JSON.stringify({ password, email }),
																})
																	.then(function (res) {
																		return res.json()
																	})
																	.then(function (data) {
																		data.error
																			? (enqueueSnackbar(data.error, {
																					variant: 'error',
																					autoHideDuration: 3e3,
																			  }),
																			  setLoading(!1))
																			: (enqueueSnackbar(data.message, {
																					variant: 'success',
																					autoHideDuration: 2e3,
																			  }),
																			  setLoading(!1),
																			  router.push('/login'))
																	})
															} catch (error) {
																enqueueSnackbar(error.message, {
																	variant: 'error',
																	autoHideDuration: 3e3,
																}),
																	setLoading(!1)
															}
														} else
															enqueueSnackbar('Passwords do not match', {
																variant: 'error',
																autoHideDuration: 3e3,
															})
													else
														enqueueSnackbar('Please enter your password', {
															variant: 'error',
															autoHideDuration: 3e3,
														})
												},
												loading,
												label: 'reset',
											},
										),
									},
								),
							],
						},
					)
				)
			}
			ResetPassword.displayName = 'ResetPassword'
			try {
				;(token.displayName = 'token'),
					(token.__docgenInfo = {
						description: '',
						displayName: 'token',
						props: {
							errorInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'errorInit',
								required: !1,
								type: { name: 'string' },
							},
							passwordInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'passwordInit',
								required: !1,
								type: { name: 'string' },
							},
							confirmPasswordInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'confirmPasswordInit',
								required: !1,
								type: { name: 'string' },
							},
							loadingInit: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'loadingInit',
								required: !1,
								type: { name: 'boolean' },
							},
							emailInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'emailInit',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['pages/reset-password/[...token].tsx#token'] = {
							docgenInfo: token.__docgenInfo,
							name: 'token',
							path: 'pages/reset-password/[...token].tsx#token',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./pages/signup.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => Signup })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.from.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.define-property.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.async-iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.math.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.json.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.create.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.get-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.set-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.reverse.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.5_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_25__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_SubmitButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
					'./components/SubmitButton.tsx',
				),
				_components_EmailInput__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
					'./components/EmailInput.tsx',
				),
				_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
					'./components/ConfirmPasswordInput.tsx',
				),
				_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
					'./components/ActionButtonsContainer.tsx',
				),
				_components_ModalNote__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
					'./components/ModalNote.tsx',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function _regeneratorRuntime() {
				_regeneratorRuntime = function _regeneratorRuntime() {
					return exports
				}
				var exports = {},
					Op = Object.prototype,
					hasOwn = Op.hasOwnProperty,
					defineProperty =
						Object.defineProperty ||
						function (obj, key, desc) {
							obj[key] = desc.value
						},
					$Symbol = 'function' == typeof Symbol ? Symbol : {},
					iteratorSymbol = $Symbol.iterator || '@@iterator',
					asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
					toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'
				function define(obj, key, value) {
					return (
						Object.defineProperty(obj, key, {
							value,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						}),
						obj[key]
					)
				}
				try {
					define({}, '')
				} catch (err) {
					define = function define(obj, key, value) {
						return (obj[key] = value)
					}
				}
				function wrap(innerFn, outerFn, self, tryLocsList) {
					var protoGenerator =
							outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
						generator = Object.create(protoGenerator.prototype),
						context = new Context(tryLocsList || [])
					return (
						defineProperty(generator, '_invoke', {
							value: makeInvokeMethod(innerFn, self, context),
						}),
						generator
					)
				}
				function tryCatch(fn, obj, arg) {
					try {
						return { type: 'normal', arg: fn.call(obj, arg) }
					} catch (err) {
						return { type: 'throw', arg: err }
					}
				}
				exports.wrap = wrap
				var ContinueSentinel = {}
				function Generator() {}
				function GeneratorFunction() {}
				function GeneratorFunctionPrototype() {}
				var IteratorPrototype = {}
				define(IteratorPrototype, iteratorSymbol, function () {
					return this
				})
				var getProto = Object.getPrototypeOf,
					NativeIteratorPrototype = getProto && getProto(getProto(values([])))
				NativeIteratorPrototype &&
					NativeIteratorPrototype !== Op &&
					hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
					(IteratorPrototype = NativeIteratorPrototype)
				var Gp =
					(GeneratorFunctionPrototype.prototype =
					Generator.prototype =
						Object.create(IteratorPrototype))
				function defineIteratorMethods(prototype) {
					;['next', 'throw', 'return'].forEach(function (method) {
						define(prototype, method, function (arg) {
							return this._invoke(method, arg)
						})
					})
				}
				function AsyncIterator(generator, PromiseImpl) {
					function invoke(method, arg, resolve, reject) {
						var record = tryCatch(generator[method], generator, arg)
						if ('throw' !== record.type) {
							var result = record.arg,
								value = result.value
							return value && 'object' == typeof value && hasOwn.call(value, '__await')
								? PromiseImpl.resolve(value.__await).then(
										function (value) {
											invoke('next', value, resolve, reject)
										},
										function (err) {
											invoke('throw', err, resolve, reject)
										},
								  )
								: PromiseImpl.resolve(value).then(
										function (unwrapped) {
											;(result.value = unwrapped), resolve(result)
										},
										function (error) {
											return invoke('throw', error, resolve, reject)
										},
								  )
						}
						reject(record.arg)
					}
					var previousPromise
					defineProperty(this, '_invoke', {
						value: function value(method, arg) {
							function callInvokeWithMethodAndArg() {
								return new PromiseImpl(function (resolve, reject) {
									invoke(method, arg, resolve, reject)
								})
							}
							return (previousPromise = previousPromise
								? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
								: callInvokeWithMethodAndArg())
						},
					})
				}
				function makeInvokeMethod(innerFn, self, context) {
					var state = 'suspendedStart'
					return function (method, arg) {
						if ('executing' === state) throw new Error('Generator is already running')
						if ('completed' === state) {
							if ('throw' === method) throw arg
							return doneResult()
						}
						for (context.method = method, context.arg = arg; ; ) {
							var delegate = context.delegate
							if (delegate) {
								var delegateResult = maybeInvokeDelegate(delegate, context)
								if (delegateResult) {
									if (delegateResult === ContinueSentinel) continue
									return delegateResult
								}
							}
							if ('next' === context.method) context.sent = context._sent = context.arg
							else if ('throw' === context.method) {
								if ('suspendedStart' === state) throw ((state = 'completed'), context.arg)
								context.dispatchException(context.arg)
							} else 'return' === context.method && context.abrupt('return', context.arg)
							state = 'executing'
							var record = tryCatch(innerFn, self, context)
							if ('normal' === record.type) {
								if (
									((state = context.done ? 'completed' : 'suspendedYield'),
									record.arg === ContinueSentinel)
								)
									continue
								return { value: record.arg, done: context.done }
							}
							'throw' === record.type &&
								((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg))
						}
					}
				}
				function maybeInvokeDelegate(delegate, context) {
					var methodName = context.method,
						method = delegate.iterator[methodName]
					if (void 0 === method)
						return (
							(context.delegate = null),
							('throw' === methodName &&
								delegate.iterator.return &&
								((context.method = 'return'),
								(context.arg = void 0),
								maybeInvokeDelegate(delegate, context),
								'throw' === context.method)) ||
								('return' !== methodName &&
									((context.method = 'throw'),
									(context.arg = new TypeError(
										"The iterator does not provide a '" + methodName + "' method",
									)))),
							ContinueSentinel
						)
					var record = tryCatch(method, delegate.iterator, context.arg)
					if ('throw' === record.type)
						return (
							(context.method = 'throw'),
							(context.arg = record.arg),
							(context.delegate = null),
							ContinueSentinel
						)
					var info = record.arg
					return info
						? info.done
							? ((context[delegate.resultName] = info.value),
							  (context.next = delegate.nextLoc),
							  'return' !== context.method && ((context.method = 'next'), (context.arg = void 0)),
							  (context.delegate = null),
							  ContinueSentinel)
							: info
						: ((context.method = 'throw'),
						  (context.arg = new TypeError('iterator result is not an object')),
						  (context.delegate = null),
						  ContinueSentinel)
				}
				function pushTryEntry(locs) {
					var entry = { tryLoc: locs[0] }
					1 in locs && (entry.catchLoc = locs[1]),
						2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
						this.tryEntries.push(entry)
				}
				function resetTryEntry(entry) {
					var record = entry.completion || {}
					;(record.type = 'normal'), delete record.arg, (entry.completion = record)
				}
				function Context(tryLocsList) {
					;(this.tryEntries = [{ tryLoc: 'root' }]),
						tryLocsList.forEach(pushTryEntry, this),
						this.reset(!0)
				}
				function values(iterable) {
					if (iterable) {
						var iteratorMethod = iterable[iteratorSymbol]
						if (iteratorMethod) return iteratorMethod.call(iterable)
						if ('function' == typeof iterable.next) return iterable
						if (!isNaN(iterable.length)) {
							var i = -1,
								next = function next() {
									for (; ++i < iterable.length; )
										if (hasOwn.call(iterable, i))
											return (next.value = iterable[i]), (next.done = !1), next
									return (next.value = void 0), (next.done = !0), next
								}
							return (next.next = next)
						}
					}
					return { next: doneResult }
				}
				function doneResult() {
					return { value: void 0, done: !0 }
				}
				return (
					(GeneratorFunction.prototype = GeneratorFunctionPrototype),
					defineProperty(Gp, 'constructor', {
						value: GeneratorFunctionPrototype,
						configurable: !0,
					}),
					defineProperty(GeneratorFunctionPrototype, 'constructor', {
						value: GeneratorFunction,
						configurable: !0,
					}),
					(GeneratorFunction.displayName = define(
						GeneratorFunctionPrototype,
						toStringTagSymbol,
						'GeneratorFunction',
					)),
					(exports.isGeneratorFunction = function (genFun) {
						var ctor = 'function' == typeof genFun && genFun.constructor
						return (
							!!ctor &&
							(ctor === GeneratorFunction ||
								'GeneratorFunction' === (ctor.displayName || ctor.name))
						)
					}),
					(exports.mark = function (genFun) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
								: ((genFun.__proto__ = GeneratorFunctionPrototype),
								  define(genFun, toStringTagSymbol, 'GeneratorFunction')),
							(genFun.prototype = Object.create(Gp)),
							genFun
						)
					}),
					(exports.awrap = function (arg) {
						return { __await: arg }
					}),
					defineIteratorMethods(AsyncIterator.prototype),
					define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
						return this
					}),
					(exports.AsyncIterator = AsyncIterator),
					(exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
						void 0 === PromiseImpl && (PromiseImpl = Promise)
						var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl)
						return exports.isGeneratorFunction(outerFn)
							? iter
							: iter.next().then(function (result) {
									return result.done ? result.value : iter.next()
							  })
					}),
					defineIteratorMethods(Gp),
					define(Gp, toStringTagSymbol, 'Generator'),
					define(Gp, iteratorSymbol, function () {
						return this
					}),
					define(Gp, 'toString', function () {
						return '[object Generator]'
					}),
					(exports.keys = function (val) {
						var object = Object(val),
							keys = []
						for (var key in object) keys.push(key)
						return (
							keys.reverse(),
							function next() {
								for (; keys.length; ) {
									var key = keys.pop()
									if (key in object) return (next.value = key), (next.done = !1), next
								}
								return (next.done = !0), next
							}
						)
					}),
					(exports.values = values),
					(Context.prototype = {
						constructor: Context,
						reset: function reset(skipTempReset) {
							if (
								((this.prev = 0),
								(this.next = 0),
								(this.sent = this._sent = void 0),
								(this.done = !1),
								(this.delegate = null),
								(this.method = 'next'),
								(this.arg = void 0),
								this.tryEntries.forEach(resetTryEntry),
								!skipTempReset)
							)
								for (var name in this)
									't' === name.charAt(0) &&
										hasOwn.call(this, name) &&
										!isNaN(+name.slice(1)) &&
										(this[name] = void 0)
						},
						stop: function stop() {
							this.done = !0
							var rootRecord = this.tryEntries[0].completion
							if ('throw' === rootRecord.type) throw rootRecord.arg
							return this.rval
						},
						dispatchException: function dispatchException(exception) {
							if (this.done) throw exception
							var context = this
							function handle(loc, caught) {
								return (
									(record.type = 'throw'),
									(record.arg = exception),
									(context.next = loc),
									caught && ((context.method = 'next'), (context.arg = void 0)),
									!!caught
								)
							}
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i],
									record = entry.completion
								if ('root' === entry.tryLoc) return handle('end')
								if (entry.tryLoc <= this.prev) {
									var hasCatch = hasOwn.call(entry, 'catchLoc'),
										hasFinally = hasOwn.call(entry, 'finallyLoc')
									if (hasCatch && hasFinally) {
										if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0)
										if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
									} else if (hasCatch) {
										if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0)
									} else {
										if (!hasFinally) throw new Error('try statement without catch or finally')
										if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc)
									}
								}
							}
						},
						abrupt: function abrupt(type, arg) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i]
								if (
									entry.tryLoc <= this.prev &&
									hasOwn.call(entry, 'finallyLoc') &&
									this.prev < entry.finallyLoc
								) {
									var finallyEntry = entry
									break
								}
							}
							finallyEntry &&
								('break' === type || 'continue' === type) &&
								finallyEntry.tryLoc <= arg &&
								arg <= finallyEntry.finallyLoc &&
								(finallyEntry = null)
							var record = finallyEntry ? finallyEntry.completion : {}
							return (
								(record.type = type),
								(record.arg = arg),
								finallyEntry
									? ((this.method = 'next'),
									  (this.next = finallyEntry.finallyLoc),
									  ContinueSentinel)
									: this.complete(record)
							)
						},
						complete: function complete(record, afterLoc) {
							if ('throw' === record.type) throw record.arg
							return (
								'break' === record.type || 'continue' === record.type
									? (this.next = record.arg)
									: 'return' === record.type
									? ((this.rval = this.arg = record.arg),
									  (this.method = 'return'),
									  (this.next = 'end'))
									: 'normal' === record.type && afterLoc && (this.next = afterLoc),
								ContinueSentinel
							)
						},
						finish: function finish(finallyLoc) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i]
								if (entry.finallyLoc === finallyLoc)
									return (
										this.complete(entry.completion, entry.afterLoc),
										resetTryEntry(entry),
										ContinueSentinel
									)
							}
						},
						catch: function _catch(tryLoc) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i]
								if (entry.tryLoc === tryLoc) {
									var record = entry.completion
									if ('throw' === record.type) {
										var thrown = record.arg
										resetTryEntry(entry)
									}
									return thrown
								}
							}
							throw new Error('illegal catch attempt')
						},
						delegateYield: function delegateYield(iterable, resultName, nextLoc) {
							return (
								(this.delegate = { iterator: values(iterable), resultName, nextLoc }),
								'next' === this.method && (this.arg = void 0),
								ContinueSentinel
							)
						},
					}),
					exports
				)
			}
			function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
				try {
					var info = gen[key](arg),
						value = info.value
				} catch (error) {
					return void reject(error)
				}
				info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
			}
			function _slicedToArray(arr, i) {
				return (
					(function _arrayWithHoles(arr) {
						if (Array.isArray(arr)) return arr
					})(arr) ||
					(function _iterableToArrayLimit(arr, i) {
						var _i =
							null == arr
								? null
								: ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
						if (null != _i) {
							var _s,
								_e,
								_x,
								_r,
								_arr = [],
								_n = !0,
								_d = !1
							try {
								if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
									if (Object(_i) !== _i) return
									_n = !1
								} else
									for (
										;
										!(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
										_n = !0
									);
							} catch (err) {
								;(_d = !0), (_e = err)
							} finally {
								try {
									if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return
								} finally {
									if (_d) throw _e
								}
							}
							return _arr
						}
					})(arr, i) ||
					(function _unsupportedIterableToArray(o, minLen) {
						if (!o) return
						if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
						var n = Object.prototype.toString.call(o).slice(8, -1)
						'Object' === n && o.constructor && (n = o.constructor.name)
						if ('Map' === n || 'Set' === n) return Array.from(o)
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
							return _arrayLikeToArray(o, minLen)
					})(arr, i) ||
					(function _nonIterableRest() {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
						)
					})()
				)
			}
			function _arrayLikeToArray(arr, len) {
				;(null == len || len > arr.length) && (len = arr.length)
				for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
				return arr2
			}
			function Signup(_ref) {
				var _ref$errorInit = _ref.errorInit,
					errorInit = void 0 === _ref$errorInit ? '' : _ref$errorInit,
					_ref$emailInit = _ref.emailInit,
					emailInit = void 0 === _ref$emailInit ? '' : _ref$emailInit,
					_ref$passwordInit = _ref.passwordInit,
					passwordInit = void 0 === _ref$passwordInit ? '' : _ref$passwordInit,
					_ref$confirmPasswordI = _ref.confirmPasswordInit,
					confirmPasswordInit = void 0 === _ref$confirmPasswordI ? '' : _ref$confirmPasswordI,
					_ref$loadingInit = _ref.loadingInit,
					loadingInit = void 0 !== _ref$loadingInit && _ref$loadingInit,
					router = (0, next_router__WEBPACK_IMPORTED_MODULE_24__.useRouter)(),
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(emailInit),
						2,
					),
					email = _useState2[0],
					setEmail = _useState2[1],
					_useState4 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(passwordInit),
						2,
					),
					password = _useState4[0],
					setPassword = _useState4[1],
					_useState6 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(confirmPasswordInit),
						2,
					),
					confirmPassword = _useState6[0],
					setConfirmPassword = _useState6[1],
					_useState8 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(loadingInit),
						2,
					),
					loading = _useState8[0],
					setLoading = _useState8[1],
					_useState10 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_23__.useState)(errorInit),
						2,
					),
					error = _useState10[0],
					setError = _useState10[1],
					handleSignup = (function () {
						var _ref2 = (function _asyncToGenerator(fn) {
							return function () {
								var self = this,
									args = arguments
								return new Promise(function (resolve, reject) {
									var gen = fn.apply(self, args)
									function _next(value) {
										asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
									}
									function _throw(err) {
										asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
									}
									_next(void 0)
								})
							}
						})(
							_regeneratorRuntime().mark(function _callee() {
								var res, data
								return _regeneratorRuntime().wrap(
									function _callee$(_context) {
										for (;;)
											switch ((_context.prev = _context.next)) {
												case 0:
													return (
														setLoading(!0),
														(_context.prev = 1),
														(_context.next = 4),
														fetch('/api/auth/signup', {
															method: 'POST',
															headers: { 'Content-Type': 'application/json' },
															body: JSON.stringify({ email, password, confirmPassword }),
														})
													)
												case 4:
													return (res = _context.sent), (_context.next = 7), res.json()
												case 7:
													;(data = _context.sent),
														console.log('data', data),
														data.error
															? setError(data.error)
															: (localStorage.setItem('token', data.token), router.push('/')),
														setLoading(!1),
														(_context.next = 17)
													break
												case 13:
													;(_context.prev = 13),
														(_context.t0 = _context.catch(1)),
														setError(_context.t0.message),
														setLoading(!1)
												case 17:
												case 'end':
													return _context.stop()
											}
									},
									_callee,
									null,
									[[1, 13]],
								)
							}),
						)
						return function handleSignup() {
							return _ref2.apply(this, arguments)
						}
					})()
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(
					_components_Modal__WEBPACK_IMPORTED_MODULE_25__.Z,
					{
						name: 'signup',
						loading,
						error,
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(
								_components_EmailInput__WEBPACK_IMPORTED_MODULE_27__.Z,
								{ name: 'signup', value: email, setValue: setEmail, disabled: loading },
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(
								_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_28__.Z,
								{
									name: 'signup',
									password,
									setPassword,
									confirmPassword,
									setConfirmPassword,
									disabled: loading,
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(
								_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_29__.Z,
								{
									name: 'signup',
									children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(
										_components_SubmitButton__WEBPACK_IMPORTED_MODULE_26__.Z,
										{
											name: 'signup',
											label: 'Sign Up',
											loading,
											handleSubmit: handleSignup,
											width: '100%',
										},
									),
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(
								_components_ModalNote__WEBPACK_IMPORTED_MODULE_30__.Z,
								{ name: 'signup-login', label: 'Already have an account? Log in', href: '/login' },
							),
						],
					},
				)
			}
			Signup.displayName = 'Signup'
			try {
				;(signup.displayName = 'signup'),
					(signup.__docgenInfo = {
						description: '',
						displayName: 'signup',
						props: {
							errorInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'errorInit',
								required: !1,
								type: { name: 'string' },
							},
							emailInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'emailInit',
								required: !1,
								type: { name: 'string' },
							},
							passwordInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'passwordInit',
								required: !1,
								type: { name: 'string' },
							},
							confirmPasswordInit: {
								defaultValue: { value: '' },
								description: '',
								name: 'confirmPasswordInit',
								required: !1,
								type: { name: 'string' },
							},
							loadingInit: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'loadingInit',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['pages/signup.tsx#signup'] = {
							docgenInfo: signup.__docgenInfo,
							name: 'signup',
							path: 'pages/signup.tsx#signup',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./store/index.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { w: () => useBoundStore })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.concat.js',
				)
			var esm = __webpack_require__(
					'./node_modules/.pnpm/zustand@4.1.4_react@18.2.0/node_modules/zustand/esm/index.mjs',
				),
				createUserSlice = function createUserSlice(set) {
					return {
						user: { id: '', email: '', name: '', role: '' },
						setUser: function setUser(user) {
							return set({ user })
						},
						logout: function logout() {
							return set({ user: null })
						},
					}
				},
				createSettingsSlice = function createSettingsSlice(set) {
					return {
						settings: { darkMode: !1 },
						setSettings: function setSettings(settings) {
							return set({ settings })
						},
					}
				},
				useBoundStore = (0, esm.ZP)()(function (set, get) {
					for (
						var _len = arguments.length, a = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
						_key < _len;
						_key++
					)
						a[_key - 2] = arguments[_key]
					return Object.assign(
						{},
						createUserSlice.apply(void 0, [set, get].concat(a)),
						createSettingsSlice.apply(void 0, [set, get].concat(a)),
					)
				})
		},
		'./stories/Introduction.stories.mdx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					__namedExportsOrder: () => __namedExportsOrder,
					__page: () => __page,
					default: () => Introduction_stories,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.keys.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.index-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
				),
				__webpack_require__('./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js')
			var esm = __webpack_require__(
					'./node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js',
				),
				dist_esm = __webpack_require__(
					'./node_modules/.pnpm/@storybook+addon-docs@6.5.14_cbvstj52lzlbrybtccmvpwo5cm/node_modules/@storybook/addon-docs/dist/esm/index.js',
				)
			const code_brackets_namespaceObject =
					__webpack_require__.p + 'static/media/code-brackets.2e1112d7.svg',
				colors_namespaceObject = __webpack_require__.p + 'static/media/colors.a4bd0486.svg',
				comments_namespaceObject = __webpack_require__.p + 'static/media/comments.a3859089.svg',
				direction_namespaceObject = __webpack_require__.p + 'static/media/direction.b770f9af.svg',
				flow_namespaceObject = __webpack_require__.p + 'static/media/flow.edad2ac1.svg',
				plugin_namespaceObject = __webpack_require__.p + 'static/media/plugin.d494b228.svg',
				repo_namespaceObject = __webpack_require__.p + 'static/media/repo.6d496322.svg',
				stackalt_namespaceObject = __webpack_require__.p + 'static/media/stackalt.dba9fbb3.svg'
			var _excluded = ['components']
			function _extends() {
				return (
					(_extends = Object.assign
						? Object.assign.bind()
						: function (target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = arguments[i]
									for (var key in source)
										Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
								}
								return target
						  }),
					_extends.apply(this, arguments)
				)
			}
			function _objectWithoutProperties(source, excluded) {
				if (null == source) return {}
				var key,
					i,
					target = (function _objectWithoutPropertiesLoose(source, excluded) {
						if (null == source) return {}
						var key,
							i,
							target = {},
							sourceKeys = Object.keys(source)
						for (i = 0; i < sourceKeys.length; i++)
							(key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
						return target
					})(source, excluded)
				if (Object.getOwnPropertySymbols) {
					var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
					for (i = 0; i < sourceSymbolKeys.length; i++)
						(key = sourceSymbolKeys[i]),
							excluded.indexOf(key) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(source, key) &&
									(target[key] = source[key]))
				}
				return target
			}
			var layoutProps = {}
			function MDXContent(_ref) {
				var components = _ref.components,
					props = _objectWithoutProperties(_ref, _excluded)
				return (0, esm.kt)(
					'wrapper',
					_extends({}, layoutProps, props, { components, mdxType: 'MDXLayout' }),
					(0, esm.kt)(dist_esm.h_, { title: 'Example/Introduction', mdxType: 'Meta' }),
					(0, esm.kt)(
						'style',
						null,
						"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  ",
					),
					(0, esm.kt)('h1', { id: 'welcome-to-storybook' }, 'Welcome to Storybook'),
					(0, esm.kt)(
						'p',
						null,
						"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
						(0, esm.kt)('strong', { parentName: 'p' }, 'stories'),
						' to revisit during development, testing, or QA.',
					),
					(0, esm.kt)(
						'p',
						null,
						'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
						(0, esm.kt)('inlineCode', { parentName: 'p' }, 'stories'),
						' directory to learn how they work.\nWe recommend building UIs with a ',
						(0, esm.kt)(
							'a',
							{
								parentName: 'p',
								href: 'https://componentdriven.org',
								target: '_blank',
								rel: 'nofollow noopener noreferrer',
							},
							(0, esm.kt)('strong', { parentName: 'a' }, 'component-driven'),
						),
						' process starting with atomic components and ending with pages.',
					),
					(0, esm.kt)('div', { className: 'subheading' }, 'Configure'),
					(0, esm.kt)(
						'div',
						{ className: 'link-list' },
						(0, esm.kt)(
							'a',
							{
								className: 'link-item',
								href: 'https://storybook.js.org/docs/react/addons/addon-types',
								target: '_blank',
							},
							(0, esm.kt)('img', { src: plugin_namespaceObject, alt: 'plugin' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'Presets for popular tools'),
								'Easy setup for TypeScript, SCSS and more.',
							),
						),
						(0, esm.kt)(
							'a',
							{
								className: 'link-item',
								href: 'https://storybook.js.org/docs/react/configure/webpack',
								target: '_blank',
							},
							(0, esm.kt)('img', { src: stackalt_namespaceObject, alt: 'Build' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'Build configuration'),
								'How to customize webpack and Babel',
							),
						),
						(0, esm.kt)(
							'a',
							{
								className: 'link-item',
								href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
								target: '_blank',
							},
							(0, esm.kt)('img', { src: colors_namespaceObject, alt: 'colors' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'Styling'),
								'How to load and configure CSS libraries',
							),
						),
						(0, esm.kt)(
							'a',
							{
								className: 'link-item',
								href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
								target: '_blank',
							},
							(0, esm.kt)('img', { src: flow_namespaceObject, alt: 'flow' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'Data'),
								'Providers and mocking for data libraries',
							),
						),
					),
					(0, esm.kt)('div', { className: 'subheading' }, 'Learn'),
					(0, esm.kt)(
						'div',
						{ className: 'link-list' },
						(0, esm.kt)(
							'a',
							{ className: 'link-item', href: 'https://storybook.js.org/docs', target: '_blank' },
							(0, esm.kt)('img', { src: repo_namespaceObject, alt: 'repo' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'Storybook documentation'),
								'Configure, customize, and extend',
							),
						),
						(0, esm.kt)(
							'a',
							{
								className: 'link-item',
								href: 'https://storybook.js.org/tutorials/',
								target: '_blank',
							},
							(0, esm.kt)('img', { src: direction_namespaceObject, alt: 'direction' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'In-depth guides'),
								'Best practices from leading teams',
							),
						),
						(0, esm.kt)(
							'a',
							{
								className: 'link-item',
								href: 'https://github.com/storybookjs/storybook',
								target: '_blank',
							},
							(0, esm.kt)('img', { src: code_brackets_namespaceObject, alt: 'code' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'GitHub project'),
								'View the source and add issues',
							),
						),
						(0, esm.kt)(
							'a',
							{ className: 'link-item', href: 'https://discord.gg/storybook', target: '_blank' },
							(0, esm.kt)('img', { src: comments_namespaceObject, alt: 'comments' }),
							(0, esm.kt)(
								'span',
								null,
								(0, esm.kt)('strong', null, 'Discord chat'),
								'Chat with maintainers and the community',
							),
						),
					),
					(0, esm.kt)(
						'div',
						{ className: 'tip-wrapper' },
						(0, esm.kt)('span', { className: 'tip' }, 'Tip'),
						'Edit the Markdown in',
						' ',
						(0, esm.kt)('code', null, 'stories/Introduction.stories.mdx'),
					),
				)
			}
			;(MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0)
			var __page = function __page() {
				throw new Error('Docs-only story')
			}
			__page.parameters = { docsOnly: !0 }
			var componentMeta = { title: 'Example/Introduction', includeStories: ['__page'] },
				mdxStoryNameToKey = {}
			;(componentMeta.parameters = componentMeta.parameters || {}),
				(componentMeta.parameters.docs = Object.assign({}, componentMeta.parameters.docs || {}, {
					page: function page() {
						return (0, esm.kt)(
							dist_esm.aT,
							{ mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
							(0, esm.kt)(MDXContent, null),
						)
					},
				}))
			const Introduction_stories = componentMeta
			var __namedExportsOrder = ['__page']
		},
		'./node_modules/.pnpm/css-loader@5.2.7_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./styles/globals.css':
			(module, __webpack_exports__, __webpack_require__) => {
				'use strict'
				__webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
				var _node_modules_pnpm_css_loader_5_2_7_webpack_5_74_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
						__webpack_require__(
							'./node_modules/.pnpm/css-loader@5.2.7_webpack@5.74.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js',
						),
					_node_modules_pnpm_css_loader_5_2_7_webpack_5_74_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
						__webpack_require__.n(
							_node_modules_pnpm_css_loader_5_2_7_webpack_5_74_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__,
						),
					_node_modules_pnpm_css_loader_5_2_7_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
						__webpack_require__(
							'./node_modules/.pnpm/css-loader@5.2.7_webpack@5.74.0/node_modules/css-loader/dist/runtime/api.js',
						),
					___CSS_LOADER_EXPORT___ = __webpack_require__.n(
						_node_modules_pnpm_css_loader_5_2_7_webpack_5_74_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
					)()(
						_node_modules_pnpm_css_loader_5_2_7_webpack_5_74_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default(),
					)
				___CSS_LOADER_EXPORT___.push([
					module.id,
					'html,\nbody {\n\tpadding: 0;\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,\n\t\tFira Sans, Droid Sans, Helvetica Neue, sans-serif;\n\tfont-size: 14px;\n\tline-height: 1.5;\n\tcolor: #333;\n\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\n\tbackground-color: #f5f5f5;\n\n\t/* Prevent adjustments of font size after orientation changes in iOS */\n\t-webkit-text-size-adjust: 100%;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n\twidth: 100%;\n\theight: 100%;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\n@media (prefers-color-scheme: dark) {\n\thtml {\n\t\tcolor-scheme: dark;\n\t}\n\tbody {\n\t\tcolor: #556cd6;\n\t\tbackground: #556cd6;\n\t}\n}\n\n@media (prefers-color-scheme: light) {\n\thtml {\n\t\tcolor-scheme: light;\n\t}\n\tbody {\n\t\tcolor: #333;\n\t\tbackground: #f5f5f5;\n\t}\n}\n\n#__next {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100vh;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n\t* {\n\t\tanimation-duration: 0.01ms !important;\n\t\tanimation-iteration-count: 1 !important;\n\t\ttransition-duration: 0.01ms !important;\n\t\tscroll-behavior: auto !important;\n\t}\n}\n\na {\n\tcolor: inherit;\n\ttext-decoration: none;\n\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n\t-webkit-transition: color 0.2s ease-in-out;\n}\n\na:hover {\n\tcolor: #1e87f0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tmargin: 0;\n}\n\np {\n\tmargin: 0;\n}\n\nul {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\nimg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\n/* Layout */\n\n.wrapper {\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 0 20px;\n}\n\n/* Header */\n\n.header {\n\tpadding: 20px 0;\n}\n\n.header__logo {\n\tdisplay: block;\n}\n\n.header__logo img {\n\twidth: 100px;\n}\n\n/* Main */\n\n.main {\n\tpadding: 20px 0;\n}\n\n/* Footer */\n\n.footer {\n\tpadding: 20px 0;\n}\n\n.footer__text {\n\ttext-align: center;\n}\n\n/* Media Queries */\n\n@media (min-width: 768px) {\n\t.header {\n\t\tpadding: 20px 0;\n\t}\n\n\t.header__logo {\n\t\tdisplay: inline-block;\n\t}\n\n\t.header__logo img {\n\t\twidth: 150px;\n\t}\n\n\t.main {\n\t\tpadding: 20px 0;\n\t}\n\n\t.footer {\n\t\tpadding: 20px 0;\n\t}\n}\n\n@media (min-width: 1024px) {\n\t.header {\n\t\tpadding: 20px 0;\n\t}\n\n\t.header__logo {\n\t\tdisplay: inline-block;\n\t}\n\n\t.header__logo img {\n\t\twidth: 200px;\n\t}\n\n\t.main {\n\t\tpadding: 20px 0;\n\t}\n\n\t.footer {\n\t\tpadding: 20px 0;\n\t}\n}\n\n@media (min-width: 1200px) {\n\t.header {\n\t\tpadding: 20px 0;\n\t}\n\n\t.header__logo {\n\t\tdisplay: inline-block;\n\t}\n\n\t.header__logo img {\n\t\twidth: 250px;\n\t}\n\n\t.main {\n\t\tpadding: 20px 0;\n\t}\n\n\t.footer {\n\t\tpadding: 20px 0;\n\t}\n}\n\n/* Utilities */\n\n.u-center-text {\n\ttext-align: center;\n}\n\n.u-margin-bottom-small {\n\tmargin-bottom: 10px;\n}\n\n.u-margin-bottom-medium {\n\tmargin-bottom: 20px;\n}\n\n.u-margin-bottom-large {\n\tmargin-bottom: 30px;\n}\n\n.u-margin-bottom-huge {\n\tmargin-bottom: 40px;\n}\n\n.u-margin-top-small {\n\tmargin-top: 10px;\n}\n\n.u-margin-top-medium {\n\tmargin-top: 20px;\n}\n\n.u-margin-top-large {\n\tmargin-top: 30px;\n}\n\n.u-margin-top-huge {\n\tmargin-top: 40px;\n}\n\n.u-margin-left-small {\n\tmargin-left: 10px;\n}\n\n.u-margin-left-medium {\n\tmargin-left: 20px;\n}\n\n.u-margin-left-large {\n\tmargin-left: 30px;\n}\n\n.u-margin-left-huge {\n\tmargin-left: 40px;\n}\n\n.u-margin-right-small {\n\tmargin-right: 10px;\n}\n\n.u-margin-right-medium {\n\tmargin-right: 20px;\n}\n\n.u-margin-right-large {\n\tmargin-right: 30px;\n}\n\n.u-margin-right-huge {\n\tmargin-right: 40px;\n}\n\n.u-margin-small {\n\tmargin: 10px;\n}\n\n.u-margin-medium {\n\tmargin: 20px;\n}\n\n.u-margin-large {\n\tmargin: 30px;\n}\n\n.u-margin-huge {\n\tmargin: 40px;\n}\n\n.u-padding-small {\n\tpadding: 10px;\n}\n\n.u-padding-medium {\n\tpadding: 20px;\n}\n\n.u-padding-large {\n\tpadding: 30px;\n}\n\n.u-padding-huge {\n\tpadding: 40px;\n}\n\n.u-padding-left-small {\n\tpadding-left: 10px;\n}\n\n.u-padding-left-medium {\n\tpadding-left: 20px;\n}\n\n.u-padding-left-large {\n\tpadding-left: 30px;\n}\n\n.u-padding-left-huge {\n\tpadding-left: 40px;\n}\n\n.u-padding-right-small {\n\tpadding-right: 10px;\n}\n\n.u-padding-right-medium {\n\tpadding-right: 20px;\n}\n\n.u-padding-right-large {\n\tpadding-right: 30px;\n}\n\n.u-padding-right-huge {\n\tpadding-right: 40px;\n}\n\n.u-padding-top-small {\n\tpadding-top: 10px;\n}\n\n.u-padding-top-medium {\n\tpadding-top: 20px;\n}\n\n.u-padding-top-large {\n\tpadding-top: 30px;\n}\n\n.u-padding-top-huge {\n\tpadding-top: 40px;\n}\n\n.u-padding-bottom-small {\n\tpadding-bottom: 10px;\n}\n\n.u-padding-bottom-medium {\n\tpadding-bottom: 20px;\n}\n\n.u-padding-bottom-large {\n\tpadding-bottom: 30px;\n}\n\n.u-padding-bottom-huge {\n\tpadding-bottom: 40px;\n}\n\n.u-margin-auto {\n\tmargin: 0 auto;\n}\n\n.u-margin-left-auto {\n\tmargin-left: auto;\n}\n\n.u-margin-right-auto {\n\tmargin-right: auto;\n}\n\n.u-margin-top-auto {\n\tmargin-top: auto;\n}\n\n.u-margin-bottom-auto {\n\tmargin-bottom: auto;\n}\n\n.u-display-block {\n\tdisplay: block;\n}\n\n.u-display-inline-block {\n\tdisplay: inline-block;\n}\n\n.u-display-inline {\n\tdisplay: inline;\n}\n\n.u-display-none {\n\tdisplay: none;\n}\n\n.u-text-center {\n\ttext-align: center;\n}\n\n.u-text-left {\n\ttext-align: left;\n}\n\n.u-text-right {\n\ttext-align: right;\n}\n\n.u-text-justify {\n\ttext-align: justify;\n}\n\n.u-text-uppercase {\n\ttext-transform: uppercase;\n}\n\n.u-text-lowercase {\n\ttext-transform: lowercase;\n}\n\n.u-text-capitalize {\n\ttext-transform: capitalize;\n}\n\n.u-text-bold {\n\tfont-weight: bold;\n}\n\n.u-text-italic {\n\tfont-style: italic;\n}\n\n.u-text-underline {\n\ttext-decoration: underline;\n}\n\n.u-text-line-through {\n\ttext-decoration: line-through;\n}\n\n.u-text-no-decoration {\n\ttext-decoration: none;\n}\n\n.u-text-small {\n\tfont-size: 12px;\n}\n\n.u-text-medium {\n\tfont-size: 14px;\n}\n\n.u-text-large {\n\tfont-size: 16px;\n}\n\n.u-text-huge {\n\tfont-size: 18px;\n}\n\n.u-text-white {\n\tcolor: #fff;\n}\n\n.u-text-black {\n\tcolor: #000;\n}\n\n.u-text-grey {\n\tcolor: #777;\n}\n\n.u-text-light-grey {\n\tcolor: #ccc;\n}\n\n.u-text-dark-grey {\n\tcolor: #333;\n}\n\n.u-text-primary {\n\tcolor: #f9c80e;\n}\n\n.u-text-secondary {\n\tcolor: #2f80ed;\n}\n\n.u-text-success {\n\tcolor: #2ed573;\n}\n\n.u-text-danger {\n\tcolor: #eb5757;\n}\n\n.u-text-warning {\n\tcolor: #f2994a;\n}\n\n.u-text-info {\n\tcolor: #56ccf2;\n}\n\n.u-text-light {\n\tcolor: #f2f2f2;\n}\n\n.u-text-dark {\n\tcolor: #222222;\n}\n\n.u-text-body {\n\tcolor: #777;\n}\n\n.u-text-heading {\n\tcolor: #222222;\n}\n\n.u-text-link {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:hover {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:active {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:visited {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:focus {\n\tcolor: #2f80ed;\n}\n\n/*\n * 1. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n * 2. Change the default tap highlight to be completely transparent in iOS.\n */\n\nhtml {\n\t-ms-text-size-adjust: 100%; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 1 */\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 2 */\n}\n\n/*\n * Remove the margin in all browsers.\n */\n\nbody {\n\tmargin: 0;\n}\n\n/*\n * Render the `main` element consistently in IE.\n */\n\nmain {\n\tdisplay: block;\n}\n\n/*\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: 0.67em 0;\n}\n\n/*\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/*\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n\toverflow: auto;\n}\n\n/*\n * 1. Correct the odd `em` font sizing in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/*\n * Remove the gray background on active links in IE 10.\n */\n\na {\n\tbackground-color: transparent;\n}\n\n/*\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/*\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/*\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n',
					'',
					{
						version: 3,
						sources: ['webpack://./styles/globals.css'],
						names: [],
						mappings:
							'AAAA;;CAEC,UAAU;CACV,SAAS;CACT;mDACkD;CAClD,eAAe;CACf,gBAAgB;CAChB,WAAW;;CAEX,mCAAmC;CACnC,kCAAkC;;CAElC,yBAAyB;;CAEzB,sEAAsE;CACtE,8BAA8B;CAC9B,6CAA6C;;CAE7C,WAAW;CACX,YAAY;AACb;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC;EACC,kBAAkB;CACnB;CACA;EACC,cAAc;EACd,mBAAmB;CACpB;AACD;;AAEA;CACC;EACC,mBAAmB;CACpB;CACA;EACC,WAAW;EACX,mBAAmB;CACpB;AACD;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,iBAAiB;AAClB;;AAEA,iFAAiF;AACjF;CACC;EACC,qCAAqC;EACrC,uCAAuC;EACvC,sCAAsC;EACtC,gCAAgC;CACjC;AACD;;AAEA;CACC,cAAc;CACd,qBAAqB;;CAErB,6CAA6C;;CAE7C,0CAA0C;AAC3C;;AAEA;CACC,cAAc;AACf;;AAEA;;;;;;CAMC,SAAS;AACV;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,SAAS;CACT,UAAU;CACV,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,YAAY;AACb;;AAEA,WAAW;;AAEX;CACC,iBAAiB;CACjB,cAAc;CACd,eAAe;AAChB;;AAEA,WAAW;;AAEX;CACC,eAAe;AAChB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,YAAY;AACb;;AAEA,SAAS;;AAET;CACC,eAAe;AAChB;;AAEA,WAAW;;AAEX;CACC,eAAe;AAChB;;AAEA;CACC,kBAAkB;AACnB;;AAEA,kBAAkB;;AAElB;CACC;EACC,eAAe;CAChB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,YAAY;CACb;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;AACD;;AAEA;CACC;EACC,eAAe;CAChB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,YAAY;CACb;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;AACD;;AAEA;CACC;EACC,eAAe;CAChB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,YAAY;CACb;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;CAChB;AACD;;AAEA,cAAc;;AAEd;CACC,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;CACC,0BAA0B,EAAE,MAAM;CAClC,8BAA8B,EAAE,MAAM;CACtC,6CAA6C,EAAE,MAAM;AACtD;;AAEA;;EAEE;;AAEF;CACC,SAAS;AACV;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;CACC,cAAc;CACd,gBAAgB;AACjB;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;CACC,iCAAiC,EAAE,MAAM;CACzC,cAAc,EAAE,MAAM;AACvB;;AAEA;;EAEE;;AAEF;CACC,6BAA6B;AAC9B;;AAEA;;;EAGE;;AAEF;CACC,mBAAmB,EAAE,MAAM;CAC3B,0BAA0B,EAAE,MAAM;CAClC,iCAAiC,EAAE,MAAM;AAC1C;;AAEA;;EAEE;;AAEF;;CAEC,mBAAmB;AACpB;;AAEA;;;EAGE;;AAEF;;;CAGC,iCAAiC,EAAE,MAAM;CACzC,cAAc,EAAE,MAAM;AACvB',
						sourcesContent: [
							'html,\nbody {\n\tpadding: 0;\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,\n\t\tFira Sans, Droid Sans, Helvetica Neue, sans-serif;\n\tfont-size: 14px;\n\tline-height: 1.5;\n\tcolor: #333;\n\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\n\tbackground-color: #f5f5f5;\n\n\t/* Prevent adjustments of font size after orientation changes in iOS */\n\t-webkit-text-size-adjust: 100%;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n\twidth: 100%;\n\theight: 100%;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\n@media (prefers-color-scheme: dark) {\n\thtml {\n\t\tcolor-scheme: dark;\n\t}\n\tbody {\n\t\tcolor: #556cd6;\n\t\tbackground: #556cd6;\n\t}\n}\n\n@media (prefers-color-scheme: light) {\n\thtml {\n\t\tcolor-scheme: light;\n\t}\n\tbody {\n\t\tcolor: #333;\n\t\tbackground: #f5f5f5;\n\t}\n}\n\n#__next {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 100vh;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n\t* {\n\t\tanimation-duration: 0.01ms !important;\n\t\tanimation-iteration-count: 1 !important;\n\t\ttransition-duration: 0.01ms !important;\n\t\tscroll-behavior: auto !important;\n\t}\n}\n\na {\n\tcolor: inherit;\n\ttext-decoration: none;\n\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n\t-webkit-transition: color 0.2s ease-in-out;\n}\n\na:hover {\n\tcolor: #1e87f0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tmargin: 0;\n}\n\np {\n\tmargin: 0;\n}\n\nul {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\nimg {\n\tmax-width: 100%;\n\theight: auto;\n}\n\n/* Layout */\n\n.wrapper {\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 0 20px;\n}\n\n/* Header */\n\n.header {\n\tpadding: 20px 0;\n}\n\n.header__logo {\n\tdisplay: block;\n}\n\n.header__logo img {\n\twidth: 100px;\n}\n\n/* Main */\n\n.main {\n\tpadding: 20px 0;\n}\n\n/* Footer */\n\n.footer {\n\tpadding: 20px 0;\n}\n\n.footer__text {\n\ttext-align: center;\n}\n\n/* Media Queries */\n\n@media (min-width: 768px) {\n\t.header {\n\t\tpadding: 20px 0;\n\t}\n\n\t.header__logo {\n\t\tdisplay: inline-block;\n\t}\n\n\t.header__logo img {\n\t\twidth: 150px;\n\t}\n\n\t.main {\n\t\tpadding: 20px 0;\n\t}\n\n\t.footer {\n\t\tpadding: 20px 0;\n\t}\n}\n\n@media (min-width: 1024px) {\n\t.header {\n\t\tpadding: 20px 0;\n\t}\n\n\t.header__logo {\n\t\tdisplay: inline-block;\n\t}\n\n\t.header__logo img {\n\t\twidth: 200px;\n\t}\n\n\t.main {\n\t\tpadding: 20px 0;\n\t}\n\n\t.footer {\n\t\tpadding: 20px 0;\n\t}\n}\n\n@media (min-width: 1200px) {\n\t.header {\n\t\tpadding: 20px 0;\n\t}\n\n\t.header__logo {\n\t\tdisplay: inline-block;\n\t}\n\n\t.header__logo img {\n\t\twidth: 250px;\n\t}\n\n\t.main {\n\t\tpadding: 20px 0;\n\t}\n\n\t.footer {\n\t\tpadding: 20px 0;\n\t}\n}\n\n/* Utilities */\n\n.u-center-text {\n\ttext-align: center;\n}\n\n.u-margin-bottom-small {\n\tmargin-bottom: 10px;\n}\n\n.u-margin-bottom-medium {\n\tmargin-bottom: 20px;\n}\n\n.u-margin-bottom-large {\n\tmargin-bottom: 30px;\n}\n\n.u-margin-bottom-huge {\n\tmargin-bottom: 40px;\n}\n\n.u-margin-top-small {\n\tmargin-top: 10px;\n}\n\n.u-margin-top-medium {\n\tmargin-top: 20px;\n}\n\n.u-margin-top-large {\n\tmargin-top: 30px;\n}\n\n.u-margin-top-huge {\n\tmargin-top: 40px;\n}\n\n.u-margin-left-small {\n\tmargin-left: 10px;\n}\n\n.u-margin-left-medium {\n\tmargin-left: 20px;\n}\n\n.u-margin-left-large {\n\tmargin-left: 30px;\n}\n\n.u-margin-left-huge {\n\tmargin-left: 40px;\n}\n\n.u-margin-right-small {\n\tmargin-right: 10px;\n}\n\n.u-margin-right-medium {\n\tmargin-right: 20px;\n}\n\n.u-margin-right-large {\n\tmargin-right: 30px;\n}\n\n.u-margin-right-huge {\n\tmargin-right: 40px;\n}\n\n.u-margin-small {\n\tmargin: 10px;\n}\n\n.u-margin-medium {\n\tmargin: 20px;\n}\n\n.u-margin-large {\n\tmargin: 30px;\n}\n\n.u-margin-huge {\n\tmargin: 40px;\n}\n\n.u-padding-small {\n\tpadding: 10px;\n}\n\n.u-padding-medium {\n\tpadding: 20px;\n}\n\n.u-padding-large {\n\tpadding: 30px;\n}\n\n.u-padding-huge {\n\tpadding: 40px;\n}\n\n.u-padding-left-small {\n\tpadding-left: 10px;\n}\n\n.u-padding-left-medium {\n\tpadding-left: 20px;\n}\n\n.u-padding-left-large {\n\tpadding-left: 30px;\n}\n\n.u-padding-left-huge {\n\tpadding-left: 40px;\n}\n\n.u-padding-right-small {\n\tpadding-right: 10px;\n}\n\n.u-padding-right-medium {\n\tpadding-right: 20px;\n}\n\n.u-padding-right-large {\n\tpadding-right: 30px;\n}\n\n.u-padding-right-huge {\n\tpadding-right: 40px;\n}\n\n.u-padding-top-small {\n\tpadding-top: 10px;\n}\n\n.u-padding-top-medium {\n\tpadding-top: 20px;\n}\n\n.u-padding-top-large {\n\tpadding-top: 30px;\n}\n\n.u-padding-top-huge {\n\tpadding-top: 40px;\n}\n\n.u-padding-bottom-small {\n\tpadding-bottom: 10px;\n}\n\n.u-padding-bottom-medium {\n\tpadding-bottom: 20px;\n}\n\n.u-padding-bottom-large {\n\tpadding-bottom: 30px;\n}\n\n.u-padding-bottom-huge {\n\tpadding-bottom: 40px;\n}\n\n.u-margin-auto {\n\tmargin: 0 auto;\n}\n\n.u-margin-left-auto {\n\tmargin-left: auto;\n}\n\n.u-margin-right-auto {\n\tmargin-right: auto;\n}\n\n.u-margin-top-auto {\n\tmargin-top: auto;\n}\n\n.u-margin-bottom-auto {\n\tmargin-bottom: auto;\n}\n\n.u-display-block {\n\tdisplay: block;\n}\n\n.u-display-inline-block {\n\tdisplay: inline-block;\n}\n\n.u-display-inline {\n\tdisplay: inline;\n}\n\n.u-display-none {\n\tdisplay: none;\n}\n\n.u-text-center {\n\ttext-align: center;\n}\n\n.u-text-left {\n\ttext-align: left;\n}\n\n.u-text-right {\n\ttext-align: right;\n}\n\n.u-text-justify {\n\ttext-align: justify;\n}\n\n.u-text-uppercase {\n\ttext-transform: uppercase;\n}\n\n.u-text-lowercase {\n\ttext-transform: lowercase;\n}\n\n.u-text-capitalize {\n\ttext-transform: capitalize;\n}\n\n.u-text-bold {\n\tfont-weight: bold;\n}\n\n.u-text-italic {\n\tfont-style: italic;\n}\n\n.u-text-underline {\n\ttext-decoration: underline;\n}\n\n.u-text-line-through {\n\ttext-decoration: line-through;\n}\n\n.u-text-no-decoration {\n\ttext-decoration: none;\n}\n\n.u-text-small {\n\tfont-size: 12px;\n}\n\n.u-text-medium {\n\tfont-size: 14px;\n}\n\n.u-text-large {\n\tfont-size: 16px;\n}\n\n.u-text-huge {\n\tfont-size: 18px;\n}\n\n.u-text-white {\n\tcolor: #fff;\n}\n\n.u-text-black {\n\tcolor: #000;\n}\n\n.u-text-grey {\n\tcolor: #777;\n}\n\n.u-text-light-grey {\n\tcolor: #ccc;\n}\n\n.u-text-dark-grey {\n\tcolor: #333;\n}\n\n.u-text-primary {\n\tcolor: #f9c80e;\n}\n\n.u-text-secondary {\n\tcolor: #2f80ed;\n}\n\n.u-text-success {\n\tcolor: #2ed573;\n}\n\n.u-text-danger {\n\tcolor: #eb5757;\n}\n\n.u-text-warning {\n\tcolor: #f2994a;\n}\n\n.u-text-info {\n\tcolor: #56ccf2;\n}\n\n.u-text-light {\n\tcolor: #f2f2f2;\n}\n\n.u-text-dark {\n\tcolor: #222222;\n}\n\n.u-text-body {\n\tcolor: #777;\n}\n\n.u-text-heading {\n\tcolor: #222222;\n}\n\n.u-text-link {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:hover {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:active {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:visited {\n\tcolor: #2f80ed;\n}\n\n.u-text-link:focus {\n\tcolor: #2f80ed;\n}\n\n/*\n * 1. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n * 2. Change the default tap highlight to be completely transparent in iOS.\n */\n\nhtml {\n\t-ms-text-size-adjust: 100%; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 1 */\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 2 */\n}\n\n/*\n * Remove the margin in all browsers.\n */\n\nbody {\n\tmargin: 0;\n}\n\n/*\n * Render the `main` element consistently in IE.\n */\n\nmain {\n\tdisplay: block;\n}\n\n/*\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: 0.67em 0;\n}\n\n/*\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/*\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n\toverflow: auto;\n}\n\n/*\n * 1. Correct the odd `em` font sizing in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/*\n * Remove the gray background on active links in IE 10.\n */\n\na {\n\tbackground-color: transparent;\n}\n\n/*\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/*\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/*\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n',
						],
						sourceRoot: '',
					},
				])
				const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
			},
		'./stories/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
			(module, __unused_webpack_exports, __webpack_require__) => {
				var map = {
					'./darkMode/ConfirmPasswordInput.stories.tsx':
						'./stories/components/darkMode/ConfirmPasswordInput.stories.tsx',
					'./darkMode/DarkModeSwitch.stories.tsx':
						'./stories/components/darkMode/DarkModeSwitch.stories.tsx',
					'./darkMode/EmailInput.stories.tsx':
						'./stories/components/darkMode/EmailInput.stories.tsx',
					'./darkMode/Layout.stories.tsx': './stories/components/darkMode/Layout.stories.tsx',
					'./darkMode/Modal.stories.tsx': './stories/components/darkMode/Modal.stories.tsx',
					'./darkMode/NavigationButton.stories.tsx':
						'./stories/components/darkMode/NavigationButton.stories.tsx',
					'./darkMode/PasswordInput.stories.tsx':
						'./stories/components/darkMode/PasswordInput.stories.tsx',
					'./darkMode/SubmitButton.stories.tsx':
						'./stories/components/darkMode/SubmitButton.stories.tsx',
					'./darkMode/VisibilityIcon.stories.tsx':
						'./stories/components/darkMode/VisibilityIcon.stories.tsx',
					'./lightMode/Layout.stories.tsx': './stories/components/lightMode/Layout.stories.tsx',
				}
				function webpackContext(req) {
					var id = webpackContextResolve(req)
					return __webpack_require__(id)
				}
				function webpackContextResolve(req) {
					if (!__webpack_require__.o(map, req)) {
						var e = new Error("Cannot find module '" + req + "'")
						throw ((e.code = 'MODULE_NOT_FOUND'), e)
					}
					return map[req]
				}
				;(webpackContext.keys = function webpackContextKeys() {
					return Object.keys(map)
				}),
					(webpackContext.resolve = webpackContextResolve),
					(module.exports = webpackContext),
					(webpackContext.id =
						'./stories/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$')
			},
		'./stories/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
			module => {
				function webpackEmptyContext(req) {
					var e = new Error("Cannot find module '" + req + "'")
					throw ((e.code = 'MODULE_NOT_FOUND'), e)
				}
				;(webpackEmptyContext.keys = () => []),
					(webpackEmptyContext.resolve = webpackEmptyContext),
					(webpackEmptyContext.id =
						'./stories/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'),
					(module.exports = webpackEmptyContext)
			},
		'./stories/pages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
			(module, __unused_webpack_exports, __webpack_require__) => {
				var map = {
					'./darkMode/[...token].stories.tsx': './stories/pages/darkMode/[...token].stories.tsx',
					'./darkMode/forgot-password.stories.tsx':
						'./stories/pages/darkMode/forgot-password.stories.tsx',
					'./darkMode/index.stories.tsx': './stories/pages/darkMode/index.stories.tsx',
					'./darkMode/login.stories.tsx': './stories/pages/darkMode/login.stories.tsx',
					'./darkMode/signup.stories.tsx': './stories/pages/darkMode/signup.stories.tsx',
					'./lightMode/[...token].stories.tsx': './stories/pages/lightMode/[...token].stories.tsx',
					'./lightMode/forgot-password.stories.tsx':
						'./stories/pages/lightMode/forgot-password.stories.tsx',
					'./lightMode/index.stories.tsx': './stories/pages/lightMode/index.stories.tsx',
					'./lightMode/login.stories.tsx': './stories/pages/lightMode/login.stories.tsx',
					'./lightMode/signup.stories.tsx': './stories/pages/lightMode/signup.stories.tsx',
				}
				function webpackContext(req) {
					var id = webpackContextResolve(req)
					return __webpack_require__(id)
				}
				function webpackContextResolve(req) {
					if (!__webpack_require__.o(map, req)) {
						var e = new Error("Cannot find module '" + req + "'")
						throw ((e.code = 'MODULE_NOT_FOUND'), e)
					}
					return map[req]
				}
				;(webpackContext.keys = function webpackContextKeys() {
					return Object.keys(map)
				}),
					(webpackContext.resolve = webpackContextResolve),
					(module.exports = webpackContext),
					(webpackContext.id =
						'./stories/pages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$')
			},
		'./stories/pages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
			module => {
				function webpackEmptyContext(req) {
					var e = new Error("Cannot find module '" + req + "'")
					throw ((e.code = 'MODULE_NOT_FOUND'), e)
				}
				;(webpackEmptyContext.keys = () => []),
					(webpackEmptyContext.resolve = webpackEmptyContext),
					(webpackEmptyContext.id =
						'./stories/pages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'),
					(module.exports = webpackEmptyContext)
			},
		'./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
			(module, __unused_webpack_exports, __webpack_require__) => {
				var map = {
					'./components/darkMode/ConfirmPasswordInput.stories.tsx':
						'./stories/components/darkMode/ConfirmPasswordInput.stories.tsx',
					'./components/darkMode/DarkModeSwitch.stories.tsx':
						'./stories/components/darkMode/DarkModeSwitch.stories.tsx',
					'./components/darkMode/EmailInput.stories.tsx':
						'./stories/components/darkMode/EmailInput.stories.tsx',
					'./components/darkMode/Layout.stories.tsx':
						'./stories/components/darkMode/Layout.stories.tsx',
					'./components/darkMode/Modal.stories.tsx':
						'./stories/components/darkMode/Modal.stories.tsx',
					'./components/darkMode/NavigationButton.stories.tsx':
						'./stories/components/darkMode/NavigationButton.stories.tsx',
					'./components/darkMode/PasswordInput.stories.tsx':
						'./stories/components/darkMode/PasswordInput.stories.tsx',
					'./components/darkMode/SubmitButton.stories.tsx':
						'./stories/components/darkMode/SubmitButton.stories.tsx',
					'./components/darkMode/VisibilityIcon.stories.tsx':
						'./stories/components/darkMode/VisibilityIcon.stories.tsx',
					'./components/lightMode/Layout.stories.tsx':
						'./stories/components/lightMode/Layout.stories.tsx',
					'./pages/darkMode/[...token].stories.tsx':
						'./stories/pages/darkMode/[...token].stories.tsx',
					'./pages/darkMode/forgot-password.stories.tsx':
						'./stories/pages/darkMode/forgot-password.stories.tsx',
					'./pages/darkMode/index.stories.tsx': './stories/pages/darkMode/index.stories.tsx',
					'./pages/darkMode/login.stories.tsx': './stories/pages/darkMode/login.stories.tsx',
					'./pages/darkMode/signup.stories.tsx': './stories/pages/darkMode/signup.stories.tsx',
					'./pages/lightMode/[...token].stories.tsx':
						'./stories/pages/lightMode/[...token].stories.tsx',
					'./pages/lightMode/forgot-password.stories.tsx':
						'./stories/pages/lightMode/forgot-password.stories.tsx',
					'./pages/lightMode/index.stories.tsx': './stories/pages/lightMode/index.stories.tsx',
					'./pages/lightMode/login.stories.tsx': './stories/pages/lightMode/login.stories.tsx',
					'./pages/lightMode/signup.stories.tsx': './stories/pages/lightMode/signup.stories.tsx',
				}
				function webpackContext(req) {
					var id = webpackContextResolve(req)
					return __webpack_require__(id)
				}
				function webpackContextResolve(req) {
					if (!__webpack_require__.o(map, req)) {
						var e = new Error("Cannot find module '" + req + "'")
						throw ((e.code = 'MODULE_NOT_FOUND'), e)
					}
					return map[req]
				}
				;(webpackContext.keys = function webpackContextKeys() {
					return Object.keys(map)
				}),
					(webpackContext.resolve = webpackContextResolve),
					(module.exports = webpackContext),
					(webpackContext.id =
						'./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$')
			},
		'./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
			(module, __unused_webpack_exports, __webpack_require__) => {
				var map = { './Introduction.stories.mdx': './stories/Introduction.stories.mdx' }
				function webpackContext(req) {
					var id = webpackContextResolve(req)
					return __webpack_require__(id)
				}
				function webpackContextResolve(req) {
					if (!__webpack_require__.o(map, req)) {
						var e = new Error("Cannot find module '" + req + "'")
						throw ((e.code = 'MODULE_NOT_FOUND'), e)
					}
					return map[req]
				}
				;(webpackContext.keys = function webpackContextKeys() {
					return Object.keys(map)
				}),
					(webpackContext.resolve = webpackContextResolve),
					(module.exports = webpackContext),
					(webpackContext.id =
						'./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$')
			},
		'?0ae2': () => {},
		'?8654': () => {},
		'./generated-stories-entry.cjs': (module, __unused_webpack_exports, __webpack_require__) => {
			'use strict'
			;(module = __webpack_require__.nmd(module)),
				(0,
				__webpack_require__(
					'./node_modules/.pnpm/@storybook+react@6.5.13_bp6w42x2ylfadju5bla5czjcfq/node_modules/@storybook/react/dist/esm/client/index.js',
				).configure)(
					[
						__webpack_require__(
							'./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$',
						),
						__webpack_require__(
							'./stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$',
						),
						__webpack_require__(
							'./stories/pages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$',
						),
						__webpack_require__(
							'./stories/pages sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$',
						),
						__webpack_require__(
							'./stories/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$',
						),
						__webpack_require__(
							'./stories/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$',
						),
					],
					module,
					!1,
				)
		},
		'./.storybook/preview.js-generated-config-entry.js': (
			__unused_webpack___webpack_module__,
			__unused_webpack___webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			var preview_namespaceObject = {}
			__webpack_require__.r(preview_namespaceObject),
				__webpack_require__.d(preview_namespaceObject, {
					__namedExportsOrder: () => __namedExportsOrder,
					decorators: () => decorators,
					parameters: () => parameters,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.keys.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.filter.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.get-own-property-descriptor.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.array.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/web.dom-collections.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.get-own-property-descriptors.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.define-properties.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.define-property.js',
				)
			var ClientApi = __webpack_require__(
					'./node_modules/.pnpm/@storybook+client-api@6.5.13_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/client-api/dist/esm/ClientApi.js',
				),
				injectStylesIntoStyleTag =
					(__webpack_require__(
						'./node_modules/.pnpm/core-js@3.25.3/node_modules/core-js/modules/es.object.assign.js',
					),
					__webpack_require__('./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'),
					__webpack_require__(
						'./node_modules/.pnpm/style-loader@2.0.0_webpack@5.74.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
					)),
				injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
				globals = __webpack_require__(
					'./node_modules/.pnpm/css-loader@5.2.7_webpack@5.74.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./styles/globals.css',
				),
				options = { insert: 'head', singleton: !1 }
			injectStylesIntoStyleTag_default()(globals.Z, options)
			globals.Z.locals
			var next_image = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.5_672uxklweod7ene3nqtsh262ca/node_modules/next/image.js',
				),
				router_context = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.5_672uxklweod7ene3nqtsh262ca/node_modules/next/dist/shared/lib/router-context.js',
				),
				ThemeProvider = __webpack_require__(
					'./node_modules/.pnpm/@mui+system@5.10.16_v64nlmo6pkqfmpmxge6otzlg54/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js',
				),
				notistack_esm = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				theme = (0,
				__webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_thp4wrxo45nyllusrnt46mid4u/node_modules/@mui/material/esm/styles/createTheme.js',
				).Z)({
					shape: { borderRadius: 4 },
					spacing: 8,
					zIndex: {
						mobileStepper: 1e3,
						speedDial: 1050,
						appBar: 1100,
						drawer: 1200,
						modal: 1300,
						snackbar: 1400,
						tooltip: 1500,
					},
					breakpoints: { values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } },
					mixins: { toolbar: { minHeight: 56 } },
					transitions: {
						easing: {
							easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
							easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
							easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
							sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
						},
						duration: {
							shortest: 150,
							shorter: 200,
							short: 250,
							standard: 300,
							complex: 375,
							enteringScreen: 225,
							leavingScreen: 195,
						},
					},
					shadows: [
						'none',
						'0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
						'0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
						'0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
						'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
						'0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
						'0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
						'0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
						'0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
						'0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
						'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
						'0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
						'0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
						'0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
						'0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
						'0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
						'0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
						'0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
						'0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
						'0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
						'0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
						'0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
						'0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
						'0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
						'0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
					],
					direction: 'ltr',
					components: {
						MuiCssBaseline: {
							styleOverrides:
								'\n                html {\n                    font-size: 16px;\n                }\n            ',
						},
					},
					palette: {
						common: { black: '#000', white: '#fff' },
						primary: { light: '#7986cb', main: '#3f51b5', dark: '#303f9f', contrastText: '#fff' },
						secondary: { light: '#ff4081', main: '#f50057', dark: '#c51162', contrastText: '#fff' },
						error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: '#fff' },
						grey: {
							50: '#fafafa',
							100: '#f5f5f5',
							200: '#eeeeee',
							300: '#e0e0e0',
							400: '#bdbdbd',
							500: '#9e9e9e',
							600: '#757575',
							700: '#616161',
							800: '#424242',
							900: '#212121',
							A100: '#d5d5d5',
							A200: '#aaaaaa',
							A400: '#303030',
							A700: '#616161',
						},
						contrastThreshold: 3,
						tonalOffset: 0.2,
						text: {
							primary: 'rgba(0, 0, 0, 0.87)',
							secondary: 'rgba(0, 0, 0, 0.54)',
							disabled: 'rgba(0, 0, 0, 0.38)',
						},
						divider: 'rgba(0, 0, 0, 0.12)',
						background: { paper: '#fff', default: '#fafafa' },
						action: {
							active: 'rgba(0, 0, 0, 0.54)',
							hover: 'rgba(0, 0, 0, 0.04)',
							hoverOpacity: 0.04,
							selected: 'rgba(0, 0, 0, 0.08)',
							selectedOpacity: 0.08,
							disabled: 'rgba(0, 0, 0, 0.26)',
							disabledBackground: 'rgba(0, 0, 0, 0.12)',
							disabledOpacity: 0.38,
							focus: 'rgba(0, 0, 0, 0.12)',
							focusOpacity: 0.12,
							activatedOpacity: 0.12,
						},
					},
					typography: {
						htmlFontSize: 16,
						fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
						fontSize: 14,
						fontWeightLight: 300,
						fontWeightRegular: 400,
						fontWeightMedium: 500,
						fontWeightBold: 700,
						h1: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontWeight: 300,
							fontSize: '6rem',
							lineHeight: 1.167,
							letterSpacing: '-0.01562em',
						},
						h2: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontWeight: 300,
							fontSize: '3.75rem',
							lineHeight: 1.2,
							letterSpacing: '-0.00833em',
						},
						h3: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontWeight: 400,
							fontSize: '3rem',
							lineHeight: 1.167,
							letterSpacing: '0em',
						},
						h4: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontWeight: 400,
							fontSize: '2.125rem',
							lineHeight: 1.235,
							letterSpacing: '0.00735em',
						},
						h5: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontWeight: 400,
							fontSize: '1.5rem',
							lineHeight: 1.334,
							letterSpacing: '0em',
						},
						h6: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontWeight: 500,
							fontSize: '1.25rem',
							lineHeight: 1.6,
							letterSpacing: '0.0075em',
						},
						subtitle1: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontSize: '1rem',
							lineHeight: 1.75,
							letterSpacing: '0.00938em',
						},
						subtitle2: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontSize: '0.875rem',
							lineHeight: 1.57,
							letterSpacing: '0.00714em',
						},
						body1: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontSize: '1rem',
							lineHeight: 1.5,
							letterSpacing: '0.00938em',
						},
						body2: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontSize: '0.875rem',
							lineHeight: 1.43,
							letterSpacing: '0.01071em',
						},
						button: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontSize: '0.875rem',
							textTransform: 'uppercase',
						},
						caption: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontSize: '0.75rem',
							lineHeight: 1.66,
							letterSpacing: '0.03333em',
						},
						overline: {
							fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
							fontSize: '0.75rem',
							lineHeight: 2.66,
							letterSpacing: '0.08333em',
							textTransform: 'uppercase',
						},
					},
				}),
				jsx_runtime = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				),
				OriginalNextImage = next_image
			Object.defineProperty(next_image, 'default', {
				configurable: !0,
				value: function value(props) {
					return (0, jsx_runtime.jsx)(
						OriginalNextImage,
						Object.assign({}, props, { unoptimized: !0 }),
					)
				},
			})
			var parameters = {
					nextRouter: { Provider: router_context.RouterContext.Provider },
					actions: { argTypesRegex: '^on[A-Z].*' },
					controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
					previewTabs: { 'storybook/docs/panel': { index: -1 } },
				},
				decorators = [
					function (Story) {
						return (0, jsx_runtime.jsx)(ThemeProvider.Z, {
							theme,
							children: (0, jsx_runtime.jsx)(notistack_esm.wT, {
								maxSnack: 3,
								children: (0, jsx_runtime.jsx)(Story, {}),
							}),
						})
					},
				],
				__namedExportsOrder = ['parameters', 'decorators']
			function ownKeys(object, enumerableOnly) {
				var keys = Object.keys(object)
				if (Object.getOwnPropertySymbols) {
					var symbols = Object.getOwnPropertySymbols(object)
					enumerableOnly &&
						(symbols = symbols.filter(function (sym) {
							return Object.getOwnPropertyDescriptor(object, sym).enumerable
						})),
						keys.push.apply(keys, symbols)
				}
				return keys
			}
			function _defineProperty(obj, key, value) {
				return (
					key in obj
						? Object.defineProperty(obj, key, {
								value,
								enumerable: !0,
								configurable: !0,
								writable: !0,
						  })
						: (obj[key] = value),
					obj
				)
			}
			Object.keys(preview_namespaceObject).forEach(function (key) {
				var value = preview_namespaceObject[key]
				switch (key) {
					case 'args':
						return (0, ClientApi.uc)(value)
					case 'argTypes':
						return (0, ClientApi.v9)(value)
					case 'decorators':
						return value.forEach(function (decorator) {
							return (0, ClientApi.$9)(decorator, !1)
						})
					case 'loaders':
						return value.forEach(function (loader) {
							return (0, ClientApi.HZ)(loader, !1)
						})
					case 'parameters':
						return (0, ClientApi.h1)(
							(function _objectSpread(target) {
								for (var i = 1; i < arguments.length; i++) {
									var source = null != arguments[i] ? arguments[i] : {}
									i % 2
										? ownKeys(Object(source), !0).forEach(function (key) {
												_defineProperty(target, key, source[key])
										  })
										: Object.getOwnPropertyDescriptors
										? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
										: ownKeys(Object(source)).forEach(function (key) {
												Object.defineProperty(
													target,
													key,
													Object.getOwnPropertyDescriptor(source, key),
												)
										  })
								}
								return target
							})({}, value),
							!1,
						)
					case 'argTypesEnhancers':
						return value.forEach(function (enhancer) {
							return (0, ClientApi.My)(enhancer)
						})
					case 'argsEnhancers':
						return value.forEach(function (enhancer) {
							return (0, ClientApi._C)(enhancer)
						})
					case 'render':
						return (0, ClientApi.$P)(value)
					case 'globals':
					case 'globalTypes':
						var v = {}
						return (v[key] = value), (0, ClientApi.h1)(v, !1)
					case '__namedExportsOrder':
					case 'decorateStory':
					case 'renderToDOM':
						return null
					default:
						return console.log(key + ' was not supported :( !')
				}
			})
		},
		'./storybook-init-framework-entry.js': (
			__unused_webpack___webpack_module__,
			__unused_webpack___webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__(
				'./node_modules/.pnpm/@storybook+react@6.5.13_bp6w42x2ylfadju5bla5czjcfq/node_modules/@storybook/react/dist/esm/client/index.js',
			)
		},
	},
	__webpack_require__ => {
		var __webpack_exec__ = moduleId => __webpack_require__((__webpack_require__.s = moduleId))
		__webpack_require__.O(
			0,
			[903],
			() => (
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+core-client@6.5.13_sufdeflqgt5it4uwiywo3kwzb4/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+core-client@6.5.13_sufdeflqgt5it4uwiywo3kwzb4/node_modules/@storybook/core-client/dist/esm/globals/globals.js',
				),
				__webpack_exec__('./storybook-init-framework-entry.js'),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+react@6.5.13_bp6w42x2ylfadju5bla5czjcfq/node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+react@6.5.13_bp6w42x2ylfadju5bla5czjcfq/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-links@6.5.13_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-links/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-docs@6.5.13_cbvstj52lzlbrybtccmvpwo5cm/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-actions@6.5.13_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-backgrounds@6.5.13_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-measure@6.5.13_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-outline@6.5.13_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-a11y@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/storybook-addon-next-router@4.0.1_3zvpfirswu7qknis2q3ozxbofu/node_modules/storybook-addon-next-router/dist/preset/addDecorator.js-generated-config-entry.js',
				),
				__webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
				__webpack_exec__('./generated-stories-entry.cjs')
			),
		)
		__webpack_require__.O()
	},
])
