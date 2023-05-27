import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

interface Status {
    submitted: boolean;
    submitting: boolean;
    info: {
      error: boolean;
      msg: string | null;
    };
  }
  
  interface Inputs {
    email: string;
    message: string;
  }

function Contactform() {
    const [status, setStatus] = useState<Status>({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
      const [inputs, setInputs] = useState<Inputs>({
        email: '',
        message: '',
      });
    
      const handleServerResponse = (ok: boolean, msg: string) => {
        if (ok) {
          setStatus((prevStatus) => ({
            ...prevStatus,
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
          }));
          setInputs({
            email: '',
            message: '',
          });
        } else {
          setStatus((prevStatus) => ({
            ...prevStatus,
            info: { error: true, msg: msg },
          }));
        }
      };
      
    
      const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.persist();
        setInputs((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }));
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      };
    
      const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
          method: 'POST',
          url: 'https://formspree.io/[your-formspree-endpoint]',
          data: inputs,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Thank you, your message has been submitted.',
            );
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error);
          });
      };
    
      return (
        <main>
        <h1>React and Formspree</h1>
        <hr />
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
          <button type="submit" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </button>
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      </main>
      );
}

export default Contactform