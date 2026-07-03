const FALLBACK = 'https://placehold.co/300x445/141414/808080?text=No+Image'

function Card({ movie, onOpen }) {
  const poster = movie.Poster !== 'N/A' ? movie.Poster : FALLBACK

  return (
    <div className="movie-card" onClick={() => onOpen(movie)}>
      <img
        src={poster}
        alt=""
        loading="lazy"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK }}
      />
      <div className="movie-card-overlay">
        <span>{movie.Title}</span>
      </div>
    </div>
  )
}

export default Card
