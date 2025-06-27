import React from 'react';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      company: "KAKAO Enterprise",
      position: "Search Division | Backend Engineer",
      period: "Apr 2025 – Present",
      description: [
        "Developed and operated servers for KakaoTalk #Search and Daum·Nate unified search",
        "Maintained query filtering systems to enhance search quality and stability"
      ]
    },
    {
      company: "TMAX WAPL",
      position: "Backend Engineer",
      period: "Sep 2020 – Nov 2024",
      description: [
        "Developed a unified no-code platform enabling B2C users to create and deploy apps easily",
        "Collaboration tool with messenger, drive, notes, calendar, and meeting features"
      ]
    }
  ];

  return (
    <section className="ftco-section" id="work-experience-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Work Experience</h1>
            <h2 className="mb-4">Work Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {experiences.map((experience, index) => (
              <div key={index} className="work-exp-wrap ftco-animate mb-5">
                <h3><strong>{experience.company}</strong></h3>
                <p className="text-muted">{experience.position} | {experience.period}</p>
                <ul>
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 