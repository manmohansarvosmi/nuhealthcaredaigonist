import React from 'react';

interface NuHealthcareLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol';
  isDarkBackground?: boolean;
}

export const NuHealthcareLogo: React.FC<NuHealthcareLogoProps> = ({
  className = 'h-11',
  variant = 'full',
  isDarkBackground = false,
}) => {
  const orange = '#F37920';
  const red = '#D32F2F';
  const blue = '#0066B2';
  const textColor = isDarkBackground ? '#FFFFFF' : '#F37920';
  const groupTextColor = isDarkBackground ? '#FFA463' : '#D32F2F';

  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Nu Health Care Diagnostic Logo"
      >
        <defs>
          <path id="curveSymbol" d="M 12,30 A 45,45 0 0,1 88,30" />
        </defs>

        {/* Curved "Group's of" */}
        <text fill={groupTextColor} fontSize="13" fontWeight="bold" fontFamily="system-ui, sans-serif">
          <textPath href="#curveSymbol" startOffset="50%" textAnchor="middle">
            Group's of
          </textPath>
        </text>

        {/* Central Red Cross */}
        <path
          d="M 43,36 H 57 V 47 H 68 V 61 H 57 V 72 H 43 V 61 H 32 V 47 H 43 Z"
          fill={red}
        />

        {/* Left Orange Caring Hand */}
        <path
          d="M 50,88 C 42,88 34,84 27,78 C 21,72 17,64 16,56 C 15,50 17,45 20,44 C 23,43 26,46 27,51 C 28,57 32,65 37,70 C 41,74 46,76 50,77 Z"
          fill={orange}
        />
        {/* Left Hand Inner Palm Curve */}
        <path
          d="M 23,47 C 22,55 26,64 33,70 C 37,73 42,75 48,76 C 45,74 41,70 38,65 C 34,59 33,52 33,47 C 33,45 35,44 37,45 C 39,46 40,49 40,53 C 40,59 44,65 48,68 C 43,62 42,54 44,48 C 45,45 48,46 48,49 C 48,54 51,60 55,62 Z"
          fill={orange}
          opacity="0.9"
        />

        {/* Right Orange Caring Hand */}
        <path
          d="M 50,88 C 58,88 66,84 73,78 C 79,72 83,64 84,56 C 85,50 83,45 80,44 C 77,43 74,46 73,51 C 72,57 68,65 63,70 C 59,74 54,76 50,77 Z"
          fill={orange}
        />
        {/* Right Hand Inner Palm Curve */}
        <path
          d="M 77,47 C 78,55 74,64 67,70 C 63,73 58,75 52,76 C 55,74 59,70 62,65 C 66,59 67,52 67,47 C 67,45 65,44 63,45 C 61,46 60,49 60,53 C 60,59 56,65 52,68 C 57,62 58,54 56,48 C 55,45 52,46 52,49 C 52,54 49,60 45,62 Z"
          fill={orange}
          opacity="0.9"
        />
      </svg>
    );
  }

  // Full Logo Variant with Text & Swooshes
  return (
    <svg
      viewBox="0 0 440 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Group's of Nu Health Care Diagnostic"
    >
      <defs>
        {/* Curve for "Group's of" */}
        <path id="curveText" d="M 24,36 A 58,58 0 0,1 126,36" />
        <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8B38" />
          <stop offset="100%" stopColor="#E86A17" />
        </linearGradient>
      </defs>

      {/* ================= LEFT EMBLEM ================= */}
      <g transform="translate(4, 2)">
        {/* Curved "Group's of" text */}
        <text fill={groupTextColor} fontSize="17" fontWeight="bold" fontFamily="'Epilogue', 'Outfit', sans-serif">
          <textPath href="#curveText" startOffset="50%" textAnchor="middle">
            Group's of
          </textPath>
        </text>

        {/* Red Medical Cross */}
        <path
          d="M 64,43 H 80 V 56 H 93 V 70 H 80 V 83 H 64 V 70 H 51 V 56 H 64 Z"
          fill={red}
        />

        {/* Left Orange Caring Hand */}
        <path
          d="M 72,101 C 61,101 50,96 41,88 C 33,80 27,69 26,58 C 25,51 28,45 32,44 C 36,43 39,47 41,53 C 43,60 48,70 55,77 C 61,82 68,85 72,86 Z"
          fill={orange}
        />
        {/* Left Palm Inner Wings */}
        <path
          d="M 36,47 C 35,58 40,69 49,77 C 55,81 62,84 70,85 C 66,82 61,78 57,71 C 52,64 51,55 51,48 C 51,45 54,44 56,46 C 58,47 60,51 60,56 C 60,63 65,71 70,75 C 64,67 63,57 66,50 C 67,47 71,48 71,52 C 71,58 75,65 80,68 Z"
          fill={orange}
        />

        {/* Right Orange Caring Hand */}
        <path
          d="M 72,101 C 83,101 94,96 103,88 C 111,80 117,69 118,58 C 119,51 116,45 112,44 C 108,43 105,47 103,53 C 101,60 96,70 89,77 C 83,82 76,85 72,86 Z"
          fill={orange}
        />
        {/* Right Palm Inner Wings */}
        <path
          d="M 108,47 C 109,58 104,69 95,77 C 89,81 82,84 74,85 C 78,82 83,78 87,71 C 92,64 93,55 93,48 C 93,45 90,44 88,46 C 86,47 84,51 84,56 C 84,63 79,71 74,75 C 80,67 81,57 78,50 C 77,47 73,48 73,52 C 73,58 69,65 64,68 Z"
          fill={orange}
        />
      </g>

      {/* ================= RIGHT TEXT BLOCK ================= */}
      {/* "Nu" prominent bold */}
      <text
        x="165"
        y="58"
        fill={textColor}
        fontSize="54"
        fontWeight="800"
        fontFamily="'Epilogue', 'Outfit', sans-serif"
        letterSpacing="-1"
      >
        Nu
      </text>

      {/* "Health Care" */}
      <text
        x="248"
        y="46"
        fill={textColor}
        fontSize="28"
        fontWeight="700"
        fontFamily="'Plus Jakarta Sans', sans-serif"
      >
        Health Care
      </text>

      {/* "Diagnostic" Pill Badge */}
      <rect
        x="165"
        y="68"
        width="196"
        height="30"
        rx="10"
        fill={orange}
      />
      <text
        x="263"
        y="89"
        fill="#FFFFFF"
        fontSize="21"
        fontWeight="800"
        fontFamily="'Plus Jakarta Sans', 'Epilogue', sans-serif"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        Diagnostic
      </text>

      {/* ================= DYNAMIC DUAL SWOOSH UNDERLINE ================= */}
      {/* Upper Red Swoosh */}
      <path
        d="M 132,86 C 180,108 260,116 415,70 C 375,98 250,118 132,86 Z"
        fill={red}
      />

      {/* Lower Blue Swoosh */}
      <path
        d="M 148,93 C 195,116 275,124 414,78 C 375,106 255,125 148,93 Z"
        fill={blue}
      />
    </svg>
  );
};
