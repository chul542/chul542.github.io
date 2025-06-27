import React from 'react';

interface SectionHeaderProps {
  bigText: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  bigText, 
  title, 
  subtitle, 
  className = "" 
}) => {
  return (
    <div className={`row justify-content-center pb-5 ${className}`}>
      <div className="col-md-10 heading-section text-center ftco-animate">
        <h1 className="big big-2">{bigText}</h1>
        <h2 className="mb-4">{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default SectionHeader; 