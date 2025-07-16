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
          --border-radius: 16px;
          --transition: all 0.3s ease;
        }
        .resume-bank-wrapper {
          min-height: 100vh;
          width: 100vw;
          max-width: 100vw;
          box-sizing: border-box;
          background: var(--bg-gradient);
          padding: 2.5rem 1.5rem;
          transition: margin-left 0.3s;
          margin-left: 0;
          font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
          color: var(--text-dark);
          display: flex;
          flex-direction: column;
          align-items: center;
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
          max-width: 700px;
        }
        .resume-bank-title {
          font-size: 2.75rem;
          color: var(--text-light);
          font-weight: 800;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .resume-bank-subtitle {
          color: rgba(255,255,255,0.9);
          font-size: 1.15rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        .filter-section {
          background: var(--card-bg);
          padding: 1.25rem 1.5rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          margin-bottom: 2.5rem;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          color: var(--text-dark);
          border-left: 4px solid var(--accent-color);
          max-width: 700px;
          width: 100%;
        }
        .filter-label {
          font-weight: 600;
          color: var(--accent-color);
          margin-right: 0.5rem;
        }
        .filter-select {
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          border: 1.5px solid var(--accent-color);
          font-size: 1rem;
          background: #fff;
          color: var(--accent-color);
          box-shadow: 0 2px 8px rgba(255,107,0,0.08);
          transition: var(--transition);
        }
        .filter-select:focus {
          border: 1.5px solid var(--primary-color);
          outline: none;
        }
        .resume-count {
          color: var(--primary-color);
          font-size: 1.05rem;
          font-weight: 500;
        }
        .resume-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }
        .resume-card {
          background: var(--card-bg);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-md);
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          border-left: 4px solid var(--accent-color);
          color: var(--text-dark);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: box-shadow 0.2s, transform 0.2s;
          position: relative;
        }
        .resume-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px) scale(1.01);
        }
        .resume-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        .resume-summary {
          color: var(--text-dark);
          margin-bottom: 1.1rem;
          line-height: 1.6;
        }
        .resume-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.1rem;
        }
        .meta-tag {
          display: inline-flex;
          align-items: center;
          padding: 0.28rem 0.85rem;
          border-radius: 20px;
          font-size: 0.89rem;
          font-weight: 500;
          background: #e0e7ff;
          color: var(--primary-color);
        }
        .resume-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.1rem;
          padding-top: 1rem;
          border-top: 1px solid #e0e7ff;
          width: 100%;
        }
        .pdf-icon {
          width: 40px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: bold;
          font-size: 0.8rem;
          box-shadow: var(--shadow-sm);
          margin-right: 1rem;
        }
        .view-button, .resume-link {
          background: linear-gradient(90deg, #44be7b, #42a351);
          color: #fff;
          padding: 0.6rem 1.3rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          box-shadow: var(--shadow-sm);
          border: none;
          margin-left: auto;
          transition: var(--transition);
          cursor: pointer;
        }
        .view-button:hover, .resume-link:hover {
          background: linear-gradient(90deg, var(--accent-color), #ff8c00);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .no-resumes {
          text-align: center;
          background: var(--card-bg);
          padding: 3rem 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          color: var(--primary-color);
          max-width: 700px;
          margin: 0 auto;
        }
        .no-resumes-icon {
          font-size: 3rem;
          color: var(--accent-color);
          margin-bottom: 1rem;
        }
        .no-resumes-text {
          color: var(--text-dark);
          font-size: 1.13rem;
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
