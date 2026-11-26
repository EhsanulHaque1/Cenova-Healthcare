export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-mark" aria-hidden="true">N</span>
            <span className="logo-copy">
              <span className="logo-text">Cenova Healthcare</span>
              <span className="logo-caption">PHYSICAL MEDICINE · REHABILITATION</span>
            </span>
          </div>
          <p className="footer-tag">
            Physical medicine and rehabilitation systems for better clinical care.
          </p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Catalog</h4>
            <ul>
              <li><a href="/products">All systems</a></li>
              <li><a href="/products?cat=rehabilitation">Physical rehabilitation</a></li>
              <li><a href="/products">Therapy technologies</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Explore</h4>
            <ul>
              <li><a href="/about">About Cenova</a></li>
              <li><a href="/contact">Request product details</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@cenovahealthcare.com">support@cenovahealthcare.com</a></li>
              <li>Cenova International</li>
              <li><a href="https://www.nutekmedical.com">nutekmedical.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Cenova Healthcare.</p>
        </div>
      </div>
    </footer>
  )
}
