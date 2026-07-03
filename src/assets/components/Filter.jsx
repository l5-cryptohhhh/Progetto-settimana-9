function Filter({ genres, onSelect }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-light btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Genres
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        <li>
          <button className="dropdown-item" type="button" onClick={() => onSelect(null)}>
            All
          </button>
        </li>
        {genres.map((g) => (
          <li key={g}>
            <button className="dropdown-item" type="button" onClick={() => onSelect(g)}>
              {g}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
