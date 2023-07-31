import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head  >
                <link rel="icon" href="/assets/icons/favicon-32x32.png" sizes='32x32' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}