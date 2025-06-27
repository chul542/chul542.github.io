import React from 'react';

const OtherExperience: React.FC = () => {
  return (
    <section className="ftco-section" id="other-experience-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Other Experience</h1>
            <h2 className="mb-4">Other Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="work-exp-wrap ftco-animate mb-5">
              <h3><strong>Open Source Contributions</strong></h3>
              <ul>
                <li>Contributed to various open source projects on GitHub</li>
                <li>Maintained personal projects related to space physics and data visualization</li>
              </ul>
              
              <h3 className="mt-4"><strong>Certifications</strong></h3>
              <ul>
                <li>AWS Certified Solutions Architect – Associate</li>
                <li>Kubernetes Administrator (CKA)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherExperience; 