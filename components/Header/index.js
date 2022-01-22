import * as React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 500);
  }, []);

  return (
    <header className={`${styles.header} ${componentLoaded ? styles.loaded : ''}`}>
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
