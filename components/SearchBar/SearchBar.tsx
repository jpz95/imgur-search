import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import { Icon } from 'react-materialize'

const searchResultsBaseRoute = '/search-results';

const SearchBar = () => {
  const router = useRouter()
  const [searchResultsHref, setSearchResultsHref] = useState(searchResultsBaseRoute);

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
      router.push(searchResultsHref)
    }
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBarInput"
        placeholder="Search for an image"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        value={value}
      />
      <Link href={searchResultsHref} passHref>
        <Icon className="searchBarIcon">search</Icon>
      </Link>
    </div>
  )
}

export default SearchBar