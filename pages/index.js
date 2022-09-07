import * as React from 'react';
import { About } from '../components/About';
import Head from 'next/head';
import { getVideos } from '../lib/graphcms';
import { Poster } from '../components/Poster';

import styles from '../styles/Home.module.css';

export default function SoundDesign({ videos }) {
  const containerRef = React.useRef(null);
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

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

      <h1 className={styles.heading} onClick={scrollToTop}>
        <a title="Field Day Sound">
          <img src="/images/logo-small.png" alt="Field Day Sound logo" />
        </a>
      </h1>

      <About />

      <main className={`${styles.main} ${pageLoaded ? styles.loaded : ''}`} ref={containerRef}>
        {videos.map((video, index) => {
          return (
            <Poster
              agency={video.agency}
              brand={video.brand}
              director={video.director}
              editor={video.editor}
              key={index}
              poster={video.poster}
              posterMobile={video.posterMobile || {}}
              posterPlaceholder={video.posterPlaceholder}
              slug={video.slug}
              soundDesigner={video.soundDesigner}
              soundMixer={video.soundMixer}
              src={video.videoLink}
              title={video.title}
            />
          );
        })}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const videos = await getVideos()
  return {
    props: {
      videos
    },
    revalidate: 10 // in seconds
  }
}
