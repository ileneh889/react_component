import React from 'react'
import styles from '../stylesheets/Badge.module.css'

export default function Badge({ children, color = "#F3F4F6" }) {
  const [hover, setHover] = React.useState(false)

  return (
    <div
      className={`${styles.container} ${hover && styles.toggle}`}
      onMouseOver={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  )
}
