import React from 'react'
import styles from "../stylesheets/Testimonials.module.css"

export default function Testimonials({
  photo = '',
  quote = 'quote here: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla officiis distinctio architecto dignissimos molestiae minus molestias ad eum aut.or sit, amet consectetur adipisicing elit. Eius nulla officiis distinctio architecto dignissimos mol',
  name = 'John Doe',
  position = 'CEO' }) {

  return (
    <div className={styles.container}>
      <div className={styles.avatarCon}>
        {/* 條件式記得換回來 */}
        {photo ? <img src={photo} alt="avatar" /> : <img src="../assets/Image.png" alt="avatar" />}
      </div>
      <div className={styles.contentCon}>
        <img src="../assets/Icon.png" alt="logo" />
        <p className={styles.quote}>{quote}</p>
        <div className={styles.authorCon}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </div>

  )
}


