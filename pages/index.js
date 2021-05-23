import * as React from 'react';
import Head from 'next/head';
import Modal from 'react-modal';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { getAllVideosForHome } from '../lib/graphcms';
import { Poster } from '../components/Poster';
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
  const listRef = React.createRef();

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToItem(500, "start");
    }
  }, [videosList]);

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
    toggleModal()
    const video = videosList.find(v => v.id === id)
    setActiveVideo(video)
  }, []);

  const renderRow = ({ index, style }) => (
    <div style={{
        ...style,
        top: `50px`
      }}>
      <Poster
        id={videosList[index].id}
        imgUrl={videosList[index].poster.url}
        key={index}
        onClick={handlePosterClick}
        brand={videosList[index].brand}
      />
    </div>
  );

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

      <h1 className={styles.title}>field day</h1>

      <AutoSizer>
        {({width}) => (
          <FixedSizeList
            direction="horizontal"
            height={700}
            itemCount={videosList.length}
            itemSize={150}
            ref={listRef}
            width={width}
          >
            {renderRow}
          </FixedSizeList>
        )}
      </AutoSizer>

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
