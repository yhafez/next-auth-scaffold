// Path: pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'
import { useBoundStore } from '../store'

export default function MyDocument() {
	const { darkMode, customPalette } = useBoundStore()

	return (
		<Html
			lang="en"
			id="html"
			style={{
				padding: 0,
				margin: 0,
				fontFamily:
					'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
				fontSize: '14px',
				lineHeight: 1.5,
				WebkitFontSmoothing: 'antialiased',
				MozOsxFontSmoothing: 'grayscale',
				WebkitTextSizeAdjust: '100%',
				WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
				width: '100%',
				height: '100%',
				backgroundColor: darkMode ? customPalette.grey[900] : customPalette.grey[100],
			}}
		>
			<Head id="head">
				<meta charSet="utf-8" />

				<meta
					name="theme-color"
					content={darkMode ? customPalette?.primary?.dark : customPalette?.primary?.light}
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

				<link rel="icon" href="/favicon.ico" />

				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Next Auth Scaffold" />
				<link rel="manifest" href="/manifest.json" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://next-auths-caffold.vercel.app/" />
				<meta name="twitter:title" content="Next Auth Scaffold" />
				<meta name="twitter:description" content="Next Auth Scaffold" />
				<meta name="twitter:image" content="https://next-auth-scaffold.vercel.app/logo192.png" />
				<meta name="twitter:creator" content="Next Auth Scaffold" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Next Auth Scaffold" />
				<meta property="og:description" content="Next Auth Scaffold" />
				<meta property="og:site_name" content="Next Auth Scaffold" />
				<meta property="og:url" content="https://next-auth-scaffold.vercel.app/" />
				<meta property="og:image" content="https://next-auth-scaffold.vercel.app/logo192.png" />
			</Head>
			<body
				id="body"
				style={{
					padding: 0,
					margin: 0,
					fontFamily:
						'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
					fontSize: '14px',
					lineHeight: 1.5,
					WebkitFontSmoothing: 'antialiased',
					MozOsxFontSmoothing: 'grayscale',
					WebkitTextSizeAdjust: '100%',
					width: '100%',
					height: '100%',
					backgroundColor: darkMode ? customPalette.grey[900] : customPalette.grey[100],
				}}
			>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
