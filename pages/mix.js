import * as React from 'react';
import Head from 'next/head';
import { getVideos } from '../lib/graphcms';
import { Header } from '../components/Header';
import { Video } from '../components/Video';

import styles from '../styles/SoundDesign.module.css';

export default function SoundDesign({ videos }) {
  const containerRef = React.useRef(null);

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

      <Header />

      <main className={styles.main} ref={containerRef}>
        {videos.map((video, index) => {
          return (
            <Video
              agency={video.agency}
              brand={video.brand}
              director={video.director}
              editor={video.editor}
              key={index}
              poster={video.poster}
              posterPlaceholder={video.posterPlaceholder}
              slug={video.slug}
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
  const videos = await getVideos({asSoundDesign: false, asMix: true})
  return {
    props: {
      videos
    },
    revalidate: 10 // in seconds
  }
}
