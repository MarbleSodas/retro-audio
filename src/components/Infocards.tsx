import React from 'react'
import styles from '../styles/About.module.css';

function About() {
  return (
    <div>
        <header className={styles.aboutHeader}>
            <div className={styles.container}>
                <h1>
                  Unique yet Nostalgic
                </h1>
                <p>Save your messages in a a vintage case with our nostalgic audio guestbook!</p>
            </div>
        </header>
    </div>
  )
}

export default About