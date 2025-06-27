import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 