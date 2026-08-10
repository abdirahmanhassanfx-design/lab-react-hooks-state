import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <button className={styles.toggleBtn} onClick={onToggle}>
      Toggle {isDark ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
