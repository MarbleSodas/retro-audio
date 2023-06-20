import React from 'react'
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import { motion } from 'framer-motion';

export const text = Quicksand({
  subsets: ['latin-ext'],
  weight: ['600'],
})

function Testing() {
  return (
    <div>
      <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.75 }}}
      >
        <header className={styles.header}>
            <div className={styles.container}>
                <h2>
                    Step 3: Testing your device
                </h2>
                <p className={text.className}>
                    To test your Retro Audio Guestbook, press the button on the front of the device. You should hear a sound and see a light on the front of the device. 
                    If you do not hear a sound or see a light, please contact us at
                </p>
                <a href='mailto: marblesodaprojects@gmail.com' className={text.className}>marblesodaprojects@gmail.com</a>
            </div>
        </header>
      </motion.div>
    </div>
  )
}

export default Testing