import * as React from 'react';
import { Header } from '../components/Header';

import {
  Image,
  Main
} from '../styles/films';

const films = [
  {
    id: 1,
    url: 'https://cataas.com/cat?width=300&height=500',
  },
  {
    id: 2,
    url: 'https://cataas.com/cat?width=300&height=500',
  },
  {
    id: 3,
    url: 'https://cataas.com/cat?width=300&height=450',
  },
  {
    id: 4,
    url: 'https://cataas.com/cat?width=300&height=500',
  },
  {
    id: 5,
    url: 'https://cataas.com/cat?width=300&height=450',
  },
  {
    id: 6,
    url: 'https://cataas.com/cat?width=300&height=500',
  },
  {
    id: 7,
    url: 'https://cataas.com/cat?width=300&height=475',
  },
  {
    id: 8,
    url: 'https://cataas.com/cat?width=300&height=500',
  },
  {
    id: 9,
    url: 'https://cataas.com/cat?width=300&height=450',
  },
  {
    id: 10,
    url: 'https://cataas.com/cat?width=300&height=500',
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
