import * as React from 'react';
import { CloseButton } from '../CloseButton';
import { motion } from "framer-motion";
import styles from './About.module.css';

export const About = () => {
  const [isAboutPanelOpen, setAboutPanelIsOpen] = React.useState(false);

  return (
    <div className={styles.about}>
      <div
        className={`${styles.aboutButton}`}
        onClick={() => setAboutPanelIsOpen(!isAboutPanelOpen)}
      >
        <div className={styles.imageWrapper}>
          <img src="/images/creamsicle.png" alt="Field Day Sound logo" />
        </div>
      </div>

      <div className={`${styles.aboutWrapper} ${isAboutPanelOpen ? styles.isOpen : ''}`}>
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
            <CloseButton onClick={() => setAboutPanelIsOpen(!isAboutPanelOpen)}/>
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
    </div>
  );
};
