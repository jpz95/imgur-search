import type ImgurGallerySearchOptions from '../types/services/ImgurGallerySearchOptions'

const baseUrl = 'https://api.imgur.com/3'

const headers = new Headers()
headers.append('Authorization', `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_ID}`)

export function getGallerySearch(queryString: string, options?: ImgurGallerySearchOptions) {
  const basePath = '/gallery/search'

  const pathWithOptions = Object.keys(options || {})
    .reduce(
      (accumulator: string, path: keyof ImgurGallerySearchOptions) => {
        if (!path) {
          return accumulator
        }

        return `${accumulator}/${path}`
      },
      basePath
    )

  const params = new URLSearchParams({ q: queryString })
  const url = new URL(`${baseUrl}${pathWithOptions}?${params}`).toString()

  const requestOptions = {
    method: 'GET',
    headers
  }

  return fetch(url, requestOptions).then(async response => {
    const jsonResponse = await response.json()
    if (!jsonResponse.success) {
      return []
    }
    return jsonResponse.data
  })
}