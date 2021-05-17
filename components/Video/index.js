import * as React from 'react'
import styles from './Video.module.css'

export const Video = ({
  onCloseVideo,
  video
}) => {

  return (
    <div className={styles.video}>
      <video controls width="100%" poster="">
        {/* <source src="/media/cc0-videos/flower.webm" */}
        {/*         type="video/webm"> */}
        <source src={video.videoFile.url}
                type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className={styles.closeWrapper}>
        <div className={styles.left}>
          <h2 className={styles.brand}>{video.brand}</h2>
          <h3 className={styles.title}>{video.title}</h3>
        </div>
        <div className={styles.middle}>
          <div className={styles.data}>Sound Designer: {video.soundDesigner}</div>
          <div className={styles.data}>Director: {video.director}</div>
          <div className={styles.data}>Agency: {video.agency}</div>
          <div className={styles.data}>Editor: {video.editor}</div>
        </div>
        <div className={styles.right}>
          <button className={styles.close} onClick={onCloseVideo}>X</button>
        </div>
      </div>
    </div>
  )
}
