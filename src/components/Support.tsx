import React from 'react'
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';

function Support() {
  return (
    <div>
        <header className={styles.header}>
            <div className={styles.container}>
            <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.5 }}}
            >
                <h1>
                    Support
                </h1>
            </motion.div>
            <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.5 }}}
            >
                <p className={styles.paragraphLucidity}>
                  How to operate your Retro Audio Guestbook!
                </p>
            </motion.div>
            </div>
        </header>
    </div>
  )
}

export default Support