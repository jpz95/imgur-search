import type ImgurGallerySearchOptions from '../types/services/ImgurGallerySearchOptions'

const baseUrl = 'https://api.imgur.com/3'

export async function getGallerySearch(queryString: string, options: ImgurGallerySearchOptions) {
  const basePath = '/gallery/search'

  const pathWithOptions = Object.keys(options)
    .reduce(
      (accumulator: string, key: keyof ImgurGallerySearchOptions) => {
        const path = options[key];
        if (!path) {
          return accumulator
        }
        return `${accumulator}/${path}`
      },
      basePath
    )

  const params = new URLSearchParams({ q: queryString });

  const url = new URL(`${baseUrl}${pathWithOptions}?${params}`).toString()
  return fetch(url)
}