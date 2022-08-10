import * as React from 'react';
import { CloseButton } from '../CloseButton';

import styles from './ModalHeader.module.css';

export const ModalHeader = ({onClickClose}) => {

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>
          <a>
            <img src="/images/logo-small.png" alt="Field Day Sound logo" />
          </a>
        </h1>
      </div>

      <div className={styles.right}>
        <CloseButton
          height={34}
          onClick={onClickClose}
          width={34}
        />
      </div>

    </header>
  );
};
