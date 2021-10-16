import * as React from 'react';
import { motion } from "framer-motion";
import styles from './AboutPanel.module.css';

export const AboutPanel = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.aboutComponent}>
      <div
        className={styles.aboutButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/images/field-day-sound-logo-small.png" alt="About Field Day Sound" />
      </div>

      <div data-isopen={isOpen} className={styles.overlay} onClick={() => setIsOpen(!isOpen)} />

      <motion.div
        layout
        data-isopen={isOpen}
        className={styles.aboutPanel}
      >
        <div>
          {/* <div className={styles.closeButton}> */}
          {/*   Close */}
          {/* </div> */}
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
        </div>
      </motion.div>
    </div>
  );
};
