import React from 'react';

interface TestThumbnailProps {
  testId: string;
  category: string;
  className?: string;
}

export const TestThumbnail: React.FC<TestThumbnailProps> = ({ testId, category, className = "w-16 h-16 sm:w-18 sm:h-18" }) => {
  // SVG Renderer based on testId or category
  const renderIcon = () => {
    switch (testId) {
      // 1. HB, ESR
      case 'hb-esr':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EBF4FF" />
                <stop offset="100%" stopColor="#D8E8FC" />
              </linearGradient>
              <linearGradient id="purple-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8A2BE2" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6B21A8" />
              </linearGradient>
              <linearGradient id="blood-col" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B91C1C" />
                <stop offset="50%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-1)" />
            {/* Blood Tube angled */}
            <g transform="rotate(-18 50 50)">
              {/* Glass Tube Body */}
              <rect x="36" y="24" width="28" height="58" rx="14" fill="#FFFFFF" fillOpacity="0.8" stroke="#CBD5E1" strokeWidth="1.5" />
              {/* Blood Liquid */}
              <path d="M37 45 H63 V68 C63 75.7 56.7 82 49 82 C41.3 82 37 75.7 37 68 Z" fill="url(#blood-col)" />
              {/* White Label */}
              <rect x="37" y="32" width="26" height="26" fill="#FFFFFF" rx="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <text x="50" y="44" fontSize="6.5" fontWeight="bold" fill="#1E293B" textAnchor="middle" fontFamily="sans-serif">Hb / ESR</text>
              <line x1="40" y1="49" x2="60" y2="49" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 1" />
              {/* Purple Cap */}
              <rect x="34" y="14" width="32" height="12" rx="3" fill="url(#purple-cap)" />
              <rect x="38" y="22" width="24" height="4" fill="#6B21A8" />
            </g>
          </svg>
        );

      // 2. Complete Haemogram (CBC)
      case 'complete-haemogram-cbc':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-cbc" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EEF2FF" />
                <stop offset="100%" stopColor="#E0E7FF" />
              </linearGradient>
              <linearGradient id="purple-cap-2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#5B21B6" />
              </linearGradient>
              <radialGradient id="rbc-ball" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#991B1B" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-cbc)" />
            {/* RBC Spheres in background */}
            <circle cx="22" cy="62" r="9" fill="url(#rbc-ball)" fillOpacity="0.85" />
            <circle cx="20" cy="38" r="6" fill="url(#rbc-ball)" fillOpacity="0.6" />
            <circle cx="82" cy="68" r="8" fill="url(#rbc-ball)" fillOpacity="0.8" />
            {/* CBC Tube */}
            <g transform="translate(14, 0)">
              <rect x="36" y="24" width="26" height="58" rx="13" fill="#FFFFFF" fillOpacity="0.85" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M37 46 H61 V69 C61 76 55.5 81.5 48.5 81.5 C41.5 81.5 37 76 37 69 Z" fill="#DC2626" />
              {/* White Label */}
              <rect x="37.5" y="32" width="23" height="24" fill="#FFFFFF" rx="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <text x="49" y="45" fontSize="7.5" fontWeight="900" fill="#1E293B" textAnchor="middle" fontFamily="sans-serif">CBC</text>
              {/* Purple Cap */}
              <rect x="34" y="14" width="30" height="12" rx="3" fill="url(#purple-cap-2)" />
            </g>
          </svg>
        );

      // 3. Malaria Parasite (MP / FM)
      case 'malaria-parasite-mp-fm':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-mp" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FCE7F3" />
                <stop offset="100%" stopColor="#FBCFE8" />
              </linearGradient>
              <radialGradient id="rbc-cell" cx="45%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="70%" stopColor="#DB2777" />
                <stop offset="100%" stopColor="#9D174D" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-mp)" />
            {/* Surrounding RBCs */}
            <circle cx="24" cy="28" r="14" fill="url(#rbc-cell)" fillOpacity="0.75" />
            <circle cx="78" cy="30" r="13" fill="url(#rbc-cell)" fillOpacity="0.75" />
            <circle cx="28" cy="74" r="15" fill="url(#rbc-cell)" fillOpacity="0.75" />
            <circle cx="76" cy="74" r="14" fill="url(#rbc-cell)" fillOpacity="0.75" />
            {/* Center Parasitized RBC */}
            <circle cx="50" cy="50" r="22" fill="url(#rbc-cell)" />
            {/* Ring Form Trophozoite (Malaria Signet Ring) */}
            <circle cx="48" cy="48" r="8" fill="none" stroke="#6D28D9" strokeWidth="2.5" />
            <circle cx="53" cy="43" r="3" fill="#831843" stroke="#FFFFFF" strokeWidth="0.8" />
            {/* Gametocyte curved */}
            <path d="M38 56 Q50 64 62 56" fill="none" stroke="#4C1D95" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      // 4. Widal Test
      case 'widal-test':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-widal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EFF6FF" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>
              <linearGradient id="red-cap" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-widal)" />
            <g transform="translate(18, 0)">
              <rect x="22" y="24" width="24" height="58" rx="12" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M23 48 H45 V70 C45 76 40 81 34 81 C28 81 23 76 23 70 Z" fill="#EF4444" />
              <rect x="23" y="32" width="22" height="22" fill="#FFFFFF" rx="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <text x="34" y="44" fontSize="5.5" fontWeight="900" fill="#1E293B" textAnchor="middle" fontFamily="sans-serif">WIDAL</text>
              <rect x="20" y="14" width="28" height="12" rx="3" fill="url(#red-cap)" />
            </g>
            {/* Bacteria agglutination hints */}
            <circle cx="28" cy="45" r="4" fill="#3B82F6" fillOpacity="0.6" />
            <circle cx="24" cy="55" r="3" fill="#3B82F6" fillOpacity="0.5" />
            <circle cx="34" cy="52" r="3" fill="#3B82F6" fillOpacity="0.6" />
          </svg>
        );

      // 5. BT / CT
      case 'bt-ct-clotting-time':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-bt" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="blood-drop" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-bt)" />
            {/* Pipette / Dropper */}
            <g transform="rotate(35 60 25)">
              <path d="M56 10 L64 10 L62 38 L58 38 Z" fill="#94A3B8" />
              <path d="M58 38 L62 38 L60 52 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
              <path d="M55 2 L65 2 C65 8 55 8 55 2 Z" fill="#DC2626" />
            </g>
            {/* Blood Droplet falling */}
            <path d="M42 42 C42 42 32 56 32 64 C32 71 37.5 76 44.5 76 C51.5 76 57 71 57 64 C57 56 47 42 47 42 Z" fill="url(#blood-drop)" />
            <circle cx="40" cy="62" r="3" fill="#FFFFFF" fillOpacity="0.5" />
            <circle cx="58" cy="46" r="3.5" fill="url(#blood-drop)" />
          </svg>
        );

      // 6. Blood Group & Rh Typing
      case 'blood-group-rh-typing':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-bg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FCE7F3" />
                <stop offset="100%" stopColor="#FEE2E2" />
              </linearGradient>
              <radialGradient id="disc-a" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#991B1B" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-bg)" />
            {/* 4 Group Discs: A, B, O, AB */}
            <circle cx="34" cy="34" r="14" fill="url(#disc-a)" />
            <text x="34" y="38" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">A</text>
            <circle cx="66" cy="34" r="14" fill="url(#disc-a)" />
            <text x="66" y="38" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">B</text>
            <circle cx="34" cy="66" r="14" fill="url(#disc-a)" />
            <text x="34" y="70" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">O</text>
            <circle cx="66" cy="66" r="14" fill="url(#disc-a)" />
            <text x="66" y="70" fontSize="8.5" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif">AB</text>
          </svg>
        );

      // 7. Blood Sugar (Fasting / PP / Random)
      case 'blood-sugar-fasting-pp-random':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-sugar" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="meter-body" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-sugar)" />
            {/* Glucometer Device */}
            <rect x="26" y="16" width="48" height="66" rx="16" fill="url(#meter-body)" stroke="#0284C7" strokeWidth="1.5" />
            {/* Digital Screen */}
            <rect x="33" y="24" width="34" height="28" rx="6" fill="#FFFFFF" />
            <text x="50" y="42" fontSize="13" fontWeight="900" fill="#0F172A" textAnchor="middle" fontFamily="sans-serif">105</text>
            <text x="50" y="49" fontSize="5" fontWeight="bold" fill="#64748B" textAnchor="middle" fontFamily="sans-serif">mg/dL</text>
            {/* Test strip bottom */}
            <rect x="44" y="78" width="12" height="12" fill="#E2E8F0" rx="2" stroke="#CBD5E1" strokeWidth="1" />
            {/* Blood Drop */}
            <path d="M22 66 C22 66 16 74 16 78 C16 82 19 85 23 85 C27 85 30 82 30 78 C30 74 24 66 24 66 Z" fill="#DC2626" />
          </svg>
        );

      // 8. HBSAG (Australia Antigen)
      case 'hbsag-australia-antigen':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-hb" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FEE2E2" />
                <stop offset="100%" stopColor="#FECACA" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-hb)" />
            <g transform="translate(18, 0)">
              <rect x="22" y="24" width="24" height="58" rx="12" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M23 48 H45 V70 C45 76 40 81 34 81 C28 81 23 76 23 70 Z" fill="#DC2626" />
              <rect x="23" y="32" width="22" height="22" fill="#FFFFFF" rx="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <text x="34" y="44" fontSize="5" fontWeight="900" fill="#1E293B" textAnchor="middle" fontFamily="sans-serif">HBsAg</text>
              <rect x="20" y="14" width="28" height="12" rx="3" fill="#DC2626" />
            </g>
          </svg>
        );

      // 9. HIV I & II
      case 'hiv-screening-test':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-hiv" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EFF6FF" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-hiv)" />
            <g transform="translate(18, 0)">
              <rect x="22" y="24" width="24" height="58" rx="12" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M23 48 H45 V70 C45 76 40 81 34 81 C28 81 23 76 23 70 Z" fill="#DC2626" />
              <rect x="23" y="32" width="22" height="22" fill="#FFFFFF" rx="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <text x="34" y="45" fontSize="7" fontWeight="900" fill="#1E293B" textAnchor="middle" fontFamily="sans-serif">HIV</text>
              <rect x="20" y="14" width="28" height="12" rx="3" fill="#DC2626" />
            </g>
            {/* Red Awareness Ribbon */}
            <path d="M68 38 C68 38 76 24 82 32 C88 40 78 52 74 66 L70 64 L76 48 L64 64 L60 62 C64 52 68 38 68 38 Z" fill="#EF4444" />
          </svg>
        );

      // 10. HBA1C
      case 'hba1c-glycated-hemoglobin':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-a1c" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5F3FF" />
                <stop offset="100%" stopColor="#EDE9FE" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-a1c)" />
            <g transform="translate(18, 0)">
              <rect x="22" y="24" width="24" height="58" rx="12" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M23 48 H45 V70 C45 76 40 81 34 81 C28 81 23 76 23 70 Z" fill="#7C3AED" />
              <rect x="23" y="32" width="22" height="22" fill="#FFFFFF" rx="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <text x="34" y="44" fontSize="5" fontWeight="900" fill="#1E293B" textAnchor="middle" fontFamily="sans-serif">HbA1c</text>
              <rect x="20" y="14" width="28" height="12" rx="3" fill="#7C3AED" />
            </g>
            <circle cx="70" cy="45" r="7" fill="#F59E0B" fillOpacity="0.7" />
            <text x="70" y="48" fontSize="6" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">3M</text>
          </svg>
        );

      // 11. VDRL / Syphilis
      case 'vdrl-rpr-syphilis':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-vdrl" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#F1F5F9" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-vdrl)" />
            <g transform="translate(18, 0)">
              <rect x="22" y="24" width="24" height="58" rx="12" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M23 48 H45 V70 C45 76 40 81 34 81 C28 81 23 76 23 70 Z" fill="#DC2626" />
              <rect x="23" y="32" width="22" height="22" fill="#FFFFFF" rx="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <text x="34" y="45" fontSize="5.5" fontWeight="900" fill="#1E293B" textAnchor="middle" fontFamily="sans-serif">VDRL</text>
              <rect x="20" y="14" width="28" height="12" rx="3" fill="#DC2626" />
            </g>
          </svg>
        );

      // 12. Bilirubin / LFT
      case 'bilirubin-total-direct-indirect':
      case 'lft-liver-function-test':
      case 'sgot-ast':
      case 'sgpt-alt':
      case 'serum-alkaline-phosphatase-alp':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-lft" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="100%" stopColor="#FEF3C7" />
              </linearGradient>
              <linearGradient id="liver-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#9A3412" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-lft)" />
            {/* 3D Anatomical Liver Silhouette */}
            <path d="M24 35 C28 24 55 24 72 32 C82 36 84 50 78 62 C72 72 45 74 32 68 C22 62 20 44 24 35 Z" fill="url(#liver-grad)" />
            {/* Yellow Bilirubin Test Tube */}
            <g transform="translate(42, 10)">
              <rect x="18" y="24" width="18" height="46" rx="9" fill="#FFFFFF" fillOpacity="0.85" stroke="#CBD5E1" strokeWidth="1.2" />
              <path d="M19 44 H35 V61 C35 66 31 70 27 70 C23 70 19 66 19 61 Z" fill="#FBBF24" />
              <rect x="16" y="16" width="22" height="10" rx="2.5" fill="#DC2626" />
            </g>
          </svg>
        );

      // 13. KFT / Kidney Tests
      case 'kft-rft-kidney-function-test':
      case 'serum-creatinine':
      case 'blood-urea':
      case 'serum-uric-acid':
      case 'serum-electrolytes-na-k-cl':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-kft" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EFF6FF" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>
              <linearGradient id="kidney-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#7F1D1D" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-kft)" />
            {/* Left Kidney */}
            <path d="M36 28 C25 32 20 48 24 62 C28 72 40 74 44 64 C47 56 42 46 44 38 C45 32 42 26 36 28 Z" fill="url(#kidney-grad)" />
            {/* Right Kidney */}
            <path d="M64 28 C75 32 80 48 76 62 C72 72 60 74 56 64 C53 56 58 46 56 38 C55 32 58 26 64 28 Z" fill="url(#kidney-grad)" />
            {/* Ureters */}
            <path d="M42 58 Q48 76 48 84" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
            <path d="M58 58 Q52 76 52 84" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
          </svg>
        );

      // 14. Lipid Profile
      case 'lipid-profile-complete':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-lipid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FEF2F2" />
                <stop offset="100%" stopColor="#FEE2E2" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-lipid)" />
            <path d="M50 78 C50 78 22 58 22 40 C22 28 32 20 42 24 C47 26 50 30 50 30 C50 30 53 26 58 24 C68 20 78 28 78 40 C78 58 50 78 50 78 Z" fill="#DC2626" />
            <circle cx="50" cy="46" r="10" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="50" y="49" fontSize="6" fontWeight="bold" fill="#78350F" textAnchor="middle">HDL</text>
          </svg>
        );

      // 15. Thyroid Profile (TSH / T3 / T4)
      case 'thyroid-profile-t3-t4-tsh':
      case 'tsh-thyroid-stimulating-hormone':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-thyroid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5F3FF" />
                <stop offset="100%" stopColor="#DDD6FE" />
              </linearGradient>
              <linearGradient id="thyroid-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-thyroid)" />
            {/* Trachea / Windpipe */}
            <rect x="45" y="18" width="10" height="64" rx="3" fill="#CBD5E1" />
            <line x1="45" y1="30" x2="55" y2="30" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="45" y1="40" x2="55" y2="40" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="45" y1="50" x2="55" y2="50" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Butterfly Thyroid Gland */}
            <path d="M26 34 C36 30 46 44 46 54 C46 62 36 68 28 62 C22 56 20 40 26 34 Z" fill="url(#thyroid-grad)" />
            <path d="M74 34 C64 30 54 44 54 54 C54 62 64 68 72 62 C78 56 80 40 74 34 Z" fill="url(#thyroid-grad)" />
            <rect x="42" y="48" width="16" height="8" rx="2" fill="#7C3AED" />
          </svg>
        );

      // 16. Dengue / Typhidot Rapid Tests
      case 'dengue-ns1-igg-igm':
      case 'typhidot-igm-igg':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-card" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-card)" />
            {/* Rapid Diagnostic Cassette */}
            <rect x="22" y="20" width="56" height="60" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="50" cy="32" r="5" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
            {/* Test Window with Dual Pink Lines */}
            <rect x="36" y="44" width="28" height="24" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
            <line x1="44" y1="48" x2="44" y2="64" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <line x1="52" y1="48" x2="52" y2="64" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <text x="44" y="42" fontSize="5" fontWeight="bold" fill="#64748B" textAnchor="middle">C</text>
            <text x="52" y="42" fontSize="5" fontWeight="bold" fill="#64748B" textAnchor="middle">T</text>
          </svg>
        );

      // 17. Urine Routine & Microscopy
      case 'urine-routine-microscopy':
      case 'urine-culture-sensitivity':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-urine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FEFCE8" />
                <stop offset="100%" stopColor="#FEF08A" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-urine)" />
            {/* Specimen Container */}
            <rect x="30" y="28" width="40" height="52" rx="6" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M31 46 H69 V74 C69 77 66 80 63 80 H37 C34 80 31 77 31 74 Z" fill="#FACC15" />
            {/* Blue Cap */}
            <rect x="26" y="18" width="48" height="12" rx="3" fill="#0284C7" />
            <line x1="38" y1="36" x2="62" y2="36" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 1" />
          </svg>
        );

      // 18. Digital X-Rays
      case 'digital-xray-chest':
      case 'xray-chest-ap-pa':
      case 'xray-kub-k-u-b':
      case 'xray-lumbar-cervical-dorsal-spine':
      case 'xray-shoulder-elbow-wrist-joint':
      case 'xray-knee-ankle-foot':
      case 'xray-pelvis-both-hip':
      case 'xray-skull':
      case 'xray-mastoid-mandible':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-xray" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-xray)" />
            {/* X-Ray Radiograph Illuminator Frame */}
            <rect x="18" y="16" width="64" height="68" rx="8" fill="#090D16" stroke="#334155" strokeWidth="1.5" />
            {/* Ribcage / Skeleton White Glow */}
            <g stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9">
              {/* Spine */}
              <line x1="50" y1="24" x2="50" y2="76" strokeWidth="3" />
              {/* Ribs left */}
              <path d="M50 32 Q34 32 30 42" />
              <path d="M50 42 Q32 42 28 54" />
              <path d="M50 52 Q32 52 30 64" />
              {/* Ribs right */}
              <path d="M50 32 Q66 32 70 42" />
              <path d="M50 42 Q68 42 72 54" />
              <path d="M50 52 Q68 52 70 64" />
            </g>
            <circle cx="72" cy="24" r="3" fill="#38BDF8" />
          </svg>
        );

      // 19. Special Contrast Procedures (IVP, Barium Swallow, Barium Enema, RGU/MCU, HSG)
      case 'ivp-intravenous-urography':
      case 'barium-swallow':
      case 'barium-enema':
      case 'rgu-mcu-cystourethrography':
      case 'hsg-hysterosalpingography':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-special" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF7ED" />
                <stop offset="100%" stopColor="#FFEDD5" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-special)" />
            {/* Radiologic Contrast Flask & Glow */}
            <path d="M42 20 H58 V36 L74 68 C78 76 72 82 64 82 H36 C28 82 22 76 26 68 L42 36 Z" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" />
            <path d="M30 68 L36 80 H64 L70 68 Z" fill="#F97316" fillOpacity="0.85" />
            <circle cx="50" cy="56" r="5" fill="#F97316" fillOpacity="0.3" />
            <circle cx="44" cy="66" r="3" fill="#FFFFFF" />
            <circle cx="56" cy="64" r="3" fill="#FFFFFF" />
            {/* Sparkle */}
            <path d="M78 22 L80 28 L86 30 L80 32 L78 38 L76 32 L70 30 L76 28 Z" fill="#E86A17" />
          </svg>
        );

      // 20. ECG & Cardiology
      case 'ecg-electrocardiography':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-ecg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B1E33" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-ecg)" />
            {/* ECG Grid lines */}
            <line x1="10" y1="50" x2="90" y2="50" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
            {/* High-tech Cardiogram Rhythm Line */}
            <path
              d="M10 50 H30 L36 42 L42 58 L48 24 L56 76 L62 50 L70 50 L76 44 L82 50 H90"
              fill="none"
              stroke="#22C55E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      // 21. Vitamin D3 & B12
      case 'vitamin-d3-25-hydroxy':
      case 'vitamin-b12-cyanocobalamin':
      case 'calcium-and-vitamin-d3':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-vit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FEFCE8" />
                <stop offset="100%" stopColor="#FEF08A" />
              </linearGradient>
              <linearGradient id="cap-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-vit)" />
            {/* 3D Vitamin Capsule */}
            <g transform="rotate(-30 50 50)">
              <rect x="28" y="36" width="22" height="28" rx="11" fill="#EF4444" />
              <rect x="50" y="36" width="22" height="28" rx="11" fill="url(#cap-gold)" />
              <text x="39" y="53" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">VIT</text>
              <text x="61" y="53" fontSize="8" fontWeight="900" fill="#FFFFFF" textAnchor="middle">D3</text>
            </g>
          </svg>
        );

      // Default Category Fallback
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <defs>
              <linearGradient id="grad-bg-def" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="16" fill="url(#grad-bg-def)" />
            <g transform="translate(18, 0)">
              <rect x="22" y="24" width="24" height="58" rx="12" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" strokeWidth="1.5" />
              <path d="M23 48 H45 V70 C45 76 40 81 34 81 C28 81 23 76 23 70 Z" fill="#3B82F6" />
              <rect x="20" y="14" width="28" height="12" rx="3" fill="#3B82F6" />
            </g>
          </svg>
        );
    }
  };

  return (
    <div className={`shrink-0 rounded-xl overflow-hidden shadow-xs border border-slate-200/80 bg-white ${className}`}>
      {renderIcon()}
    </div>
  );
};
