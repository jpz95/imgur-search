import { useRouter } from 'next/router'

const SearchResult = (props: Props) => {
  const router = useRouter()
  const { searchId } = router.query

  return (
    <div className="searchResult">

    </div>
  )
}

export default SearchResult