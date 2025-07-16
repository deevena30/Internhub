import React, { useState, useEffect } from 'react';

export default function ResumeBank() {
  const [resumes, setResumes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/resumeData.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch resume data');
        }
        return res.json();
      })
      .then(data => {
        setResumes(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Function to get the correct file path


  const types = ['All', ...new Set(resumes.map(r => r.type))];

  const filteredResumes =
    selectedType === 'All'
      ? resumes
      : resumes.filter(r => r.type.toLowerCase() === selectedType.toLowerCase());

  if (loading) {
    return (
      <>
        <style>{`
          .loading-container {
            min-height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white
          }
          
          .loading-spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #0097a7;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .loading-text {
            margin-top: 1rem;
            color: #666;
            font-size: 1.1rem;
          }
        `}</style>
        <div className="loading-container">
          <div style={{ textAlign: 'center' }}>
            <div className="loading-spinner"></div>
            <div className="loading-text">Loading resumes...</div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <style>{`
          .error-container {
            min-height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
          }
          
          .error-card {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 400px;
          }
          
          .error-icon {
            font-size: 3rem;
            color: #f44336;
            margin-bottom: 1rem;
          }
          
          .error-text {
            color: #666;
            margin-bottom: 1rem;
          }
          
          .retry-button {
            background: #0097a7;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
          }
          
          .retry-button:hover {
            background:white;
          }
        `}</style>
        <div className="error-container">
          <div className="error-card">
            <div className="error-icon">⚠️</div>
            <h3>Error Loading Resumes</h3>
            <p className="error-text">{error}</p>
            <button 
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .resume-bank-wrapper {
          min-height: 100vh;
          width: 100vw;
          max-width: 100vw;
          box-sizing: border-box;
          background: linear-gradient(100deg, rgb(58, 136, 215) 0%, rgb(167, 104, 238) 100%);
          padding: 2.5rem 1.5rem;
          transition: margin-left 0.3s;
          margin-left: 0;
          font-family: Arial, sans-serif;
          color: #2C2C2C;
        }
        .body-sidebar-open .resume-bank-wrapper {
          margin-left: 240px;
        }
        @media (max-width: 900px) {
          .body-sidebar-open .resume-bank-wrapper {
            margin-left: 0;
          }
        }
        .resume-bank-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .resume-bank-title {
          font-size: 2.7rem;
          color: #fff;
          font-weight: 900;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
          text-shadow: 0 10px 8px rgba(20, 19, 18, 0.2);
        }
        .resume-bank-subtitle {
          color: #444;
          font-size: 1.15rem;
          margin-bottom: 2rem;
        }
        .filter-section {
          background: rgba(255,255,255,0.95);
          padding: 1.5rem 2rem;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 2.5rem;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          color: #444;
          border-left: 4px solid #FF6B00;
        }
        .filter-label {
          font-weight: 600;
          color: #D84315;
          margin-right: 1rem;
        }
        .filter-select {
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          border: 1.5px solid #FF6B00;
          font-size: 1rem;
          background: #fff;
          color: #D84315;
          box-shadow: 0 2px 8px rgba(255,107,0,0.08);
          transition: border 0.2s;
        }
        .filter-select:focus {
          border: 1.5px solid #3a88d7;
          outline: none;
        }
        .resume-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          width: 100%;
          margin: 0 auto;
        }
        .resume-card {
          background: rgba(255,255,255,0.95);
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          padding: 2rem 1.5rem;
          border-left: 4px solid #FF6B00;
          color: #444;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .resume-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #D84315;
          margin-bottom: 0.5rem;
        }
        .resume-meta {
          font-size: 0.98rem;
          color: #444;
          margin-bottom: 0.5rem;
        }
        .resume-link {
          background: linear-gradient(90deg,rgb(68, 190, 123),rgb(66, 163, 81));
          color: white;
          padding: 0.6rem 1.3rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: none;
          margin-top: 1rem;
          transition: background 0.3s, box-shadow 0.2s, transform 0.2s;
        }
        .resume-link:hover {
          background: linear-gradient(90deg, #FF6B00, #FFA000);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          transform: translateY(-2px) scale(1.04);
        }
        @media (max-width: 768px) {
          .resume-bank-wrapper {
            padding: 1.5rem 0.7rem;
          }
          .resume-bank-title {
            font-size: 1.5rem;
          }
          .resume-grid {
            gap: 1rem;
          }
        }
        @media (max-width: 480px) {
          .resume-bank-wrapper {
            width: 100%;
            padding: 0.5rem;
          }
        }
      `}</style>

      <div className="resume-bank-wrapper">
        
        <div className="resume-bank-header">
          <h1 className="resume-bank-title">📄 Resume Bank</h1>
          <p className="resume-bank-subtitle">
            Browse successful previous years internship resumes from various fields
          </p>
        </div>
        <div className="filter-section">
          
          <label htmlFor="type-filter" className="filter-label">
            Filter by Field:
          </label>
          <select
            id="type-filter"
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            className="filter-select"
            aria-label="Filter resumes by field"
          >
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <div className="resume-count">
            {filteredResumes.length} resume{filteredResumes.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {filteredResumes.length > 0 ? (
          <div className="resume-grid">
            {filteredResumes.map((resume, index) => (
              <div key={index} className="resume-card">
                <h3 className="resume-title">{resume.title}</h3>
                <p className="resume-summary">{resume.summary}</p>
                
                <div className="resume-meta">
                  <span className="meta-tag">🏢 {resume.company}</span>
                  <span className="meta-tag">📅 {resume.year}</span>
                  <span className="meta-tag">🎯 {resume.type}</span>
                </div>
                
                                     <div className="resume-preview">
                   <div className="pdf-icon">PDF</div>
                   <a 
                     href={resume.file} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="view-button"
                     aria-label={`View ${resume.title} resume`}
                   >
                     View Resume
                   </a>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-resumes">
            <div className="no-resumes-icon">📄</div>
            <h3>No resumes found</h3>
            <p className="no-resumes-text">
              No resumes found for the selected field. Try selecting a different filter.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
