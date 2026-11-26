import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, compact }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} compact={compact} />
      ))}
    </div>
  )
}
