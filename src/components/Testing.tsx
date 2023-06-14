import React from 'react'
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';

export const text = Quicksand({
  subsets: ['latin-ext'],
  weight: ['600'],
})

function Testing() {
  return (
    <div>
        <header className={styles.header}>
            <div className={styles.container}>
                <h2>
                    Step 3: Testing your device
                </h2>
                <p className={text.className}>
                    To test your Retro Audio Guestbook, press the button on the front of the device. You should hear a sound and see a light on the front of the device. 
                    If you do not hear a sound or see a light, please contact us at
                </p>
                <a href='mailto: marblesodaprojects@gmail.com'>marblesodaprojects@gmail.com</a>
            </div>
        </header>
    </div>
  )
}

export default Testing