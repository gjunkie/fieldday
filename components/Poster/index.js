import * as React from 'react';
import Modal from 'react-modal';
import { Video } from '../Video';

import styles from './Poster.module.css';

export const Poster = ({
  agency,
  brand,
  director,
  editor,
  poster,
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
      <img src={poster.url} onClick={() => setIsModalOpen(true)}/>
      <h3 onClick={() => setIsModalOpen(true)}>{brand} | {title}</h3>
      <Modal
        closeTimeoutMS={250}
        isOpen={isModalOpen}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalTop}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              type="button"
            >X</button>
          </div>
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
            <h3>{brand} | {title}</h3>
            <h4>Agency - {agency} . Director - {director}</h4>
          </div>
        </div>
      </Modal>
    </div>
  );
};
