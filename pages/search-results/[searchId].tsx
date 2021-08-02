import styles from '../../styles/pages/SearchResults.module.scss'

import SearchBar from '../../components/SearchBar/SearchBar'

const SearchResult = (props: Props) => {
  const results = [
    { url: 'some-url1', likes: 1 },
    { url: 'some-url2', likes: 2 },
    { url: 'some-url3', likes: 3 },
    { url: 'some-url4', likes: 4 },
    { url: 'some-url5', likes: 5 },
    { url: 'some-url6', likes: 6 },
  ]

  return (
    <div className={styles.searchResult}>
      <header className={styles.searchResultHeader}>
        <SearchBar></SearchBar>
      </header>
      <main className={styles.searchResults}>
        {results.map((result) => (
          <span className={styles.items} key={result.likes}>{result.url}</span>
        ))}
      </main>
    </div>
  )
}

export default SearchResult