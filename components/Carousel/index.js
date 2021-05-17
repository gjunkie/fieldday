import * as React from 'react'
import styles from './Carousel.module.css'
import { Poster } from '../Poster'

export const Carousel = ({
  onClickPoster,
  videos
}) => (
  <ul className={styles.carousel}>
    { videos.map((video) => (
      <Poster
        id={video.id}
        imgUrl={video.poster.url}
        key={video.id}
        onClick={onClickPoster}
        brand={video.brand}
      />
      ))
    }
  </ul>
)
