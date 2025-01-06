import React from 'react'
import styles from '../stylesheets/Card.module.css'
import { FaCloudUploadAlt } from "react-icons/fa";


export default function Card({
  icon = <FaCloudUploadAlt />,
  iconColor = "#3F75FE",
  title = 'card title',
  children = 'card content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta est optio incidunt alias.' }) {

  const [hover, setHover] = React.useState(false)

  return (
    <div
      className={`${styles.container} ${hover && styles.hover}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{ backgroundColor: iconColor }}
        className={styles.icon}
      >
        {icon}
      </div>
      <div className={styles.contentCon}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}


