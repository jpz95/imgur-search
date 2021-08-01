import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Imgur Search</title>
        <meta name="description" content="Search Imgur's image database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://imgur.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.footerMessage}>Powered by{' '}</span>
          <span className={styles.logo}>
            <Image src="/imgur-logo.svg" alt="Imgur Logo" width={48} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
