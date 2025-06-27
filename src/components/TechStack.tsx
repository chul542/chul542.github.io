import React from 'react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: "Languages",
      items: ["Go", "Java / JavaScript / TypeScript", "Python", "C/C++", "Fortran"]
    },
    {
      title: "Back-End",
      items: ["Spring / Spring Boot / Spring Batch", "QueryDSL • JPA • MyBatis", "fastapi"]
    },
    {
      title: "Databases & Caching",
      items: ["MySQL • PostgreSQL • Tibero", "Neo4j • Redis"]
    },
    {
      title: "DevOps",
      items: ["Docker • Helm Chart • Kubernetes", "Argo CD • Jenkins • GitLab CI/CD"]
    }
  ];

  return (
    <section className="ftco-section" id="tech-stack-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <h1 className="big big-2">Tech Stack</h1>
            <h2 className="mb-4">Tech Stack</h2>
            <p>
              (See 👉 
              <a 
                href="https://trusting-spandex-cf9.notion.site/Mincheol-Kim-21e4fc2a76b3807d95c0c3a8b5df503d"
                style={{ color: '#FFEB3B' }} 
                target="_blank"
                rel="noopener noreferrer"
              >
                English CV
              </a>
              &nbsp;&nbsp;
              <a
                href="https://trusting-spandex-cf9.notion.site/1e64fc2a76b38081bef1c30f1fb74d6b" 
                style={{ color: '#4FC3F7' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Korean CV
              </a>
              )
            </p>
          </div>
        </div>

        <div className="row ftco-animate">
          {techCategories.map((category, index) => (
            <div key={index} className="col-md-4 mb-4">
              <h3 className="h5">{category.title}</h3>
              <ul className="tech-list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 