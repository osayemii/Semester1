import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  // Note: The form submission logic is not implemented here, as it would depend on your backend setup.
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
  // The handleFormSubmit function is used to prevent default form submission and call handleSubmit instead.
  // This allows for custom handling of the form data, such as validation or sending to an API.

  const submit = document.getElementById('submit');
  const message = formData.message;
  const name = formData.name;
  const email = formData.email;
  const phone = formData.phone;

  if (message !== '' && name !== '' && email !== '' && phone !== '') {
    // link it to whatsapp
    submit.addEventListener('click', () => {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=2348034922595&text=Name: ${name} Email: ${email} Phone: ${phone} Message: ${message}`;
      window.open(whatsappUrl, '_blank');
    });
  }


  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>Get in Touch</h2>
          <p>Have questions about our furniture or need design consultation? We're here to help you create the perfect space.</p>
        </div>
        
        <div className="contact-content grid grid-2">
          <div className="contact-info">
            <h3>Visit Our Showroom</h3>
            <p>Experience our furniture collection in person at our beautiful showroom.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Address</h4>
                <p>House No. 5, Kaba<br />Kagini, Abuja, Nigeria</p>
              </div>
              
              <div className="contact-item">
                <h4>Phone</h4>
                <p>(+234) 803-4922-595</p>
                <p>(+234) 701-6744-449</p>
              </div>
              
              <div className="contact-item">
                <h4>Email</h4>
                <p>waybyclassicfurniture@gmail.com</p>
              </div>
              
              <div className="contact-item">
                <h4>Hours</h4>
                <p>
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: <span className='contact-item-span'>Closed</span>
                </p>
              </div>
            </div>
          </div>
          
          <div id='contact-form-co' className="contact-form-container" onSubmit={handleFormSubmit}>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type='tel'
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your furniture needs or ask any questions..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" id='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;