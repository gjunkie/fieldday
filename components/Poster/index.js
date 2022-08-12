import * as React from 'react';
import { ModalHeader } from '../ModalHeader';
import Modal from 'react-modal';
import { Video } from '../Video';

import styles from './Poster.module.css';

export const Poster = ({
  agency,
  brand,
  director,
  editor,
  poster,
  posterMobile,
  posterPlaceholder,
  slug,
  soundDesigner,
  soundMixer,
  src,
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className={styles.poster}>
      <h3 onClick={() => setIsModalOpen(true)}><span>{brand} | {title}</span></h3>

      <picture>
        <source 
          media="(min-width: 1171px)"
          srcSet={poster.url}
        />
        <source 
          media="(max-width: 1170px)"
          srcSet={posterMobile.url}
        />
        <img 
          alt={title}
          onClick={() => setIsModalOpen(true)}
          src={posterMobile.url}
        />
      </picture>

      <Modal
        closeTimeoutMS={250}
        isOpen={isModalOpen}
      >

        <ModalHeader onClickClose={() => setIsModalOpen(false)} />

        <div className={styles.modalContent}>
          <div className={styles.modalBottom}>
            <Video
              agency={agency}
              brand={brand}
              director={director}
              editor={editor}
              poster={poster}
              posterPlaceholder={posterPlaceholder}
              slug={slug}
              soundDesigner={soundDesigner}
              soundMixer={soundMixer}
              src={src}
              title={title}
            />

            <h3 className={styles.title}>{brand} | {title}</h3>

            <h4 className={styles.credits}>Agency: {agency}</h4>
            <h4 className={styles.credits}>Director: {director}</h4>
            
            {soundMixer ? (
              <h4 className={styles.credits}>
                {`Sound Mixer: ${soundMixer}`}
              </h4>
            ) : null}

            {soundDesigner ? (
              <h4 className={styles.credits}>
                {`Sound Designer: ${soundDesigner}`}
              </h4>
            ) : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};
