import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from "framer-motion";

import styles from './Header.module.css';

export const Header = () => {
  const router = useRouter();

  return (
    <motion.div
      animate="in"
      className="framerWrapper"
      initial="initial"
      exit="out"
      variants={{
        initial: {
          position: 'relative',
          top: -200
        },
        in: {
          position: 'relative',
          top: 0
        },
        out: {
          position: 'relative',
          top: -200
        },
      }}
    >
      <header className={styles.header}>
        <h1 className={styles.title}><Link href="/">field day</Link></h1>
        <nav>
          <ul className={styles.nav}>
            <li><Link href="/sound-design"><a className={router.pathname == '/sound-design' ? styles.active : ''}>sound design</a></Link></li>
            <li><Link href="/mix"><a className={router.pathname == '/mix' ? styles.active : ''}>mix</a></Link></li>
            <li><Link href="/films"><a className={router.pathname == '/films' ? styles.active : ''}>films</a></Link></li>
            <li><Link href="/about"><a className={router.pathname == '/about' ? styles.active : ''}>about</a></Link></li>
          </ul>
        </nav>
      </header>
    </motion.div>
  );
};
