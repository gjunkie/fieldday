import * as React from 'react'
// import Head from 'next/head'
import Modal from 'react-modal'
// import styles from '../styles/Home.module.css'
import { Carousel } from '../components/Carousel'
import { Video } from '../components/Video'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [activeVideo, setActiveVideo] = React.useState(null)

  const toggleModal = React.useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen])

  const handlePosterClick = React.useCallback((imgSrc) => {
    toggleModal()
    setActiveVideo(imgSrc)
  }, [])

  return (
    <>
      <h1>Field Day</h1>
      <Carousel onClickPoster={handlePosterClick} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Post modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            zIndex: 2,
          },
          content: {
            inset: 0,
            padding: 0,
          }
        }}
      >
        <Video imgSrc={activeVideo} onCloseVideo={toggleModal} />
      </Modal>
    </>
  )
}
