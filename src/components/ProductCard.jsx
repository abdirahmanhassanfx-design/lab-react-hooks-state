import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p style={{ fontWeight: 600 }}>{product.price}</p>
      <span className={`${styles.badge} ${product.inStock ? styles.inStock : styles.noStock}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
      <button
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
