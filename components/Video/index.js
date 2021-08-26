import * as React from 'react'
import styles from './Video.module.css'

export const Video = ({
  video
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (!videoRef.current) return;
    console.log({isPlaying})
  }, [isPlaying]);

  const onPlay = () => {
    console.log(video);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.video} ref={videoRef}>
      <video controls width="100%" poster="" onPlay={onPlay} onPause={onPlay}>
        {/* <source src="/media/cc0-videos/flower.webm" */}
        {/*         type="video/webm"> */}
        <source src={video.videoFile.url}
                type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className={`${styles.meta} ${isPlaying ? '' : styles.visible}`}>
        <div className={styles.left}>
          <h2 className={styles.brand}>{video.brand}</h2>
          <h3 className={styles.title}>{video.title}</h3>
          <div className={styles.data}>Editor - {video.editor}</div>
          <div className={styles.data}>Director - {video.director}</div>
        </div>
      </div>
    </div>
  );
};
