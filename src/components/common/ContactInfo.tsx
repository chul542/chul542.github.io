import React from 'react';

interface ContactInfoItem {
  icon: string;
  title: string;
  content: string | React.ReactNode;
  link?: string;
}

interface ContactInfoProps {
  items: ContactInfoItem[];
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ items, className = "" }) => {
  return (
    <div className={`row d-flex mb-5 contact-info ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="col-md-6 col-lg-3 d-flex ftco-animate">
          <div className="align-self-stretch box p-4 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className={item.icon}></span>
            </div>
            <h3 className="mb-4">{item.title}</h3>
            {item.link ? (
              <p><a href={item.link}>{item.content}</a></p>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo; 