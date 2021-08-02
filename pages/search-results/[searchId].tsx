import { useRef, useState } from 'react'

import styles from '../../styles/pages/SearchResults.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import ImageResult from './ImageResult'
import FullImageModal from './FullImageModal'

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
  const [modalData, setModalData] = useState({})

  const openImageInModal = (imageResult) => {
    setIsModalOpen(true)
    setModalData({ ...imageResult })
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className={styles.searchResult} ref={root}>
      <header className={styles.searchResultHeader}>
        <SearchBar></SearchBar>
      </header>
      <main className={styles.searchResults}>
        {results.map((result: any) => (
          <ImageResult
            url={result.url}
            likes={result.likes}
            title={result.title}
            key={result.id}
            onClick={openImageInModal}
          ></ImageResult>
        ))}
      </main>
      {typeof window !== 'undefined' && root?.current &&
        <FullImageModal
          imageData={null}
          isModalOpen={isModalOpen}
          onCloseEnd={handleModalClose}
          root={root}
        />
      }
    </div>
  )
}

export default SearchResult