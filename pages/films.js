import * as React from 'react';
import { Header } from '../components/Header';

import {
  Image,
  Main
} from '../styles/films';

const films = [
  {
    id: 1,
    url: '/images/films/poster1.jpg',
  },
  {
    id: 2,
    url: '/images/films/poster2.jpg',
  },
  {
    id: 3,
    url: '/images/films/poster3.jpg',
  },
  {
    id: 4,
    url: '/images/films/poster4.jpg',
  },
  {
    id: 5,
    url: '/images/films/poster5.jpg',
  },
  {
    id: 6,
    url: '/images/films/poster6.jpg',
  },
  {
    id: 7,
    url: '/images/films/poster6.jpg',
  },
  {
    id: 8,
    url: '/images/films/poster8.jpg',
  },
  {
    id: 9,
    url: '/images/films/poster9.jpg',
  },
  {
    id: 10,
    url: '/images/films/poster10.jpg',
  },
  {
    id: 11,
    url: '/images/films/poster11.jpg',
  },
  {
    id: 12,
    url: '/images/films/poster12.jpg',
  },
  {
    id: 13,
    url: '/images/films/poster13.jpg',
  },
  {
    id: 14,
    url: '/images/films/poster14.jpg',
  },
  {
    id: 15,
    url: '/images/films/poster15.jpg',
  },
  {
    id: 16,
    url: '/images/films/poster16.jpg',
  },
  {
    id: 17,
    url: '/images/films/poster17.jpg',
  },
  {
    id: 18,
    url: '/images/films/poster18.jpg',
  },
  {
    id: 19,
    url: '/images/films/poster19.jpg',
  },
  {
    id: 20,
    url: '/images/films/poster20.jpg',
  },
];

const Films = () => {
  return (
    <>
      <Header />
      <Main>
        {films.map((film) => (
          <Image key={film.id} src={film.url} />
        ))}
      </Main>
    </>
  );
};

export default Films;
