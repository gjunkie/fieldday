import * as React from 'react';
import { Header } from '../components/Header';

import {
  Content,
  Main
} from '../styles/about.js';

export default function About() {
  return (
    <>
      <Header />
      <Main>
        <Content>
          <p>
            Field Day provides creative sound services that bring your ads, films and visual media to life in a fun, collaborative way.
          </p>

          <p>
            Sound design and mix duo Morgan Johnson & Noah Woodburn are teamed up with EP Leslie Carthy to make sure you have a care-free experience through the post-sound process.
          </p>

          <p>
            Based in Portland, Oregon, though we can collaborate with you anywhere and everywhere.
          </p>
          <div>
            Work with us: <a href="mailto:leslie@fielddaysound.tv">leslie@fielddaysound.tv</a>
          </div>
        </Content>
      </Main>
    </>
  );
}
