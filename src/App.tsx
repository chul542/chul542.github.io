import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mincheol's Portfolio</h1>
        <p>React + TypeScript + Vite</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>A backend developer with practical experience from infrastructure to scalable backend systems.</p>
            </div>
            <div className="col-md-6">
              <h2>Tech Stack</h2>
              <ul>
                <li>Go</li>
                <li>Java / JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Spring Boot</li>
                <li>Docker / Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App; 