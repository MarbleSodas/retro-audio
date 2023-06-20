import React from 'react'
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';
import { motion } from 'framer-motion';

export const text = Quicksand({
  subsets: ['latin-ext'],
  weight: ['600'],
})

function Record() {
  return (
    <div>
      <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 0.75 }}}
      >
        <header className={styles.header}>
            <div className={styles.container}>
                <h2>
                    Step 1: Record your message
                </h2>
                <p className={text.className}>
                    Record your message using any device you have available, such as Voice Memos on your iPhone or Voice Recorder on your Android. 
                    If you want a higher quality recording, you can use a microphone and a computer. 
                    Send the audio recording to us using the email or phone number provided below. 
                    We will then convert the audio file into a 44100hz mono .wav file to be used on your Retro Audio Guestbook!
                </p>
            </div>
        </header>
      </motion.div>
    </div>
  )
}

export default Record