import React from 'react'
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';

export const text = Quicksand({
  subsets: ['latin-ext'],
  weight: ['600'],
})

function Record() {
  return (
    <div>
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
    </div>
  )
}

export default Record