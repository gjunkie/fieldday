import * as React from 'react';
import { CloseButton } from '../CloseButton';
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
      <h3 onClick={() => setIsModalOpen(true)}><span className={styles.brand}>{brand}</span><span className={styles.title}> | {title}</span></h3>

      <picture>
        <img 
          alt={title}
          onClick={() => setIsModalOpen(true)}
          src={poster.url}
        />
      </picture>

      <Modal
        closeTimeoutMS={250}
        isOpen={isModalOpen}
      >

        <CloseButton
          height={34}
          onClick={() => setIsModalOpen(false)}
          width={34}
        />

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

            <h3 className={styles.heading}>{brand} | {title}</h3>

            <ul className={styles.credits}>
              <li>Agency - {agency}</li>
              <li>Director - {director}</li>
              {soundMixer ? (
                <li>
                  {`Sound Mixer - ${soundMixer}`}
                </li>
              ) : null}

              {soundDesigner ? (
                <li>
                  {`Sound Designer - ${soundDesigner}`}
                </li>
              ) : null}
            </ul>
            <h4 className={styles.credits}></h4>
          </div>
        </div>
      </Modal>
    </div>
  );
};
