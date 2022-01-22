import * as React from 'react';

export const Credits = ({
  agency,
  brand,
  director,
  mix,
  sound,
  title,
}) => {
  const renderSameArtist = () => (
    <div className="data">Sound Design & Mix - {sound}</div>
  );

  const renderIndividualArtists = () => (
    <>
      {sound ? (
        <div className="data">Sound Design - {sound}</div>
      ) : null}

      {mix ? (
        <div className="data">Mix - {mix}</div>
      ) : null}
    </>
  );

  return (
    <>
      <h2 className="brand">{brand}</h2>
      <h3 className="title">{title}</h3>
      <div className="data">Agency - {agency}</div>
      <div className="data">Director - {director}</div>

      {
        sound === mix
          ? renderSameArtist()
          : renderIndividualArtists()
      }
    </>
  );
}
