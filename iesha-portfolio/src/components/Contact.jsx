import React, { useState } from 'react';
import { firestore } from './Firebase'; // Importing firestore from Firebase setup file

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add data to Firestore collection
    firestore.collection("contacts").add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert("Message has been submitted");
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
    <form className='form' onSubmit={handleSubmit}>
      <h1>Get in touch</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactPage;
