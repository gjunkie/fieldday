import * as React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">
          <a>
            <img src="/images/logo-small.png" alt="Field Day Sound logo" />
          </a>
        </Link>
      </h1>
    </header>
  );
};
