import React from 'react';

const ResearchExperience: React.FC = () => {
  return (
    <section className="ftco-section" id="research-experience-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Research Experience</h1>
            <h2 className="mb-4">Research Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="work-exp-wrap ftco-animate mb-5">
              <h3><strong>Yonsei University</strong></h3>
              <p className="text-muted">Research Assistant | Mar 2019 – Feb 2020</p>
              <ul>
                <li>Conducted research on space weather and solar wind interactions</li>
                <li>Developed data analysis tools using Python and Fortran</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchExperience; 