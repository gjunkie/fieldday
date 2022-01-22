import * as React from 'react';
import { motion } from "framer-motion";
import styles from './Menu.module.css';

export const Menu = () => {
  const [isAboutPanelOpen, setAboutPanelIsOpen] = React.useState(false);
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`${styles.menu} ${componentLoaded ? styles.loaded : ''}`}>
      <div
        className={`${styles.aboutButton}`}
        onClick={() => setAboutPanelIsOpen(!isAboutPanelOpen)}
      >
        <div className={styles.imageWrapper}>
          <img src="/images/creamsicle.png" alt="Field Day Sound logo" />
        </div>
      </div>

      <div
        data-isopen={isAboutPanelOpen}
        className={styles.overlay}
        onClick={() => setAboutPanelIsOpen(!isAboutPanelOpen)}
      />

      <motion.div
        layout
        data-isopen={isAboutPanelOpen}
        className={styles.aboutPanel}
      >
        <div>
          <div
            className={styles.closeButton}
            onClick={() => setAboutPanelIsOpen(!isAboutPanelOpen)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 6.75L6.75 17.25"/>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75L17.25 17.25"/>
            </svg>
          </div>
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
          <div>
            Visit us on <a href="https://www.instagram.com/fielddaysound.tv/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
