import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { normalizeSetupBrand } from '../../lib/setupBrandUtils';

const brandLogos = {
  HP: '/hp-bg.png',
  Brother: '/brother-logo-bg.png',
  EPSON: '/epson-bg.png',
  Canon: '/canon-bg.png',
};

const SetupHeader = ({ showLogo = true, showHeader = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const brandMatch = location.pathname.match(/(?:complete-setup|model-search|installation-failed)\/([^/]+)/i);
  const rawBrand = brandMatch ? brandMatch[1] : null;
  const brandKey = normalizeSetupBrand(rawBrand);
  const logoSrc = brandKey && brandLogos[brandKey] ? brandLogos[brandKey] : '/hp-logo.svg';

  if (!showHeader) return null;

  return (
    <header className="w-full h-20 bg-white py-2 flex items-center px-[15vw] border-b border-gray-100 shadow-sm relative z-50">
      <nav className="w-full flex items-center justify-between">
        <div className="flex items-center">
          {showLogo && (
            <img
              src={logoSrc}
              alt="Brand Logo"
              style={{ width: '120px', height: '48px', objectFit: 'contain', background: 'none', borderRadius: 0 }}
            />
          )}
        </div>
        <ul className="hidden md:flex flex-row gap-10 items-center ml-auto">
          <li>
            <Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
              Inkjet
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
              Laser
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
              Envy
            </Link>
          </li>
        </ul>
        <div className="md:hidden flex items-center ml-auto">
          <button
            type="button"
            aria-label="Open menu"
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-50 md:hidden animate-fadeIn">
            <li>
              <Link to="/" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/inkjet" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
                Inkjet
              </Link>
            </li>
            <li>
              <Link to="/laser" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
                Laser
              </Link>
            </li>
            <li>
              <Link to="/envy" className="text-gray-800 text-lg font-normal hover:font-semibold transition">
                Envy
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default SetupHeader;
