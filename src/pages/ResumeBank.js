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
            background: linear-gradient(135deg, #f5f7fa, #c3e0e5);
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
            background: linear-gradient(135deg, #f5f7fa, #c3e0e5);
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
            background: #007b8a;
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
          background: linear-gradient(135deg, #f5f7fa, #c3e0e5);
          padding: 2rem 1rem;
        }

        .resume-bank-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .resume-bank-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .resume-bank-title {
          font-size: 2.5rem;
          color: #004d60;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .resume-bank-subtitle {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .filter-section {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          margin-bottom: 2rem;
          text-align: center;
        }

        .filter-label {
          font-weight: 600;
          color: #004d60;
          margin-right: 1rem;
          font-size: 1.1rem;
        }

        .filter-select {
          padding: 0.75rem 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          color: #333;
          cursor: pointer;
          transition: border-color 0.3s ease;
          min-width: 200px;
        }

        .filter-select:focus {
          outline: none;
          border-color: #0097a7;
        }

        .resume-count {
          margin-top: 1rem;
          color: #666;
          font-size: 0.9rem;
        }

        .resumes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .resume-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid #f0f0f0;
        }

        .resume-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .resume-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #004d60;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .resume-summary {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .resume-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .meta-tag {
          background: #e3f2fd;
          color: #1976d2;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .resume-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f0;
        }

        .pdf-icon {
          width: 40px;
          height: 50px;
          background: #f44336;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 0.8rem;
        }

        .view-button {
          background: #0097a7;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

                 .view-button:hover {
           background: #007b8a;
         }

         .view-button:active {
           transform: translateY(1px);
         }

         .pdf-loading {
           opacity: 0.7;
           pointer-events: none;
         }

         .pdf-error {
           background: #f44336 !important;
         }

         .pdf-error:hover {
           background: #d32f2f !important;
         }

         .no-resumes {
          text-align: center;
          background: white;
          padding: 3rem 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        .no-resumes-icon {
          font-size: 3rem;
          color: #ccc;
          margin-bottom: 1rem;
        }

        .no-resumes-text {
          color: #666;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .resume-bank-title {
            font-size: 2rem;
          }
          
          .resumes-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-section {
            padding: 1rem;
          }
          
          .filter-label {
            display: block;
            margin-bottom: 0.5rem;
            margin-right: 0;
          }
          
          .filter-select {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .resume-bank-wrapper {
            padding: 1rem 0.5rem;
          }
          
          .resume-card {
            padding: 1rem;
          }
          
          .resume-meta {
            flex-direction: column;
          }
        }
        @media (min-width: 768px) {
          .resume-bank-wrapper {
            margin-left: 240px; /* Match sidebar width */
            width: calc(100vw - 240px);
          }
        }
        @media (max-width: 768px) {
          .resume-bank-wrapper {
            margin-left: 0 !important;
            width: 100% !important;
            padding: 1rem !important;
          }
          .sidebar {
            display: none !important;
            width: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .resume-bank-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 1rem !important;
          }
          .resume-bank-header {
            text-align: center !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .resume-bank-title, .resume-bank-subtitle {
            text-align: center !important;
          }
        }
      `}</style>

      <div className="resume-bank-wrapper">
        
        <div className="resume-bank-container">
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
            <div className="resumes-grid">
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
      </div>
    </>
  );
}
