import React from 'react';
import styles from '../styles/Contact.module.css';
import { useForm, ValidationError } from '@formspree/react';
function Contactform() {
  const [state, handleSubmit] = useForm("xoqzzpgj");
  if (state.succeeded) {
    //change the message and styling
      return (
      <div className='hero__header'>
        <p className={styles.submitMessage}>Thanks for your message! We will get back to you shortly!</p>
      </div>
      );
  }
  return (
    <div className={styles.flexContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <header className='regularHeader'>
          <h1>
            Contact
          </h1>
        </header>
        <p>For faster responses, contact us at: </p>
        <a href='mailto: marblesodaprojects@gmail.com'>marblesodaprojects@gmail.com</a>
        <p>or text us at: </p>
        <a href='tel: 1-909-278-7715'>909-278-7715</a>
        <input
          className={styles.input}
          id="email"
          type="email" 
          name="email"
          placeholder="Email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder='Message'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        {/* fix button visibility */}
        <button type="submit" className={styles.button} disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactform