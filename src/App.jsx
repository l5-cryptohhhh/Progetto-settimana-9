import { useCallback, useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Filter from './assets/components/Filter'
import Row from './assets/components/Row'
import MovieTrack from './assets/components/MovieTrack'
import MovieModal from './assets/components/MovieModal'
import Footer from './assets/components/Footer'
import Loader from './assets/components/Loader'
import { searchMovies } from './api'

const CATEGORIES = ['Harry Potter', 'Lord of the Rings', 'Star Wars']

function App() {
  const [searchResults, setSearchResults] = useState(null)
  const [searchLoading, setSearchLoading] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [activeGenre, setActiveGenre] = useState(null)
  const [searchKey, setSearchKey] = useState(0)

  const handleSearch = useCallback((query) => {
    if (!query) {
      setSearchResults(null)
      setSearchLoading(false)
      return
    }
    setSearchLoading(true)
    searchMovies(query).then((results) => {
      setSearchResults({ query, results })
      setSearchLoading(false)
    })
  }, [])

  function handleFilterSelect(genre) {
    setSearchResults(null)
    setActiveGenre(genre)
  }

  function handleLogoClick() {
    setSearchResults(null)
    setActiveGenre(null)
    setSelectedMovie(null)
    setSearchKey((k) => k + 1)
  }

  return (
    <div className="netflix-app">
      <Navbar onSearch={handleSearch} onLogoClick={handleLogoClick} searchKey={searchKey} />

      <div className="d-flex justify-content-between align-items-center px-4 pt-4">
        <div className="d-flex align-items-center gap-3">
          <h2 className="m-0">TV Shows</h2>
          <Filter genres={CATEGORIES} onSelect={handleFilterSelect} />
        </div>
        <div className="d-flex gap-2">
          <a href="javascript:void(0)" className="text-white-50" aria-label="grid view" onClick={(e) => e.preventDefault()}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/></svg>
          </a>
          <a href="javascript:void(0)" className="text-white-50" aria-label="list view" onClick={(e) => e.preventDefault()}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
          </a>
        </div>
      </div>

      <div className="py-3">
        {searchLoading ? (
          <Loader />
        ) : searchResults ? (
          <MovieTrack
            title={`Results for "${searchResults.query}"`}
            movies={searchResults.results}
            onOpenMovie={setSelectedMovie}
          />
        ) : (
          (activeGenre ? [activeGenre] : CATEGORIES).map((title) => (
            <Row key={title} title={title} query={title} onOpenMovie={setSelectedMovie} />
          ))
        )}
      </div>

      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}

      <Footer />
    </div>
  )
}

export default App
