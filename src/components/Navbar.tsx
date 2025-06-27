import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home-section">Mincheol</a>
        <button 
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" 
          type="button" 
          data-toggle="collapse"
          data-target="#ftco-nav" 
          aria-controls="ftco-nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <button onClick={() => scrollToSection('home-section')} className="nav-link">
                <span>Home</span>
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('about-section')} className="nav-link">
                <span>About Me</span>
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('tech-stack-section')} className="nav-link">
                <span>Tech Stack</span>
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('work-experience-section')} className="nav-link">
                <span>Work Experience</span>
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('contact-section')} className="nav-link">
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 