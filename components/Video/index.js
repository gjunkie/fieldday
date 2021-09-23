import * as React from 'react';
import videojs from 'video.js';
import { useInView } from 'react-intersection-observer';
// import './Video.module.css';

export const Video = ({
  brand,
  director,
  editor,
  options,
  title
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [videoEl, setVideoEl] = React.useState(null)
  const onVideo = React.useCallback((el) => {
    setVideoEl(el)
  }, [])

  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: '-25% 0% -25% 0%',
  });

  React.useEffect(() => {
    if (!entry) return;
    let timeout;
    if (inView) {
      timeout = setTimeout(() => {
        entry.target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [inView]);

  React.useEffect(() => {
    if (videoEl == null) return
    const player = videojs(videoEl, options)

    return () => player.dispose();
  }, [options, videoEl]);

  const onPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video videojs" ref={ref}>
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
