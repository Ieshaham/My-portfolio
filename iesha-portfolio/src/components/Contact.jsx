import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation here

    // Send data to server (if needed)

    // Provide feedback to the user
    console.log('Form submitted:', formData);
  };

  return (
    <div className='message-box-container'>
      <div className='message-box'>
        <div className='info'>
          <h5>GET IN TOUCH</h5>
          <h1>Contact Me!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="placeholder-label">
              What's your name?
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label htmlFor="email" className="placeholder-label">
              What's your email?
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label htmlFor="message" className="placeholder-label">
              Message:
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit">Send Message</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
