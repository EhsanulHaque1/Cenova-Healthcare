import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { PRODUCTS } from '../data/products.js'

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <section className="section page-header">
        <div className="container">
          <h1>Product not found</h1>
          <p>The requested system is not in the catalog.</p>
          <Link to="/products" className="btn btn-primary">Back to catalog</Link>
        </div>
      </section>
    )
  }

  const parts = product.description.split(/(Features:|Technical features:)/i)
  const overview = parts[0].trim()
  let featuresText = ''
  let technicalText = ''
  for (let i = 1; i < parts.length; i += 2) {
    const key = parts[i].replace(':', '').trim().toLowerCase()
    const value = (parts[i + 1] || '').trim()
    if (key === 'features') featuresText = value
    if (key === 'technical features') technicalText = value
  }

  const renderList = (text) => {
    if (!text) return null
    const items = text.split(/, |; |\n/).filter((t) => t.trim()).map((t) => t.trim().replace(/\.$/, ''))
    return (
      <ul className="detail-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <Header />
      <section className="section page-header detail-header">
        <div className="container detail-inner">
          <Link to="/products" className="back-link">
            <span aria-hidden="true">←</span> Back to catalog
          </Link>
          <div className="detail-grid">
            <div className="detail-media">
              <img src={product.image} alt={product.name} className="detail-image" />
            </div>
            <div className="detail-content">
              <span className="detail-badge">2025–2026 catalog</span>
              <h1 className="detail-title" dangerouslySetInnerHTML={{ __html: product.label || product.name }} />
              <p className="detail-sub">{overview}</p>
              <div className="detail-actions">
                <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-primary">
                  Request pricing
                </Link>
                <Link to="/contact" className="btn btn-outline">Contact our team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuresText && (
        <section className="section detail-section">
          <div className="container">
            <h2>Key features</h2>
            {renderList(featuresText)}
          </div>
        </section>
      )}

      {technicalText && (
        <section className="section detail-section detail-section--tech">
          <div className="container">
            <h2>Technical specifications</h2>
            {renderList(technicalText)}
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
