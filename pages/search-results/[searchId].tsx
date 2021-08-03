import { useRef, useState } from 'react'

import styles from '../../styles/pages/SearchResults.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import ImageResult from './ImageResult'
import FullImageModal from './FullImageModal'

import type { ImageResult as ImageResultType } from '../../types/search-results'

const SearchResult = (_props: Props) => {
  const root = useRef(null)

  const [results, setResults] = useState<Array<ImageResultType>>([])
  setTimeout(() => {
    setResults([
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 1, id: "1", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 2, id: "2", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 3, id: "3", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 4, id: "4", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 5, id: "5", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 6, id: "6", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 7, id: "7", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 8, id: "8", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 9, id: "9", title: 'kitty' },
      { link: 'https://i.imgur.com/YWXcMt7.jpg', score: 10, id: "10", title: 'kitty' },
    ])
  }, 1500)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const openImageInModal = (imageResult: ImageResultType) => {
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
            url={result.link}
            likes={result.score}
            title={result.title}
            key={result.id}
            onClick={openImageInModal}
          ></ImageResult>
        ))}
      </main>
      {typeof window !== 'undefined' && root?.current &&
        <FullImageModal
          imageData={modalData}
          isModalOpen={isModalOpen}
          onCloseEnd={handleModalClose}
          root={root}
        />
      }
    </div>
  )
}

export default SearchResult