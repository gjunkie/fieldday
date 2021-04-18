import * as React from 'react'
import styles from './Video.module.css'

export const Video = ({
  imgSrc,
  onCloseVideo,
}) => {

  return (
    <div className={styles.video}>
      <img src={imgSrc} />
      <div className={styles.closeWrapper}>
        <button className={styles.close} onClick={onCloseVideo}>X</button>
      </div>
    </div>
  )
}
