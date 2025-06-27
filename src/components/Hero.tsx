import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true">
              <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: 'url(/images/bg_1.png)' }}>
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">I'm <span>Mincheol</span></h1>
                  <h2 className="mb-4">A software developer who codes with curiosity as vast as the cosmos</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true">
              <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: 'url(/images/bg_2.png)' }}>
                <div className="overlay"></div>
              </div>
              <div className="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">I'm a <span>software developer</span> based in Seoul</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 