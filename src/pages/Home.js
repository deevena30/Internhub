import React from 'react';
import { Link } from 'react-router-dom';

const tips = [
  'Customize your resume to match the role requirements.',
  'Start applying early; popular roles fill up quickly.',
  'Practice mock interviews regularly.',
  'Reach out to alumni for guidance.',
  'Maintain a consistent and professional online presence.',
];

const references = [
  { title: 'Guide for how to write a SOP', url: 'https://www.idp.com/india/study-abroad/statement-of-purpose/' },
  { title: 'how to answer 64 toughest interview questions', url: 'https://www.ohsu.edu/sites/default/files/2019-04/How-to-Answer-the-64-Toughest-Interview-Questions.pdf' },
  { title: '50+ behavioral interview questions, helps you prepare for interviews', url: 'https://resources.biginterview.com/interview-questions-answers/behavioral-interview/' },
  { title: 'Tips from Google on how to approach interviews', url: 'https://www.google.com/about/careers/applications/how-we-hire/' },
  { title: 'Internship Prep: The Ultimate Checklist for 2025 Interns', url: 'https://sd2.org/internship-prep-checklist/' },
];

const HomePage = () => {
  return (
    <>
      <style>{`
        :root {
          --primary-color: #4a6bff;
          --secondary-color: #8e54e9;
          --accent-color: #ff6b00;
          --text-dark: #2c2c2c;
          --text-light: #f8f9fa;
          --bg-gradient: linear-gradient(135deg, #3a88d7 0%, #a768ee 100%);
          --card-bg: rgba(255, 255, 255, 0.95);
          --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
          --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
          --shadow-lg: 0 8px 20px rgba(0,0,0,0.15);
          --border-radius-sm: 8px;
          --border-radius-md: 12px;
          --border-radius-lg: 16px;
          --transition: all 0.3s ease;
        }

        .home-wrapper {
          font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          min-height: 100vh;
          background: var(--bg-gradient);
          padding: 2.5rem 1.5rem;
          color: var(--text-dark);
          transition: margin-left 0.3s;
          margin-left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .body-sidebar-open .home-wrapper {
          margin-left: 240px;
        }

        .welcome-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
          max-width: 800px;
        }

        .home-heading {
          font-size: 2.75rem;
          color: var(--text-light);
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.5px;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .home-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.25rem;
          margin: 0.5rem 0 2rem;
          max-width: 700px;
          line-height: 1.5;
        }

        .quote-box {
          font-style: italic;
          background: var(--card-bg);
          border-left: 4px solid var(--accent-color);
          padding: 1.25rem 1.75rem;
          margin: 0 auto 2.5rem;
          border-radius: var(--border-radius-sm);
          color: var(--text-dark);
          box-shadow: var(--shadow-sm);
          max-width: 700px;
          width: 100%;
          text-align: center;
          font-size: 1.1rem;
          position: relative;
        }

        .quote-box::before {
          content: '"';
          font-size: 3rem;
          color: rgba(255, 107, 0, 0.2);
          position: absolute;
          left: 10px;
          top: 5px;
        }

        .nav-section {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
          justify-content: center;
          max-width: 800px;
          width: 100%;
          align-items: stretch;
        }

        .nav-link {
          background: linear-gradient(90deg, #44be7b, #42a351);
          color: white;
          padding: 0.85rem 1.8rem;
          border-radius: var(--border-radius-md);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          text-align: center;
          flex: 1 1 180px;
          min-width: 180px;
          max-width: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
          height: 100%;
          border: none;
          cursor: pointer;
        }

        .nav-link:last-child {
          margin-bottom: 0;
        }

        .nav-link:hover {
          background: linear-gradient(90deg, #ff6b00, #ff8c00);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .info-box {
          background: var(--card-bg);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 2.5rem;
          margin: 0 auto;
          max-width: 800px;
          width: 100%;
        }

        .info-box > div {
          margin-bottom: 2rem;
        }

        .info-box > div:last-child {
          margin-bottom: 0;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .section-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-color), transparent);
        }

        .section-list {
          padding-left: 1.5rem;
          color: var(--text-dark);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .section-list li {
          margin-bottom: 0.75rem;
          position: relative;
        }

        .section-list li::before {
          content: '•';
          color: var(--accent-color);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        .section-list a {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition);
          border-bottom: 1px solid transparent;
        }

        .section-list a:hover {
          color: var(--accent-color);
          border-bottom: 1px solid var(--accent-color);
        }

        /* Responsive styles */
        @media (max-width: 900px) {
          .body-sidebar-open .home-wrapper {
            margin-left: 0;
          }
        }

        @media (max-width: 768px) {
          .home-wrapper {
            padding: 2rem 1rem;
          }
          
          .home-heading {
            font-size: 2.25rem;
          }
          
          .home-subtitle {
            font-size: 1.1rem;
          }
          
          .info-box {
            padding: 1.75rem;
          }
        }

        @media (max-width: 576px) {
          .home-heading {
            font-size: 2rem;
          }
          
          .nav-link {
            flex: 1 1 100%;
            min-width: 0;
            max-width: 100%;
            margin-bottom: 0.7rem;
          }
          .nav-link:last-child {
            margin-bottom: 0;
          }
          
          .quote-box {
            padding: 1rem;
            font-size: 1rem;
          }
          
          .info-box {
            padding: 1.5rem 1rem;
          }
          
          .section-list {
            font-size: 1rem;
          }
        }

        @media (max-width: 400px) {
          .home-heading {
            font-size: 1.75rem;
          }
          
          .home-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="home-wrapper">
        <div className="welcome-row">
          <h1 className="home-heading">Welcome to InternHub</h1>
          <p className="home-subtitle">
            A peer-curated platform to guide you through the internship preparation process with clarity and confidence.
          </p>
        </div>

        <div className="quote-box">
          “Success is where preparation and opportunity meet.” — Bobby Unser
        </div>

        <div className="nav-section">
          <Link to="/resumes" className="nav-link">Resume & SOP Bank</Link>
          <Link to="/timeline" className="nav-link">Timeline & Checklist</Link>
          <Link to="/questions" className="nav-link">Question Bank</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
        </div>

        <div className="info-box">
          <div>
            <h3 className="section-title">Quick Tips</h3>
            <ul className="section-list">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="section-title">Recommended Resources</h3>
            <ul className="section-list">
              {references.map((ref, index) => (
                <li key={index}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;