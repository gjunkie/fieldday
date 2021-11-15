import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className={styles.header}>
      {!isHomePage && (<h1><Link href="/">field day</Link></h1>)}
    </header>
  );
};
