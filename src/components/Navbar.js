import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/resources' },
  { name: 'Resume & SOP Bank', path: '/resumes' },
  { name: 'Timeline & Checklist', path: '/timeline' },
  { name: 'Question Bank', path: '/questions' },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Add/remove class to body to shift main content
  useEffect(() => {
    if (open) {
      document.body.classList.add('body-sidebar-open');
    } else {
      document.body.classList.remove('body-sidebar-open');
    }
    return () => {
      document.body.classList.remove('body-sidebar-open');
    };
  }, [open]);

  // Close sidebar on link click
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger menu (always visible) */}
      <button
        className={`navbar-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
        <span />
      </button>
      {/* Sidebar */}
      <nav className={`navbar-sidebar${open ? ' open' : ''}`}>
        <div className="navbar-header">InternHub</div>
        {/* Close button always visible inside sidebar */}

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
      {/* Overlay for closing sidebar */}
      {open && <div className="navbar-overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Navbar; 