const OMDB_KEY = import.meta.env.VITE_OMDB_API_KEY
const COMMENTS_TOKEN = import.meta.env.VITE_COMMENTS_TOKEN
const OMDB_URL = 'https://www.omdbapi.com/'
const COMMENTS_URL = 'https://striveschool-api.herokuapp.com/api/comments/'

export async function searchMovies(query) {
  const res = await fetch(`${OMDB_URL}?apikey=${OMDB_KEY}&s=${encodeURIComponent(query)}`)
  const data = await res.json()
  return data.Response === 'True' ? data.Search : []
}

export async function getMovieDetails(imdbID) {
  const res = await fetch(`${OMDB_URL}?apikey=${OMDB_KEY}&i=${imdbID}`)
  return res.json()
}

export async function getComments(elementId) {
  const res = await fetch(COMMENTS_URL + elementId, {
    headers: { Authorization: `Bearer ${COMMENTS_TOKEN}` },
  })
  if (!res.ok) return []
  return res.json()
}

export async function postComment({ elementId, comment, rate }) {
  const res = await fetch(COMMENTS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${COMMENTS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ elementId, comment, rate }),
  })
  return res.json()
}
