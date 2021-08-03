import Image from 'next/image'

import styles from '../styles/pages/Home.module.scss'

import SearchBar from '../components/SearchBar/SearchBar'
import { Icon } from 'react-materialize'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Image Search</h1>
          <Icon className={styles.titleIcon}>search</Icon>
        </div>
        <SearchBar icon="photo_camera_back"></SearchBar>
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
