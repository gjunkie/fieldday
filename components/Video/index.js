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
        <h2>{video.title}</h2>
        <h4>{video.director}</h4>
        <h4>{video.editor}</h4>
        <h4>{video.soundDesigner}</h4>
        <h4>{video.agency}</h4>
        <button className={styles.close} onClick={onCloseVideo}>X</button>
      </div>
    </div>
  )
}
