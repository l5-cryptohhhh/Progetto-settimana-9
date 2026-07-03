import { useEffect, useState } from 'react'
import { getMovieDetails, getComments, postComment } from '../../api'

function MovieModal({ movie, onClose }) {
  const [details, setDetails] = useState(null)
  const [comments, setComments] = useState([])
  const [text, setText] = useState('')
  const [rate, setRate] = useState('')

  useEffect(() => {
    getMovieDetails(movie.imdbID).then(setDetails)
    getComments(movie.imdbID).then(setComments)
  }, [movie])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim() || !rate) return
    await postComment({ elementId: movie.imdbID, comment: text, rate })
    setText('')
    setRate('')
    getComments(movie.imdbID).then(setComments)
  }

  return (
    <>
      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content netflix-modal">
            <div className="modal-header border-0">
              <h5 className="modal-title">{details?.Title ?? movie.Title}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <p><strong>Released:</strong> {details?.Released ?? '—'}</p>
              <p><strong>Genre:</strong> {details?.Genre ?? '—'}</p>

              <hr />

              <form onSubmit={handleSubmit} className="mb-3">
                <div className="d-flex gap-2 mb-2">
                  <select className="form-select form-select-sm w-auto" value={rate} onChange={(e) => setRate(e.target.value)}>
                    <option value="">Rating</option>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  className="form-control mb-2"
                  rows="2"
                  placeholder="Leave a comment..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" className="btn btn-danger btn-sm">Send</button>
              </form>

              <div className="comments-list">
                {comments.map((c) => (
                  <div key={c._id} className="comment-item">
                    <span className="comment-rate">{c.rate}/5</span>
                    <span>{c.comment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show" onClick={onClose}></div>
    </>
  )
}

export default MovieModal
