/*! For license information please see main.08933fc4.iframe.bundle.js.LICENSE.txt */
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
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
						id: name + '-buttons-container',
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
		'./components/ColorPickerIcon.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => ColorPickerIcon })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/IconButton/IconButton.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_mui_icons_material_ColorLens__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/ColorLens.js',
				),
				color2k__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
				),
				_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./components/ColorPickerPopover.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('./store/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./utils/helpers.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
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
			function ColorPickerIcon(_ref) {
				var name = _ref.name,
					_ref$selectedInit = _ref.selectedInit,
					selectedInit = void 0 !== _ref$selectedInit && _ref$selectedInit,
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_14__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					setCustomPalette = _useBoundStore.setCustomPalette,
					_useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(null), 2),
					anchorEl = _useState2[0],
					setAnchorEl = _useState2[1],
					_useState4 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(selectedInit),
						2,
					),
					selected = _useState4[0],
					setSelected = _useState4[1]
				;(0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
					var customPalette = localStorage.getItem('customPalette')
					customPalette && handleColorChange(customPalette)
				}, [])
				var open = Boolean(anchorEl),
					id = open ? 'simple-popover' : void 0,
					handleColorChange = (0, react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(
						function (color) {
							localStorage.setItem('customPalette', color)
							var contrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_15__.RN)(color),
								secondaryColor = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_15__.pw)(color),
								secondaryColorContrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_15__.RN)(
									secondaryColor,
								),
								newPalette = Object.assign({}, customPalette, {
									primary: {
										main: color,
										contrastText: contrast,
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_17__.$n)(color, 0.2),
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_17__._j)(color, 0.2),
									},
									secondary: {
										main: secondaryColor,
										contrastText: secondaryColorContrast,
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_17__.$n)(secondaryColor, 0.2),
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_17__._j)(secondaryColor, 0.2),
									},
								})
							setCustomPalette(newPalette)
						},
						[customPalette, setCustomPalette],
					)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(
					_mui_material__WEBPACK_IMPORTED_MODULE_18__.Z,
					{
						id: name + '-color-picker-container',
						onMouseEnter: function onMouseEnter() {
							return setSelected(!0)
						},
						onMouseLeave: function onMouseLeave() {
							return setSelected(!1)
						},
						onFocus: function onFocus() {
							return setSelected(!0)
						},
						onBlur: function onBlur() {
							return setSelected(!1)
						},
						sx: {
							mr: 4,
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						},
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(
								_mui_material__WEBPACK_IMPORTED_MODULE_18__.Z,
								{
									id: name + '-color-picker-box',
									sx: {
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										mt: 2,
										p: 0,
										height: '100%',
										cursor: 'pointer',
									},
									children: [
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_19__.Z,
											{
												id: name + '-color-picker-button',
												'aria-describedby': id,
												'aria-labelledby': name + '-color-picker-label',
												onClick: function handleClick(event) {
													setAnchorEl(event.currentTarget)
												},
												children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
													_mui_icons_material_ColorLens__WEBPACK_IMPORTED_MODULE_20__.Z,
													{
														id: name + '-color-picker-icon',
														sx: {
															color: selected
																? darkMode
																	? 'primary.light'
																	: 'primary.dark'
																: 'primary.contrastText',
															fontSize: '1.5rem',
														},
													},
												),
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)('label', {
											htmlFor: name + '-color-picker-button',
											children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
												_mui_material__WEBPACK_IMPORTED_MODULE_21__.Z,
												{
													id: name + '-color-picker-label',
													variant: 'body2',
													sx: {
														fontWeight: 500,
														cursor: 'pointer',
														color: selected
															? darkMode
																? 'primary.light'
																: 'primary.dark'
															: 'primary.contrastText',
													},
													children: 'Theme Color',
												},
											),
										}),
									],
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
								_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_13__.Z,
								{
									name,
									open,
									anchorEl,
									handleClose: function handleClose() {
										setSelected(!1), setAnchorEl(null)
									},
									anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
									transformOrigin: { vertical: 'top', horizontal: 'center' },
									handleColorChange,
								},
							),
						],
					},
				)
			}
			ColorPickerIcon.displayName = 'ColorPickerIcon'
			try {
				;(ColorPickerIcon.displayName = 'ColorPickerIcon'),
					(ColorPickerIcon.__docgenInfo = {
						description: '',
						displayName: 'ColorPickerIcon',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							selectedInit: {
								defaultValue: { value: 'false' },
								description: '',
								name: 'selectedInit',
								required: !1,
								type: { name: 'boolean' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/ColorPickerIcon.tsx#ColorPickerIcon'] = {
							docgenInfo: ColorPickerIcon.__docgenInfo,
							name: 'ColorPickerIcon',
							path: 'components/ColorPickerIcon.tsx#ColorPickerIcon',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/ColorPickerPopover.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Popover/Popover.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./store/index.ts'),
				react_color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react-color@2.19.3_react@18.2.0/node_modules/react-color/es/index.js',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
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
			var ColorPickerPopover = function ColorPickerPopover(_ref) {
				var name = _ref.name,
					open = _ref.open,
					anchorEl = _ref.anchorEl,
					handleClose = _ref.handleClose,
					handleColorChange = _ref.handleColorChange,
					anchorOrigin = _ref.anchorOrigin,
					transformOrigin = _ref.transformOrigin,
					customPalette = (0, _store__WEBPACK_IMPORTED_MODULE_12__.w)().customPalette,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_11__.useState)(customPalette.primary.main),
						2,
					),
					color = _useState2[0],
					setColor = _useState2[1],
					handleChange = (0, react__WEBPACK_IMPORTED_MODULE_11__.useCallback)(
						function (color) {
							setColor(color.hex), handleColorChange(color.hex)
						},
						[handleColorChange],
					)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_15__.ZP,
					{
						id: name + '-color-picker-popover',
						open,
						anchorEl,
						onClose: handleClose,
						anchorOrigin,
						transformOrigin,
						sx: {
							cursor: 'pointer',
							'& .MuiPopover-paper': {
								padding: 2,
								backgroundColor: 'background.paper',
								color: 'text.primary',
							},
						},
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(
							react_color__WEBPACK_IMPORTED_MODULE_13__.AI,
							{
								color,
								onChange: function onChange(color) {
									return handleChange(color)
								},
								disableAlpha: !0,
							},
						),
					},
				)
			}
			ColorPickerPopover.displayName = 'ColorPickerPopover'
			const __WEBPACK_DEFAULT_EXPORT__ = ColorPickerPopover
			try {
				;(ColorPickerPopover.displayName = 'ColorPickerPopover'),
					(ColorPickerPopover.__docgenInfo = {
						description: '',
						displayName: 'ColorPickerPopover',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							open: {
								defaultValue: null,
								description: '',
								name: 'open',
								required: !0,
								type: { name: 'boolean' },
							},
							anchorEl: {
								defaultValue: null,
								description: '',
								name: 'anchorEl',
								required: !0,
								type: { name: 'HTMLButtonElement | null' },
							},
							handleClose: {
								defaultValue: null,
								description: '',
								name: 'handleClose',
								required: !0,
								type: { name: '() => void' },
							},
							handleColorChange: {
								defaultValue: null,
								description: '',
								name: 'handleColorChange',
								required: !0,
								type: { name: '(color: string) => void' },
							},
							anchorOrigin: {
								defaultValue: null,
								description: '',
								name: 'anchorOrigin',
								required: !1,
								type: { name: 'PopoverOrigin' },
							},
							transformOrigin: {
								defaultValue: null,
								description: '',
								name: 'transformOrigin',
								required: !1,
								type: { name: 'PopoverOrigin' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/ColorPickerPopover.tsx#ColorPickerPopover'] = {
							docgenInfo: ColorPickerPopover.__docgenInfo,
							name: 'ColorPickerPopover',
							path: 'components/ColorPickerPopover.tsx#ColorPickerPopover',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
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
					disabled = void 0 !== _ref$disabled && _ref$disabled,
					handleEnter = _ref.handleEnter
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
					{
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
								_PasswordInput__WEBPACK_IMPORTED_MODULE_1__.Z,
								{ name, value: password, setValue: setPassword, disabled, handleEnter },
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
								_PasswordInput__WEBPACK_IMPORTED_MODULE_1__.Z,
								{
									name: '' + name,
									value: confirmPassword,
									setValue: setConfirmPassword,
									disabled,
									isConfirmPassword: !0,
									handleEnter,
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
							handleEnter: {
								defaultValue: null,
								description: '',
								name: 'handleEnter',
								required: !1,
								type: { name: '((e: KeyboardEvent<Element>) => void)' },
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
		'./components/DarkModeSwitch.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => DarkModeSwitch })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Switch/Switch.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_mui_icons_material_WbSunny__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/WbSunny.js',
				),
				_mui_icons_material_Brightness2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/Brightness2.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
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
			function DarkModeSwitch(_ref) {
				var name = _ref.name,
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_12__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode,
					_useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_11__.useState)(!1), 2),
					selected = _useState2[0],
					setSelected = _useState2[1],
					handleDarkMode = function handleDarkMode() {
						localStorage.setItem('darkMode', JSON.stringify(!darkMode)), setDarkMode(!darkMode)
					}
				;(0, react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(
					function () {
						var darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false')
						setDarkMode(darkMode)
					},
					[darkMode, setDarkMode],
				)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(
					_mui_material__WEBPACK_IMPORTED_MODULE_14__.Z,
					{
						id: name + '-dark-mode-switch-container',
						onMouseEnter: function onMouseEnter() {
							return setSelected(!0)
						},
						onMouseLeave: function onMouseLeave() {
							return setSelected(!1)
						},
						onFocus: function onFocus() {
							return setSelected(!0)
						},
						onBlur: function onBlur() {
							return setSelected(!1)
						},
						sx: {
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
							alignItems: 'center',
							height: '100%',
							mt: 1,
						},
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
								_mui_material__WEBPACK_IMPORTED_MODULE_15__.Z,
								{
									id: name + '-dark-mode-switch',
									checked: darkMode,
									onChange: handleDarkMode,
									onKeyDown: function handleEnter(e) {
										'Enter' === e.key && handleDarkMode()
									},
									'aria-labelledby':
										name + '-dark-mode-switch-label-' + (darkMode ? 'dark' : 'light'),
									sx: {
										color: selected
											? darkMode
												? 'primary.light'
												: 'primary.dark'
											: 'primary.contrastText',
										'& .MuiSwitch-switchBase': {
											color: 'primary.contrastText',
											'&.Mui-checked': { color: 'primary.contrastText' },
											'&.Mui-checked + .MuiSwitch-track': { backgroundColor: 'secondary.main' },
										},
									},
									checkedIcon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
										_mui_icons_material_Brightness2__WEBPACK_IMPORTED_MODULE_16__.Z,
										{
											id: name + '-dark-mode-switch-icon-checked',
											sx: {
												color: selected
													? darkMode
														? 'primary.light'
														: 'primary.dark'
													: 'primary.contrastText',
											},
										},
									),
									icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
										_mui_icons_material_WbSunny__WEBPACK_IMPORTED_MODULE_17__.Z,
										{
											id: name + '-dark-mode-switch-icon-unchecked',
											sx: {
												color: selected
													? darkMode
														? 'primary.light'
														: 'primary.dark'
													: 'primary.contrastText',
											},
										},
									),
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)('label', {
								htmlFor: name + '-dark-mode-switch',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_18__.Z,
									{
										id: name + '-dark-mode-switch-label-' + (darkMode ? 'dark' : 'light'),
										variant: 'body2',
										sx: {
											fontWeight: 500,
											color: selected
												? darkMode
													? 'primary.light'
													: 'primary.dark'
												: 'primary.contrastText',
											cursor: 'pointer',
										},
										children: darkMode ? 'Dark Mode' : 'Light Mode',
									},
								),
							}),
						],
					},
				)
			}
			DarkModeSwitch.displayName = 'DarkModeSwitch'
			try {
				;(DarkModeSwitch.displayName = 'DarkModeSwitch'),
					(DarkModeSwitch.__docgenInfo = {
						description: '',
						displayName: 'DarkModeSwitch',
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
						(STORYBOOK_REACT_CLASSES['components/DarkModeSwitch.tsx#DarkModeSwitch'] = {
							docgenInfo: DarkModeSwitch.__docgenInfo,
							name: 'DarkModeSwitch',
							path: 'components/DarkModeSwitch.tsx#DarkModeSwitch',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/Drawer.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => DrawerComponent })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Drawer/Drawer.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/IconButton/IconButton.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/ChevronLeft.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function DrawerComponent(_ref) {
				var open = _ref.open,
					handleDrawerClose = _ref.handleDrawerClose,
					children = _ref.children,
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)(),
					darkMode = _useBoundStore.darkMode,
					theme = _useBoundStore.theme,
					isMobile = (0, _mui_material__WEBPACK_IMPORTED_MODULE_3__.Z)(theme.breakpoints.down('sm'))
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_4__.ZP,
					{
						id: 'drawer',
						sx: {
							width: '240px',
							flexShrink: 0,
							'& .MuiDrawer-paper': {
								width: '240px',
								boxSizing: 'border-box',
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
								color: 'primary.contrastText',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'flex-start',
							},
						},
						variant: isMobile ? 'temporary' : 'permanent',
						open,
						anchor: 'left',
						onClose: handleDrawerClose,
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
							react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
							{
								children: [
									isMobile &&
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
											_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
											{
												id: 'drawer-close-button-container',
												onClick: handleDrawerClose,
												sx: Object.assign(
													{
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'space-between',
														padding: 1,
													},
													theme.mixins.toolbar,
													{
														borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
														pt: 2,
														pb: 2,
														px: 0,
														width: '100%',
														height: '48px',
														cursor: 'pointer',
														'&:hover': { backgroundColor: 'primary.main' },
														'&:focus': { backgroundColor: 'primary.main' },
														'&:active': { backgroundColor: 'primary.main' },
													},
												),
												children: [
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
														_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,
														{
															id: 'drawer-close-button',
															sx: {
																color: 'primary.contrastText',
																height: '100%',
																borderRadius: 0,
																'&:hover': { backgroundColor: 'transparent' },
															},
															children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
																_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__.Z,
																{ id: 'drawer-close-button-icon', sx: { fontSize: 40 } },
															),
														},
													),
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('label', {
														id: 'drawer-close-button-label',
														htmlFor: 'drawer-close-button',
														children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
															_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,
															{
																id: 'drawer-close-button-label-text',
																sx: {
																	fontWeight: 500,
																	pr: 2,
																	color: 'primary.contrastText',
																	ml: 1,
																	cursor: 'pointer',
																	'&:hover': {
																		color: darkMode ? 'primary.light' : 'primary.dark',
																		transform: 'scale(1.1)',
																	},
																	'&:focus': {
																		color: darkMode ? 'primary.light' : 'primary.dark',
																		transform: 'scale(1.1)',
																	},
																	'&:active': {
																		color: darkMode ? 'primary.light' : 'primary.dark',
																		transform: 'scale(1.1)',
																	},
																},
																children: 'Close',
															},
														),
													}),
												],
											},
										),
									children,
								],
							},
						),
					},
				)
			}
			DrawerComponent.displayName = 'DrawerComponent'
			try {
				;(Drawer.displayName = 'Drawer'),
					(Drawer.__docgenInfo = {
						description: '',
						displayName: 'Drawer',
						props: {
							open: {
								defaultValue: null,
								description: '',
								name: 'open',
								required: !0,
								type: { name: 'boolean' },
							},
							handleDrawerClose: {
								defaultValue: null,
								description: '',
								name: 'handleDrawerClose',
								required: !0,
								type: { name: '() => void' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/Drawer.tsx#Drawer'] = {
							docgenInfo: Drawer.__docgenInfo,
							name: 'Drawer',
							path: 'components/Drawer.tsx#Drawer',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/DrawerButton.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/IconButton/IconButton.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				),
				DrawerButton = function DrawerButton(_ref) {
					var name = _ref.name,
						label = _ref.label,
						icon = _ref.icon,
						handleClick = _ref.handleClick
					return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
						_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,
						{
							id: name + '-drawer-button',
							onClick: handleClick,
							sx: {
								color: 'primary.contrastText',
								padding: 0,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '100%',
								borderRadius: 0,
								p: 4,
								'&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
								'&:active': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
							},
							children: [
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
									{
										id: name + '-drawer-button-label',
										variant: 'body1',
										sx: { fontSize: '1.2rem', fontWeight: 'bold' },
										children: label,
									},
								),
								icon,
							],
						},
					)
				}
			DrawerButton.displayName = 'DrawerButton'
			const __WEBPACK_DEFAULT_EXPORT__ = DrawerButton
			try {
				;(DrawerButton.displayName = 'DrawerButton'),
					(DrawerButton.__docgenInfo = {
						description: '',
						displayName: 'DrawerButton',
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
							icon: {
								defaultValue: null,
								description: '',
								name: 'icon',
								required: !0,
								type: { name: 'ReactNode' },
							},
							handleClick: {
								defaultValue: null,
								description: '',
								name: 'handleClick',
								required: !0,
								type: { name: '(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['components/DrawerButton.tsx#DrawerButton'] = {
							docgenInfo: DrawerButton.__docgenInfo,
							name: 'DrawerButton',
							path: 'components/DrawerButton.tsx#DrawerButton',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./components/Drawers/DashboardDrawer.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
				),
				next_auth_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./node_modules/.pnpm/next-auth@4.18.0_ph7ncimqkfipxkhrqa54rmxzeq/node_modules/next-auth/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Button/Button.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Avatar/Avatar.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Menu/Menu.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/MenuItem/MenuItem.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Dialog/Dialog.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/DialogContent/DialogContent.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/DialogContentText/DialogContentText.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/DialogActions/DialogActions.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/Menu.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/AccountCircle.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/Settings.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/Palette.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/Brightness7.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/Brightness4.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/ExitToApp.js',
				),
				_mui_material_styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/styles/useTheme.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				color2k__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
				),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./utils/helpers.ts'),
				_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./components/ColorPickerPopover.tsx',
				),
				_DrawerButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./components/DrawerButton.tsx',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
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
			var DashboardDrawer = function DashboardDrawer() {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					user = _useBoundStore.user,
					setDarkMode = _useBoundStore.setDarkMode,
					setCustomPalette = _useBoundStore.setCustomPalette,
					enqueueSnackbar = (0, notistack__WEBPACK_IMPORTED_MODULE_15__.Ds)().enqueueSnackbar,
					router = (0, next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)(),
					theme = (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_21__.Z)(),
					_useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(null), 2),
					anchorElMenu = _useState2[0],
					setAnchorElMenu = _useState2[1],
					_useState4 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(null), 2),
					colorPickerAnchorEl = _useState4[0],
					setColorPickerAnchorEl = _useState4[1],
					_useState6 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1), 2),
					colorPickerOpen = _useState6[0],
					setColorPickerOpen = _useState6[1],
					_useState8 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1), 2),
					signOutOpen = _useState8[0],
					setSignOutOpen = _useState8[1]
				;(0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(function () {
					var newMainColor = localStorage.getItem('customPalette')
					newMainColor &&
						setCustomPalette(
							Object.assign({}, customPalette, {
								primary: {
									main: newMainColor,
									light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(newMainColor, 0.1),
									dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(newMainColor, 0.1),
									contrastText: (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.RN)(newMainColor),
								},
								secondary: {
									main: (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(newMainColor),
									light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(
										(0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(newMainColor),
										0.1,
									),
									dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(
										(0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(newMainColor),
										0.1,
									),
									contrastText: (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.RN)(
										(0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(newMainColor),
									),
								},
							}),
						)
				}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(
						function () {
							var savedDarkMode = localStorage.getItem('darkMode')
							savedDarkMode && setDarkMode(JSON.parse(savedDarkMode))
						},
						[darkMode, setDarkMode],
					)
				var handleCloseMenu = function handleCloseMenu() {
						setAnchorElMenu(null)
					},
					handleCloseSignOut = function handleCloseSignOut() {
						setSignOutOpen(!1)
					}
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
					_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
					{
						id: 'dashboard-drawer',
						component: 'nav',
						sx: {
							width: { sm: 240 },
							flexShrink: { sm: 0 },
							'& .MuiDrawer-paper': {
								width: 240,
								boxSizing: 'border-box',
								backgroundColor: theme.palette.background.default,
							},
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							height: '100%',
						},
						children: [
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
								_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
								{
									id: 'dashboard-drawer-header',
									sx: Object.assign(
										{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'flex-end',
										},
										theme.mixins.toolbar,
									),
									children: [
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
											{
												id: 'dashboard-drawer-header-user',
												sx: {
													display: 'flex',
													alignItems: 'center',
													flexDirection: 'column',
													justifyContent: 'center',
													width: '100%',
												},
												children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
													'label',
													{
														htmlFor: 'avatar',
														style: { width: '100%' },
														children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
															_mui_material__WEBPACK_IMPORTED_MODULE_24__.Z,
															{
																id: 'dashboard-drawer-user-avatar',
																disableElevation: !0,
																sx: {
																	padding: 0,
																	display: 'flex',
																	flexDirection: 'column',
																	alignItems: 'center',
																	justifyContent: 'center',
																	height: '180px',
																	width: '100%',
																	borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
																},
																onClick: function onClick() {
																	return router.push('/profile')
																},
																children: [
																	(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
																		_mui_material__WEBPACK_IMPORTED_MODULE_25__.Z,
																		{
																			id: 'dashboard-drawer-user-avatar-image',
																			sx: {
																				width: '100px',
																				height: '100px',
																				border: '2px solid',
																				mb: 4,
																				borderColor: 'primary.contrastText',
																				'&:hover': {
																					transform: 'scale(1.05)',
																					transition: 'transform 0.2s',
																				},
																				'&:focus': {
																					transform: 'scale(1.05)',
																					transition: 'transform 0.2s',
																				},
																				'&:active': {
																					transform: 'scale(1.05)',
																					transition: 'transform 0.2s',
																				},
																			},
																			src: null == user ? void 0 : user.image,
																			alt: (null == user ? void 0 : user.name) + ' avatar',
																		},
																	),
																	null != user && user.name
																		? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
																				_mui_material__WEBPACK_IMPORTED_MODULE_26__.Z,
																				{
																					id: 'dashboard-drawer-user-avatar-name',
																					sx: {
																						fontSize: '1.2rem',
																						fontWeight: 'bold',
																						color: 'primary.contrastText',
																						'&:hover': {
																							color: darkMode ? 'primary.light' : 'primary.dark',
																							transform: 'scale(1.05)',
																							transition: 'transform 0.2s',
																						},
																						'&:focus': {
																							color: darkMode ? 'primary.light' : 'primary.dark',
																							transform: 'scale(1.05)',
																							transition: 'transform 0.2s',
																						},
																						'&:active': {
																							color: darkMode ? 'primary.light' : 'primary.dark',
																							transform: 'scale(1.05)',
																							transition: 'transform 0.2s',
																						},
																					},
																					children: user.name,
																				},
																		  )
																		: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
																				_mui_material__WEBPACK_IMPORTED_MODULE_26__.Z,
																				{
																					id: 'dashboard-drawer-user-avatar-name-placeholder',
																					sx: {
																						fontSize: '1.2rem',
																						fontWeight: 'bold',
																						color: 'primary.contrastText',
																						'&:hover': {
																							color: darkMode ? 'primary.light' : 'primary.dark',
																							transform: 'scale(1.05)',
																							transition: 'transform 0.2s',
																						},
																						'&:focus': {
																							color: darkMode ? 'primary.light' : 'primary.dark',
																							transform: 'scale(1.05)',
																							transition: 'transform 0.2s',
																						},
																						'&:active': {
																							color: darkMode ? 'primary.light' : 'primary.dark',
																							transform: 'scale(1.05)',
																							transition: 'transform 0.2s',
																						},
																					},
																					children: 'User',
																				},
																		  ),
																],
															},
														),
													},
												),
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
											_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
											{
												id: 'dashboard-drawer-header-actions',
												sx: {
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'center',
													justifyContent: 'center',
													width: '100%',
													padding: 1,
													borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
												},
												children: [
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
														_DrawerButton__WEBPACK_IMPORTED_MODULE_19__.Z,
														{
															name: 'dashboard-menu',
															label: 'Menu',
															icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
																_mui_icons_material__WEBPACK_IMPORTED_MODULE_27__.Z,
																{},
															),
															handleClick: function handleClickMenu(event) {
																setAnchorElMenu(event.currentTarget)
															},
														},
													),
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
														_DrawerButton__WEBPACK_IMPORTED_MODULE_19__.Z,
														{
															name: 'dashboard-profile',
															label: 'Profile',
															icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
																_mui_icons_material__WEBPACK_IMPORTED_MODULE_28__.Z,
																{},
															),
															handleClick: function handleClick() {
																return router.push('/profile')
															},
														},
													),
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
														_DrawerButton__WEBPACK_IMPORTED_MODULE_19__.Z,
														{
															name: 'dashboard-settings',
															label: 'Settings',
															icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
																_mui_icons_material__WEBPACK_IMPORTED_MODULE_29__.Z,
																{},
															),
															handleClick: function handleClick() {
																return router.push('/settings')
															},
														},
													),
												],
											},
										),
									],
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
								_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
								{
									id: 'dashboard-drawer-footer',
									sx: {
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										width: '100%',
										padding: 1,
										borderTop: '1px solid rgba(255, 255, 255, 0.12)',
									},
									children: [
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_DrawerButton__WEBPACK_IMPORTED_MODULE_19__.Z,
											{
												name: 'dashboard-color-picker',
												label: 'Theme Color',
												icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
													_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__.Z,
													{},
												),
												handleClick: function handleClickColorPicker(event) {
													setColorPickerAnchorEl(event.currentTarget), setColorPickerOpen(!0)
												},
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_DrawerButton__WEBPACK_IMPORTED_MODULE_19__.Z,
											{
												name: 'dashboard-dark-mode',
												label: 'Dark Mode',
												icon: darkMode
													? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
															_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__.Z,
															{},
													  )
													: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
															_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__.Z,
															{},
													  ),
												handleClick: function handleClickDarkMode() {
													localStorage.setItem('darkMode', JSON.stringify(!darkMode)),
														setDarkMode(!darkMode)
												},
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_DrawerButton__WEBPACK_IMPORTED_MODULE_19__.Z,
											{
												name: 'dashboard-logout',
												label: 'Logout',
												icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
													_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__.Z,
													{},
												),
												handleClick: function handleClickLogout() {
													handleCloseMenu(), setSignOutOpen(!0)
												},
											},
										),
									],
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
								_mui_material__WEBPACK_IMPORTED_MODULE_34__.Z,
								{
									id: 'dashboard-drawer-header-actions-menu',
									anchorEl: anchorElMenu,
									open: Boolean(anchorElMenu),
									onClose: handleCloseMenu,
									anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
									transformOrigin: { vertical: 'top', horizontal: 'center' },
									MenuListProps: { 'aria-labelledby': 'drawer-header-actions-menu-button' },
									sx: {
										'& .MuiPaper-root': {
											backgroundColor: 'primary.main',
											color: 'primary.contrastText',
										},
									},
									children: [
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_35__.Z,
											{
												id: 'dashboard-drawer-header-actions-menu-item-1',
												onClick: function onClick() {
													return router.push('/')
												},
												children: 'Home',
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_35__.Z,
											{
												id: 'dashboard-drawer-header-actions-menu-item-2',
												onClick: function onClick() {
													return router.push('/about')
												},
												children: 'About',
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_35__.Z,
											{
												id: 'dashboard-drawer-header-actions-menu-item-3',
												onClick: function onClick() {
													return router.push('/contact')
												},
												children: 'Contact',
											},
										),
									],
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
								_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_18__.Z,
								{
									name: 'dashboard-drawer',
									open: colorPickerOpen,
									anchorEl: colorPickerAnchorEl,
									handleClose: function handleCloseColorPicker() {
										document.addEventListener('click', function handleClickOutside(event) {
											colorPickerAnchorEl &&
												!colorPickerAnchorEl.contains(event.target) &&
												(setColorPickerAnchorEl(null),
												setColorPickerOpen(!1),
												document.removeEventListener('click', handleClickOutside))
										})
										document.addEventListener('keydown', function handleEscape(event) {
											'Escape' === event.key &&
												(setColorPickerAnchorEl(null),
												setColorPickerOpen(!1),
												document.removeEventListener('keydown', handleEscape))
										}),
											setColorPickerAnchorEl(null),
											setColorPickerOpen(!1)
									},
									handleColorChange: function handleColorChange(color) {
										setCustomPalette(
											Object.assign({}, customPalette, {
												primary: {
													main: color,
													light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(color, 0.1),
													dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(color, 0.1),
													contrastText: (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.RN)(color),
												},
												secondary: {
													main: (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(color),
													light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(
														(0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(color),
														0.1,
													),
													dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(
														(0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(color),
														0.1,
													),
													contrastText: (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.RN)(
														(0, _utils_helpers__WEBPACK_IMPORTED_MODULE_17__.pw)(color),
													),
												},
											}),
										),
											localStorage.setItem('customPalette', color)
									},
									anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
									transformOrigin: { vertical: 'top', horizontal: 'left' },
								},
							),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
								_mui_material__WEBPACK_IMPORTED_MODULE_36__.Z,
								{
									open: signOutOpen,
									id: 'dashboard-sign-out-dialog',
									onClose: handleCloseSignOut,
									'aria-labelledby': 'sign-out-dialog-title',
									'aria-describedby': 'sign-out-dialog-description',
									sx: {
										'& .MuiPaper-root': {
											backgroundColor: 'primary.main',
											color: 'primary.contrastText',
										},
									},
									children: [
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_37__.Z,
											{
												id: 'dashboard-sign-out-dialog-title',
												sx: { backgroundColor: 'primary.main', color: 'primary.contrastText' },
												children: 'Sign Out?',
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_38__.Z,
											{
												id: 'dashboard-sign-out-dialog-content',
												sx: { backgroundColor: 'primary.main', color: 'primary.contrastText' },
												children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
													_mui_material__WEBPACK_IMPORTED_MODULE_39__.Z,
													{
														id: 'dashboard-sign-out-dialog-description',
														sx: { backgroundColor: 'primary.main', color: 'primary.contrastText' },
														children: 'Are you sure you want to sign out?',
													},
												),
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
											_mui_material__WEBPACK_IMPORTED_MODULE_40__.Z,
											{
												id: 'dashboard-sign-out-dialog-actions',
												sx: {
													backgroundColor: 'primary.main',
													color: 'primary.contrastText',
													display: 'flex',
													justifyContent: 'space-evenly',
												},
												children: [
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
														_mui_material__WEBPACK_IMPORTED_MODULE_24__.Z,
														{
															id: 'dashboard-sign-out-dialog-cancel-button',
															onClick: handleCloseSignOut,
															sx: {
																backgroundColor: 'primary.main',
																color: 'primary.contrastText',
																'&:hover': {
																	backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
																},
															},
															children: 'Cancel',
														},
													),
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
														_mui_material__WEBPACK_IMPORTED_MODULE_24__.Z,
														{
															id: 'dashboard-sign-out-dialog-confirm-button',
															onClick: function handleSignOut() {
																localStorage.removeItem('token'),
																	enqueueSnackbar('Logged out successfully', {
																		variant: 'success',
																		autoHideDuration: 3e3,
																	}),
																	(0, next_auth_react__WEBPACK_IMPORTED_MODULE_14__.signOut)({
																		callbackUrl: '/login',
																	})
															},
															autoFocus: !0,
															sx: {
																backgroundColor: 'primary.main',
																color: 'primary.contrastText',
																'&:hover': {
																	backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
																},
															},
															children: 'Confirm',
														},
													),
												],
											},
										),
									],
								},
							),
						],
					},
				)
			}
			DashboardDrawer.displayName = 'DashboardDrawer'
			const __WEBPACK_DEFAULT_EXPORT__ = DashboardDrawer
		},
		'./components/EmailInput.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => EmailInput })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/TextField/TextField.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function EmailInput(_ref) {
				var name = _ref.name,
					value = _ref.value,
					setValue = _ref.setValue,
					handleEnter = _ref.handleEnter,
					_ref$disabled = _ref.disabled,
					disabled = void 0 !== _ref$disabled && _ref$disabled,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)().darkMode
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
						onKeyDown: handleEnter,
						disabled,
						sx: {
							color: 'primary.contrastText',
							width: '80%',
							marginBottom: 1,
							'& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'primary.contrastText' } },
							'& .MuiFormLabel-root': { color: 'primary.contrastText' },
							'& .MuiInputBase-input': {
								color: 'primary.contrastText',
								'&:disabled': {
									color: 'lightGray',
									WebkitTextFillColor: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
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
							handleEnter: {
								defaultValue: null,
								description: '',
								name: 'handleEnter',
								required: !1,
								type: { name: '((e: KeyboardEvent<Element>) => void)' },
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
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/AppBar/AppBar.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Toolbar/Toolbar.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/IconButton/IconButton.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/esm/ChevronRight.js',
				),
				_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('./components/Drawer.tsx'),
				_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/DarkModeSwitch.tsx',
				),
				_ColorPickerIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/ColorPickerIcon.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			function Layout(_ref) {
				var name = _ref.name,
					children = _ref.children,
					drawerChildren = _ref.drawerChildren,
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					theme = _useBoundStore.theme,
					isMobile = (0, _mui_material__WEBPACK_IMPORTED_MODULE_18__.Z)(
						theme.breakpoints.down('sm'),
					),
					_useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1), 2),
					drawerOpen = _useState2[0],
					setDrawerOpen = _useState2[1],
					_useState4 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1), 2),
					selected = _useState4[0],
					setSelected = _useState4[1]
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,
					{
						children: [
							drawerChildren &&
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
									_Drawer__WEBPACK_IMPORTED_MODULE_13__.Z,
									{
										open: drawerOpen,
										handleDrawerClose: function handleDrawerClose() {
											return setDrawerOpen(!1)
										},
										children: drawerChildren,
									},
								),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
								_mui_material__WEBPACK_IMPORTED_MODULE_19__.Z,
								{
									id: name + '-layout-container',
									sx: {
										display: 'flex',
										'& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
									},
									children: [
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_20__.Z,
											{
												id: name + '-app-bar',
												position: 'fixed',
												sx: {
													backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
													color: customPalette.primary.contrastText,
													transition: theme.transitions.create(['width', 'margin'], {
														easing: theme.transitions.easing.sharp,
														duration: theme.transitions.duration.leavingScreen,
													}),
													width: isMobile || !drawerChildren ? '100%' : 'calc(100% - 240px)',
													ml: '' + (isMobile || !drawerChildren ? 0 : '240px'),
													height: '64px',
												},
												children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
													_mui_material__WEBPACK_IMPORTED_MODULE_21__.Z,
													{
														id: name + '-toolbar',
														sx: {
															display: 'flex',
															justifyContent: 'space-between',
															alignItems: 'center',
														},
														children: [
															isMobile &&
																drawerChildren &&
																(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
																	_mui_material__WEBPACK_IMPORTED_MODULE_19__.Z,
																	{
																		id: name + '-toolbar-collapse-drawer',
																		onMouseEnter: function onMouseEnter() {
																			return setSelected(!0)
																		},
																		onMouseLeave: function onMouseLeave() {
																			return setSelected(!1)
																		},
																		onFocus: function onFocus() {
																			return setSelected(!0)
																		},
																		onBlur: function onBlur() {
																			return setSelected(!1)
																		},
																		sx: {
																			display: 'flex',
																			flexDirection: 'column',
																			justifyContent: 'center',
																			alignItems: 'center',
																		},
																		children: [
																			(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
																				_mui_material__WEBPACK_IMPORTED_MODULE_22__.Z,
																				{
																					id: name + '-toolbar-collapse-drawer-icon',
																					color: 'inherit',
																					'aria-labelledby': name + '-toolbar-collapse-drawer-text',
																					onClick: function onClick() {
																						return setDrawerOpen(!0)
																					},
																					edge: 'start',
																					sx: Object.assign(
																						{
																							color: customPalette.primary.contrastText,
																							cursor: 'pointer',
																							mx: 4,
																						},
																						drawerOpen && { display: 'none' },
																					),
																					children: (0,
																					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
																						_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__.Z,
																						{
																							id: name + '-toolbar-collapse-drawer-icon',
																							sx: {
																								color: selected
																									? darkMode
																										? 'primary.light'
																										: 'primary.dark'
																									: 'primary.contrastText',
																							},
																						},
																					),
																				},
																			),
																			(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
																				'label',
																				{
																					htmlFor: name + '-toolbar-collapse-drawer-icon',
																					children: (0,
																					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
																						_mui_material__WEBPACK_IMPORTED_MODULE_24__.Z,
																						{
																							id: name + '-toolbar-collapse-drawer-text',
																							variant: 'body1',
																							sx: Object.assign(
																								{
																									fontWeight: 500,
																									ml: 1,
																									cursor: 'pointer',
																									color: selected
																										? darkMode
																											? 'primary.light'
																											: 'primary.dark'
																										: 'primary.contrastText',
																								},
																								drawerOpen && { display: 'none' },
																							),
																							children: 'Open',
																						},
																					),
																				},
																			),
																		],
																	},
																),
															(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
																_mui_material__WEBPACK_IMPORTED_MODULE_24__.Z,
																{
																	id: name + '-toolbar-title',
																	variant: 'h6',
																	noWrap: !0,
																	component: 'h1',
																	sx: { flexGrow: 1, color: 'primary.contrastText' },
																	children: 'Next Auth Scaffold',
																},
															),
															(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
																_ColorPickerIcon__WEBPACK_IMPORTED_MODULE_15__.Z,
																{ name: name + '-toolbar' },
															),
															(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
																_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_14__.Z,
																{ name: name + '-toolbar' },
															),
														],
													},
												),
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_19__.Z,
											{
												id: name + '-layout-content',
												sx: {
													flexGrow: 1,
													padding: theme.spacing(3),
													transition: theme.transitions.create(['width', 'margin'], {
														easing: theme.transitions.easing.sharp,
														duration: theme.transitions.duration.leavingScreen,
													}),
													marginLeft: '240px',
													width: isMobile || !drawerChildren ? '100%' : 'calc(100% - 240px)',
													ml: '' + (isMobile || !drawerChildren ? 0 : '240px'),
													mt: '64px',
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'center',
													alignItems: 'center',
													height: 'calc(100vh - 64px)',
													backgroundColor: darkMode ? 'grey.900' : 'grey.100',
												},
												children,
											},
										),
									],
								},
							),
						],
					},
				)
			}
			try {
				;(Layout.displayName = 'Layout'),
					(Layout.__docgenInfo = {
						description: '',
						displayName: 'Layout',
						props: {
							name: {
								defaultValue: null,
								description: '',
								name: 'name',
								required: !0,
								type: { name: 'string' },
							},
							drawerChildren: {
								defaultValue: null,
								description: '',
								name: 'drawerChildren',
								required: !1,
								type: { name: 'ReactNode' },
							},
						},
					}),
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
			__webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.small.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.replace.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.exec.js',
				)
			var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./utils/helpers.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
						darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)().darkMode,
						formattedName = name.replace(/ /g, '-').toLowerCase(),
						isMobile = (0, _mui_material__WEBPACK_IMPORTED_MODULE_7__.Z)('(max-width: 600px)'),
						isTablet = (0, _mui_material__WEBPACK_IMPORTED_MODULE_7__.Z)('(max-width: 960px)'),
						isDesktop = (0, _mui_material__WEBPACK_IMPORTED_MODULE_7__.Z)('(min-width: 960px)'),
						isLargeDesktop = (0, _mui_material__WEBPACK_IMPORTED_MODULE_7__.Z)(
							'(min-width: 1280px)',
						),
						isExtraLargeDesktop = (0, _mui_material__WEBPACK_IMPORTED_MODULE_7__.Z)(
							'(min-width: 1920px)',
						)
					return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
						_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,
						{
							id: formattedName + '-modal-container',
							sx: {
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
								gap: 2,
								backgroundColor: darkMode ? 'primary.dark' : 'primary.light',
								padding: 2,
								borderRadius: 2,
								boxShadow: 1,
								offset: 1,
								transform: 'translateY(-15%)',
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
							},
							children: [
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_9__.Z,
									{
										id: formattedName + '-modal-title',
										variant: 'h2',
										sx: { color: 'primary.contrastText', fontWeight: 600, marginBottom: 1 },
										children: (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_5__.LF)(name),
									},
								),
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,
									{
										id: formattedName + '-modal-notification-container',
										sx: {
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											gap: 1,
											width: '100%',
											height: small ? '15px' : '50px',
											marginBottom: 1,
										},
										children: loading
											? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
													_mui_material__WEBPACK_IMPORTED_MODULE_10__.Z,
													{
														id: formattedName + '-modal-loading',
														sx: { color: darkMode ? 'primary.light' : 'primary.dark' },
													},
											  )
											: error &&
											  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
													_mui_material__WEBPACK_IMPORTED_MODULE_9__.Z,
													{
														id: formattedName + '-modal-error',
														variant: 'body1',
														sx: { color: 'error.dark', fontSize: '1.5rem' },
														children: error,
													},
											  ),
									},
								),
								(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,
									{
										id: formattedName + '-modal-form',
										sx: {
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											gap: 2,
											width: '100%',
										},
										children,
									},
								),
							],
						},
					)
				}
			Modal.displayName = 'Modal'
			const __WEBPACK_DEFAULT_EXPORT__ = Modal
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/link.js',
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
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_2__.w)().darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,
					{
						id: name + '-modal-note-container',
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
								id: name + '-modal-note-link',
								style: { textDecoration: 'none' },
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
									{
										id: name + '-modal-note-link-text',
										variant: 'body1',
										sx: {
											color: 'primary.contrastText',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Button/Button.js',
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
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)().darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
					{
						id: name + '-navigation-button',
						variant: 'contained',
						onClick: handleClick,
						sx: {
							color: 'primary.contrastText',
							width: width || '40%',
							height: 35,
							backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
							'&:hover': { backgroundColor: 'primary.main' },
						},
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.replace.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.exec.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/TextField/TextField.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/IconButton/IconButton.js',
				),
				_VisibilityIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/VisibilityIcon.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
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
			function PasswordInput(_ref) {
				var name = _ref.name,
					value = _ref.value,
					setValue = _ref.setValue,
					disabled = _ref.disabled,
					handleEnter = _ref.handleEnter,
					_ref$isConfirmPasswor = _ref.isConfirmPassword,
					isConfirmPassword = void 0 !== _ref$isConfirmPasswor && _ref$isConfirmPasswor,
					formattedName = name.replace(/ /g, '-').toLowerCase(),
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_15__.w)().darkMode,
					_useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1), 2),
					showPassword = _useState2[0],
					setShowPassword = _useState2[1],
					_useState4 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1), 2),
					hover = _useState4[0],
					setHover = _useState4[1]
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_17__.Z,
					{
						id: formattedName + (isConfirmPassword ? '-confirm' : '') + '-password-input',
						label: isConfirmPassword ? 'Confirm Password' : 'Password',
						variant: 'outlined',
						type: showPassword ? 'text' : 'password',
						value,
						onChange: function onChange(e) {
							return setValue(e.target.value)
						},
						onKeyDown: handleEnter,
						disabled,
						sx: {
							color: 'primary.contrastText',
							width: '80%',
							marginBottom: 1,
							'& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'primary.contrastText' } },
							'& .MuiFormLabel-root': { color: 'primary.contrastText' },
							'& .MuiInputBase-input': {
								color: 'primary.contrastText',
								'&:disabled': {
									color: 'lightGray',
									WebkitTextFillColor: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
								},
							},
							'& .Mui-disabled': {
								color: 'lightGray',
								'& .MuiOutlinedInput-notchedOutline': {
									borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
								},
							},
						},
						InputProps: {
							endAdornment: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
								_mui_material__WEBPACK_IMPORTED_MODULE_18__.Z,
								{
									id:
										formattedName +
										(isConfirmPassword ? '-confirm' : '') +
										'-password-input-show-hide-button',
									onClick: function onClick() {
										return setShowPassword(function (show) {
											return !show
										})
									},
									sx: { color: darkMode ? '#fff' : '#000' },
									onMouseEnter: function onMouseEnter() {
										return setHover(!0)
									},
									onMouseLeave: function onMouseLeave() {
										return setHover(!1)
									},
									children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
										_VisibilityIcon__WEBPACK_IMPORTED_MODULE_14__.Z,
										{ name: '' + formattedName, showPassword, hover, isConfirmPassword },
									),
								},
							),
						},
					},
				)
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
							handleEnter: {
								defaultValue: null,
								description: '',
								name: 'handleEnter',
								required: !1,
								type: { name: '((e: KeyboardEvent<Element>) => void)' },
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Button/Button.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
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
					disabled = _ref.disabled,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)().darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
					{
						id: name + '-submit-button',
						variant: 'contained',
						onClick: handleSubmit,
						disabled: !!disabled || loading,
						sx: {
							color: 'primary.contrastText',
							width: width || '40%',
							height: 35,
							backgroundColor: darkMode ? 'primary.light' : 'primary.dark',
							'&:hover': { backgroundColor: 'primary.main' },
						},
						children: loading
							? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,
									{
										id: name + '-submit-button-loading',
										size: 20,
										sx: { color: 'primary.contrastText' },
									},
							  )
							: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
									{
										id: name + '-submit-button-text',
										variant: 'button',
										sx: { color: 'primary.contrastText' },
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
							disabled: {
								defaultValue: null,
								description: '',
								name: 'disabled',
								required: !1,
								type: { name: 'boolean' },
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
		'./components/VisibilityIcon.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => VisibilityIconComponent })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			)
			var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/Visibility.js',
				),
				_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/VisibilityOff.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			function VisibilityIconComponent(_ref) {
				var showPassword = _ref.showPassword,
					name = _ref.name,
					hover = _ref.hover,
					_ref$isConfirmPasswor = _ref.isConfirmPassword,
					isConfirmPassword = void 0 !== _ref$isConfirmPasswor && _ref$isConfirmPasswor,
					darkMode = (0, _store__WEBPACK_IMPORTED_MODULE_1__.w)().darkMode
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
					{
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
							_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								id: name + (isConfirmPassword ? '-confirm' : '') + '-password-box',
								sx: {
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								},
								children: showPassword
									? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
											{
												children: [
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
														_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__.Z,
														{
															id:
																name +
																(isConfirmPassword ? '-confirm' : '') +
																'-password-input-visibility-on-icon',
															sx: { color: darkMode ? '#fff' : '#000' },
														},
													),
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
														_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
														{
															id:
																name +
																(isConfirmPassword ? '-confirm' : '') +
																'-password-input-hide-password-text',
															variant: 'caption',
															sx: {
																color: 'primary.contrastText',
																fontWeight: hover ? 'bold' : 'normal',
															},
															children: 'Hide',
														},
													),
												],
											},
									  )
									: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
											react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
											{
												children: [
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
														_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_6__.Z,
														{
															id:
																name +
																(isConfirmPassword ? '-confirm' : '') +
																'-password-input-visibility-off-icon',
															sx: { color: darkMode ? '#fff' : '#000' },
														},
													),
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
														_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,
														{
															id:
																name +
																(isConfirmPassword ? '-confirm' : '') +
																'-password-input-show-password-text',
															variant: 'caption',
															sx: {
																color: 'primary.contrastText',
																fontWeight: hover ? 'bold' : 'normal',
															},
															children: 'Show',
														},
													),
												],
											},
									  ),
							},
						),
					},
				)
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
		},
		'./stories/components/ColorPickerIcon.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Selected: () => Selected,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_ColorPickerIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/ColorPickerIcon.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+system@5.10.16_ogriz7mfahdh34qnfautfro5yu/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('./theme/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./utils/helpers.ts'),
				color2k__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ColorPickerIcon',
				component: _components_ColorPickerIcon__WEBPACK_IMPORTED_MODULE_14__.Z,
			}
			var Template = function Template(args, _ref) {
				var theme = _ref.globals.theme,
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					customPalette = _useBoundStore.customPalette,
					setCustomPalette = _useBoundStore.setCustomPalette,
					setDarkMode = _useBoundStore.setDarkMode,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(
							(0, _theme__WEBPACK_IMPORTED_MODULE_17__.Sl)(customPalette, theme),
						),
						2,
					),
					customTheme = _useState2[0],
					setCustomTheme = _useState2[1]
				;(0, react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(
					function () {
						setCustomTheme((0, _theme__WEBPACK_IMPORTED_MODULE_17__.Sl)(customPalette, theme))
					},
					[customPalette, theme, setCustomTheme],
				),
					(0, react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
						var customPalette = localStorage.getItem('customPalette')
						customPalette && handleColorChange(customPalette)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(
						function () {
							console.log('here'), console.log('theme', theme), setDarkMode('dark' === theme)
						},
						[theme, setDarkMode],
					)
				var handleColorChange = (0, react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(
					function (color) {
						localStorage.setItem('customPalette', color)
						var contrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_18__.RN)(color),
							secondaryColor = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_18__.pw)(color),
							secondaryColorContrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_18__.RN)(
								secondaryColor,
							),
							newPalette = Object.assign({}, customPalette, {
								primary: {
									main: color,
									contrastText: contrast,
									light: (0, color2k__WEBPACK_IMPORTED_MODULE_20__.$n)(color, 0.2),
									dark: (0, color2k__WEBPACK_IMPORTED_MODULE_20__._j)(color, 0.2),
								},
								secondary: {
									main: secondaryColor,
									contrastText: secondaryColorContrast,
									light: (0, color2k__WEBPACK_IMPORTED_MODULE_20__.$n)(secondaryColor, 0.2),
									dark: (0, color2k__WEBPACK_IMPORTED_MODULE_20__._j)(secondaryColor, 0.2),
								},
							})
						setCustomPalette(newPalette)
					},
					[customPalette, setCustomPalette],
				)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_21__.Z,
					{
						theme: customTheme,
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'test',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(
									_components_ColorPickerIcon__WEBPACK_IMPORTED_MODULE_14__.Z,
									Object.assign({ name: 'test' }, args),
								),
							},
						),
					},
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = { name: 'test', selectedInit: !1 },
				Default = Template.bind({})
			Default.args = Object.assign({}, defaultArgs)
			var Selected = Template.bind({})
			;(Selected.args = Object.assign({}, defaultArgs, { selectedInit: !0 })),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"(args, {\n\tglobals: {\n\t\ttheme\n\t}\n}) => {\n\tconst { customPalette, setCustomPalette, setDarkMode } = useBoundStore()\n\tconst [customTheme, setCustomTheme] = useState(createCustomTheme(customPalette, theme))\n\n\tuseEffect(() => {\n\t\tsetCustomTheme(createCustomTheme(customPalette, theme))\n\t}, [customPalette, theme, setCustomTheme])\n\n\tuseEffect(() => {\n\t\tconst customPalette = localStorage.getItem('customPalette')\n\n\t\tif (customPalette) {\n\t\t\thandleColorChange(customPalette)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tconsole.log('here')\n\t\tconsole.log('theme', theme)\n\t\tsetDarkMode(theme === 'dark' ? true : false)\n\t}, [theme, setDarkMode])\n\n\tconst handleColorChange = useCallback(\n\t\t(color: string) => {\n\t\t\tlocalStorage.setItem('customPalette', color)\n\n\t\t\tconst contrast = getContrastColor(color)\n\t\t\tconst secondaryColor = getSecondaryColor(color)\n\t\t\tconst secondaryColorContrast = getContrastColor(secondaryColor)\n\n\t\t\tconst newPalette = {\n\t\t\t\t...customPalette,\n\t\t\t\tprimary: {\n\t\t\t\t\tmain: color,\n\t\t\t\t\tcontrastText: contrast,\n\t\t\t\t\tlight: lighten(color, 0.2),\n\t\t\t\t\tdark: darken(color, 0.2),\n\t\t\t\t},\n\t\t\t\tsecondary: {\n\t\t\t\t\tmain: secondaryColor,\n\t\t\t\t\tcontrastText: secondaryColorContrast,\n\t\t\t\t\tlight: lighten(secondaryColor, 0.2),\n\t\t\t\t\tdark: darken(secondaryColor, 0.2),\n\t\t\t\t},\n\t\t\t}\n\n\t\t\tsetCustomPalette(newPalette)\n\t\t},\n\t\t[customPalette, setCustomPalette],\n\t)\n\n\treturn (\n\t\t<ThemeProvider theme={customTheme}>\n\t\t\t<Modal name=\"test\" loading={false} error=\"\">\n\t\t\t\t<ColorPickerIcon name=\"test\" {...args} />\n\t\t\t</Modal>\n\t\t</ThemeProvider>\n\t)\n}",
						},
					},
					Default.parameters,
				)),
				(Selected.parameters = Object.assign(
					{
						storySource: {
							source:
								"(args, {\n\tglobals: {\n\t\ttheme\n\t}\n}) => {\n\tconst { customPalette, setCustomPalette, setDarkMode } = useBoundStore()\n\tconst [customTheme, setCustomTheme] = useState(createCustomTheme(customPalette, theme))\n\n\tuseEffect(() => {\n\t\tsetCustomTheme(createCustomTheme(customPalette, theme))\n\t}, [customPalette, theme, setCustomTheme])\n\n\tuseEffect(() => {\n\t\tconst customPalette = localStorage.getItem('customPalette')\n\n\t\tif (customPalette) {\n\t\t\thandleColorChange(customPalette)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tconsole.log('here')\n\t\tconsole.log('theme', theme)\n\t\tsetDarkMode(theme === 'dark' ? true : false)\n\t}, [theme, setDarkMode])\n\n\tconst handleColorChange = useCallback(\n\t\t(color: string) => {\n\t\t\tlocalStorage.setItem('customPalette', color)\n\n\t\t\tconst contrast = getContrastColor(color)\n\t\t\tconst secondaryColor = getSecondaryColor(color)\n\t\t\tconst secondaryColorContrast = getContrastColor(secondaryColor)\n\n\t\t\tconst newPalette = {\n\t\t\t\t...customPalette,\n\t\t\t\tprimary: {\n\t\t\t\t\tmain: color,\n\t\t\t\t\tcontrastText: contrast,\n\t\t\t\t\tlight: lighten(color, 0.2),\n\t\t\t\t\tdark: darken(color, 0.2),\n\t\t\t\t},\n\t\t\t\tsecondary: {\n\t\t\t\t\tmain: secondaryColor,\n\t\t\t\t\tcontrastText: secondaryColorContrast,\n\t\t\t\t\tlight: lighten(secondaryColor, 0.2),\n\t\t\t\t\tdark: darken(secondaryColor, 0.2),\n\t\t\t\t},\n\t\t\t}\n\n\t\t\tsetCustomPalette(newPalette)\n\t\t},\n\t\t[customPalette, setCustomPalette],\n\t)\n\n\treturn (\n\t\t<ThemeProvider theme={customTheme}>\n\t\t\t<Modal name=\"test\" loading={false} error=\"\">\n\t\t\t\t<ColorPickerIcon name=\"test\" {...args} />\n\t\t\t</Modal>\n\t\t</ThemeProvider>\n\t)\n}",
						},
					},
					Selected.parameters,
				))
			var __namedExportsOrder = ['Default', 'Selected']
		},
		'./stories/components/darkMode/ColorPickerPopover.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.date.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+system@5.10.16_ogriz7mfahdh34qnfautfro5yu/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js',
				),
				color2k__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_16__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/ColorPickerPopover.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./store/index.ts'),
				_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('./theme/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('./utils/helpers.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ColorPickerPopover/DarkMode',
				component: _components_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_17__.Z,
			}
			var Template = function Template() {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_18__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					setDarkMode = _useBoundStore.setDarkMode,
					setCustomPalette = _useBoundStore.setCustomPalette,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_15__.useState)(
							(0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, darkMode),
						),
						2,
					),
					theme = _useState2[0],
					setTheme = _useState2[1]
				;(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
					function () {
						setTheme((0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, !0))
					},
					[customPalette, darkMode, setDarkMode],
				),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						var customPalette = localStorage.getItem('customPalette')
						customPalette && handleColorChange(customPalette)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						darkMode || handleDarkModeChange(!0)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
						function () {
							var darkMode = localStorage.getItem('darkMode')
							darkMode && handleDarkModeChange('true' === darkMode)
						},
						[darkMode],
					)
				var handleColorChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (color) {
							localStorage.setItem('customPalette', color)
							var contrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(color),
								secondaryColor = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.pw)(color),
								secondaryColorContrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(
									secondaryColor,
								),
								newPalette = Object.assign({}, customPalette, {
									primary: {
										main: color,
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(color, 0.2),
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(color, 0.2),
										contrastText: contrast,
									},
									secondary: {
										main: secondaryColor,
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(secondaryColor, 0.2),
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(secondaryColor, 0.2),
										contrastText: secondaryColorContrast,
									},
								})
							setCustomPalette(newPalette)
						},
						[customPalette, setCustomPalette],
					),
					handleDarkModeChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (darkMode) {
							localStorage.setItem('darkMode', darkMode.toString()), setDarkMode(darkMode)
						},
						[setDarkMode],
					)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
					{
						theme,
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_16__.Z,
							{
								name: 'test',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
									_components_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_17__.Z,
									{
										name: 'test',
										open: !0,
										anchorEl: null,
										handleClose: function handleClose() {},
										handleColorChange,
										anchorOrigin: { vertical: 'top', horizontal: 'center' },
										transformOrigin: { vertical: 'top', horizontal: 'center' },
									},
								),
							},
						),
					},
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"() => {\n\tconst { darkMode, customPalette, setDarkMode, setCustomPalette } = useBoundStore()\n\tconst [theme, setTheme] = useState(createCustomTheme(customPalette, darkMode))\n\n\tuseEffect(() => {\n\t\tsetTheme(createCustomTheme(customPalette, true))\n\t}, [customPalette, darkMode, setDarkMode])\n\n\tuseEffect(() => {\n\t\tconst customPalette = localStorage.getItem('customPalette')\n\n\t\tif (customPalette) {\n\t\t\thandleColorChange(customPalette)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tif (!darkMode) {\n\t\t\thandleDarkModeChange(true)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tconst darkMode = localStorage.getItem('darkMode')\n\n\t\tif (darkMode) {\n\t\t\thandleDarkModeChange(darkMode === 'true')\n\t\t}\n\t}, [darkMode])\n\n\tconst handleColorChange = useCallback(\n\t\t(color: string) => {\n\t\t\tlocalStorage.setItem('customPalette', color)\n\n\t\t\tconst contrast = getContrastColor(color)\n\t\t\tconst secondaryColor = getSecondaryColor(color)\n\t\t\tconst secondaryColorContrast = getContrastColor(secondaryColor)\n\n\t\t\tconst newPalette = {\n\t\t\t\t...customPalette,\n\t\t\t\tprimary: {\n\t\t\t\t\tmain: color,\n\t\t\t\t\tdark: darken(color, 0.2),\n\t\t\t\t\tlight: lighten(color, 0.2),\n\t\t\t\t\tcontrastText: contrast,\n\t\t\t\t},\n\t\t\t\tsecondary: {\n\t\t\t\t\tmain: secondaryColor,\n\t\t\t\t\tdark: darken(secondaryColor, 0.2),\n\t\t\t\t\tlight: lighten(secondaryColor, 0.2),\n\t\t\t\t\tcontrastText: secondaryColorContrast,\n\t\t\t\t},\n\t\t\t}\n\n\t\t\tsetCustomPalette(newPalette)\n\t\t},\n\t\t[customPalette, setCustomPalette],\n\t)\n\n\tconst handleDarkModeChange = useCallback(\n\t\t(darkMode: boolean) => {\n\t\t\tlocalStorage.setItem('darkMode', darkMode.toString())\n\t\t\tsetDarkMode(darkMode)\n\t\t},\n\t\t[setDarkMode],\n\t)\n\n\treturn (\n\t\t<ThemeProvider theme={theme}>\n\t\t\t<Modal name=\"test\" loading={false} error=\"\">\n\t\t\t\t<ColorPickerPopover\n\t\t\t\t\tname=\"test\"\n\t\t\t\t\topen={true}\n\t\t\t\t\tanchorEl={null}\n\t\t\t\t\thandleClose={() => {}}\n\t\t\t\t\thandleColorChange={handleColorChange}\n\t\t\t\t\tanchorOrigin={{\n\t\t\t\t\t\tvertical: 'top',\n\t\t\t\t\t\thorizontal: 'center',\n\t\t\t\t\t}}\n\t\t\t\t\ttransformOrigin={{\n\t\t\t\t\t\tvertical: 'top',\n\t\t\t\t\t\thorizontal: 'center',\n\t\t\t\t\t}}\n\t\t\t\t/>\n\t\t\t</Modal>\n\t\t</ThemeProvider>\n\t)\n}",
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/ConfirmPasswordInput.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ConfirmPasswordInput/DarkMode',
				component: _components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'confirm-password-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					password = _useState2[0],
					setPassword = _useState2[1],
					_useState4 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					confirmPassword = _useState4[0],
					setConfirmPassword = _useState4[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign({}, args, { password, setPassword, confirmPassword, setConfirmPassword }),
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
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					Default.parameters,
				)),
				(Disabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					Disabled.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPassword.parameters,
				)),
				(WithConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithConfirmPassword.parameters,
				)),
				(WithPasswordAndConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPassword.parameters,
				)),
				(WithPasswordAndConfirmPasswordMismatch.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPasswordMismatch.parameters,
				)),
				(WithPasswordAndConfirmPasswordMismatchAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPasswordMismatchAndDisabled.parameters,
				)),
				(WithPasswordAndConfirmPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPasswordAndDisabled.parameters,
				)),
				(WithPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndDisabled.parameters,
				)),
				(WithConfirmPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithConfirmPasswordAndDisabled.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
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
		'./stories/components/darkMode/DarkModeSwitch.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/DarkModeSwitch.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/DarkModeSwitch/DarkMode',
				component: _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'dark-mode-switch-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({ name: 'test' }, args),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <DarkModeSwitch name="test" {...args} />\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/darkMode/Drawer.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_Drawer__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__('./components/Drawer.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./store/index.ts'),
				_mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Drawer/DarkMode',
				component: _components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(!0), 2),
					open = _useState2[0],
					setOpen = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_15__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
						_components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign(
							{
								open,
								handleDrawerClose: function handleDrawerClose() {
									return setOpen(!1)
								},
							},
							args,
							{
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_17__.Z,
									{
										sx: {
											width: '100%',
											height: '100%',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											fontSize: '3rem',
											fontWeight: 'bold',
										},
										children: 'Test',
									},
								),
							},
						),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [open, setOpen] = useState(true)\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<Drawer open={open} handleDrawerClose={() => setOpen(false)} {...args}>\n\t\t\t<Box\n\t\t\t\tsx={{\n\t\t\t\t\twidth: '100%',\n\t\t\t\t\theight: '100%',\n\t\t\t\t\tdisplay: 'flex',\n\t\t\t\t\tjustifyContent: 'center',\n\t\t\t\t\talignItems: 'center',\n\t\t\t\t\tfontSize: '3rem',\n\t\t\t\t\tfontWeight: 'bold',\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tTest\n\t\t\t</Box>\n\t\t</Drawer>\n\t)\n}",
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/darkMode/DrawerButton.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/Menu.js',
				),
				_components_Drawer__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__('./components/Drawer.tsx'),
				_components_DrawerButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/DrawerButton.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/DrawerButton/DarkMode',
				component: _components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(!0), 2),
					open = _useState2[0],
					setOpen = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign(
							{
								open,
								handleDrawerClose: function handleDrawerClose() {
									return setOpen(!1)
								},
							},
							args,
							{
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
									_components_DrawerButton__WEBPACK_IMPORTED_MODULE_15__.Z,
									{
										name: 'test',
										label: 'Test',
										icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
											_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_18__.Z,
											{},
										),
										handleClick: function handleClick() {},
									},
								),
							},
						),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst [open, setOpen] = useState(true)\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\tif (!darkMode) setDarkMode(true)\n\n\treturn (\n\t\t<Drawer open={open} handleDrawerClose={() => setOpen(false)} {...args}>\n\t\t\t<DrawerButton name="test" label="Test" icon={<Menu />} handleClick={() => {}} />\n\t\t</Drawer>\n\t)\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/darkMode/Drawers/DashboardDrawer.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.date.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+system@5.10.16_ogriz7mfahdh34qnfautfro5yu/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js',
				),
				color2k__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
				),
				_components_Drawer__WEBPACK_IMPORTED_MODULE_16__ =
					__webpack_require__('./components/Drawer.tsx'),
				_components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/Drawers/DashboardDrawer.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./store/index.ts'),
				_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('./theme/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('./utils/helpers.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Drawers/DashboardDrawer/DarkMode',
				component: _components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_17__.Z,
			}
			var Template = function Template() {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_18__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					setDarkMode = _useBoundStore.setDarkMode,
					setCustomPalette = _useBoundStore.setCustomPalette,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_15__.useState)(
							(0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, darkMode),
						),
						2,
					),
					theme = _useState2[0],
					setTheme = _useState2[1]
				;(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
					function () {
						setTheme((0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, !0))
					},
					[customPalette, darkMode, setDarkMode],
				),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						var customPalette = localStorage.getItem('customPalette')
						customPalette && handleColorChange(customPalette)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						darkMode || handleDarkModeChange(!0)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
						function () {
							var darkMode = localStorage.getItem('darkMode')
							darkMode && handleDarkModeChange('true' === darkMode)
						},
						[darkMode],
					)
				var handleColorChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (color) {
							localStorage.setItem('customPalette', color)
							var contrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(color),
								secondaryColor = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.pw)(color),
								secondaryColorContrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(
									secondaryColor,
								),
								newPalette = Object.assign({}, customPalette, {
									primary: {
										main: color,
										contrastText: contrast,
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(color, 0.2),
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(color, 0.2),
									},
									secondary: {
										main: secondaryColor,
										contrastText: secondaryColorContrast,
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(secondaryColor, 0.2),
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(secondaryColor, 0.2),
									},
								})
							setCustomPalette(newPalette)
						},
						[customPalette, setCustomPalette],
					),
					handleDarkModeChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (darkMode) {
							localStorage.setItem('darkMode', darkMode.toString()), setDarkMode(darkMode)
						},
						[setDarkMode],
					)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
					{
						theme,
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
							_components_Drawer__WEBPACK_IMPORTED_MODULE_16__.Z,
							{
								open: !0,
								handleDrawerClose: function handleDrawerClose() {},
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
									_components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_17__.Z,
									{},
								),
							},
						),
					},
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"() => {\n\tconst { darkMode, customPalette, setDarkMode, setCustomPalette } = useBoundStore()\n\n\tconst [theme, setTheme] = useState(createCustomTheme(customPalette, darkMode))\n\n\tuseEffect(() => {\n\t\tsetTheme(createCustomTheme(customPalette, true))\n\t}, [customPalette, darkMode, setDarkMode])\n\n\tuseEffect(() => {\n\t\tconst customPalette = localStorage.getItem('customPalette')\n\n\t\tif (customPalette) {\n\t\t\thandleColorChange(customPalette)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tif (!darkMode) {\n\t\t\thandleDarkModeChange(true)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tconst darkMode = localStorage.getItem('darkMode')\n\n\t\tif (darkMode) {\n\t\t\thandleDarkModeChange(darkMode === 'true')\n\t\t}\n\t}, [darkMode])\n\n\tconst handleColorChange = useCallback(\n\t\t(color: string) => {\n\t\t\tlocalStorage.setItem('customPalette', color)\n\n\t\t\tconst contrast = getContrastColor(color)\n\t\t\tconst secondaryColor = getSecondaryColor(color)\n\t\t\tconst secondaryColorContrast = getContrastColor(secondaryColor)\n\n\t\t\tconst newPalette = {\n\t\t\t\t...customPalette,\n\t\t\t\tprimary: {\n\t\t\t\t\tmain: color,\n\t\t\t\t\tcontrastText: contrast,\n\t\t\t\t\tlight: lighten(color, 0.2),\n\t\t\t\t\tdark: darken(color, 0.2),\n\t\t\t\t},\n\t\t\t\tsecondary: {\n\t\t\t\t\tmain: secondaryColor,\n\t\t\t\t\tcontrastText: secondaryColorContrast,\n\t\t\t\t\tlight: lighten(secondaryColor, 0.2),\n\t\t\t\t\tdark: darken(secondaryColor, 0.2),\n\t\t\t\t},\n\t\t\t}\n\n\t\t\tsetCustomPalette(newPalette)\n\t\t},\n\t\t[customPalette, setCustomPalette],\n\t)\n\n\tconst handleDarkModeChange = useCallback(\n\t\t(darkMode: boolean) => {\n\t\t\tlocalStorage.setItem('darkMode', darkMode.toString())\n\t\t\tsetDarkMode(darkMode)\n\t\t},\n\t\t[setDarkMode],\n\t)\n\n\treturn (\n\t\t<ThemeProvider theme={theme}>\n\t\t\t<Drawer open={true} handleDrawerClose={() => {}}>\n\t\t\t\t<DashboardDrawer />\n\t\t\t</Drawer>\n\t\t</ThemeProvider>\n\t)\n}",
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/darkMode/EmailInput.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Disabled: () => Disabled,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_EmailInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/EmailInput.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/EmailInput/DarkMode',
				component: _components_EmailInput__WEBPACK_IMPORTED_MODULE_14__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'email-input-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					email = _useState2[0],
					setEmail = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_EmailInput__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign({}, args, { value: email, setValue: setEmail }),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'email',
					value: '',
					setValue: function setValue() {},
					disabled: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var Disabled = Template.bind({})
			;(Disabled.args = Object.assign({}, defaultArgs, { disabled: !0 })),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [email, setEmail] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <EmailInput {...args} value={email} setValue={setEmail} />\n}",
						},
					},
					Default.parameters,
				)),
				(Disabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [email, setEmail] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <EmailInput {...args} value={email} setValue={setEmail} />\n}",
						},
					},
					Disabled.parameters,
				))
			var __namedExportsOrder = ['Default', 'Disabled']
		},
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Layout {...args} />\n}',
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
		'./stories/components/darkMode/Modal.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					All: () => All,
					Default: () => Default,
					Error: () => Error,
					Loading: () => Loading,
					Small: () => Small,
					SmallError: () => SmallError,
					SmallLoading: () => SmallLoading,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Modal/DarkMode',
				component: _components_Modal__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
						_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('div', {
						children: 'Modal Content',
					}),
					name: 'modal',
					loading: !1,
					error: '',
					small: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var Loading = Template.bind({})
			Loading.args = Object.assign({}, defaultArgs, { loading: !0 })
			var Error = Template.bind({})
			Error.args = Object.assign({}, defaultArgs, { error: 'Error Message' })
			var Small = Template.bind({})
			Small.args = Object.assign({}, defaultArgs, { small: !0 })
			var SmallLoading = Template.bind({})
			SmallLoading.args = Object.assign({}, defaultArgs, { small: !0, loading: !0 })
			var SmallError = Template.bind({})
			SmallError.args = Object.assign({}, defaultArgs, { small: !0, error: 'Error Message' })
			var All = Template.bind({})
			;(All.args = Object.assign({}, defaultArgs, {
				loading: !0,
				error: 'Error Message',
				small: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(Loading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Loading.parameters,
				)),
				(Error.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Error.parameters,
				)),
				(Small.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Small.parameters,
				)),
				(SmallLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					SmallLoading.parameters,
				)),
				(SmallError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					SmallError.parameters,
				)),
				(All.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					All.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'Loading',
				'Error',
				'Small',
				'SmallLoading',
				'SmallError',
				'All',
			]
		},
		'./stories/components/darkMode/ModalNote.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_ModalNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./components/ModalNote.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ModalNote/DarkMode',
				component: _components_ModalNote__WEBPACK_IMPORTED_MODULE_3__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Z,
							{
								name: 'modal-note',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_ModalNote__WEBPACK_IMPORTED_MODULE_3__.Z,
						Object.assign({ label: 'test', href: '' }, args),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ModalNote label="test" href="" {...args} />\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/darkMode/NavigationButton.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					ExtraLarge: () => ExtraLarge,
					Full: () => Full,
					Large: () => Large,
					Small: () => Small,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_NavigationButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/NavigationButton.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/NavigationButton/DarkMode',
				component: _components_NavigationButton__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'navigation-button-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_NavigationButton__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'navigation-button',
					label: 'Navigation Button',
					handleClick: function handleClick() {},
					width: '40%',
				},
				Small = Template.bind({})
			Small.args = Object.assign({}, defaultArgs, { label: 'nav', width: '20%' })
			var Default = Template.bind({})
			Default.args = defaultArgs
			var Large = Template.bind({})
			Large.args = Object.assign({}, defaultArgs, { width: '60%' })
			var ExtraLarge = Template.bind({})
			ExtraLarge.args = Object.assign({}, defaultArgs, { width: '80%' })
			var Full = Template.bind({})
			;(Full.args = Object.assign({}, defaultArgs, { width: '100%' })),
				(Small.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Small.parameters,
				)),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(Large.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Large.parameters,
				)),
				(ExtraLarge.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					ExtraLarge.parameters,
				)),
				(Full.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Full.parameters,
				))
			var __namedExportsOrder = ['Small', 'Default', 'Large', 'ExtraLarge', 'Full']
		},
		'./stories/components/darkMode/PasswordInput.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					ConfirmPassword: () => ConfirmPassword,
					ConfirmPasswordDisabled: () => ConfirmPasswordDisabled,
					Default: () => Default,
					Disabled: () => Disabled,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_PasswordInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/PasswordInput.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/PasswordInput/DarkMode',
				component: _components_PasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'password-input-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					value = _useState2[0],
					setValue = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_PasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign({}, args, { value, setValue }),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'password-input',
					value: '',
					setValue: function setValue() {},
					disabled: !1,
					isConfirmPassword: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var Disabled = Template.bind({})
			Disabled.args = Object.assign({}, defaultArgs, { disabled: !0 })
			var ConfirmPassword = Template.bind({})
			ConfirmPassword.args = Object.assign({}, defaultArgs, { isConfirmPassword: !0 })
			var ConfirmPasswordDisabled = Template.bind({})
			;(ConfirmPasswordDisabled.args = Object.assign({}, defaultArgs, {
				isConfirmPassword: !0,
				disabled: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					Default.parameters,
				)),
				(Disabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					Disabled.parameters,
				)),
				(ConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					ConfirmPassword.parameters,
				)),
				(ConfirmPasswordDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					ConfirmPasswordDisabled.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'Disabled',
				'ConfirmPassword',
				'ConfirmPasswordDisabled',
			]
		},
		'./stories/components/darkMode/SubmitButton.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Large: () => Large,
					Loading: () => Loading,
					Small: () => Small,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/SubmitButton.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/SubmitButton/DarkMode',
				component: _components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'submit-button-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'submit-button',
					label: 'Submit Button',
					loading: !1,
					handleSubmit: function handleSubmit() {},
					width: '40%',
				},
				Small = Template.bind({})
			Small.args = Object.assign({}, defaultArgs, { label: 'sub', width: '20%' })
			var Default = Template.bind({})
			Default.args = defaultArgs
			var Large = Template.bind({})
			Large.args = Object.assign({}, defaultArgs, { width: '60%' })
			var Loading = Template.bind({})
			;(Loading.args = Object.assign({}, defaultArgs, { loading: !0 })),
				(Small.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Small.parameters,
				)),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(Large.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Large.parameters,
				)),
				(Loading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Loading.parameters,
				))
			var __namedExportsOrder = ['Small', 'Default', 'Large', 'Loading']
		},
		'./stories/components/darkMode/VisibilityIcon.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					ConfirmPassword: () => ConfirmPassword,
					ConfirmPasswordHover: () => ConfirmPasswordHover,
					ConfirmPasswordShowPassword: () => ConfirmPasswordShowPassword,
					ConfirmPasswordShowPasswordHover: () => ConfirmPasswordShowPasswordHover,
					Default: () => Default,
					Hover: () => Hover,
					ShowPassword: () => ShowPassword,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_VisibilityIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/VisibilityIcon.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/VisibilityIcon/DarkMode',
				component: _components_VisibilityIcon__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'visibility-icon-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode || setDarkMode(!0),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_VisibilityIcon__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'visibility-icon',
					showPassword: !1,
					hover: !1,
					isConfirmPassword: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var ShowPassword = Template.bind({})
			ShowPassword.args = Object.assign({}, defaultArgs, { showPassword: !0 })
			var Hover = Template.bind({})
			Hover.args = Object.assign({}, defaultArgs, { hover: !0 })
			var ConfirmPassword = Template.bind({})
			ConfirmPassword.args = Object.assign({}, defaultArgs, { isConfirmPassword: !0 })
			var ConfirmPasswordShowPassword = Template.bind({})
			ConfirmPasswordShowPassword.args = Object.assign({}, defaultArgs, {
				showPassword: !0,
				isConfirmPassword: !0,
			})
			var ConfirmPasswordHover = Template.bind({})
			ConfirmPasswordHover.args = Object.assign({}, defaultArgs, {
				hover: !0,
				isConfirmPassword: !0,
			})
			var ConfirmPasswordShowPasswordHover = Template.bind({})
			;(ConfirmPasswordShowPasswordHover.args = Object.assign({}, defaultArgs, {
				showPassword: !0,
				hover: !0,
				isConfirmPassword: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(ShowPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ShowPassword.parameters,
				)),
				(Hover.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					Hover.parameters,
				)),
				(ConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPassword.parameters,
				)),
				(ConfirmPasswordShowPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPasswordShowPassword.parameters,
				)),
				(ConfirmPasswordHover.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPasswordHover.parameters,
				)),
				(ConfirmPasswordShowPasswordHover.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPasswordShowPasswordHover.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'ShowPassword',
				'Hover',
				'ConfirmPassword',
				'ConfirmPasswordShowPassword',
				'ConfirmPasswordHover',
				'ConfirmPasswordShowPasswordHover',
			]
		},
		'./stories/components/lightMode/ColorPickerPopover.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.date.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+system@5.10.16_ogriz7mfahdh34qnfautfro5yu/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js',
				),
				color2k__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_16__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/ColorPickerPopover.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./store/index.ts'),
				_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('./theme/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('./utils/helpers.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ColorPickerPopover/LightMode',
				component: _components_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_17__.Z,
			}
			var Template = function Template() {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_18__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					setDarkMode = _useBoundStore.setDarkMode,
					setCustomPalette = _useBoundStore.setCustomPalette,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_15__.useState)(
							(0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, darkMode),
						),
						2,
					),
					theme = _useState2[0],
					setTheme = _useState2[1]
				;(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
					function () {
						setTheme((0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, !0))
					},
					[customPalette, darkMode, setDarkMode],
				),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						var customPalette = localStorage.getItem('customPalette')
						customPalette && handleColorChange(customPalette)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						darkMode && handleDarkModeChange(!1)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
						function () {
							var darkMode = localStorage.getItem('darkMode')
							darkMode && handleDarkModeChange('true' === darkMode)
						},
						[darkMode],
					)
				var handleColorChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (color) {
							localStorage.setItem('customPalette', color)
							var contrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(color),
								secondaryColor = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.pw)(color),
								secondaryColorContrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(
									secondaryColor,
								),
								newPalette = Object.assign({}, customPalette, {
									primary: {
										main: color,
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(color, 0.2),
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(color, 0.2),
										contrastText: contrast,
									},
									secondary: {
										main: secondaryColor,
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(secondaryColor, 0.2),
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(secondaryColor, 0.2),
										contrastText: secondaryColorContrast,
									},
								})
							setCustomPalette(newPalette)
						},
						[customPalette, setCustomPalette],
					),
					handleDarkModeChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (darkMode) {
							localStorage.setItem('darkMode', darkMode.toString()), setDarkMode(darkMode)
						},
						[setDarkMode],
					)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
					{
						theme,
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_16__.Z,
							{
								name: 'test',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
									_components_ColorPickerPopover__WEBPACK_IMPORTED_MODULE_17__.Z,
									{
										name: 'test',
										open: !0,
										anchorEl: null,
										handleClose: function handleClose() {},
										handleColorChange,
										anchorOrigin: { vertical: 'top', horizontal: 'center' },
										transformOrigin: { vertical: 'top', horizontal: 'center' },
									},
								),
							},
						),
					},
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"() => {\n\tconst { darkMode, customPalette, setDarkMode, setCustomPalette } = useBoundStore()\n\tconst [theme, setTheme] = useState(createCustomTheme(customPalette, darkMode))\n\n\tuseEffect(() => {\n\t\tsetTheme(createCustomTheme(customPalette, true))\n\t}, [customPalette, darkMode, setDarkMode])\n\n\tuseEffect(() => {\n\t\tconst customPalette = localStorage.getItem('customPalette')\n\n\t\tif (customPalette) {\n\t\t\thandleColorChange(customPalette)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tif (darkMode) {\n\t\t\thandleDarkModeChange(false)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tconst darkMode = localStorage.getItem('darkMode')\n\n\t\tif (darkMode) {\n\t\t\thandleDarkModeChange(darkMode === 'true')\n\t\t}\n\t}, [darkMode])\n\n\tconst handleColorChange = useCallback(\n\t\t(color: string) => {\n\t\t\tlocalStorage.setItem('customPalette', color)\n\n\t\t\tconst contrast = getContrastColor(color)\n\t\t\tconst secondaryColor = getSecondaryColor(color)\n\t\t\tconst secondaryColorContrast = getContrastColor(secondaryColor)\n\n\t\t\tconst newPalette = {\n\t\t\t\t...customPalette,\n\t\t\t\tprimary: {\n\t\t\t\t\tmain: color,\n\t\t\t\t\tdark: darken(color, 0.2),\n\t\t\t\t\tlight: lighten(color, 0.2),\n\t\t\t\t\tcontrastText: contrast,\n\t\t\t\t},\n\t\t\t\tsecondary: {\n\t\t\t\t\tmain: secondaryColor,\n\t\t\t\t\tdark: darken(secondaryColor, 0.2),\n\t\t\t\t\tlight: lighten(secondaryColor, 0.2),\n\t\t\t\t\tcontrastText: secondaryColorContrast,\n\t\t\t\t},\n\t\t\t}\n\n\t\t\tsetCustomPalette(newPalette)\n\t\t},\n\t\t[customPalette, setCustomPalette],\n\t)\n\n\tconst handleDarkModeChange = useCallback(\n\t\t(darkMode: boolean) => {\n\t\t\tlocalStorage.setItem('darkMode', darkMode.toString())\n\t\t\tsetDarkMode(darkMode)\n\t\t},\n\t\t[setDarkMode],\n\t)\n\n\treturn (\n\t\t<ThemeProvider theme={theme}>\n\t\t\t<Modal name=\"test\" loading={false} error=\"\">\n\t\t\t\t<ColorPickerPopover\n\t\t\t\t\tname=\"test\"\n\t\t\t\t\topen={true}\n\t\t\t\t\tanchorEl={null}\n\t\t\t\t\thandleClose={() => {}}\n\t\t\t\t\thandleColorChange={handleColorChange}\n\t\t\t\t\tanchorOrigin={{\n\t\t\t\t\t\tvertical: 'top',\n\t\t\t\t\t\thorizontal: 'center',\n\t\t\t\t\t}}\n\t\t\t\t\ttransformOrigin={{\n\t\t\t\t\t\tvertical: 'top',\n\t\t\t\t\t\thorizontal: 'center',\n\t\t\t\t\t}}\n\t\t\t\t/>\n\t\t\t</Modal>\n\t\t</ThemeProvider>\n\t)\n}",
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/lightMode/ConfirmPasswordInput.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/ConfirmPasswordInput.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ConfirmPasswordInput/LightMode',
				component: _components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'confirm-password-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					password = _useState2[0],
					setPassword = _useState2[1],
					_useState4 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					confirmPassword = _useState4[0],
					setConfirmPassword = _useState4[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign({}, args, { password, setPassword, confirmPassword, setConfirmPassword }),
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
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					Default.parameters,
				)),
				(Disabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					Disabled.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPassword.parameters,
				)),
				(WithConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithConfirmPassword.parameters,
				)),
				(WithPasswordAndConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPassword.parameters,
				)),
				(WithPasswordAndConfirmPasswordMismatch.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPasswordMismatch.parameters,
				)),
				(WithPasswordAndConfirmPasswordMismatchAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPasswordMismatchAndDisabled.parameters,
				)),
				(WithPasswordAndConfirmPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndConfirmPasswordAndDisabled.parameters,
				)),
				(WithPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithPasswordAndDisabled.parameters,
				)),
				(WithConfirmPasswordAndDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
						},
					},
					WithConfirmPasswordAndDisabled.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [password, setPassword] = useState('')\n\tconst [confirmPassword, setConfirmPassword] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<ConfirmPasswordInput\n\t\t\t{...args}\n\t\t\tpassword={password}\n\t\t\tsetPassword={setPassword}\n\t\t\tconfirmPassword={confirmPassword}\n\t\t\tsetConfirmPassword={setConfirmPassword}\n\t\t/>\n\t)\n}",
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
		'./stories/components/lightMode/DarkModeSwitch.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/DarkModeSwitch.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/DarkModeSwitch/LightMode',
				component: _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'dark-mode-switch-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({ name: 'test' }, args),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <DarkModeSwitch name="test" {...args} />\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/lightMode/Drawer.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_Drawer__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__('./components/Drawer.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('./store/index.ts'),
				_mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Drawer/LightMode',
				component: _components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(!0), 2),
					open = _useState2[0],
					setOpen = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_15__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
						_components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign(
							{
								open,
								handleDrawerClose: function handleDrawerClose() {
									return setOpen(!1)
								},
							},
							args,
							{
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(
									_mui_material__WEBPACK_IMPORTED_MODULE_17__.Z,
									{
										sx: {
											width: '100%',
											height: '100%',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											fontSize: '3rem',
											fontWeight: 'bold',
										},
										children: 'Test',
									},
								),
							},
						),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [open, setOpen] = useState(true)\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<Drawer open={open} handleDrawerClose={() => setOpen(false)} {...args}>\n\t\t\t<Box\n\t\t\t\tsx={{\n\t\t\t\t\twidth: '100%',\n\t\t\t\t\theight: '100%',\n\t\t\t\t\tdisplay: 'flex',\n\t\t\t\t\tjustifyContent: 'center',\n\t\t\t\t\talignItems: 'center',\n\t\t\t\t\tfontSize: '3rem',\n\t\t\t\t\tfontWeight: 'bold',\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\tTest\n\t\t\t</Box>\n\t\t</Drawer>\n\t)\n}",
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/lightMode/DrawerButton.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/Menu.js',
				),
				_components_Drawer__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__('./components/Drawer.tsx'),
				_components_DrawerButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/DrawerButton.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/DrawerButton/LightMode',
				component: _components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(!0), 2),
					open = _useState2[0],
					setOpen = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_Drawer__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign(
							{
								open,
								handleDrawerClose: function handleDrawerClose() {
									return setOpen(!1)
								},
							},
							args,
							{
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
									_components_DrawerButton__WEBPACK_IMPORTED_MODULE_15__.Z,
									{
										name: 'test',
										label: 'Test',
										icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
											_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_18__.Z,
											{},
										),
										handleClick: function handleClick() {},
									},
								),
							},
						),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst [open, setOpen] = useState(true)\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\tif (darkMode) setDarkMode(false)\n\n\treturn (\n\t\t<Drawer open={open} handleDrawerClose={() => setOpen(false)} {...args}>\n\t\t\t<DrawerButton name="test" label="Test" icon={<Menu />} handleClick={() => {}} />\n\t\t</Drawer>\n\t)\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/lightMode/Drawers/DashboardDrawer.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.date.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+system@5.10.16_ogriz7mfahdh34qnfautfro5yu/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js',
				),
				color2k__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
				),
				_components_Drawer__WEBPACK_IMPORTED_MODULE_16__ =
					__webpack_require__('./components/Drawer.tsx'),
				_components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					'./components/Drawers/DashboardDrawer.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('./store/index.ts'),
				_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('./theme/index.ts'),
				_utils_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('./utils/helpers.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Drawers/DashboardDrawer/LightMode',
				component: _components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_17__.Z,
			}
			var Template = function Template() {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_18__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					setDarkMode = _useBoundStore.setDarkMode,
					setCustomPalette = _useBoundStore.setCustomPalette,
					_useState2 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_15__.useState)(
							(0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, darkMode),
						),
						2,
					),
					theme = _useState2[0],
					setTheme = _useState2[1]
				;(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
					function () {
						setTheme((0, _theme__WEBPACK_IMPORTED_MODULE_19__.Sl)(customPalette, !0))
					},
					[customPalette, darkMode, setDarkMode],
				),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						var customPalette = localStorage.getItem('customPalette')
						customPalette && handleColorChange(customPalette)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(function () {
						darkMode && handleDarkModeChange(!1)
					}, []),
					(0, react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(
						function () {
							var darkMode = localStorage.getItem('darkMode')
							darkMode && handleDarkModeChange('true' === darkMode)
						},
						[darkMode],
					)
				var handleColorChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (color) {
							localStorage.setItem('customPalette', color)
							var contrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(color),
								secondaryColor = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.pw)(color),
								secondaryColorContrast = (0, _utils_helpers__WEBPACK_IMPORTED_MODULE_20__.RN)(
									secondaryColor,
								),
								newPalette = Object.assign({}, customPalette, {
									primary: {
										main: color,
										contrastText: contrast,
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(color, 0.2),
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(color, 0.2),
									},
									secondary: {
										main: secondaryColor,
										contrastText: secondaryColorContrast,
										light: (0, color2k__WEBPACK_IMPORTED_MODULE_22__.$n)(secondaryColor, 0.2),
										dark: (0, color2k__WEBPACK_IMPORTED_MODULE_22__._j)(secondaryColor, 0.2),
									},
								})
							setCustomPalette(newPalette)
						},
						[customPalette, setCustomPalette],
					),
					handleDarkModeChange = (0, react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(
						function (darkMode) {
							localStorage.setItem('darkMode', darkMode.toString()), setDarkMode(darkMode)
						},
						[setDarkMode],
					)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
					_mui_material__WEBPACK_IMPORTED_MODULE_23__.Z,
					{
						theme,
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
							_components_Drawer__WEBPACK_IMPORTED_MODULE_16__.Z,
							{
								open: !0,
								handleDrawerClose: function handleDrawerClose() {},
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(
									_components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_17__.Z,
									{},
								),
							},
						),
					},
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"() => {\n\tconst { darkMode, customPalette, setDarkMode, setCustomPalette } = useBoundStore()\n\n\tconst [theme, setTheme] = useState(createCustomTheme(customPalette, darkMode))\n\n\tuseEffect(() => {\n\t\tsetTheme(createCustomTheme(customPalette, true))\n\t}, [customPalette, darkMode, setDarkMode])\n\n\tuseEffect(() => {\n\t\tconst customPalette = localStorage.getItem('customPalette')\n\n\t\tif (customPalette) {\n\t\t\thandleColorChange(customPalette)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tif (darkMode) {\n\t\t\thandleDarkModeChange(false)\n\t\t}\n\t}, [])\n\n\tuseEffect(() => {\n\t\tconst darkMode = localStorage.getItem('darkMode')\n\n\t\tif (darkMode) {\n\t\t\thandleDarkModeChange(darkMode === 'true')\n\t\t}\n\t}, [darkMode])\n\n\tconst handleColorChange = useCallback(\n\t\t(color: string) => {\n\t\t\tlocalStorage.setItem('customPalette', color)\n\n\t\t\tconst contrast = getContrastColor(color)\n\t\t\tconst secondaryColor = getSecondaryColor(color)\n\t\t\tconst secondaryColorContrast = getContrastColor(secondaryColor)\n\n\t\t\tconst newPalette = {\n\t\t\t\t...customPalette,\n\t\t\t\tprimary: {\n\t\t\t\t\tmain: color,\n\t\t\t\t\tcontrastText: contrast,\n\t\t\t\t\tlight: lighten(color, 0.2),\n\t\t\t\t\tdark: darken(color, 0.2),\n\t\t\t\t},\n\t\t\t\tsecondary: {\n\t\t\t\t\tmain: secondaryColor,\n\t\t\t\t\tcontrastText: secondaryColorContrast,\n\t\t\t\t\tlight: lighten(secondaryColor, 0.2),\n\t\t\t\t\tdark: darken(secondaryColor, 0.2),\n\t\t\t\t},\n\t\t\t}\n\n\t\t\tsetCustomPalette(newPalette)\n\t\t},\n\t\t[customPalette, setCustomPalette],\n\t)\n\n\tconst handleDarkModeChange = useCallback(\n\t\t(darkMode: boolean) => {\n\t\t\tlocalStorage.setItem('darkMode', darkMode.toString())\n\t\t\tsetDarkMode(darkMode)\n\t\t},\n\t\t[setDarkMode],\n\t)\n\n\treturn (\n\t\t<ThemeProvider theme={theme}>\n\t\t\t<Drawer open={true} handleDrawerClose={() => {}}>\n\t\t\t\t<DashboardDrawer />\n\t\t\t</Drawer>\n\t\t</ThemeProvider>\n\t)\n}",
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/lightMode/EmailInput.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Disabled: () => Disabled,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_EmailInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/EmailInput.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/EmailInput/LightMode',
				component: _components_EmailInput__WEBPACK_IMPORTED_MODULE_14__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'email-input-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					email = _useState2[0],
					setEmail = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_EmailInput__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign({}, args, { value: email, setValue: setEmail }),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'email',
					value: '',
					setValue: function setValue() {},
					disabled: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var Disabled = Template.bind({})
			;(Disabled.args = Object.assign({}, defaultArgs, { disabled: !0 })),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [email, setEmail] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <EmailInput {...args} value={email} setValue={setEmail} />\n}",
						},
					},
					Default.parameters,
				)),
				(Disabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [email, setEmail] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <EmailInput {...args} value={email} setValue={setEmail} />\n}",
						},
					},
					Disabled.parameters,
				))
			var __namedExportsOrder = ['Default', 'Disabled']
		},
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Layout {...args} />\n}',
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
		'./stories/components/lightMode/Modal.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					All: () => All,
					Default: () => Default,
					Error: () => Error,
					Loading: () => Loading,
					Small: () => Small,
					SmallError: () => SmallError,
					SmallLoading: () => SmallLoading,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/Modal/LightMode',
				component: _components_Modal__WEBPACK_IMPORTED_MODULE_2__.Z,
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
						_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)('div', {
						children: 'Modal Content',
					}),
					name: 'modal',
					loading: !1,
					error: '',
					small: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var Loading = Template.bind({})
			Loading.args = Object.assign({}, defaultArgs, { loading: !0 })
			var Error = Template.bind({})
			Error.args = Object.assign({}, defaultArgs, { error: 'Error Message' })
			var Small = Template.bind({})
			Small.args = Object.assign({}, defaultArgs, { small: !0 })
			var SmallLoading = Template.bind({})
			SmallLoading.args = Object.assign({}, defaultArgs, { small: !0, loading: !0 })
			var SmallError = Template.bind({})
			SmallError.args = Object.assign({}, defaultArgs, { small: !0, error: 'Error Message' })
			var All = Template.bind({})
			;(All.args = Object.assign({}, defaultArgs, {
				loading: !0,
				error: 'Error Message',
				small: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(Loading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Loading.parameters,
				)),
				(Error.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Error.parameters,
				)),
				(Small.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					Small.parameters,
				)),
				(SmallLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					SmallLoading.parameters,
				)),
				(SmallError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					SmallError.parameters,
				)),
				(All.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Modal {...args} />\n}',
						},
					},
					All.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'Loading',
				'Error',
				'Small',
				'SmallLoading',
				'SmallError',
				'All',
			]
		},
		'./stories/components/lightMode/ModalNote.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_ModalNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					'./components/ModalNote.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/ModalNote/LightMode',
				component: _components_ModalNote__WEBPACK_IMPORTED_MODULE_3__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_2__.Z,
							{
								name: 'modal-note',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_ModalNote__WEBPACK_IMPORTED_MODULE_3__.Z,
						Object.assign({ label: 'test', href: '' }, args),
					)
				)
			}
			Template.displayName = 'Template'
			var Default = Template.bind({})
			;(Default.args = {}),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ModalNote label="test" href="" {...args} />\n}',
						},
					},
					Default.parameters,
				))
			var __namedExportsOrder = ['Default']
		},
		'./stories/components/lightMode/NavigationButton.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					ExtraLarge: () => ExtraLarge,
					Full: () => Full,
					Large: () => Large,
					Small: () => Small,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_NavigationButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/NavigationButton.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/NavigationButton/LightMode',
				component: _components_NavigationButton__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'navigation-button-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_NavigationButton__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'navigation-button',
					label: 'Navigation Button',
					handleClick: function handleClick() {},
					width: '40%',
				},
				Small = Template.bind({})
			Small.args = Object.assign({}, defaultArgs, { label: 'nav', width: '20%' })
			var Default = Template.bind({})
			Default.args = defaultArgs
			var Large = Template.bind({})
			Large.args = Object.assign({}, defaultArgs, { width: '60%' })
			var ExtraLarge = Template.bind({})
			ExtraLarge.args = Object.assign({}, defaultArgs, { width: '80%' })
			var Full = Template.bind({})
			;(Full.args = Object.assign({}, defaultArgs, { width: '100%' })),
				(Small.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Small.parameters,
				)),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(Large.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Large.parameters,
				)),
				(ExtraLarge.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					ExtraLarge.parameters,
				)),
				(Full.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <NavigationButton {...args} />\n}',
						},
					},
					Full.parameters,
				))
			var __namedExportsOrder = ['Small', 'Default', 'Large', 'ExtraLarge', 'Full']
		},
		'./stories/components/lightMode/PasswordInput.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					ConfirmPassword: () => ConfirmPassword,
					ConfirmPasswordDisabled: () => ConfirmPasswordDisabled,
					Default: () => Default,
					Disabled: () => Disabled,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				_components_PasswordInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./components/PasswordInput.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_15__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/PasswordInput/LightMode',
				component: _components_PasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'password-input-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_13__.useState)(''), 2),
					value = _useState2[0],
					setValue = _useState2[1],
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_components_PasswordInput__WEBPACK_IMPORTED_MODULE_14__.Z,
						Object.assign({}, args, { value, setValue }),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'password-input',
					value: '',
					setValue: function setValue() {},
					disabled: !1,
					isConfirmPassword: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var Disabled = Template.bind({})
			Disabled.args = Object.assign({}, defaultArgs, { disabled: !0 })
			var ConfirmPassword = Template.bind({})
			ConfirmPassword.args = Object.assign({}, defaultArgs, { isConfirmPassword: !0 })
			var ConfirmPasswordDisabled = Template.bind({})
			;(ConfirmPasswordDisabled.args = Object.assign({}, defaultArgs, {
				isConfirmPassword: !0,
				disabled: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					Default.parameters,
				)),
				(Disabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					Disabled.parameters,
				)),
				(ConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					ConfirmPassword.parameters,
				)),
				(ConfirmPasswordDisabled.parameters = Object.assign(
					{
						storySource: {
							source:
								"args => {\n\tconst [value, setValue] = useState('')\n\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <PasswordInput {...args} value={value} setValue={setValue} />\n}",
						},
					},
					ConfirmPasswordDisabled.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'Disabled',
				'ConfirmPassword',
				'ConfirmPasswordDisabled',
			]
		},
		'./stories/components/lightMode/SubmitButton.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					Default: () => Default,
					Large: () => Large,
					Loading: () => Loading,
					Small: () => Small,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/SubmitButton.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/SubmitButton/LightMode',
				component: _components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'submit-button-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_SubmitButton__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'submit-button',
					label: 'Submit Button',
					loading: !1,
					handleSubmit: function handleSubmit() {},
					width: '40%',
				},
				Small = Template.bind({})
			Small.args = Object.assign({}, defaultArgs, { label: 'sub', width: '20%' })
			var Default = Template.bind({})
			Default.args = defaultArgs
			var Large = Template.bind({})
			Large.args = Object.assign({}, defaultArgs, { width: '60%' })
			var Loading = Template.bind({})
			;(Loading.args = Object.assign({}, defaultArgs, { loading: !0 })),
				(Small.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Small.parameters,
				)),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(Large.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Large.parameters,
				)),
				(Loading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <SubmitButton {...args} />\n}',
						},
					},
					Loading.parameters,
				))
			var __namedExportsOrder = ['Small', 'Default', 'Large', 'Loading']
		},
		'./stories/components/lightMode/VisibilityIcon.stories.tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, {
					ConfirmPassword: () => ConfirmPassword,
					ConfirmPasswordHover: () => ConfirmPasswordHover,
					ConfirmPasswordShowPassword: () => ConfirmPasswordShowPassword,
					ConfirmPasswordShowPasswordHover: () => ConfirmPasswordShowPasswordHover,
					Default: () => Default,
					Hover: () => Hover,
					ShowPassword: () => ShowPassword,
					__namedExportsOrder: () => __namedExportsOrder,
					default: () => __WEBPACK_DEFAULT_EXPORT__,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _components_VisibilityIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./components/VisibilityIcon.tsx',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__('./components/Modal.tsx'),
				_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Components/VisibilityIcon/LightMode',
				component: _components_VisibilityIcon__WEBPACK_IMPORTED_MODULE_2__.Z,
				decorators: [
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_3__.Z,
							{
								name: 'visibility-icon-modal',
								loading: !1,
								error: '',
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Template = function Template(args) {
				var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_4__.w)(),
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
						_components_VisibilityIcon__WEBPACK_IMPORTED_MODULE_2__.Z,
						Object.assign({}, args),
					)
				)
			}
			Template.displayName = 'Template'
			var defaultArgs = {
					name: 'visibility-icon',
					showPassword: !1,
					hover: !1,
					isConfirmPassword: !1,
				},
				Default = Template.bind({})
			Default.args = defaultArgs
			var ShowPassword = Template.bind({})
			ShowPassword.args = Object.assign({}, defaultArgs, { showPassword: !0 })
			var Hover = Template.bind({})
			Hover.args = Object.assign({}, defaultArgs, { hover: !0 })
			var ConfirmPassword = Template.bind({})
			ConfirmPassword.args = Object.assign({}, defaultArgs, { isConfirmPassword: !0 })
			var ConfirmPasswordShowPassword = Template.bind({})
			ConfirmPasswordShowPassword.args = Object.assign({}, defaultArgs, {
				showPassword: !0,
				isConfirmPassword: !0,
			})
			var ConfirmPasswordHover = Template.bind({})
			ConfirmPasswordHover.args = Object.assign({}, defaultArgs, {
				hover: !0,
				isConfirmPassword: !0,
			})
			var ConfirmPasswordShowPasswordHover = Template.bind({})
			;(ConfirmPasswordShowPasswordHover.args = Object.assign({}, defaultArgs, {
				showPassword: !0,
				hover: !0,
				isConfirmPassword: !0,
			})),
				(Default.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(ShowPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ShowPassword.parameters,
				)),
				(Hover.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					Hover.parameters,
				)),
				(ConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPassword.parameters,
				)),
				(ConfirmPasswordShowPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPasswordShowPassword.parameters,
				)),
				(ConfirmPasswordHover.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPasswordHover.parameters,
				)),
				(ConfirmPasswordShowPasswordHover.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <VisibilityIcon {...args} />\n}',
						},
					},
					ConfirmPasswordShowPasswordHover.parameters,
				))
			var __namedExportsOrder = [
				'Default',
				'ShowPassword',
				'Hover',
				'ConfirmPassword',
				'ConfirmPasswordShowPassword',
				'ConfirmPasswordHover',
				'ConfirmPasswordShowPasswordHover',
			]
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_reset_password_id_token___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./pages/reset-password/[id]/[token].tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/ResetPassword/DarkMode',
				component: _pages_reset_password_id_token___WEBPACK_IMPORTED_MODULE_2__.Z,
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode || setDarkMode(!0),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_reset_password_id_token___WEBPACK_IMPORTED_MODULE_2__.Z,
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithPasswordAndConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithPasswordAndConfirmPassword.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ResetPassword {...args} />\n}',
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
		'./stories/pages/darkMode/dashboard.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			)
			var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./pages/index.tsx'),
				next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./node_modules/.pnpm/next-auth@4.18.0_ph7ncimqkfipxkhrqa54rmxzeq/node_modules/next-auth/react/index.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/Dashboard/DarkMode',
				component: _pages__WEBPACK_IMPORTED_MODULE_1__.Z,
				decorators: [
					function (Story) {
						var _useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_3__.w)(),
							darkMode = _useBoundStore.darkMode,
							setDarkMode = _useBoundStore.setDarkMode
						return (
							darkMode || setDarkMode(!0),
							(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story, {})
						)
					},
					function (Story) {
						return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider,
							{
								session: {
									user: { firstName: 'John', lastName: 'Doe', email: 'test@example.com' },
									expires: '1',
								},
								children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Story, {}),
							},
						)
					},
				],
			}
			var Default = function Default() {
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
					_pages__WEBPACK_IMPORTED_MODULE_1__.Z,
					{},
				)
			}
			;(Default.displayName = 'Default'),
				(Default.parameters = { nextRouter: { pathname: '/' } }),
				(Default.parameters = Object.assign(
					{ storySource: { source: '() => <Dashboard />' } },
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
						(STORYBOOK_REACT_CLASSES['stories/pages/darkMode/dashboard.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/darkMode/dashboard.stories.tsx#Meta',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode || setDarkMode(!0),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <ForgotPassword {...args} />\n}',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode || setDarkMode(!0),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Login {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithoutRemember.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithoutRemember.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Login {...args} />\n}',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode || setDarkMode(!0),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithPasswordHidden.parameters,
				)),
				(WithConfirmPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithConfirmPasswordHidden.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (!darkMode) setDarkMode(true)\n\n\treturn <Signup {...args} />\n}',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				)
			var _pages_reset_password_id_token___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					'./pages/reset-password/[id]/[token].tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
				)
			const __WEBPACK_DEFAULT_EXPORT__ = {
				title: 'Pages/ResetPassword/LightMode',
				component: _pages_reset_password_id_token___WEBPACK_IMPORTED_MODULE_2__.Z,
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode && setDarkMode(!1),
						(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
							_pages_reset_password_id_token___WEBPACK_IMPORTED_MODULE_2__.Z,
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithPasswordAndConfirmPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithPasswordAndConfirmPassword.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ResetPassword {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ResetPassword {...args} />\n}',
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
		'./stories/pages/lightMode/dashboard.stories.tsx': (
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
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
					darkMode = _useBoundStore.darkMode,
					setDarkMode = _useBoundStore.setDarkMode
				return (
					darkMode && setDarkMode(!1),
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
								'() => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Dashboard />\n}',
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
						(STORYBOOK_REACT_CLASSES['stories/pages/lightMode/dashboard.stories.tsx#Meta'] = {
							docgenInfo: Meta.__docgenInfo,
							name: 'Meta',
							path: 'stories/pages/lightMode/dashboard.stories.tsx#Meta',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode && setDarkMode(!1),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ForgotPassword {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <ForgotPassword {...args} />\n}',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode && setDarkMode(!1),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Login {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPassword.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithPassword.parameters,
				)),
				(WithoutRemember.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithoutRemember.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Login {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Login {...args} />\n}',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
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
						darkMode = _useBoundStore.darkMode,
						setDarkMode = _useBoundStore.setDarkMode
					return (
						darkMode && setDarkMode(!1),
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
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					Default.parameters,
				)),
				(WithError.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithError.parameters,
				)),
				(WithEmail.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithEmail.parameters,
				)),
				(WithPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithPasswordHidden.parameters,
				)),
				(WithConfirmPasswordHidden.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithConfirmPasswordHidden.parameters,
				)),
				(WithLoading.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Signup {...args} />\n}',
						},
					},
					WithLoading.parameters,
				)),
				(WithAll.parameters = Object.assign(
					{
						storySource: {
							source:
								'args => {\n\tconst { darkMode, setDarkMode } = useBoundStore()\n\n\tif (darkMode) setDarkMode(false)\n\n\treturn <Signup {...args} />\n}',
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
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
				_components_Layout__WEBPACK_IMPORTED_MODULE_19__ =
					__webpack_require__('./components/Layout.tsx'),
				_mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js',
				),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
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
					setError = _useState6[1],
					handleForgotPassword = function handleForgotPassword() {
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
											  enqueueSnackbar(data.error, { variant: 'error', autoHideDuration: 3e3 }))
											: enqueueSnackbar(data.message, { variant: 'success', autoHideDuration: 2e3 })
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
					}
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
					_components_Layout__WEBPACK_IMPORTED_MODULE_19__.A,
					{
						name: 'forgot-password',
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_14__.Z,
							{
								name: 'forgot password',
								loading,
								error,
								children: [
									loading &&
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_21__.Z,
											{},
										),
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
										_components_EmailInput__WEBPACK_IMPORTED_MODULE_16__.Z,
										{
											name: 'forgot-password',
											value: email,
											setValue: setEmail,
											disabled: loading,
											handleEnter: function handleEnter(e) {
												'Enter' === e.key && handleForgotPassword()
											},
										},
									),
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
										_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_17__.Z,
										{
											name: 'forgot-password',
											children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
												_components_SubmitButton__WEBPACK_IMPORTED_MODULE_15__.Z,
												{
													name: 'forgot-password',
													label: 'Submit',
													loading,
													handleSubmit: handleForgotPassword,
												},
											),
										},
									),
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
										_components_ModalNote__WEBPACK_IMPORTED_MODULE_18__.Z,
										{ name: 'forgot-password-back', label: 'Back to Login', href: '/login' },
									),
								],
							},
						),
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
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Typography/Typography.js',
				),
				_components_Layout__WEBPACK_IMPORTED_MODULE_14__ =
					__webpack_require__('./components/Layout.tsx'),
				_components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					'./components/Drawers/DashboardDrawer.tsx',
				),
				_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('./store/index.ts'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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
			function Dashboard() {
				var _user$name,
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_16__.w)(),
					darkMode = _useBoundStore.darkMode,
					user = _useBoundStore.user,
					router = (0, next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)(),
					enqueueSnackbar = (0, notistack__WEBPACK_IMPORTED_MODULE_12__.Ds)().enqueueSnackbar,
					_useState2 = _slicedToArray((0, react__WEBPACK_IMPORTED_MODULE_11__.useState)(!1), 2),
					loading = _useState2[0],
					setLoading = _useState2[1]
				return (
					(0, react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(
						function () {
							setLoading(!0),
								localStorage.getItem('token') ||
									(enqueueSnackbar('You are not logged in', {
										variant: 'error',
										autoHideDuration: 3e3,
									}),
									router.push('/login')),
								setLoading(!1)
						},
						[router, enqueueSnackbar],
					),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
						_mui_material__WEBPACK_IMPORTED_MODULE_18__.Z,
						{
							id: 'dashboard',
							sx: { display: 'flex', flexDirection: 'column', height: '100%', width: '100%' },
							children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
								_components_Layout__WEBPACK_IMPORTED_MODULE_14__.A,
								{
									name: 'dashboard',
									drawerChildren: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
										_components_Drawers_DashboardDrawer__WEBPACK_IMPORTED_MODULE_15__.Z,
										{},
									),
									children: loading
										? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
												_mui_material__WEBPACK_IMPORTED_MODULE_18__.Z,
												{
													id: 'dashboard-loading',
													sx: {
														display: 'flex',
														flexDirection: 'column',
														justifyContent: 'center',
														alignItems: 'center',
														height: '100%',
														width: '100%',
													},
													children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
														_mui_material__WEBPACK_IMPORTED_MODULE_19__.Z,
														{
															id: 'dashboard-loading-spinner',
															sx: { color: 'primary.contrastText' },
														},
													),
												},
										  )
										: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
												_mui_material__WEBPACK_IMPORTED_MODULE_18__.Z,
												{
													id: 'dashboard-content',
													sx: {
														display: 'flex',
														flexDirection: 'column',
														justifyContent: 'center',
														alignItems: 'center',
														height: '100%',
														width: '100%',
													},
													children: [
														(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(
															_mui_material__WEBPACK_IMPORTED_MODULE_20__.Z,
															{
																id: 'dashboard-content-title',
																variant: 'h2',
																sx: { mb: 2, color: darkMode ? 'white' : 'black' },
																children: 'Dashboard',
															},
														),
														(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(
															_mui_material__WEBPACK_IMPORTED_MODULE_20__.Z,
															{
																id: 'dashboard-content-subtitle',
																variant: 'body1',
																sx: {
																	color: darkMode ? 'white' : 'black',
																	fontSize: '1.5rem',
																	mb: 12,
																},
																children: [
																	'Welcome ',
																	null !== (_user$name = null == user ? void 0 : user.name) &&
																	void 0 !== _user$name
																		? _user$name
																		: 'User',
																	'!',
																],
															},
														),
													],
												},
										  ),
								},
							),
						},
					)
				)
			}
			Dashboard.displayName = 'Dashboard'
		},
		'./pages/login.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => Login })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.define-property.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.async-iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.math.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.json.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.create.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.get-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.set-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.reverse.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				next_auth_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					'./node_modules/.pnpm/next-auth@4.18.0_ph7ncimqkfipxkhrqa54rmxzeq/node_modules/next-auth/react/index.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__('./store/index.ts'),
				_mui_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				_mui_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Checkbox/Checkbox.js',
				),
				_components_Modal__WEBPACK_IMPORTED_MODULE_28__ =
					__webpack_require__('./components/Modal.tsx'),
				_components_NavigationButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
					'./components/NavigationButton.tsx',
				),
				_components_SubmitButton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
					'./components/SubmitButton.tsx',
				),
				_components_EmailInput__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
					'./components/EmailInput.tsx',
				),
				_components_PasswordInput__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
					'./components/PasswordInput.tsx',
				),
				_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
					'./components/ActionButtonsContainer.tsx',
				),
				_components_ModalNote__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
					'./components/ModalNote.tsx',
				),
				_components_Layout__WEBPACK_IMPORTED_MODULE_35__ =
					__webpack_require__('./components/Layout.tsx'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
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
					_useBoundStore = (0, _store__WEBPACK_IMPORTED_MODULE_27__.w)(),
					darkMode = _useBoundStore.darkMode,
					customPalette = _useBoundStore.customPalette,
					setUser = _useBoundStore.setUser,
					router = (0, next_router__WEBPACK_IMPORTED_MODULE_25__.useRouter)(),
					enqueueSnackbar = (0, notistack__WEBPACK_IMPORTED_MODULE_26__.Ds)().enqueueSnackbar,
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
								var res, _res, data
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
														(0, next_auth_react__WEBPACK_IMPORTED_MODULE_24__.signIn)(
															'credentials',
															{ redirect: !1, username: email, password },
														)
													)
												case 10:
													if (null == (res = _context.sent) || !res.error) {
														_context.next = 15
														break
													}
													return setError(res.error), setLoading(!1), _context.abrupt('return')
												case 15:
													return (
														(_context.prev = 15),
														(_context.next = 18),
														fetch('/api/auth/token', {
															method: 'GET',
															headers: { 'Content-Type': 'application/json' },
														})
													)
												case 18:
													return (_res = _context.sent), (_context.next = 21), _res.json()
												case 21:
													if (!(data = _context.sent).error) {
														_context.next = 26
														break
													}
													return setError(data.error), setLoading(!1), _context.abrupt('return')
												case 26:
													localStorage.setItem('token', JSON.stringify(data.token)),
														setUser(data.token.user.user),
														enqueueSnackbar('Logged in successfully', {
															variant: 'success',
															autoHideDuration: 3e3,
														}),
														setLoading(!1),
														router.push('/'),
														(_context.next = 38)
													break
												case 33:
													return (
														(_context.prev = 33),
														(_context.t0 = _context.catch(15)),
														setError('There was an error fetching the token: ' + _context.t0),
														setLoading(!1),
														_context.abrupt('return')
													)
												case 38:
													_context.next = 44
													break
												case 40:
													;(_context.prev = 40),
														(_context.t1 = _context.catch(7)),
														setError('There was an error signing in: ' + _context.t1),
														setLoading(!1)
												case 44:
												case 'end':
													return _context.stop()
											}
									},
									_callee,
									null,
									[
										[7, 40],
										[15, 33],
									],
								)
							}),
						)
						return function handleLogin() {
							return _ref2.apply(this, arguments)
						}
					})(),
					handleEnter = function handleEnter(e) {
						'Enter' === e.key && handleLogin()
					}
				return (
					(0, react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(
						function () {
							localStorage.getItem('token') && router.push('/'),
								localStorage.getItem('email') && setEmail(localStorage.getItem('email'))
						},
						[router],
					),
					(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
						_components_Layout__WEBPACK_IMPORTED_MODULE_35__.A,
						{
							name: 'login',
							children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(
								_components_Modal__WEBPACK_IMPORTED_MODULE_28__.Z,
								{
									name: 'login',
									loading,
									error,
									children: [
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
											_components_EmailInput__WEBPACK_IMPORTED_MODULE_31__.Z,
											{
												name: 'login',
												value: email,
												setValue: setEmail,
												disabled: loading,
												handleEnter,
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
											_components_PasswordInput__WEBPACK_IMPORTED_MODULE_32__.Z,
											{
												name: 'login',
												value: password,
												setValue: setPassword,
												disabled: loading,
												handleEnter,
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(
											_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_33__.Z,
											{
												name: 'login',
												children: [
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
														_components_NavigationButton__WEBPACK_IMPORTED_MODULE_29__.Z,
														{
															name: 'login-signup',
															label: 'Sign up',
															handleClick: function handleClick() {
																return router.push('/signup')
															},
														},
													),
													(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
														_components_SubmitButton__WEBPACK_IMPORTED_MODULE_30__.Z,
														{ name: 'login', label: 'Log in', loading, handleSubmit: handleLogin },
													),
												],
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
											_mui_material__WEBPACK_IMPORTED_MODULE_37__.Z,
											{
												id: 'login-forgot-password-container',
												sx: {
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'end',
													alignItems: 'center',
													gap: 1,
												},
												children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsxs)(
													'label',
													{
														id: 'login-forgot-password-label',
														htmlFor: 'remember-me-checkbox',
														style: {
															display: 'flex',
															flexDirection: 'row',
															justifyContent: 'center',
															alignItems: 'center',
															gap: 1,
															color: customPalette.primary.contrastText,
															cursor: 'pointer',
															fontWeight: 600,
														},
														children: [
															'Remember Me',
															(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
																_mui_material__WEBPACK_IMPORTED_MODULE_38__.Z,
																{
																	id: 'remember-me-checkbox',
																	checked: remember,
																	onChange: function onChange() {
																		return setRemember(function (remember) {
																			return !remember
																		})
																	},
																	sx: {
																		color: 'primary.contrastText',
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
																			color: 'primary.contrastText',
																		},
																	},
																},
															),
														],
													},
												),
											},
										),
										(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_36__.jsx)(
											_components_ModalNote__WEBPACK_IMPORTED_MODULE_34__.Z,
											{
												name: 'login-forgot-password',
												label: 'Forgot password?',
												href: '/forgot-password',
											},
										),
									],
								},
							),
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
		'./pages/reset-password/[id]/[token].tsx': (
			__unused_webpack_module,
			__webpack_exports__,
			__webpack_require__,
		) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => ResetPassword })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				notistack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
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
				_components_Layout__WEBPACK_IMPORTED_MODULE_19__ =
					__webpack_require__('./components/Layout.tsx'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
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
					errorInit = void 0 === _ref$errorInit ? 'Unauthenticated' : _ref$errorInit,
					_ref$passwordInit = _ref.passwordInit,
					passwordInit = void 0 === _ref$passwordInit ? '' : _ref$passwordInit,
					_ref$confirmPasswordI = _ref.confirmPasswordInit,
					confirmPasswordInit = void 0 === _ref$confirmPasswordI ? '' : _ref$confirmPasswordI,
					_ref$loadingInit = _ref.loadingInit,
					loadingInit = void 0 !== _ref$loadingInit && _ref$loadingInit,
					router = (0, next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)(),
					_router$query = router.query,
					id = _router$query.id,
					token = _router$query.token,
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
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(errorInit),
						2,
					),
					error = _useState6[0],
					setError = _useState6[1],
					_useState8 = _slicedToArray(
						(0, react__WEBPACK_IMPORTED_MODULE_12__.useState)(loadingInit),
						2,
					),
					loading = _useState8[0],
					setLoading = _useState8[1],
					handleResetPassword = function handleResetPassword() {
						if ('' !== password && '' !== confirmPassword)
							if (password === confirmPassword) {
								setLoading(!0)
								try {
									fetch('/api/auth/reset-password', {
										method: 'POST',
										headers: { 'Content-Type': 'application/json' },
										body: JSON.stringify({ password, id }),
									})
										.then(function (res) {
											return res.json()
										})
										.then(function (data) {
											data.error
												? (enqueueSnackbar(data.error, { variant: 'error', autoHideDuration: 3e3 }),
												  setLoading(!1))
												: (enqueueSnackbar(data.message, {
														variant: 'success',
														autoHideDuration: 2e3,
												  }),
												  setLoading(!1),
												  router.push('/login'))
										})
								} catch (error) {
									enqueueSnackbar(error.message, { variant: 'error', autoHideDuration: 3e3 }),
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
					}
				;(0, react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(
					function () {
						token &&
							fetch('/api/auth/verify-token', {
								method: 'POST',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({ id: router.query.id, token: router.query.token }),
							})
								.then(function (res) {
									return res.json()
								})
								.then(function (data) {
									data.error ? setError(data.error) : setError('')
								})
					},
					[token],
				)
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
					_components_Layout__WEBPACK_IMPORTED_MODULE_19__.A,
					{
						name: 'reset-password',
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_15__.Z,
							{
								name: 'reset password',
								loading,
								error,
								children: [
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
										_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_16__.Z,
										{
											name: 'reset-password',
											password,
											setPassword,
											confirmPassword,
											setConfirmPassword,
											disabled: loading || '' !== error,
											handleEnter: function handleEnter(e) {
												'Enter' === e.key && handleResetPassword()
											},
										},
									),
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
										_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_18__.Z,
										{
											name: 'reset-password',
											children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(
												_components_SubmitButton__WEBPACK_IMPORTED_MODULE_17__.Z,
												{
													name: 'reset-password',
													handleSubmit: handleResetPassword,
													loading,
													label: 'reset',
													disabled: loading || '' !== error,
												},
											),
										},
									),
								],
							},
						),
					},
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
								defaultValue: { value: 'Unauthenticated' },
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
								defaultValue: null,
								description: '',
								name: 'emailInit',
								required: !1,
								type: { name: 'string' },
							},
						},
					}),
					'undefined' != typeof STORYBOOK_REACT_CLASSES &&
						(STORYBOOK_REACT_CLASSES['pages/reset-password/[id]/[token].tsx#token'] = {
							docgenInfo: token.__docgenInfo,
							name: 'token',
							path: 'pages/reset-password/[id]/[token].tsx#token',
						})
			} catch (__react_docgen_typescript_loader_error) {}
		},
		'./pages/signup.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, { Z: () => Signup })
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.promise.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.is-array.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.from.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.define-property.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.async-iterator.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.math.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.json.to-string-tag.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.create.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.get-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.set-prototype-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.reverse.js',
				)
			var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
					'./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
				),
				next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/router.js',
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
				_components_Layout__WEBPACK_IMPORTED_MODULE_31__ =
					__webpack_require__('./components/Layout.tsx'),
				react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
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
													;(data = _context.sent).error
														? setError(data.error)
														: (localStorage.setItem('token', data.token), router.push('/')),
														setLoading(!1),
														(_context.next = 16)
													break
												case 12:
													;(_context.prev = 12),
														(_context.t0 = _context.catch(1)),
														setError(_context.t0.message),
														setLoading(!1)
												case 16:
												case 'end':
													return _context.stop()
											}
									},
									_callee,
									null,
									[[1, 12]],
								)
							}),
						)
						return function handleSignup() {
							return _ref2.apply(this, arguments)
						}
					})(),
					handleEnter = function handleEnter(e) {
						'Enter' === e.key && handleSignup()
					}
				return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx)(
					_components_Layout__WEBPACK_IMPORTED_MODULE_31__.A,
					{
						name: 'signup',
						children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsxs)(
							_components_Modal__WEBPACK_IMPORTED_MODULE_25__.Z,
							{
								name: 'signup',
								loading,
								error,
								children: [
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx)(
										_components_EmailInput__WEBPACK_IMPORTED_MODULE_27__.Z,
										{
											name: 'signup',
											value: email,
											setValue: setEmail,
											disabled: loading,
											handleEnter,
										},
									),
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx)(
										_components_ConfirmPasswordInput__WEBPACK_IMPORTED_MODULE_28__.Z,
										{
											name: 'signup',
											password,
											setPassword,
											confirmPassword,
											setConfirmPassword,
											disabled: loading,
											handleEnter,
										},
									),
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx)(
										_components_ActionButtonsContainer__WEBPACK_IMPORTED_MODULE_29__.Z,
										{
											name: 'signup',
											children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx)(
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
									(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_32__.jsx)(
										_components_ModalNote__WEBPACK_IMPORTED_MODULE_30__.Z,
										{
											name: 'signup-login',
											label: 'Already have an account? Log in',
											href: '/login',
										},
									),
								],
							},
						),
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.concat.js',
				)
			var esm = __webpack_require__(
					'./node_modules/.pnpm/zustand@4.1.4_react@18.2.0/node_modules/zustand/esm/index.mjs',
				),
				createUserSlice = function createUserSlice(set) {
					return {
						user: { id: '', email: '', name: '', image: '' },
						setUser: function setUser(user) {
							return set({ user })
						},
						logout: function logout() {
							return set({ user: null })
						},
					}
				},
				theme = __webpack_require__('./theme/index.ts'),
				createSettingsSlice = function createSettingsSlice(set) {
					return {
						darkMode: !1,
						customPalette: theme.uH.palette,
						theme: theme.uH,
						setDarkMode: function setDarkMode(darkMode) {
							return set({ darkMode })
						},
						setCustomPalette: function setCustomPalette(customPalette) {
							return set({ customPalette })
						},
						setTheme: function setTheme(theme) {
							return set({ theme })
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
		'./theme/index.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, {
				Sl: () => createCustomTheme,
				sE: () => defaultDarkTheme,
				uH: () => defaultTheme,
			})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
			)
			var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/styles/createTheme.js',
				),
				palette = {
					mode: 'light',
					primary: { light: '#4f5b62', main: '#263238', dark: '#000a12', contrastText: '#fff' },
					secondary: { light: '#ff79b0', main: '#ff4081', dark: '#c60055', contrastText: '#000' },
					error: { light: '#e57373', main: '#f44336', dark: '#d32f2f', contrastText: '#fff' },
					warning: {
						light: '#ffb74d',
						main: '#ff9800',
						dark: '#f57c00',
						contrastText: 'rgba(0, 0, 0, 0.87)',
					},
					info: { light: '#64b5f6', main: '#2196f3', dark: '#1976d2', contrastText: '#fff' },
					success: {
						light: '#81c784',
						main: '#4caf50',
						dark: '#388e3c',
						contrastText: 'rgba(0, 0, 0, 0.87)',
					},
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
					common: { black: '#000', white: '#fff' },
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
				zIndex = {
					mobileStepper: 1e3,
					speedDial: 1050,
					appBar: 1100,
					drawer: 1200,
					modal: 1300,
					snackbar: 1400,
					tooltip: 1500,
				},
				breakpoints = { values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } },
				shape = { borderRadius: 4 },
				mixins = {
					toolbar: {
						minHeight: 56,
						'@media (min-width:0px) and (orientation: landscape)': { minHeight: 48 },
						'@media (min-width:600px)': { minHeight: 64 },
					},
				},
				transitions = {
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
				spacing = function spacing(factor) {
					return 0.25 * factor + 'rem'
				},
				shadows = [
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
				components = {
					MuiCssBaseline: { styleOverrides: '\n\t\thtml {\n\t\t\tfont-size: 16px;\n\t\t}\n\t' },
				},
				typography = {
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
				createCustomTheme = function createCustomTheme(customPalette, isDarkMode) {
					var paletteConfig = Object.assign(
						{ mode: isDarkMode ? 'dark' : 'light' },
						palette,
						customPalette,
					)
					return (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.Z)({
						palette: paletteConfig,
						shape,
						spacing,
						zIndex,
						breakpoints,
						mixins,
						transitions,
						shadows,
						direction: 'ltr',
						components,
						typography,
					})
				},
				defaultTheme = createCustomTheme(),
				defaultDarkTheme = createCustomTheme(void 0, !0)
		},
		'./utils/helpers.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
			'use strict'
			__webpack_require__.d(__webpack_exports__, {
				LF: () => toTitleCase,
				RN: () => getContrastColor,
				pw: () => getSecondaryColor,
			})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.constructor.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.exec.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.regexp.to-string.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.join.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.trim.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.replace.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.parse-int.js',
				)
			var color2k__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					'./node_modules/.pnpm/color2k@2.0.0/node_modules/color2k/dist/index.exports.import.es.mjs',
				),
				minorWordsRegex = new RegExp(
					'\\b(' +
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
						].join('|') +
						')\\b',
					'gi',
				),
				toTitleCase = function toTitleCase(str) {
					return (str = (str =
						(str = (str = (str = str.trim()).toLowerCase()).replace(/(^|\s)\S/g, function (t) {
							return t.toUpperCase()
						}))
							.charAt(0)
							.toUpperCase() + str.slice(1)).replace(minorWordsRegex, function (word) {
						return word.toLowerCase()
					}))
				},
				getContrastColor = function getContrastColor(color) {
					return (0, color2k__WEBPACK_IMPORTED_MODULE_8__.mj)(color, '#FFF') > 4.5
						? 'white'
						: 'black'
				},
				getSecondaryColor = function getSecondaryColor(color) {
					var cc = '#' === color.charAt(0) ? color.substring(1, 7) : color,
						c = parseInt(cc, 16),
						r = c >> 16,
						b = (c >> 8) & 255,
						g = 255 & c,
						alpha = 9 === color.length ? color.substring(7, 9) : ''
					return (299 * r + 587 * b + 114 * g) / 1e3 >= 128
						? alpha
							? 'rgba(0, 0, 0, ' + alpha + ')'
							: 'rgba(0, 0, 0, 1)'
						: alpha
						? 'rgba(255, 255, 255, ' + alpha + ')'
						: 'rgba(255, 255, 255, 1)'
				}
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
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.keys.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.index-of.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.bind.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
				),
				__webpack_require__('./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js')
			var esm = __webpack_require__(
					'./node_modules/.pnpm/@mdx-js+react@1.6.22_react@18.2.0/node_modules/@mdx-js/react/dist/esm.js',
				),
				dist_esm = __webpack_require__(
					'./node_modules/.pnpm/@storybook+addon-docs@6.5.14_3yskzllaeuwgl5w2yfh46n4yay/node_modules/@storybook/addon-docs/dist/esm/index.js',
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
		'./stories/components sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
			(module, __unused_webpack_exports, __webpack_require__) => {
				var map = {
					'./ColorPickerIcon.stories.tsx': './stories/components/ColorPickerIcon.stories.tsx',
					'./darkMode/ColorPickerPopover.stories.tsx':
						'./stories/components/darkMode/ColorPickerPopover.stories.tsx',
					'./darkMode/ConfirmPasswordInput.stories.tsx':
						'./stories/components/darkMode/ConfirmPasswordInput.stories.tsx',
					'./darkMode/DarkModeSwitch.stories.tsx':
						'./stories/components/darkMode/DarkModeSwitch.stories.tsx',
					'./darkMode/Drawer.stories.tsx': './stories/components/darkMode/Drawer.stories.tsx',
					'./darkMode/DrawerButton.stories.tsx':
						'./stories/components/darkMode/DrawerButton.stories.tsx',
					'./darkMode/Drawers/DashboardDrawer.stories.tsx':
						'./stories/components/darkMode/Drawers/DashboardDrawer.stories.tsx',
					'./darkMode/EmailInput.stories.tsx':
						'./stories/components/darkMode/EmailInput.stories.tsx',
					'./darkMode/Layout.stories.tsx': './stories/components/darkMode/Layout.stories.tsx',
					'./darkMode/Modal.stories.tsx': './stories/components/darkMode/Modal.stories.tsx',
					'./darkMode/ModalNote.stories.tsx': './stories/components/darkMode/ModalNote.stories.tsx',
					'./darkMode/NavigationButton.stories.tsx':
						'./stories/components/darkMode/NavigationButton.stories.tsx',
					'./darkMode/PasswordInput.stories.tsx':
						'./stories/components/darkMode/PasswordInput.stories.tsx',
					'./darkMode/SubmitButton.stories.tsx':
						'./stories/components/darkMode/SubmitButton.stories.tsx',
					'./darkMode/VisibilityIcon.stories.tsx':
						'./stories/components/darkMode/VisibilityIcon.stories.tsx',
					'./lightMode/ColorPickerPopover.stories.tsx':
						'./stories/components/lightMode/ColorPickerPopover.stories.tsx',
					'./lightMode/ConfirmPasswordInput.stories.tsx':
						'./stories/components/lightMode/ConfirmPasswordInput.stories.tsx',
					'./lightMode/DarkModeSwitch.stories.tsx':
						'./stories/components/lightMode/DarkModeSwitch.stories.tsx',
					'./lightMode/Drawer.stories.tsx': './stories/components/lightMode/Drawer.stories.tsx',
					'./lightMode/DrawerButton.stories.tsx':
						'./stories/components/lightMode/DrawerButton.stories.tsx',
					'./lightMode/Drawers/DashboardDrawer.stories.tsx':
						'./stories/components/lightMode/Drawers/DashboardDrawer.stories.tsx',
					'./lightMode/EmailInput.stories.tsx':
						'./stories/components/lightMode/EmailInput.stories.tsx',
					'./lightMode/Layout.stories.tsx': './stories/components/lightMode/Layout.stories.tsx',
					'./lightMode/Modal.stories.tsx': './stories/components/lightMode/Modal.stories.tsx',
					'./lightMode/ModalNote.stories.tsx':
						'./stories/components/lightMode/ModalNote.stories.tsx',
					'./lightMode/NavigationButton.stories.tsx':
						'./stories/components/lightMode/NavigationButton.stories.tsx',
					'./lightMode/PasswordInput.stories.tsx':
						'./stories/components/lightMode/PasswordInput.stories.tsx',
					'./lightMode/SubmitButton.stories.tsx':
						'./stories/components/lightMode/SubmitButton.stories.tsx',
					'./lightMode/VisibilityIcon.stories.tsx':
						'./stories/components/lightMode/VisibilityIcon.stories.tsx',
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
					'./darkMode/dashboard.stories.tsx': './stories/pages/darkMode/dashboard.stories.tsx',
					'./darkMode/forgot-password.stories.tsx':
						'./stories/pages/darkMode/forgot-password.stories.tsx',
					'./darkMode/login.stories.tsx': './stories/pages/darkMode/login.stories.tsx',
					'./darkMode/signup.stories.tsx': './stories/pages/darkMode/signup.stories.tsx',
					'./lightMode/[...token].stories.tsx': './stories/pages/lightMode/[...token].stories.tsx',
					'./lightMode/dashboard.stories.tsx': './stories/pages/lightMode/dashboard.stories.tsx',
					'./lightMode/forgot-password.stories.tsx':
						'./stories/pages/lightMode/forgot-password.stories.tsx',
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
					'./components/ColorPickerIcon.stories.tsx':
						'./stories/components/ColorPickerIcon.stories.tsx',
					'./components/darkMode/ColorPickerPopover.stories.tsx':
						'./stories/components/darkMode/ColorPickerPopover.stories.tsx',
					'./components/darkMode/ConfirmPasswordInput.stories.tsx':
						'./stories/components/darkMode/ConfirmPasswordInput.stories.tsx',
					'./components/darkMode/DarkModeSwitch.stories.tsx':
						'./stories/components/darkMode/DarkModeSwitch.stories.tsx',
					'./components/darkMode/Drawer.stories.tsx':
						'./stories/components/darkMode/Drawer.stories.tsx',
					'./components/darkMode/DrawerButton.stories.tsx':
						'./stories/components/darkMode/DrawerButton.stories.tsx',
					'./components/darkMode/Drawers/DashboardDrawer.stories.tsx':
						'./stories/components/darkMode/Drawers/DashboardDrawer.stories.tsx',
					'./components/darkMode/EmailInput.stories.tsx':
						'./stories/components/darkMode/EmailInput.stories.tsx',
					'./components/darkMode/Layout.stories.tsx':
						'./stories/components/darkMode/Layout.stories.tsx',
					'./components/darkMode/Modal.stories.tsx':
						'./stories/components/darkMode/Modal.stories.tsx',
					'./components/darkMode/ModalNote.stories.tsx':
						'./stories/components/darkMode/ModalNote.stories.tsx',
					'./components/darkMode/NavigationButton.stories.tsx':
						'./stories/components/darkMode/NavigationButton.stories.tsx',
					'./components/darkMode/PasswordInput.stories.tsx':
						'./stories/components/darkMode/PasswordInput.stories.tsx',
					'./components/darkMode/SubmitButton.stories.tsx':
						'./stories/components/darkMode/SubmitButton.stories.tsx',
					'./components/darkMode/VisibilityIcon.stories.tsx':
						'./stories/components/darkMode/VisibilityIcon.stories.tsx',
					'./components/lightMode/ColorPickerPopover.stories.tsx':
						'./stories/components/lightMode/ColorPickerPopover.stories.tsx',
					'./components/lightMode/ConfirmPasswordInput.stories.tsx':
						'./stories/components/lightMode/ConfirmPasswordInput.stories.tsx',
					'./components/lightMode/DarkModeSwitch.stories.tsx':
						'./stories/components/lightMode/DarkModeSwitch.stories.tsx',
					'./components/lightMode/Drawer.stories.tsx':
						'./stories/components/lightMode/Drawer.stories.tsx',
					'./components/lightMode/DrawerButton.stories.tsx':
						'./stories/components/lightMode/DrawerButton.stories.tsx',
					'./components/lightMode/Drawers/DashboardDrawer.stories.tsx':
						'./stories/components/lightMode/Drawers/DashboardDrawer.stories.tsx',
					'./components/lightMode/EmailInput.stories.tsx':
						'./stories/components/lightMode/EmailInput.stories.tsx',
					'./components/lightMode/Layout.stories.tsx':
						'./stories/components/lightMode/Layout.stories.tsx',
					'./components/lightMode/Modal.stories.tsx':
						'./stories/components/lightMode/Modal.stories.tsx',
					'./components/lightMode/ModalNote.stories.tsx':
						'./stories/components/lightMode/ModalNote.stories.tsx',
					'./components/lightMode/NavigationButton.stories.tsx':
						'./stories/components/lightMode/NavigationButton.stories.tsx',
					'./components/lightMode/PasswordInput.stories.tsx':
						'./stories/components/lightMode/PasswordInput.stories.tsx',
					'./components/lightMode/SubmitButton.stories.tsx':
						'./stories/components/lightMode/SubmitButton.stories.tsx',
					'./components/lightMode/VisibilityIcon.stories.tsx':
						'./stories/components/lightMode/VisibilityIcon.stories.tsx',
					'./pages/darkMode/[...token].stories.tsx':
						'./stories/pages/darkMode/[...token].stories.tsx',
					'./pages/darkMode/dashboard.stories.tsx':
						'./stories/pages/darkMode/dashboard.stories.tsx',
					'./pages/darkMode/forgot-password.stories.tsx':
						'./stories/pages/darkMode/forgot-password.stories.tsx',
					'./pages/darkMode/login.stories.tsx': './stories/pages/darkMode/login.stories.tsx',
					'./pages/darkMode/signup.stories.tsx': './stories/pages/darkMode/signup.stories.tsx',
					'./pages/lightMode/[...token].stories.tsx':
						'./stories/pages/lightMode/[...token].stories.tsx',
					'./pages/lightMode/dashboard.stories.tsx':
						'./stories/pages/lightMode/dashboard.stories.tsx',
					'./pages/lightMode/forgot-password.stories.tsx':
						'./stories/pages/lightMode/forgot-password.stories.tsx',
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
					'./node_modules/.pnpm/@storybook+react@6.5.14_lrn4xbqua6nxca6qntkmxkg2o4/node_modules/@storybook/react/dist/esm/client/index.js',
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
					globalTypes: () => globalTypes,
					parameters: () => parameters,
					withMuiTheme: () => withMuiTheme,
				})
			__webpack_require__(
				'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.keys.js',
			),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.filter.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.get-own-property-descriptor.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.for-each.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.get-own-property-descriptors.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.define-properties.js',
				),
				__webpack_require__(
					'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.define-property.js',
				)
			var ClientApi = __webpack_require__(
					'./node_modules/.pnpm/@storybook+client-api@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/client-api/dist/esm/ClientApi.js',
				),
				react =
					(__webpack_require__(
						'./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.assign.js',
					),
					__webpack_require__('./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js')),
				es = __webpack_require__(
					'./node_modules/.pnpm/react-query@3.39.2_biqbaboplfbrettd7655fr4n2y/node_modules/react-query/es/index.js',
				),
				next_image = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/image.js',
				),
				head = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/head.js',
				),
				next_auth_react = __webpack_require__(
					'./node_modules/.pnpm/next-auth@4.18.0_ph7ncimqkfipxkhrqa54rmxzeq/node_modules/next-auth/react/index.js',
				),
				router_context = __webpack_require__(
					'./node_modules/.pnpm/next@13.0.6_672uxklweod7ene3nqtsh262ca/node_modules/next/dist/shared/lib/router-context.js',
				),
				ThemeProvider = __webpack_require__(
					'./node_modules/.pnpm/@mui+system@5.10.16_ogriz7mfahdh34qnfautfro5yu/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js',
				),
				IconButton = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/IconButton/IconButton.js',
				),
				Box = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/Box/Box.js',
				),
				CssBaseline = __webpack_require__(
					'./node_modules/.pnpm/@mui+material@5.10.16_lskpmcsdi7ipu6qpuapyu56ihm/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js',
				),
				Close = __webpack_require__(
					'./node_modules/.pnpm/@mui+icons-material@5.10.16_zzl2rsknh5hqp4j37lz5gcfppu/node_modules/@mui/icons-material/Close.js',
				),
				notistack_esm = __webpack_require__(
					'./node_modules/.pnpm/notistack@2.0.8_4xnbwop7ylm5pogdusyqfiqcyu/node_modules/notistack/dist/notistack.esm.js',
				),
				theme = __webpack_require__('./theme/index.ts'),
				jsx_runtime =
					(__webpack_require__(
						'./node_modules/.pnpm/@fontsource+roboto@4.5.8/node_modules/@fontsource/roboto/300.css',
					),
					__webpack_require__(
						'./node_modules/.pnpm/@fontsource+roboto@4.5.8/node_modules/@fontsource/roboto/400.css',
					),
					__webpack_require__(
						'./node_modules/.pnpm/@fontsource+roboto@4.5.8/node_modules/@fontsource/roboto/500.css',
					),
					__webpack_require__(
						'./node_modules/.pnpm/@fontsource+roboto@4.5.8/node_modules/@fontsource/roboto/700.css',
					),
					__webpack_require__(
						'./node_modules/.pnpm/@fontsource+material-icons@4.5.4/node_modules/@fontsource/material-icons/index.css',
					),
					__webpack_require__(
						'./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
					)),
				THEMES = { light: theme.uH, dark: theme.sE },
				globalTypes = {
					theme: {
						name: 'Theme',
						title: 'Theme',
						description: 'Global theme for components',
						defaultValue: 'light',
						toolbar: {
							icon: 'paintbrush',
							dynamicTitle: !0,
							items: [
								{ value: 'light', left: '☀️', title: 'Light' },
								{ value: 'dark', left: '🌙', title: 'Dark' },
							],
							showName: !0,
						},
					},
				},
				queryClient = new es.QueryClient({
					defaultOptions: { queries: { retry: !1, refetchOnWindowFocus: !1 } },
				}),
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
					controls: { expanded: !0, matchers: { color: /(background|color)$/i, date: /Date$/ } },
					previewTabs: { 'storybook/docs/panel': { index: -1 } },
				},
				snackbarRef = (0, react.createRef)(),
				withMuiTheme =
					(theme.uH.palette,
					function withMuiTheme(Story, context) {
						var themeKey = context.globals.theme,
							theme = (0, react.useMemo)(
								function () {
									return THEMES[themeKey] || THEMES.light
								},
								[themeKey],
							)
						return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
							children: [
								(0, jsx_runtime.jsxs)(head, {
									children: [
										(0, jsx_runtime.jsx)('title', { children: 'Next Auth Scaffold' }),
										(0, jsx_runtime.jsx)('meta', {
											name: 'viewport',
											content:
												'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
										}),
									],
								}),
								(0, jsx_runtime.jsx)(es.QueryClientProvider, {
									client: queryClient,
									children: (0, jsx_runtime.jsx)(next_auth_react.SessionProvider, {
										session: {
											expires: '2021-09-29T18:00:00.000Z',
											user: { email: 'test@example.com', image: null, name: 'Test User' },
										},
										children: (0, jsx_runtime.jsxs)(ThemeProvider.Z, {
											theme,
											children: [
												(0, jsx_runtime.jsx)(CssBaseline.ZP, {}),
												(0, jsx_runtime.jsx)(notistack_esm.wT, {
													ref: snackbarRef,
													maxSnack: 3,
													anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
													preventDuplicate: !0,
													action: function action(key) {
														return (0, jsx_runtime.jsx)(IconButton.Z, {
															id: 'snackbar-dismiss-button',
															size: 'small',
															'aria-label': 'close',
															color: 'inherit',
															onClick: function onClick() {
																var _snackbarRef$current
																return null === (_snackbarRef$current = snackbarRef.current) ||
																	void 0 === _snackbarRef$current
																	? void 0
																	: _snackbarRef$current.closeSnackbar(key)
															},
															sx: {
																fontSize: '1rem',
																padding: '0.5rem',
																'&:hover': {
																	backgroundColor: 'rgba(0, 0, 0, 0.04)',
																	transform: 'scale(1.1)',
																},
															},
															children: (0, jsx_runtime.jsx)(Close, {
																id: 'snackbar-dismiss-button-icon',
																fontSize: 'small',
																sx: { fontSize: '1rem', color: 'primary.contrastText' },
															}),
														})
													},
													children: (0, jsx_runtime.jsx)('main', {
														children: (0, jsx_runtime.jsx)(Box.Z, {
															sx: {
																display: 'flex',
																flexDirection: 'column',
																justifyContent: 'center',
																alignItems: 'center',
																minHeight: '100vh',
															},
															children: (0, jsx_runtime.jsx)(Story, {}),
														}),
													}),
												}),
											],
										}),
									}),
								}),
							],
						})
					}),
				decorators = [withMuiTheme],
				__namedExportsOrder = ['globalTypes', 'parameters', 'withMuiTheme', 'decorators']
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
			;(withMuiTheme.__docgenInfo = { description: '', methods: [], displayName: 'withMuiTheme' }),
				'undefined' != typeof STORYBOOK_REACT_CLASSES &&
					(STORYBOOK_REACT_CLASSES['.storybook/preview.js'] = {
						name: 'withMuiTheme',
						docgenInfo: withMuiTheme.__docgenInfo,
						path: '.storybook/preview.js',
					}),
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
				'./node_modules/.pnpm/@storybook+react@6.5.14_lrn4xbqua6nxca6qntkmxkg2o4/node_modules/@storybook/react/dist/esm/client/index.js',
			)
		},
	},
	__webpack_require__ => {
		var __webpack_exec__ = moduleId => __webpack_require__((__webpack_require__.s = moduleId))
		__webpack_require__.O(
			0,
			[668],
			() => (
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+core-client@6.5.14_ep3nicfz4qcahezcs7kmkfeniq/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+core-client@6.5.14_ep3nicfz4qcahezcs7kmkfeniq/node_modules/@storybook/core-client/dist/esm/globals/globals.js',
				),
				__webpack_exec__('./storybook-init-framework-entry.js'),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+react@6.5.14_lrn4xbqua6nxca6qntkmxkg2o4/node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+react@6.5.14_lrn4xbqua6nxca6qntkmxkg2o4/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-links@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-links/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-docs@6.5.14_3yskzllaeuwgl5w2yfh46n4yay/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-actions@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-backgrounds@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-measure@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-outline@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-interactions@6.5.14_wccw5cobuw4zqmnf6jo5ojuqfa/node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/@storybook+addon-a11y@6.5.14_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js',
				),
				__webpack_exec__(
					'./node_modules/.pnpm/storybook-addon-next-router@4.0.1_rd7v4uoxzfeugt5lluudeyelwa/node_modules/storybook-addon-next-router/dist/preset/addDecorator.js-generated-config-entry.js',
				),
				__webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
				__webpack_exec__('./generated-stories-entry.cjs')
			),
		)
		__webpack_require__.O()
	},
])
