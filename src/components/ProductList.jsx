import React from 'react'
import ProductCard from './ProductCard'
import styles from '../styles/ProductCard.module.css'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, onAddToCart }) => {
  const filtered = category === 'all'
    ? sampleProducts
    : sampleProducts.filter((p) => p.category === category)

  return (
    <div>
      <h2>Available Products <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#888' }}>({filtered.length} {filtered.length === 1 ? 'item' : 'items'})</span></h2>
      {filtered.length === 0
        ? <p>No products available</p>
        : <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
      }
    </div>
  )
}

export default ProductList
