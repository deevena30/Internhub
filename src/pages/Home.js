import React from 'react';
import { Link } from 'react-router-dom';
import welcomestick from '../assets/welcomestick.png';

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
  .home-wrapper {
    min-height: 100vh;
    background: linear-gradient(135deg,rgb(190, 199, 213),rgb(102, 211, 230));
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: all 0.3s ease;
  }

  /* Sidebar space fix for larger screens */
  @media (min-width: 768px) {
    .home-wrapper {
      margin-left: 240px; /* Match sidebar width */
      width: calc(100vw - 240px);
    }
  }

  .home-card {
    background-color: #ffffff;
    border-radius: 12px;
    max-width: 950px;
    width: 100%;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  }

  .welcome-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
    text-align: center;
  }

  .welcome-stick {
    width: 80px;
    height: auto;
    object-fit: contain;
    transform: rotate(-10deg);
  }

  .home-heading {
    font-size: 2.2rem;
    color: #004d60;
    font-weight: 600;
    margin: 0;
  }

  .home-subtitle {
    color: #333;
    font-size: 1.1rem;
    margin: 1rem 0 2rem;
    text-align: center;
  }

  .quote-box {
    font-style: italic;
    background: #f1f8f9;
    border-left: 4px solid #0097a7;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: 6px;
    color: #444;
  }

  .nav-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .nav-link {
    background-color: #0097a7;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .nav-link:hover {
    background-color: #007b8a;
  }

  .section-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #006064;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .section-list {
    padding-left: 1.2rem;
    color: #333;
  }

  .section-list li {
    margin-bottom: 0.5rem;
  }

  .section-list a {
    color: #007b8a;
    text-decoration: none;
  }

  .section-list a:hover {
    text-decoration: underline;
  }

  .resumes-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center the cards horizontally */
    gap: 1.5rem;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .home-card {
      padding: 1.5rem 1rem;
    }

    .home-heading {
      font-size: 1.8rem;
    }

    .nav-section {
      flex-direction: column;
      align-items: stretch;
    }

    .welcome-row {
      flex-direction: column;
    }

    .welcome-stick {
      width: 70px;
    }

    .home-subtitle {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .layout-wrapper {
      flex-direction: column;
    }
    .sidebar {
      display: none;
      width: 0;
      padding: 0;
      margin: 0;
    }
    .main-content {
      width: 100%;
      padding: 1rem;
      margin: 0;
    }
  }
`}</style>


      <div className="home-wrapper">
        <div className="home-card">
          <div className="welcome-row">
            <img src={welcomestick} alt="Welcome" className="welcome-stick" />
            <h1 className="home-heading">Welcome to InternHub</h1>
          </div>

          <p className="home-subtitle">
            A peer-curated platform to guide you through the internship preparation process with clarity and confidence.
          </p>

          <div className="quote-box">
            “Success is where preparation and opportunity meet.” — Bobby Unser
          </div>

          <div className="nav-section">
            <Link to="/resumes" className="nav-link">Resume & SOP Bank</Link>
            <Link to="/timeline" className="nav-link">Timeline & Checklist</Link>
            <Link to="/questions" className="nav-link">Question Bank</Link>
          </div>

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
