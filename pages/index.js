import * as React from 'react';
import Head from 'next/head';
import { getAllVideosForHome } from '../lib/graphcms';
import { Header } from '../components/Header';
import { Video } from '../components/Video';

import styles from '../styles/Home.module.css';


export default function Home({ videos }) {

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

      <main className={styles.main}>
        {videos.map((video, index) => {
          const videoJsOptions = {
            // techOrder: ['youtube'],
            autoplay: false,
            // aspectRatio: '8:16',
            controls: true,
            sources: [
              {
                src: video.videoFile.url,
                type: 'video/mp4',
              },
            ],
          };
          return (
           <Video
             brand={video.brand}
             director={video.director}
             editor={video.editor}
             key={index}
             options={videoJsOptions}
             title={video.title}
           />
          );
        })}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const videos = await getAllVideosForHome()
  return {
    props: {
      videos
    }
  }
}
