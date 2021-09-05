import * as React from 'react';
import { Header } from '../components/Header';

import {
  Image,
  Main
} from '../styles/films';

const films = [
  {
    id: 1,
    url: '/images/films/poster1.jpeg',
  },
  {
    id: 2,
    url: '/images/films/poster2.jpeg',
  },
  {
    id: 3,
    url: '/images/films/poster3.jpeg',
  },
  {
    id: 4,
    url: '/images/films/poster4.jpeg',
  },
  {
    id: 5,
    url: '/images/films/poster5.jpeg',
  },
  {
    id: 6,
    url: '/images/films/poster6.jpeg',
  },
  {
    id: 7,
    url: '/images/films/poster6.jpeg',
  },
  {
    id: 8,
    url: '/images/films/poster8.jpeg',
  },
  {
    id: 9,
    url: '/images/films/poster9.jpeg',
  },
  {
    id: 10,
    url: '/images/films/poster10.jpeg',
  },
  {
    id: 11,
    url: '/images/films/poster11.jpeg',
  },
  {
    id: 12,
    url: '/images/films/poster12.jpeg',
  },
  {
    id: 13,
    url: '/images/films/poster13.jpeg',
  },
  {
    id: 14,
    url: '/images/films/poster14.jpeg',
  },
  {
    id: 15,
    url: '/images/films/poster15.jpeg',
  },
  {
    id: 16,
    url: '/images/films/poster16.jpeg',
  },
  {
    id: 17,
    url: '/images/films/poster17.jpeg',
  },
  {
    id: 18,
    url: '/images/films/poster18.jpeg',
  },
  {
    id: 19,
    url: '/images/films/poster19.jpeg',
  },
  {
    id: 20,
    url: '/images/films/poster20.jpeg',
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
