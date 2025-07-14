import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Resume & SOP Bank', path: '/resumes' },
  { name: 'Timeline & Checklist', path: '/timeline' },
  { name: 'Question Bank', path: '/questions' },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close sidebar on link click (mobile only)
  const handleLinkClick = () => {
    if (window.innerWidth < 900) setOpen(false);
  };

  return (
    <>
      <button
        className={`navbar-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`navbar-sidebar${open ? ' open' : ''}`}>
        <div className="navbar-header">InternHub</div>
        <ul className="navbar-list">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`navbar-link${location.pathname === item.path ? ' active' : ''}`}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && <div className="navbar-overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Navbar; 