import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields');
      return;
    }

    // Send data to server (assuming you have a function sendEmailToServer)
    // await sendEmailToServer(formData);

    // Provide feedback to the user
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
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
            <button type='submit'>Send Message</button>
            {formSubmitted && <p>Thank you for your message!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
