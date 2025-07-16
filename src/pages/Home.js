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
  .home-wrapper {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    background: linear-gradient(100deg, rgb(58, 136, 215) 0%, rgb(167, 104, 238) 100%);
    padding: 2.5rem 1.5rem;
    transition: margin-left 0.3s;
    margin-left: 0;
    color: #2C2C2C;
  }

  .body-sidebar-open .home-wrapper {
    margin-left: 240px;
  }

  @media (max-width: 900px) {
    .body-sidebar-open .home-wrapper {
      margin-left: 0;
    }
  }

  .welcome-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
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
    font-size: 2.7rem;
    color:rgb(255, 255, 255);
    font-weight: 900;
    margin: 0;
    letter-spacing: 1px;
    text-shadow: 0 10px 8px rgba(20, 19, 18, 0.2);
  }

  .home-subtitle {
    color: #444;
    font-size: 1.15rem;
    margin: 1rem 0 2rem;
    text-align: center;
  }

  .quote-box {
    font-style: italic;
    background: rgba(255, 255, 255, 0.9);
    border-left: 4px solid #FF6B00;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: 8px;
    color: #333;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .nav-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .nav-link {
    background: linear-gradient(90deg,rgb(68, 190, 123),rgb(66, 163, 81));
    color: white;
    padding: 0.75rem 1.7rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.08rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: background 0.3s, box-shadow 0.2s, transform 0.2s;
  }

  .nav-link:hover {
    background: linear-gradient(90deg, #FF6B00, #FFA000);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    transform: translateY(-2px) scale(1.04);
  }

  .info-box {
    background: rgba(255,255,255,0.95);
    border-left: 4px solid #FF6B00;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    padding: 2rem 1.5rem;
    margin: 2.5rem auto 0 auto;
    max-width: 700px;
  }

  .section-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #D84315;
    margin-top: 1.2rem;
    margin-bottom: 1rem;
  }

  .section-list {
    padding-left: 1.2rem;
    color: #444;
    font-size: 1.05rem;
  }

  .section-list li {
    margin-bottom: 0.5rem;
  }

  .section-list a {
    color:#444;
    text-decoration: underline;
    font-weight: 500;
  }

  .section-list a:hover {
    color: #FF5722;
  }

  @media (max-width: 768px) {
    .home-heading {
      font-size: 2rem;
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
    .info-box {
      padding: 1.2rem 0.7rem;
    }
  }

  @media (max-width: 480px) {
    .home-wrapper {
      width: 100%;
      padding: 0.5rem;
    }
  }
`}</style>


      <div className="home-wrapper">
        <div className="welcome-row">
         
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
