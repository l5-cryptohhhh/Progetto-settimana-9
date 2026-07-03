import Search from './Search'

const LINKS = ['Home', 'TV Shows', 'Movies', 'Recently Added', 'My List']

function Navbar({ onSearch, onLogoClick, searchKey }) {
  return (
    <nav className="netflix-navbar navbar navbar-dark px-3 px-md-4 py-2">
      <a href="javascript:void(0)" className="netflix-logo me-3" onClick={(e) => { e.preventDefault(); onLogoClick() }}>NETFLIX</a>

      <ul className="navbar-nav flex-row gap-3 me-auto d-none d-md-flex">
        {LINKS.map((l) => (
          <li className="nav-item" key={l}>
            <a className={`nav-link${l === 'TV Shows' ? ' active' : ''}`} href="javascript:void(0)" onClick={(e) => e.preventDefault()}>{l}</a>
          </li>
        ))}
      </ul>

      <div className="dropdown d-md-none me-auto">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="dropdown-menu dropdown-menu-dark netflix-nav-dropdown">
          {LINKS.map((l) => (
            <li key={l}>
              <a className={`dropdown-item${l === 'TV Shows' ? ' active' : ''}`} href="javascript:void(0)" onClick={(e) => e.preventDefault()}>{l}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex align-items-center gap-3 ms-auto">
        <Search key={searchKey} onSearch={onSearch} />
        <span className="text-white-50 small">KIDS</span>
        <a href="javascript:void(0)" className="nav-icon-btn" aria-label="notifications" onClick={(e) => e.preventDefault()}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"/></svg>
        </a>
        <a href="javascript:void(0)" className="nav-icon-btn" aria-label="profile" onClick={(e) => e.preventDefault()}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
