const COLUMNS = [
  ['Audio and Subtitles', 'Media Center', 'Privacy', 'Contact us'],
  ['Audio Description', 'Investor Relations', 'Legal Notices'],
  ['Help Center', 'Jobs', 'Cookie Preferences'],
  ['Gift Cards', 'Terms of Use', 'Corporate Information'],
]

const SOCIALS = [
  { name: 'facebook', d: 'M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1.2-1.3H18V0h-4c-3.7 0-5 1.7-5 4.8z' },
  { name: 'instagram', d: 'M12 0C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4 .7c-.8.3-1.5.8-2.1 1.5C1.2 2.8.7 3.5.4 4.3c-.3.8-.5 1.7-.6 3C-.2 8.6-.2 9-.2 12s0 3.4.1 4.7c.1 1.3.3 2.2.6 3 .3.8.8 1.5 1.5 2.1.6.7 1.3 1.2 2.1 1.5.8.3 1.7.5 3 .6C8.3 24 8.7 24 12 24s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.8 2.1-1.5.7-.6 1.2-1.3 1.5-2.1.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-4.7s0-3.4-.1-4.7c-.1-1.3-.3-2.2-.6-3-.3-.8-.8-1.5-1.5-2.1A5.4 5.4 0 0 0 20 .7c-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0m0 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.6.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.6-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.6-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.1 15.6 2.1 15.3 2.1 12s0-3.6.1-4.9c0-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.6 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4m0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-10.5a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0' },
  { name: 'twitter', d: 'M23.6 4.6a9.7 9.7 0 0 1-2.8.8 4.9 4.9 0 0 0 2.1-2.7 9.7 9.7 0 0 1-3 1.2 4.8 4.8 0 0 0-8.3 4.4A13.7 13.7 0 0 1 1.6 3.2a4.8 4.8 0 0 0 1.5 6.4 4.8 4.8 0 0 1-2.2-.6v.1a4.8 4.8 0 0 0 3.9 4.7 4.9 4.9 0 0 1-2.2.1 4.8 4.8 0 0 0 4.5 3.3A9.7 9.7 0 0 1 0 19.3a13.7 13.7 0 0 0 7.4 2.2c8.9 0 13.7-7.4 13.7-13.7v-.6a9.9 9.9 0 0 0 2.4-2.6' },
  { name: 'youtube', d: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8M9.6 15.6V8.4l6.3 3.6z' },
]

function Footer() {
  return (
    <footer className="netflix-footer">
      <div className="footer-socials">
        {SOCIALS.map((s) => (
          <a key={s.name} href="javascript:void(0)" aria-label={s.name} onClick={(e) => e.preventDefault()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
          </a>
        ))}
      </div>
      <div className="footer-columns">
        {COLUMNS.map((col, i) => (
          <ul key={i}>
            {col.map((item) => (
              <li key={item}>
                <a href="javascript:void(0)" onClick={(e) => e.preventDefault()}>{item}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <a href="javascript:void(0)" className="footer-service-code" onClick={(e) => e.preventDefault()}>
        Service Code
      </a>
      <p className="footer-copyright">&copy; 1997-{new Date().getFullYear()} Netflix, Inc.</p>
    </footer>
  )
}

export default Footer
