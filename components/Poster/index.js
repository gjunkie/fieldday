import * as React from 'react'
import styles from './Poster.module.css'

export const Poster = ({
  id,
  img,
  title,
}) => {
  const [isHoveringPoster, setIsHoveringPoster] = React.useState(false)

  const handlePosterHover = () => {
    setIsHoveringPoster(!isHoveringPoster)
  }

  return (
    <li className={`${styles.item}`}>
      <div className={`${styles.title} ${isHoveringPoster ? styles.visible : ''}`}>{title}</div>
      <div
        className={styles.hover}
        onMouseEnter={handlePosterHover}
        onMouseLeave={handlePosterHover}
      />
      <div className={`${styles.poster} ${isHoveringPoster ? styles.hovering : ''}`}>
        <div
          className={styles.wrapper}
        >
          <img src={img} />
        </div>
      </div>
    </li>
  )
}
