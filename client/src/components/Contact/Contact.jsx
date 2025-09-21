import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <h2 className={styles.title}>Contact The Perch</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <MapPin className={styles.icon} />
              <h3 className={styles.infoTitle}>Address</h3>
              <p className={styles.infoText}>The Perch<br />Kollam, Kerala, India</p>
            </div>
            <div className={styles.infoCard}>
              <Phone className={styles.icon} />
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>+91 98765 43210</p>
            </div>
            <div className={styles.infoCard}>
              <Mail className={styles.icon} />
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>hello@theperchkerala.com</p>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGrid}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={styles.input}
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className={styles.textarea}
              required
            ></textarea>
            <button
              type="submit"
              className={styles.button}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
