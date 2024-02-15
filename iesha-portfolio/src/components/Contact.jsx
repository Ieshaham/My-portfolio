

import React, { useState } from 'react';
import { datebase } from "../firebase";


const ContactPage = () => {

const [name, setName] = usestate ("");
const [email, setEmail] = usestate ("");
const [message, setMessage] = usestate ("");

const handleSubmit = (e) => {
  e.preventDefault();
}

datebase.collection("contacts").add({
  name: name,
  email: email,
  message: message,
})
.then(() => {
alert("Message has been submitted");
})
.catch((error) => {
  alert(error.message)
})
};
  return (
    <div className='message-box-container'>
      <div className='message-box'>
        <div className='info'>
          <h5>GET IN TOUCH</h5>
          <h1>Contact Me!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name' className='placeholder-label'>
              What's your name?
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
            </label>
            <label htmlFor='email' className='placeholder-label'>
              What's your email?
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
            </label>
            <label htmlFor='message' className='placeholder-label'>
              Message:
              <textarea id='message' name='message' value={formData.message} onChange={handleChange} />
            </label>
            <button type='submit' disabled={submitting}>{submitting ? 'Submitting...' : 'Send Message'}</button>
            {formSubmitted && <p>Thank you for your message!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
