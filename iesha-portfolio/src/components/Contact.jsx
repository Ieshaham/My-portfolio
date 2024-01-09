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
          <h4>GET IN TOUCH</h4>
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
        {/* <div className="contact-image">
          <img src="https://img.freepik.com/free-vector/email-notification-icon-isolated-white-background-vector-cartoon-illustration-envelope-with-letter-computer-screen-new-message-received-inbox-alert-business-software-design-element_107791-23706.jpg?w=740&t=st=1704812861~exp=1704813461~hmac=5a8c62fc39673184c1073f6e67775935ebbc84f44ae8700b45c4f1d05056f6d6" alt="Contact" />
        </div> */}
    </div>
  );
};

export default ContactPage;
