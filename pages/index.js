import * as React from 'react';
import Head from 'next/head';
import Modal from 'react-modal';
import { getAllVideosForHome } from '../lib/graphcms';
import { AnimatedList } from '../components/AnimatedList';
import { Logo } from '../components/Logo';
import { Video } from '../components/Video';

import styles from '../styles/Home.module.css';

Modal.setAppElement('#__next')

const modalStyles = {
  overlay: {
    backgroundColor: '#e4e3dd',
    zIndex: 2,
  },
  content: {
    backgroundColor: '#e4e3dd',
    display: 'flex',
    inset: 0,
    justifyContent: 'center',
    padding: 0,
  }
}

export default function Home({ videos }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [activeVideo, setActiveVideo] = React.useState(null);
  const [videosList, setPostList] = React.useState(videos);

  React.useEffect(() => {
    let newList = videos;
    for (let i = 0; i < 100; i++) {
      newList = newList.concat(videos);
    }
    setPostList(newList);
  }, [videos]);

  const toggleModal = React.useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen]);

  const handlePosterClick = React.useCallback((id) => {
    toggleModal();
    const video = videosList.find(v => v.id === id)
    setActiveVideo(video)
  }, []);

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

      <div className={styles.top}>
        <h1 className={styles.title}>field day</h1>
        <Logo />
      </div>

      <AnimatedList
        onClickPoster={handlePosterClick}
        videosList={videosList}
      />

      <div className={styles.section}>
        <h2 className={styles.heading}>about</h2>
        <p>Field Day is a boutique sound design, mix and music company based out of Portland, OR. We work with filmmakers and creative agencies to bring their stories and ads to life through breathtaking sound.</p>
        <p>Field Day is creatively lead by Morgan Johnson & Noah Woodburn.</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>contact</h2>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Post modal"
        style={modalStyles}
      >
        { activeVideo ? (
          <Video
            onCloseVideo={toggleModal}
            video={activeVideo}
          />
        ) : null }
      </Modal>
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