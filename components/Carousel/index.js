import * as React from 'react'
import styles from './Carousel.module.css'
import { Poster } from '../Poster'

const mockData = {
  1: {
    id: 1,
    img: '/images/noah-1.png',
    title: 'Supercell'
  },
  2: {
    id: 2,
    img: '/images/noah-2.png',
    title: 'Nike'
  },
  3: {
    id: 3,
    img: '/images/noah-3.png',
    title: 'Snowday'
  },
  4: {
    id: 4,
    img: '/images/noah-4.png',
    title: 'Coke'
  },
  5: {
    id: 5,
    img: '/images/morgan-1.png',
    title: 'Delta'
  },
  6: {
    id: 6,
    img: '/images/morgan-2.png',
    title: 'KIA Telluride'
  },
  7: {
    id: 7,
    img: '/images/morgan-3.png',
    title: 'Pepsi'
  },
  8: {
    id: 8,
    img: '/images/morgan-4.png',
    title: 'Ghost Recon'
  },
  9: {
    id: 9,
    img: '/images/noah-1.png',
    title: 'Supercell'
  },
  10: {
    id: 10,
    img: '/images/noah-2.png',
    title: 'Nike'
  },
  11: {
    id: 11,
    img: '/images/noah-3.png',
    title: 'Snowday'
  },
  12: {
    id: 12,
    img: '/images/noah-4.png',
    title: 'Coke'
  },
  13: {
    id: 13,
    img: '/images/morgan-1.png',
    title: 'Delta'
  },
  14: {
    id: 14,
    img: '/images/morgan-2.png',
    title: 'KIA Telluride'
  },
  15: {
    id: 15,
    img: '/images/morgan-3.png',
    title: 'Pepsi'
  },
  16: {
    id: 16,
    img: '/images/morgan-4.png',
    title: 'Ghost Recon'
  }
}

export const Carousel = () => {

  return (
    <ul className={styles.carousel}>
      { Object.keys(mockData).map((key) => (
        <Poster
          id={mockData[key].id}
          img={mockData[key].img}
          key={mockData[key].id}
          title={mockData[key].title}
        />
        ))
      }
    </ul>
  )
}
