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
                    Our Story
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.5 }}}
              >
                <p className={text.className}>
                  A couple of weeks before our wedding, my wife and I were scrolling through looking for guestbooks.
                  We wanted something unique but not pieces of wood we would put in a plastic display. During our search we found out about audio guestbooks.
                  We knew we had to have one but our wedding, but we couldn&apos;t find any that would ship in time.
                  So we decided to make our own and now we want to share it with you!
                </p>
              </motion.div>
            </div>
        </header>
    </div>
  )
}

export default About