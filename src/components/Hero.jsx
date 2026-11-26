import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> PHYSICAL MEDICINE SYSTEMS</span>
          <h1>Advancing healthcare through innovative medical solutions.</h1>
          <p>
            Explore rehabilitation technology, thoughtfully designed for
            physiotherapy, sports medicine, orthopaedics, and pain management.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">Explore the catalog <span aria-hidden="true">↗</span></Link>
            <Link to="/contact" className="btn btn-outline">Talk to our team</Link>
          </div>
          <div className="hero-trust">
            <span className="trust-icon" aria-hidden="true">✦</span>
            <span>Catalog technology · 2025–2026</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src="/images/products/hero-screenshot.png" alt="Electrotherapy and rehabilitation system in use" />
          </div>
          <span className="hero-orbit orbit-one" />
          <span className="hero-orbit orbit-two" />
        </div>
      </div>
    </section>
  )
}
