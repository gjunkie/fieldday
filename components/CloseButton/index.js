import * as React from 'react';
import styles from './CloseButton.module.css';

export const CloseButton = ({
  height = 24,
  onClick,
  width = 24,
}) => {

  return (
    <div
      className={styles.closeButton}
      onClick={onClick}
    >
      <svg width={width} height={height} fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L6.75 17.25"/>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75L17.25 17.25"/>
      </svg>
    </div>
  )
};
