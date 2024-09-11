// src/components/ContactForm.jsx
import React, { useState } from 'react';
import '../style.css/ContactSection.css';  // Your custom styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Construct the form data
    const formData = new FormData(e.target);

    // Send the form data to Formspree
    fetch('https://formspree.io/f/xqazjrzk', { // Replace 'your_form_id' with your Formspree form ID
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setError('');
      } else {
        throw new Error('Failed to send the message.');
      }
    })
    .catch((error) => {
      setError('Failed to send the message. Please try again later.');
    });
  };

  return (
    <div id='contact' className="contact-form">
      <h2>Contact Me</h2>
      {isSent ? (
        <p className="success-message">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>

          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
