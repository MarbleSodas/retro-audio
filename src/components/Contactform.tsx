import React from 'react';
import styles from '../styles/Contact.module.css';
import { useForm, ValidationError } from '@formspree/react';
function Contactform() {
  const [state, handleSubmit] = useForm("xoqzzpgj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className={styles.flexContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <header className='regularHeader'>
          <h1>
            Contact
          </h1>
        </header>
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
        <button type="submit" className={styles.button} disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactform