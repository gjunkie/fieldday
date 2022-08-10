import * as React from 'react';
import { About } from '../About';

import styles from './Header.module.css';

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>
          <a>
            <img src="/images/logo-small.png" alt="Field Day Sound logo" />
          </a>
        </h1>
      </div>

      <div className={styles.right}>
        <About />
      </div>

    </header>
  );
};
