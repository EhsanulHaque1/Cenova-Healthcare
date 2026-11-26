import { Link } from 'react-router-dom'

export default function ProductCard({ product, compact }) {
  const updateSpotlight = (event) => {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <article
      className={`product-card${compact ? ' product-card--compact' : ''}`}
      onPointerMove={updateSpotlight}
    >
      <Link to={`/features/${product.id}`} className="card-image" aria-label={`View details for ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" width="300" height="300" />
        {product.featured && <span className="product-badge">CATALOG FEATURE</span>}
        <span className="image-arrow" aria-hidden="true">↗</span>
      </Link>
      {!compact && (
        <div className="card-body">
          <span className="card-category">REHABILITATION</span>
          <h3 className="card-title"><span dangerouslySetInnerHTML={{ __html: product.label || product.name }} /></h3>
          <p className="card-desc">{product.description.split('.')[0]}</p>
          <div className="card-footer">
            <span className="card-price">Request pricing</span>
            <Link to={`/features/${product.id}`} className="card-link">
              Product details <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
      {compact && (
        <div className="card-body card-body--compact">
          <h3 className="card-title"><span dangerouslySetInnerHTML={{ __html: product.label || product.name }} /></h3>
        </div>
      )}
    </article>
  )
}
