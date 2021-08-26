import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}><Link href="/">field day</Link></h1>
      <nav>
        <ul className={styles.nav}>
          <li><Link href="/"><a className={router.pathname == '/' ? styles.active : ''}>sound design</a></Link></li>
          <li><Link href="/mix"><a className={router.pathname == '/mix' ? styles.active : ''}>mix</a></Link></li>
          <li><Link href="/films"><a className={router.pathname == '/films' ? styles.active : ''}>films</a></Link></li>
          <li><Link href="/about"><a className={router.pathname == '/about' ? styles.active : ''}>about</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};
