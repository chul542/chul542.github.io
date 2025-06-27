import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="ftco-section" id="education-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Education</h1>
            <h2 className="mb-4">Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="work-exp-wrap ftco-animate mb-5">
              <h3><strong>Yonsei University</strong></h3>
              <p className="text-muted">Bachelor of Science in Physics | Mar 2015 – Feb 2020</p>
              <ul>
                <li>Major in Physics with focus on computational physics</li>
                <li>Minor in Computer Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 