import * as React from 'react';
import styles from './Credits.module.css';

export const Credits = ({
  agency,
  brand,
  director,
  mix,
  sound,
  title,
}) => {
  const renderSameArtist = () => (
    <div className={styles.data}>Sound Design & Mix - {sound}</div>
  );

  const renderIndividualArtists = () => (
    <>
      {sound ? (
        <div className={styles.data}>Sound Design - {sound}</div>
      ) : null}

      {mix ? (
        <div className={styles.data}>Mix - {mix}</div>
      ) : null}
    </>
  );

  return (
    <>
      <h2 className={styles.brand}>{brand}</h2>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.data}>Agency - {agency}</div>
      <div className={styles.data}>Director - {director}</div>

      {
        sound === mix
          ? renderSameArtist()
          : renderIndividualArtists()
      }
    </>
  );
}
