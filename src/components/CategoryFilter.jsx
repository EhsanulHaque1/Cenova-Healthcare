export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-filter">
      <div className="chip-list" role="tablist" aria-label="Product categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            className={`chip ${activeCategory === cat.id ? 'chip-active' : ''}`}
            aria-pressed={activeCategory === cat.id}
            onClick={() => onSelect(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
