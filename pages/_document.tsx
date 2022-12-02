// Path: pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="icon" href="/favicon.ico" />

					<meta name="theme-color" content="#000000" />
					<meta name="description" content="Next Auth Scaffold" />
					<link rel="apple-touch-icon" href="/logo192.png" />
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
				<body id="body">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
