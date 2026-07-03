import { useEffect, useRef, useState } from 'react'

function Search({ onSearch }) {
  const [value, setValue] = useState('')
  const timer = useRef(null)

  useEffect(() => {
    clearTimeout(timer.current)
    if (!value.trim()) {
      onSearch('')
      return
    }
    timer.current = setTimeout(() => onSearch(value.trim()), 400)
    return () => clearTimeout(timer.current)
  }, [value, onSearch])

  return (
    <input
      type="search"
      className="netflix-search form-control form-control-sm"
      placeholder="Search and press enter"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Search
