import useSWR from "swr";

import useSwrState from "./useSwrState";
import { getGallerySearch } from "../services/imgur-image-search";

import type ImgurGallerySearchOptions from '../types/services/ImgurGallerySearchOptions'

export default function useImgurGallerySearch(query: string, options?: ImgurGallerySearchOptions) {
  const { data, error } = useSWR(query, (query) => getGallerySearch(query, options))
  const state = useSwrState(data, error)

  return {
    data,
    error,
    state
  }
}