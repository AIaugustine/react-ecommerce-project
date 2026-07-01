import "./ProductCard.css";

function ProductCard({ product }) {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>

      <div className="product-info">
        <p className="brand">{product.brand}</p>

        <h3>{product.name}</h3>

        <p className="category">{product.category}</p>

        <div className="rating">
          ⭐ {product.rating}
          <span>({product.reviews} reviews)</span>
        </div>

        <div className="price-section">
          <span className="new-price">${discountedPrice.toFixed(2)}</span>

          {product.discount > 0 && (
            <span className="old-price">${product.price}</span>
          )}
        </div>

        <button>Add to Cart</button>
      </div>
    </article>
  );
}

export default ProductCard;
