import React from 'react'
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import { motion } from 'framer-motion';

export const text = Quicksand({
  subsets: ['latin-ext'],
  weight: ['600'],
})

function OnandOff() {
  return (
    <div>
      <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.75 }}}
      >
        <header className={styles.header}>
            <div className={styles.container}>
                <h2>
                    Step 2: Turning it On and Off
                </h2>
                <p className={text.className}>
                    To turn on your Retro Audio Guestbook, simply press the power button on the back of the device. To turn off your Retro Audio Guestbook, hold the power button for 3 seconds.
                </p>
            </div>
        </header>
      </motion.div>
    </div>
  )
}

export default OnandOff