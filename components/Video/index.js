import * as React from 'react';
import videojs from 'video.js';
// import './Video.module.css';

export const Video = ({
  brand,
  director,
  editor,
  options,
  title
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const [videoEl, setVideoEl] = React.useState(null)
  const onVideo = React.useCallback((el) => {
    setVideoEl(el)
  }, [])

  React.useEffect(() => {
    if (videoEl == null) return
    const player = videojs(videoEl, options)
    return () => {
      player.dispose();
    }
  }, [options, videoEl]);

  React.useEffect(() => {
    if (!videoRef.current) return;
    console.log({isPlaying})
  }, [isPlaying]);

  const onPlay = () => {
    setIsPlaying(!isPlaying);
  };

      //<video className="video-js vjs-default-skin" controls width="100%" poster="" onPlay={onPlay} onPause={onPlay}>
  // return (
  //   <div className={styles.video}>
  //     {/* <video ref={onVideo} className="video-js" playsInline /> */}
  //     <div data-vjs-player>
  //       <video
  //         //id="my-video"
  //         className={`${styles.videojs} video-js vjs-layout-x-large`}
  //         playsInline
  //         controls
  //         preload="auto"
  //         data-setup={JSON.stringify(options)}
  //       ></video>
  //     </div>
  //     <div className={`${styles.meta}`}>
  //       <div className={styles.left}>
  //         <h2 className={styles.brand}>{brand}</h2>
  //         <h3 className={styles.title}>{title}</h3>
  //         <div className={styles.data}>Editor - {editor}</div>
  //         <div className={styles.data}>Director - {director}</div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="video videojs" ref={videoRef}>
      <video ref={onVideo} className="video-js" onPlay={onPlay} onPause={onPlay} playsInline />
      <div className={`meta ${isPlaying ? '' : 'visible'}`}>
        <div className="left">
          <h2 className="brand">{brand}</h2>
          <h3 className="title">{title}</h3>
          <div className="data">Editor - {editor}</div>
          <div className="data">Director - {director}</div>
        </div>
      </div>
    </div>
  );
};
