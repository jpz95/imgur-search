import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Icon, Preloader } from 'react-materialize'

import styles from '../../styles/pages/SearchResults.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'
import ImageResult from './ImageResult'
import FullImageModal from './FullImageModal'

import useImgurGallerySearch from '../../hooks/useImgurGallerySearch'

import type { ImageResult as ImageResultType } from '../../types/search-results'
import type ImageResultProps from '../../types/search-results/ImageResultProps'
import type ImgurGallerySearchOptions from '../../types/services/ImgurGallerySearchOptions'

const SearchResult = () => {
  const root = useRef(null)

  // const [results, setResults] = useState<Array<ImageResultType>>([])
  // setTimeout(() => {
  //   setResults([
  //     {
  //       "id": "liv4ewf",
  //       "title": "Hihi",
  //       "description": null,
  //       "datetime": 1627660851,
  //       "cover": "xPkOQ5S",
  //       "cover_width": 444,
  //       "cover_height": 512,
  //       "account_url": "taolaobidomanu",
  //       "account_id": 111891975,
  //       "privacy": "hidden",
  //       "layout": "blog",
  //       "views": 61,
  //       "link": "https:\/\/imgur.com\/a\/liv4ewf",
  //       "ups": 1,
  //       "downs": 2,
  //       "points": -1,
  //       "score": 0,
  //       "is_album": true,
  //       "vote": null,
  //       "favorite": false,
  //       "nsfw": false,
  //       "section": "",
  //       "comment_count": 0,
  //       "favorite_count": 0,
  //       "topic": null,
  //       "topic_id": null,
  //       "images_count": 1,
  //       "in_gallery": true,
  //       "is_ad": false,
  //       "tags": [
  
  //       ],
  //       "ad_type": 0,
  //       "ad_url": "",
  //       "in_most_viral": false,
  //       "include_album_ads": false,
  //       "images": [
  //         {
  //           "id": "xPkOQ5S",
  //           "title": null,
  //           "description": null,
  //           "datetime": 1627660826,
  //           "type": "image\/png",
  //           "animated": false,
  //           "width": 444,
  //           "height": 512,
  //           "size": 350175,
  //           "views": 149,
  //           "bandwidth": 52176075,
  //           "vote": null,
  //           "favorite": false,
  //           "nsfw": null,
  //           "section": null,
  //           "account_url": null,
  //           "account_id": null,
  //           "is_ad": false,
  //           "in_most_viral": false,
  //           "has_sound": false,
  //           "tags": [
  
  //           ],
  //           "ad_type": 0,
  //           "ad_url": "",
  //           "edited": "0",
  //           "in_gallery": false,
  //           "link": "https:\/\/i.imgur.com\/xPkOQ5S.png",
  //           "comment_count": null,
  //           "favorite_count": null,
  //           "ups": null,
  //           "downs": null,
  //           "points": null,
  //           "score": null
  //         }
  //       ],
  //       "ad_config": {
  //         "safeFlags": [
  //           "album",
  //           "in_gallery"
  //         ],
  //         "highRiskFlags": [
  
  //         ],
  //         "unsafeFlags": [
  //           "sixth_mod_unsafe",
  //           "under_10"
  //         ],
  //         "wallUnsafeFlags": [
  
  //         ],
  //         "showsAds": false
  //       }
  //     },
  //     {
  //       "id": "LBsPL7P",
  //       "title": "Theo hihi",
  //       "description": null,
  //       "datetime": 1627579669,
  //       "cover": "XZUtSHi",
  //       "cover_width": 540,
  //       "cover_height": 304,
  //       "account_url": "sofiabelo20198888",
  //       "account_id": 148943361,
  //       "privacy": "hidden",
  //       "layout": "blog",
  //       "views": 32,
  //       "link": "https:\/\/imgur.com\/a\/LBsPL7P",
  //       "ups": 3,
  //       "downs": 2,
  //       "points": 1,
  //       "score": 1,
  //       "is_album": true,
  //       "vote": null,
  //       "favorite": false,
  //       "nsfw": false,
  //       "section": "",
  //       "comment_count": 0,
  //       "favorite_count": 0,
  //       "topic": null,
  //       "topic_id": null,
  //       "images_count": 1,
  //       "in_gallery": true,
  //       "is_ad": false,
  //       "tags": [
  
  //       ],
  //       "ad_type": 0,
  //       "ad_url": "",
  //       "in_most_viral": false,
  //       "include_album_ads": false,
  //       "images": [
  //         {
  //           "id": "XZUtSHi",
  //           "title": null,
  //           "description": null,
  //           "datetime": 1627579644,
  //           "type": "image\/gif",
  //           "animated": true,
  //           "width": 540,
  //           "height": 304,
  //           "size": 1137502,
  //           "views": 248,
  //           "bandwidth": 282100496,
  //           "vote": null,
  //           "favorite": false,
  //           "nsfw": null,
  //           "section": null,
  //           "account_url": null,
  //           "account_id": null,
  //           "is_ad": false,
  //           "in_most_viral": false,
  //           "has_sound": false,
  //           "tags": [
  
  //           ],
  //           "ad_type": 0,
  //           "ad_url": "",
  //           "edited": "0",
  //           "in_gallery": false,
  //           "link": "https:\/\/i.imgur.com\/XZUtSHi.gif",
  //           "mp4": "https:\/\/i.imgur.com\/XZUtSHi.mp4",
  //           "gifv": "https:\/\/i.imgur.com\/XZUtSHi.gifv",
  //           "hls": "https:\/\/i.imgur.com\/XZUtSHi.m3u8",
  //           "mp4_size": 173603,
  //           "looping": true,
  //           "processing": {
  //             "status": "completed"
  //           },
  //           "comment_count": null,
  //           "favorite_count": null,
  //           "ups": null,
  //           "downs": null,
  //           "points": null,
  //           "score": null
  //         }
  //       ],
  //       "ad_config": {
  //         "safeFlags": [
  //           "album",
  //           "in_gallery"
  //         ],
  //         "highRiskFlags": [
  
  //         ],
  //         "unsafeFlags": [
  //           "sixth_mod_unsafe",
  //           "under_10"
  //         ],
  //         "wallUnsafeFlags": [
  
  //         ],
  //         "showsAds": false
  //       }
  //     },
  //     {
  //       "id": "gc49DOy",
  //       "title": "hihi",
  //       "description": null,
  //       "datetime": 1626564168,
  //       "cover": "HS6gl1D",
  //       "cover_width": 500,
  //       "cover_height": 261,
  //       "account_url": "quyetkaka",
  //       "account_id": 150025988,
  //       "privacy": "hidden",
  //       "layout": "blog",
  //       "views": 70,
  //       "link": "https:\/\/imgur.com\/a\/gc49DOy",
  //       "ups": 1,
  //       "downs": 2,
  //       "points": -1,
  //       "score": 0,
  //       "is_album": true,
  //       "vote": null,
  //       "favorite": false,
  //       "nsfw": false,
  //       "section": "",
  //       "comment_count": 0,
  //       "favorite_count": 0,
  //       "topic": null,
  //       "topic_id": null,
  //       "images_count": 1,
  //       "in_gallery": true,
  //       "is_ad": false,
  //       "tags": [
  
  //       ],
  //       "ad_type": 0,
  //       "ad_url": "",
  //       "in_most_viral": false,
  //       "include_album_ads": false,
  //       "images": [
  //         {
  //           "id": "HS6gl1D",
  //           "title": null,
  //           "description": null,
  //           "datetime": 1626564146,
  //           "type": "image\/jpeg",
  //           "animated": false,
  //           "width": 500,
  //           "height": 261,
  //           "size": 11628,
  //           "views": 135,
  //           "bandwidth": 1569780,
  //           "vote": null,
  //           "favorite": false,
  //           "nsfw": null,
  //           "section": null,
  //           "account_url": null,
  //           "account_id": null,
  //           "is_ad": false,
  //           "in_most_viral": false,
  //           "has_sound": false,
  //           "tags": [
  
  //           ],
  //           "ad_type": 0,
  //           "ad_url": "",
  //           "edited": "0",
  //           "in_gallery": false,
  //           "link": "https:\/\/i.imgur.com\/HS6gl1D.jpg",
  //           "comment_count": null,
  //           "favorite_count": null,
  //           "ups": null,
  //           "downs": null,
  //           "points": null,
  //           "score": null
  //         }
  //       ],
  //       "ad_config": {
  //         "safeFlags": [
  //           "album",
  //           "in_gallery"
  //         ],
  //         "highRiskFlags": [
  
  //         ],
  //         "unsafeFlags": [
  //           "sixth_mod_unsafe",
  //           "under_10"
  //         ],
  //         "wallUnsafeFlags": [
  
  //         ],
  //         "showsAds": false
  //       }
  //     }
  //   ])
  // }, 1500)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const openImageInModal = (imageResult: ImageResultProps) => {
    setIsModalOpen(true)
    setModalData({ ...imageResult })
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const router = useRouter()
  const { searchId = '' } = router.query

  const query = Array.isArray(searchId) ? searchId.join(' ') : searchId

  const { data: results, state } = useImgurGallerySearch(query, {
    page: 1
  } as ImgurGallerySearchOptions)

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