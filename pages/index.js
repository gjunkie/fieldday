import * as React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {

  const [isPosterLoaded, setIsPosterLoaded] = React.useState(false);
  const [posterUrl, setPosterUrl] = React.useState('/images/home-poster.jpg');
  const [clickedLogo, setClickedLogo] = React.useState(false);

  React.useEffect(() => {
    const imgLarge = new Image();
    imgLarge.src = '/images/home-poster-large.jpg';
    imgLarge.onload = function () {
      setTimeout(() => {
        setIsPosterLoaded(true);
        setPosterUrl(imgLarge.src);
      }, 500);
    };
  }, []);

  const handleLogoClick = () => {
    setClickedLogo(true);
    setTimeout(() => {
      window.location = "/work";
    }, 1000);
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://fielddaysound.tv/" />
        <meta name="description" content="" />
        <title>Field Day Sound</title>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content="Field Day Sound" key="twtitle" />
        <meta name="twitter:description" content="" key="twtitle" />
        <meta name="twitter:creator" content="@..." key="twhandle" />
        <meta name="twitter:image" content="https://fielddaysound.com/images/....jpg" key="twimage" />

        {/* Open Graph */}
        <meta property="og:url" content="https://fielddaysound" key="ogurl" />
        <meta property="og:image" content="https://fielddaysound.com/images/....jpg" key="ogimage" />
        <meta property="og:site_name" content="Field Day Sound" key="ogsitename" />
        {/* <meta property="og:title" content={meta.title} key="ogtitle" /> */}
        <meta property="og:description" content="" key="ogdesc" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={`${styles.videoWrapper} ${isPosterLoaded ? styles.posterLoaded : ''} ${clickedLogo ? styles.fadeOut : ''}`}>
            <h1 onClick={handleLogoClick}>
              <img alt="Field Day Sound" src="images/logo.png" />
            </h1>
            <video playsInline autoPlay muted loop poster={posterUrl} id="bgvid">
              <source src="https://player.vimeo.com/external/624066986.hd.mp4?s=1cf6780146a1457147a74e2ac666dd0275043fe6&profile_id=174" type="video/mp4" />
            </video>
          </div>
          </div>
      </main>
    </>
  )
}
