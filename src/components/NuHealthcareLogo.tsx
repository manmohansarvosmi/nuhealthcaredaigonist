import React from 'react';
import logoImg from '../assets/images/logo_nuhealthcare.png';

interface NuHealthcareLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol';
  isDarkBackground?: boolean;
}

export const NuHealthcareLogo: React.FC<NuHealthcareLogoProps> = ({
  className = 'h-11',
  isDarkBackground = false,
}) => {
  if (isDarkBackground) {
    return (
      <div className="inline-flex items-center bg-white px-2.5 py-1 rounded-lg shadow-xs transition-transform hover:scale-[1.02]">
        <img
          src={logoImg}
          alt="Group's of Nu Health Care Diagnostic"
          className={`${className} object-contain`}
        />
      </div>
    );
  }

  return (
    <img
      src={logoImg}
      alt="Group's of Nu Health Care Diagnostic"
      className={`${className} object-contain`}
    />
  );
};

