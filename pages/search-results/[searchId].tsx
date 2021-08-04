import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Pagination, Preloader } from 'react-materialize'

import styles from '../../styles/pages/SearchResults.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import ImageResult from './ImageResult'
import FullImageModal from './FullImageModal'

import useImgurGallerySearch from '../../hooks/useImgurGallerySearch'
import isBrowser from '../../utils/isBrowser'

import type { ImageResult as ImageResultType } from '../../types/search-results'
import type ImageResultProps from '../../types/search-results/ImageResultProps'
import type ImgurGallerySearchOptions from '../../types/services/ImgurGallerySearchOptions'
import { mutate } from 'swr'

const SearchResult = () => {
  const root = useRef(null)

  const router = useRouter()
  const { searchId = '' } = router.query

  const query = Array.isArray(searchId) ? searchId.join(' ') : searchId

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const openImageInModal = (imageResult: ImageResultProps) => {
    setIsModalOpen(true)
    setModalData({ ...imageResult })
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setModalData({})
  }

  const [activePage, setActivePage] = useState<number>(1)

  const { data: results, state } = useImgurGallerySearch(query, activePage - 1)

  return (
    <div className={styles.searchResult} ref={root}>
      <header>
        <SearchBar value={query}></SearchBar>
      </header>
      <main className={styles.searchResults}>
        {state === 'loading' && (
          <Preloader className={styles.loader} size="big" color="green"></Preloader>
        )}
        {state === 'error' && (
          <div className={styles.errorMessage}>
            <h1>There was a problem while searching for images. Please try again!</h1>
          </div>
        )}
        {state === 'complete' && results.map((result: ImageResultType) => {
          const imageRegex = new RegExp('^image/')
          const { images = [] } = result

          const image = images.find((image) => {
            const isImageType = imageRegex.test(image.type)
            const isLinkValid = (link: any) => {
              const isNotFunction = typeof link !== 'function'
              const isImgurImage = typeof link === 'string' && link.includes('i.imgur.com')
              return isNotFunction && isImgurImage
            }
            return isImageType && isLinkValid(image.link) 
          })

          if (!image) {
            return
          }

          return (
            <ImageResult
              externalUrl={result.link}
              thumbnail={image.link}
              likes={result.ups}
              views={result.views}
              title={result.title}
              imageId={result.id}
              key={result.id}
              onClick={openImageInModal}
            ></ImageResult>
          )
        })}
      </main>
      <footer>
        <Pagination
          activePage={activePage}
          items={5}
          onSelect={(page: number) => setActivePage(page)}
        />
      </footer>
      {isBrowser() && root?.current &&
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