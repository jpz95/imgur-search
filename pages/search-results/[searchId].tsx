import { useRef, useState } from 'react'
import { Modal, Button } from 'react-materialize'

import styles from '../../styles/pages/SearchResults.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import ImageResult from './ImageResult'

const SearchResult = (props: Props) => {
  const root = useRef(null)

  const [results, setResults] = useState([])
  setTimeout(() => {
    setResults([
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 1, id: 1, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 2, id: 2, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 3, id: 3, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 4, id: 4, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 5, id: 5, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 6, id: 6, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 7, id: 7, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 8, id: 8, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 9, id: 9, title: 'kitty' },
      { url: 'https://i.imgur.com/Wp90pG0.jpg', likes: 10, id: 10, title: 'kitty' },
    ])
  }, 3000)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openImageInModal = (imageResult) => {
    setIsModalOpen(true)
  }

  return (
    <div className={styles.searchResult} ref={root}>
      <header className={styles.searchResultHeader}>
        <SearchBar></SearchBar>
      </header>
      <main className={styles.searchResults}>
        {results.map((result) => (
          <ImageResult
            url={result.url}
            likes={result.likes}
            title={result.title}
            key={result.id}
            onClick={() => openImageInModal(result)}
          ></ImageResult>
        ))}
      </main>
      {/* {typeof window !== 'undefined' && root?.current && <Modal
        actions={[
          // eslint-disable-next-line react/jsx-key
          <Button flat modal="close" node="button" waves="green">Close</Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Modal Header"
        open={isModalOpen}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
        root={root.current}
      ></Modal>} */}
    </div>
  )
}

export default SearchResult