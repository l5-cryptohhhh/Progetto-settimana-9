import { useEffect, useState } from 'react'
import { searchMovies } from '../../api'
import MovieTrack from './MovieTrack'
import Loader from './Loader'

function Row({ title, query, onOpenMovie }) {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    setMovies(null)
    searchMovies(query).then(setMovies)
  }, [query])

  if (movies === null) return <Loader />
  if (!movies.length) return null

  return <MovieTrack title={title} movies={movies} onOpenMovie={onOpenMovie} />
}

export default Row
