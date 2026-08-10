import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  const [isDark, setIsDark] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const addToCart = (product) => setCart((prev) => [...prev, product])

  return (
    <div className={isDark ? styles.dark : styles.light}>
      <nav className={styles.navbar}>
        <h1 className={styles.navTitle}>Fresh Basket</h1>
        <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </nav>

      <div className={styles.pageBody}>
        <div className={styles.toolbar}>
          <label htmlFor="category-filter">Filter by Category:</label>
          <select
            id="category-filter"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
          </select>
        </div>

        <div className={styles.layout}>
          <ProductList category={category} onAddToCart={addToCart} />
          <Cart cartItems={cart} />
        </div>
      </div>
    </div>
  )
}

export default App
