import React, { useState } from 'react';
import { firestore } from './Firebase'; // Importing firestore from Firebase setup file


const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    firestore.collection("contacts").add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert("Thank you. Your message has been submitted");
    })
    .catch((error) => {
      alert("An error occurred while submitting the message: " + error.message);
    });

    // Clear input fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <h1 className='form'>Connect with me!</h1>
      <div className='form-container'>
        <div className='form-group'>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Message</label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default ContactPage;
