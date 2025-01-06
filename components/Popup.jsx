import React from 'react';
import styles from '../stylesheets/Popup.module.css'

export default function Popup({ isOpen, onClose, children }) {
  return (
    <div className={`${styles.popupOverlay} ${isOpen && styles.show}`} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.popupClose} onClick={onClose}>
          &times;
        </button>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { className: styles.popupChild });
        })}
      </div>
    </div>
  );
};


