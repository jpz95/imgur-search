import Head from 'next/head'
import type { AppProps } from 'next/app'

import 'materialize-css/dist/css/materialize.min.css'

import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Imgur Search</title>
        <meta name="description" content="Search Imgur's image database" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
