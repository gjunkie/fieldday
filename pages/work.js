import * as React from 'react';
// import ScrollSnap from 'scroll-snap';
import Head from 'next/head';
import { getAllVideosForHome } from '../lib/graphcms';
import { Header } from '../components/Header';
import { Video } from '../components/Video';

import styles from '../styles/SoundDesign.module.css';

// function callback() {
//   console.log('snapped')
// }

export default function SoundDesign({ videos }) {
  // const [isScrolling, setIsScrolling] = React.useState(false);
  // const [scrollTop, setScrollTop] = React.useState(0);
  // const throttleRef = React.useRef(null);
  const containerRef = React.useRef(null);

  // The scroll listener
  // const handleScroll = React.useCallback((e) => {
  //   if (isScrolling) return;
  //   setScrollTop(e.target.documentElement.scrollTop);
  //   // setIsScrolling(true);
  // }, []);

  React.useEffect(() => {
//     if (!containerRef.current) return;
//     console.log(containerRef)
// 
//     const element = containerRef.current;
//     const snapElement = new ScrollSnap(element, {
//       snapDestinationY: '40%',
//     });
// 
//     snapElement.bind(callback);
  }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

//   React.useEffect(() => {
//     let timeout;
//     throttleRef.current = true;
//     timeout = setTimeout(() => {
//       throttleRef.current = false;
//       setIsScrolling(false);
//     }, 100);
// 
//     return () => clearTimeout(timeout);
//   }, [isScrolling, scrollTop]);

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
              brand={video.brand}
              director={video.director}
              editor={video.editor}
              // isScrolling={isScrolling}
              key={index}
              slug={video.slug}
              src={video.videoFile.url}
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
