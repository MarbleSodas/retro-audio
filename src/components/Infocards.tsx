import React from 'react'
import styles from '../styles/About.module.css';
import { Quicksand } from 'next/font/google';
import { motion } from 'framer-motion';

export const text = Quicksand({
  subsets: ['latin-ext'],
  weight: ['600'],
})

function About() {
  return (
    <div>
        <header className={styles.aboutHeader}>
            <div className={styles.container}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 }}}
              >
                <h1>
                    What is an Audio Guestbook?
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 }}}
              >
                <p className={text.className}>
                  We repurpose retro telephones and install an audio recording feature onto the phone recording in high quality 44100hz .wav format.
                  This allows you to record special messages at your event, such as a wedding, birthday, or anniversary, and have them saved forever.
                  We also provide a custom message that is played when the phone is picked up so that your guests know what to do.
                </p>
              </motion.div>
            </div>
        </header>
    </div>
  )
}

export default About