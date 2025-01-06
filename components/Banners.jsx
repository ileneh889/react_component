import React from 'react'
import styles from '../stylesheets/Banners.module.css'
import { FaCircleCheck } from "react-icons/fa6";
import { AiFillWarning } from "react-icons/ai";
import { BsXCircleFill } from "react-icons/bs";
import { FaCircleInfo } from "react-icons/fa6";



export default function Banners({ type = 'neutral', children = null }) {
  //決定icon
  const styleAndTitle = (() => {
    switch (type) {
      case 'success':
        return { icon: <FaCircleCheck />, title: 'Congratulations!', iconColor: '#34D399', color: '#065F46', bgColor: '#ECFDF5' }
      case 'warning':
        return { icon: <AiFillWarning />, title: 'Attention!', iconColor: '#FBBF24', color: '#B45309', bgColor: '#FFFBEB' }
      case 'error':
        return { icon: <BsXCircleFill />, title: 'There is a problem with your application', iconColor: '#F87171', color: '#92400E', bgColor: '#FEF2F2' }
      default:
        return { icon: <FaCircleInfo />, title: 'Update available', iconColor: '#60A5FA', color: '#1E40AF', bgColor: '#EFF6FF' }
    }
  })()

  //決定高度
  const height = children ? '80px' : '52px'

  console.log(styleAndTitle.icon)

  return (
    <div
      className={styles.container}
      style={{ height, backgroundColor: styleAndTitle.bgColor }}
    >
      <div className={styles.midContainer}>
        <div
          className={`${styles.iconCon} ${!children && styles.alignCenter}`}
          style={children ? { paddingTop: '8px', color: styleAndTitle.iconColor } : { color: styleAndTitle.iconColor }}
        >
          {styleAndTitle.icon}
        </div>
        <div className={styles.contentCon} style={{ color: styleAndTitle.color }}>
          <p className={`${styles.title} ${!children && styles.alignCenter}`} >{styleAndTitle.title}</p>
          {children && <p className={styles.content} >{children}</p>}
        </div>
      </div>
    </div>
  )
}
