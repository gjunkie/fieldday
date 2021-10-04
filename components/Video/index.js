import * as React from 'react';
import videojs from 'video.js';
import { useInView } from 'react-intersection-observer';
// import './Video.module.css';

export const Video = ({
  agency,
  brand,
  director,
  editor,
  isScrolling,
  poster,
  slug,
  src,
  title
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false)
  const [videoEl, setVideoEl] = React.useState(null)
  const [vid, setVid] = React.useState(null);

  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: '-25% 0% -25% 0%',
  });

  React.useEffect(() => {
    if (!entry || isScrolling) return;

    // hack to prevent auto scroll on first load.
    if (!loaded) {
      setLoaded(true);
      return;
    }
    let timeout;

    if (inView) {
      // timeout = setTimeout(() => {
        // entry.target.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        // Scroll.scroller.scrollTo(`video-${slug}`, {
        //   duration: 200,
        //   delay: 0,
        //   smooth: 'easeInOutQuart'
        // });
      // }, 150);
    }

    if (!inView) {
      vid.pause();
    }

    return () => clearTimeout(timeout);
  }, [inView, isScrolling]);

  const onVideo = React.useCallback((el) => {
    setVideoEl(el);
  }, []);

  React.useEffect(() => {
    if (videoEl == null) return;
    const player = videojs(videoEl, {
      autoplay: false,
      controls: true,
      poster: poster.url,
      sources: [
        {
          src,
          type: 'video/mp4',
        },
      ],

    });
    setVid(player);

    player.on('touchstart', function (e) {
      if (e.target.nodeName === 'VIDEO' || e.target.nodeName === 'SPAN') {
        if (player.paused()) {
          player.play();
        } else {
          player.pause();
        }
        onPlay();
      }
    });

    return () => player.dispose();
  }, [videoEl]);

  const onPlay = () => {
    console.log('set')
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`video videojs video-${slug} ${isPlaying ? 'isPlaying' : ''}`} ref={ref}>
      <video ref={onVideo} className="video-js" onPlay={onPlay} onPause={onPlay} playsInline />
      <div className={`meta ${isPlaying ? '' : 'visible'}`}>
        <div className="left">
          <h2 className="brand">{brand}</h2>
          <h3 className="title">{title}</h3>
          <div className="data">Agency - {agency}</div>
          <div className="data">Director - {director}</div>
        </div>
      </div>
    </div>
  );
};
