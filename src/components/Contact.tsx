import React, { useState } from 'react';
import ContactInfo from './common/ContactInfo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const contactItems = [
    {
      icon: 'icon-map-marker',
      title: 'Address',
      content: 'Seoul, South Korea'
    },
    {
      icon: 'icon-phone2',
      title: 'Contact Number',
      content: '+ 82 10 7591 3021',
      link: 'tel://+821075913021'
    },
    {
      icon: 'icon-paper-plane',
      title: 'Email Address',
      content: 'mincheol.galaxy@gmail.com',
      link: 'mailto:mincheol.galaxy@gmail.com'
    },
    {
      icon: 'icon-globe',
      title: 'Website',
      content: 'chul542.github.io',
      link: '#'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('✅ Message sent!');
    setFormData({
      user_name: '',
      user_email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="ftco-section contact-section" id="contact-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
          </div>
        </div>

        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows={7}
                  className="form-control"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="form-group text-center">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div className="img" style={{ backgroundImage: 'url(/images/about.jpg)' }}></div>
          </div>
        </div>

        <ContactInfo items={contactItems} />
      </div>
    </section>
  );
};

export default Contact; 