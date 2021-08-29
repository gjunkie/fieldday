import * as React from 'react';
import { motion } from "framer-motion";

import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <motion.div
      animate="pageAnimate"
      className="framerWrapper"
      initial="pageInitial"
      key={router.route}
      variants={{
        pageInitial: {
          opacity: 0,
          top: 100
        },
        pageAnimate: {
          opacity: 1,
          top: 0
        },
      }}
    >
    <Component {...pageProps} />
  </motion.div>
  );
};

export default MyApp;
