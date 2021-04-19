import * as React from 'react'
import styles from './Poster.module.css'

export const Poster = ({
  id,
  imgUrl,
  onClick,
  title,
}) => {
  const [isHoveringPoster, setIsHoveringPoster] = React.useState(false)

  const handlePosterHover = (isHovering) => {
    setIsHoveringPoster(isHovering)
  }

  return (
    <li className={`${styles.item}`}>
      <div className={`${styles.title} ${isHoveringPoster ? styles.visible : ''}`}>{title}</div>
      <div
        className={styles.hover}
        onClick={() => onClick(id)}
        onMouseEnter={() => handlePosterHover(true)}
        onMouseLeave={() => handlePosterHover(false)}
      />
      <div className={`${styles.poster} ${isHoveringPoster ? styles.hovering : ''}`}>
        <div className={styles.wrapper}>
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}
