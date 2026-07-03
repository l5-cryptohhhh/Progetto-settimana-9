import Card from './Card'

function MovieTrack({ title, movies, onOpenMovie }) {
  return (
    <section className="movie-row">
      <h5 className="movie-row-title">{title}</h5>
      <div className="movie-row-track">
        {movies.map((m) => (
          <Card key={m.imdbID} movie={m} onOpen={onOpenMovie} />
        ))}
      </div>
    </section>
  )
}

export default MovieTrack
