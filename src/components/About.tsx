import React from 'react';

const About: React.FC = () => {
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className="container">
        <div className="row d-flex">
          {/* 좌측 이미지 영역 */}
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div 
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: 'url(/images/bg_1.png)' }}
              ></div>
            </div>
          </div>

          {/* 우측 소개 영역 */}
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>

                {/* 간단 소개 */}
                <p>
                  <strong>
                    A backend developer with practical experience from infrastructure to scalable backend systems.
                  </strong>
                </p>
                <p>
                  I've led the development of key backend modules such as messaging, authentication, drive,
                  and WebSocket push servers. I specialize in REST API design, database modeling (ERD),
                  and performance optimization. Notably, I designed and implemented the backend for the
                  Seoul Metropolitan Office of Education's cloud platform, serving over 100,000 users.
                </p>
                <p>
                  I also have strong DevOps skills—building CI/CD pipelines and deploying services in both
                  cloud-native and secure, offline environments. With team leadership experience, I
                  effectively collaborate across roles to deliver reliable, high-quality services.
                </p>

                {/* 개인 정보 */}
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> 
                    <span>Mincheol Kim</span>
                  </li>
                  <li className="d-flex">
                    <span>Location:</span> 
                    <span>Seoul, Republic of Korea</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> 
                    <span>mincheol.galaxy@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone:</span> 
                    <span>+82-10-7591-3021</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 프로젝트 / 이력서 다운로드 영역 */}
            <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span>Curriculum Vitae</span>
                </p>
                <p>
                  <a 
                    href="/files/Mincheol_Kim_eng.pdf" 
                    className="btn btn-primary py-3 px-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download&nbsp;English CV
                  </a>
                  &nbsp;&nbsp;
                  <a 
                    href="/files/Mincheol_Kim_kor.pdf"
                    className="btn btn-primary py-3 px-3" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download&nbsp;Korean CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 