import * as React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import styles from './Menu.module.css';

export const Menu = () => {
  const [isAboutPanelOpen, setAboutPanelIsOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className={styles.menu}>
      <div
        className={`${styles.aboutButton} ${isMenuOpen ? styles.menuOpen : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={styles.imageWrapper}>
          <img src="/images/field-day-sound-logo-small.png" alt="Field Day Sound logo" />
        </div>
        <div className={styles.circle}>
          <ul>
            <li className={`${styles.button} ${styles.first}`} onClick={() => setAboutPanelIsOpen(!isAboutPanelOpen)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V15"/>
                <circle cx="12" cy="9" r="1" fill="currentColor"/>
                <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
              </svg>
            </li>
            <li className={`${styles.button} ${styles.second}`}>
              <Link href="/work">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M15.1141 9.35688C14.7589 9.56999 14.6438 10.0307 14.8569 10.3859C15.07 10.7411 15.5307 10.8562 15.8859 10.6431L15.1141 9.35688ZM19.25 7.75H20C20 7.4798 19.8547 7.23048 19.6195 7.09735C19.3844 6.96422 19.0958 6.96786 18.8641 7.10688L19.25 7.75ZM19.25 16.25L18.8641 16.8931C19.0958 17.0321 19.3844 17.0358 19.6195 16.9026C19.8547 16.7695 20 16.5202 20 16.25H19.25ZM15.8859 13.3569C15.5307 13.1438 15.07 13.2589 14.8569 13.6141C14.6438 13.9693 14.7589 14.43 15.1141 14.6431L15.8859 13.3569ZM15.8859 10.6431L19.6359 8.39312L18.8641 7.10688L15.1141 9.35688L15.8859 10.6431ZM18.5 7.75V16.25H20V7.75H18.5ZM19.6359 15.6069L15.8859 13.3569L15.1141 14.6431L18.8641 16.8931L19.6359 15.6069ZM6.75 7.5H13.25V6H6.75V7.5ZM14.5 8.75V15.25H16V8.75H14.5ZM13.25 16.5H6.75V18H13.25V16.5ZM5.5 15.25V8.75H4V15.25H5.5ZM6.75 16.5C6.05964 16.5 5.5 15.9404 5.5 15.25H4C4 16.7688 5.23122 18 6.75 18V16.5ZM14.5 15.25C14.5 15.9404 13.9404 16.5 13.25 16.5V18C14.7688 18 16 16.7688 16 15.25H14.5ZM13.25 7.5C13.9404 7.5 14.5 8.05964 14.5 8.75H16C16 7.23122 14.7688 6 13.25 6V7.5ZM6.75 6C5.23122 6 4 7.23122 4 8.75H5.5C5.5 8.05964 6.05964 7.5 6.75 7.5V6Z"/>
                </svg>
              </Link>
            </li>
            <li className={`${styles.button} ${styles.third}`}>
              <a href="https://www.instagram.com/fielddaysound.tv/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 35 35"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </li>
          </ul>
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
        </div>
      </motion.div>
    </div>
  );
};
