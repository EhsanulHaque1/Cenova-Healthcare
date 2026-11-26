import { useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Footer from './components/Footer.jsx'
import { PRODUCTS, CATEGORIES } from './data/products.js'
import './App.css'

const FILTER_CATEGORIES = CATEGORIES.filter((category) => category.id !== 'rehabilitation')

function Home() {
  const featured = PRODUCTS.filter((p) => p.featured)
  return (
    <>
      <Header />
      <Hero />
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker">CATALOG HIGHLIGHTS</span>
              <h2>Clinical technologies</h2>
            </div>
            <Link to="/products" className="view-all">View full catalog <span aria-hidden="true">↗</span></Link>
          </div>
          <ProductGrid products={featured} compact />
        </div>
      </section>
      <section className="section technologies-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker">BUILT FOR CLINICAL CARE</span>
              <h2>Therapy, thoughtfully engineered</h2>
            </div>
          </div>
          <div className="technology-grid">
            {[
              ['01', 'Combination therapy', 'Ultrasound paired with multi-channel electrotherapy.'],
              ['02', 'Electrotherapy', 'Flexible two- and four-channel treatment systems.'],
              ['03', 'Ultrasound therapy', 'Portable therapy units with 1 and 3 MHz frequencies.'],
              ['04', 'More modalities', 'Vacuum, laser, and shortwave systems in the catalog.'],
            ].map(([number, title, description]) => (
              <Link key={number} to="/products" className="technology-card">
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="technology-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section cta-section">
        <div className="container cta-card">
          <span className="section-kicker">LET'S FIND THE RIGHT SYSTEM</span>
          <h2>Looking for the right medical solution?</h2>
          <p>Tell us about your clinic or rehabilitation needs. Our team can help you explore the rehabilitation catalog.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-light">Contact our team <span aria-hidden="true">→</span></Link>
            <Link to="/products" className="btn btn-outline">Browse catalog</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const cat = searchParams.get('cat') || 'all'
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = cat === 'all' || p.category === cat
      const matchQ = q === '' || `${p.name} ${p.description}`.toLowerCase().includes(q.toLowerCase())
      return matchCat && matchQ
    })
  }, [cat, q])

  const category = CATEGORIES.find((c) => c.id === cat) || CATEGORIES[0]

  return (
    <>
      <Header />
      <section className="section page-header">
        <div className="container">
          <h1>{category.label}</h1>
          <p>{filtered.length} products available</p>
        </div>
      </section>
      <section className="section products-section">
        <div className="container">
          <div className="products-header">
            <CategoryFilter
              categories={FILTER_CATEGORIES}
              activeCategory={cat}
              onSelect={(id) => {
                const params = new URLSearchParams(searchParams)
                if (id === 'all') params.delete('cat')
                else params.set('cat', id)
              setSearchParams(params)
              }}
            />
            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <button type="button" className="search-submit" aria-label="Search products">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
              </button>
            </div>
          </div>
          <div className="results-count">
            <span>Showing {filtered.length} catalog system{filtered.length !== 1 ? 's' : ''}</span>
            <span>2025–2026</span>
          </div>
          {filtered.length > 0
            ? <ProductGrid products={filtered} />
            : <p className="empty-state">No systems match that search. Try another product name or therapy.</p>}
          <div className="catalog-download">
            <div className="catalog-download-copy">
              <span className="section-kicker">COMPLETE CATALOG</span>
              <h2>NU TEK All Catalog 2025</h2>
              <p>View or download the complete NU TEK product catalog.</p>
            </div>
            <div className="catalog-download-actions">
              <a
                className="btn btn-outline"
                href="/NU-TEK-All-Catalog-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View catalog
              </a>
              <a
                className="btn btn-primary"
                href="/NU-TEK-All-Catalog-2025.pdf"
                download="NU TEK All catalog 2025.pdf"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function About() {
  return (
    <>
      <Header />
      <section className="section page-header">
        <div className="container">
          <h1>About CenovaHealthcare</h1>
          <p>Presenting physical medicine and rehabilitation systems.</p>
        </div>
      </section>
      <section className="section about-section">
        <div className="container about-inner">
          <div className="about-text">
            <h2>About the catalog</h2>
            <p>
            Cenova Healthcare presents physical medicine and rehabilitation
            systems for physiotherapy, orthopaedics, sports medicine, neurology, and
            pain management. The 2025–2026 catalog features combination, ultrasound,
            electrotherapy, vacuum, laser, and shortwave therapy equipment.
            </p>
            <h2>Why Choose Us</h2>
            <ul className="feature-list">
              <li>Physical medicine equipment catalog</li>
              <li>Products manufactured by Cenova Health</li>
              <li>Therapy systems for clinic and rehabilitation settings</li>
              <li>Catalog specifications available for each model</li>
            </ul>
          </div>
          <div className="about-visual">
            <svg viewBox="0 0 400 320" className="about-img">
              <defs>
                <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dbeafe" />
                  <stop offset="100%" stopColor="#bfdbfe" />
                </linearGradient>
              </defs>
              <rect width="400" height="320" fill="url(#aboutGrad)" rx="20" />
              <path d="M80 140 Q200 60 320 140 T80 140" fill="none" stroke="#2563eb" strokeWidth="4" />
              <rect x="160" y="160" width="80" height="100" fill="#2563eb" rx="8" />
              <circle cx="200" cy="270" r="14" fill="#2563eb" />
              <circle cx="140" cy="270" r="14" fill="#2563eb" />
              <circle cx="260" cy="270" r="14" fill="#2563eb" />
            </svg>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function Contact() {
  const [searchParams] = useSearchParams()
  const productName = searchParams.get('product')

  return (
    <>
      <Header />
      <section className="section page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ask us about our rehabilitation catalog.</p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-inner">
          <div className="contact-info">
            <h2>Reach Us</h2>
            <ul className="info-list">
              <li>
                <span className="label">Phone</span>
                <a href="tel:+85268860462">+852 6886 0462</a>
              </li>
              <li>
                <span className="label">Email</span>
                <a href="mailto:support@cenovahealthcare.com">support@cenovahealthcare.com</a>
              </li>
              <li>
                <span className="label">Address</span>
                Haque Tower, Panthapath, Dhaka, Bangladesh
              </li>
              <li>
                <span className="label">Hours</span>
                Cenova International
              </li>
            </ul>
          </div>
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h2>Send a Message</h2>
              <div className="form-row">
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" required />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" required />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input type="text" defaultValue={productName ? `Product inquiry: ${productName}` : ''} />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea rows="5" required />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <section className="section contact-map-section">
        <div className="container">
          <div className="contact-map-heading">
            <div>
              <span className="section-kicker">VISIT US</span>
              <h2>Haque Tower, Panthapath</h2>
            </div>
            <a href="https://maps.app.goo.gl/9X3PNy7ZALzThQQG6" target="_blank" rel="noopener noreferrer">
              Open in Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="Map showing Haque Tower, Panthapath, Dhaka"
              src="https://www.google.com/maps?q=23.753219,90.3851011&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/features/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
