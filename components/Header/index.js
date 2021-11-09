import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Header.module.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.openMenu : ''}`} role="navigation">
        {!isHomePage && (<h1><Link href="/">field day</Link></h1>)}
        <div className={styles.menuToggle}>
          <div className={styles.hamburger}>
            <input type="checkbox" onClick={onClickMenu} />

            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.openMenu : ''}`}>
            <li><Link href="/sound-design"><a className={router.pathname == '/sound-design' ? styles.active : ''}>sound design</a></Link></li>
            <li><Link href="/mix"><a className={router.pathname == '/mix' ? styles.active : ''}>mix</a></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
