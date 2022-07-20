import * as React from 'react';
import videojs from 'video.js';
import { useInView } from 'react-intersection-observer';

export const Video = ({
  isScrolling,
  poster,
  posterPlaceholder,
  slug,
  src,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [videoEl, setPlayereoEl] = React.useState(null);
  const [player, setPlayer] = React.useState(null);
  const [isPosterLoaded, setIsPosterLoaded] = React.useState(false);

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

    if (!inView) {
      player.pause();
    }

    return () => clearTimeout(timeout);
  }, [inView, isScrolling]);

  const onVideo = React.useCallback((el) => {
    setPlayereoEl(el);
  }, []);

  React.useEffect(() => {
    if (videoEl == null) return;

    const vjsplayer = videojs(videoEl, {
      autoplay: false,
      controls: true,
      poster: posterPlaceholder && posterPlaceholder.url,
      fluid: false,
      aspectRatio: '16:9',
      sources: [{ src, type: 'video/mp4' }],
    });

    setPlayer(vjsplayer);

    vjsplayer.on('touchend', playVideo);

    if (poster && posterPlaceholder) {
      const imgLarge = new Image();
      imgLarge.src = poster.url;
      imgLarge.onload = function () {
        vjsplayer.poster(imgLarge.src);
        setTimeout(() => {
          setIsPosterLoaded(true);
        }, 1500)
      };
    }

    return () => vjsplayer.dispose();
  }, [videoEl]);

  const onPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playVideo = () => {
    if (player.paused()) {
      player.play();
    } else {
      player.pause();
    }
  };

  return (
    <div className={`video videojs video-${slug} ${isPlaying ? 'isPlaying' : ''} ${isPosterLoaded ? 'posterLoaded' : ''}`} ref={ref}>
      <video ref={onVideo} className="video-js" onPlay={onPlay} onPause={onPlay} playsInline preload="none" />
    </div>
  );
};
