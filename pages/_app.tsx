import Head from 'next/head'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/index.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
