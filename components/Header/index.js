import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from "framer-motion";

import styles from './Header.module.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <nav className={`${styles.nav} ${isMenuOpen ? styles.openMenu : ''}`} role="navigation">
          {!isHomePage && (<h1><Link href="/">field day</Link></h1>)}
          <div className={styles.menuToggle}>
            <div className={styles.hamburger}>
              <input type="checkbox" checked={isMenuOpen} onClick={onClickMenu} />

              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.openMenu : ''}`}>
              <li><Link href="/work"><a className={router.pathname == '/work' ? styles.active : ''}>work</a></Link></li>
              {/* <li><Link href="/mix"><a className={router.pathname == '/mix' ? styles.active : ''}>mix</a></Link></li> */}
              <li><Link href="/films"><a className={router.pathname == '/films' ? styles.active : ''}>films</a></Link></li>
              <li><Link href="/about"><a className={router.pathname == '/about' ? styles.active : ''}>about</a></Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </motion.div>
  );
};
