import React from 'react'
import styles from '../styles/Cart.module.css'

const Cart = ({ cartItems }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h2>Shopping Cart</h2>
        <span className={styles.badge}>{cartItems.length}</span>
      </div>
      {cartItems.length === 0
        ? <p className={styles.empty}>Your cart is empty.</p>
        : <ul className={styles.list}>
            {cartItems.map((item, i) => (
              <li key={i} className={styles.item}>{item.name} is in your cart.</li>
            ))}
          </ul>
      }
    </div>
  )
}

export default Cart
