import type { CSSProperties } from "react";
import { siteConfig, storeProducts, storePromo } from "@/lib/site";

export function StorePromo() {
  return (
    <section id="store" className="section store-promo" aria-labelledby="store-title">
      <div className="container">
        <header className="section-header store-promo__header" data-reveal>
          <p className="section-label">{storePromo.eyebrow}</p>
          <h2 id="store-title">{storePromo.title}</h2>
          <p className="section-desc">{storePromo.description}</p>
        </header>

        <ul className="store-promo__cats" data-reveal aria-label="Categorias da loja">
          {storePromo.categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>

        <div className="store-promo__grid">
          {storeProducts.map((product, i) => (
            <a
              key={product.id}
              href={siteConfig.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="store-product"
              data-reveal
              style={
                {
                  "--accent": product.accent,
                  "--delay": `${i * 60}ms`,
                } as CSSProperties
              }
            >
              <div className="store-product__meta">
                <span className="store-product__cat">{product.category}</span>
                {product.badge ? (
                  <span className="store-product__badge">{product.badge}</span>
                ) : null}
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="store-product__price">
                <strong>{product.price}</strong>
                {product.priceNote ? <span>{product.priceNote}</span> : null}
              </div>
              <span className="store-product__cta">Ver na Store →</span>
            </a>
          ))}
        </div>

        <div className="store-promo__footer" data-reveal>
          <p>
            18+ produtos · Entrega imediata ou em até 48h · Pix, cartão e boleto
          </p>
          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--glow"
          >
            {storePromo.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
