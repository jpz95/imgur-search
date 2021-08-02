import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { Icon } from 'react-materialize'

const searchResultsBaseRoute = '/search-results';

const SearchBar = () => {
  const router = useRouter()
  const [searchResultsHref, setSearchResultsHref] = useState(searchResultsBaseRoute);

  const getSearchResults = () => {
    if (!value) {
      return;
    }

    router.push(searchResultsHref)
  }

  const [value, setValue] = useState("")

  useEffect(() => {
    setSearchResultsHref(`${searchResultsBaseRoute}/${value}`)
  }, [value])

  const handleOnChange = (event) => {
    const value = event?.target?.value
    if (!value) {
      return;
    }

    setValue(value)
  }

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      getSearchResults();
    }
  }

  return (
    <div className="searchBar">
      <Icon className="searchBarIcon" onClick={getSearchResults}>search</Icon>
      <input
        type="text"
        className="searchBarInput"
        placeholder="Search for an image"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        value={value}
      />
    </div>
  )
}

export default SearchBar