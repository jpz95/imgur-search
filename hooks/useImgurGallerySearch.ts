import useSWR from "swr";

import useSwrState from "./useSwrState";
import { getGallerySearch } from "../services/imgur-image-search";

import type ImgurGallerySearchOptions from '../types/services/ImgurGallerySearchOptions'

export default function useImgurGallerySearch(
  queryArg: string,
  pageArg?: ImgurGallerySearchOptions['page'],
  windowArg?: ImgurGallerySearchOptions['window'],
  sortArg?: ImgurGallerySearchOptions['sort']
) {
  const swrKey = [queryArg, pageArg, windowArg, sortArg].filter((arg) => typeof arg !== 'undefined')

  const { data, error } = useSWR(swrKey, (query, page, window, sort) => getGallerySearch(query, {
    page,
    window,
    sort
  }))
  const state = useSwrState(data, error)

  return {
    data,
    error,
    state
  }
}