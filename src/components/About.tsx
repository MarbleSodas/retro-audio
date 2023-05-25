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
                <p>Have you ever wanted a special guestbook that you could keep with you as a digital file?</p>
            </div>
        </header>
    </div>
  )
}

export default About