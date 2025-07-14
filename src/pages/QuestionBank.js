import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import question from '../assets/image-removebg-preview.png';
import questionBank from '../questionBank.json';

const QuestionBank = () => {
  const categories = Object.keys(questionBank);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('questions');

  const allQuestions = Object.entries(questionBank).flatMap(([category, qList]) =>
    qList.map((q) => ({ ...q, category }))
  );

  const filteredQuestions =
    selectedCategory === 'All'
      ? allQuestions
      : allQuestions.filter((q) => q.category === selectedCategory);

  return (
    <>
      <style>{`
        .question-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f3faff, #dceef2);
          padding: 4rem 1rem;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .question-box {
          background: white;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          max-width: 960px;
          width: 100%;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.10);
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          flex-direction: column;
          border: 1px solid #e3e8ee;
        }
        .question-heading {
          color: #004d61;
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-align: left;
        }
        .question-header-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }
        .question-image {
          width: 180px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0;
        }
        .question-subtext {
          font-size: 1rem;
          color: #444;
          text-align: left;
          margin-bottom: 1.5rem;
        }
       

        .question-filter-row {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1.5rem 0 1rem 0;
        }
        .category-select {
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          border: 1px solid #b0bec5;
          font-size: 1rem;
          background: #f7fafc;
          color: #004d61;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          transition: border 0.2s;
        }
        .category-select:focus {
          border: 1.5px solid #004d61;
          outline: none;
        }
        .question-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .question-card {
          background: #f7fafc;
          border-radius: 10px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          padding: 1.25rem 1.5rem;
          border: 1px solid #e3e8ee;
          cursor: pointer;
          transition: box-shadow 0.2s, background 0.2s, transform 0.2s;
        }
        .question-card:hover {
          background: #e3f2fd;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
          transform: translateY(-2px) scale(1.01);
        }
        .no-questions {
          text-align: center;
          font-style: italic;
          color: #888;
        }
        @media (min-width: 768px) {
          .question-container {
            margin-left: 240px; /* Match sidebar width */
            width: calc(100vw - 240px);
          }
        }
        @media (max-width: 768px) {
          .question-container {
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
          .question-box {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 1rem !important;
          }
          .question-heading {
            text-align: left !important;
          }
          .question-subtext {
            text-align: center !important;
          }
        }
      `}</style>

      <div id="questions" className="question-container">
        <div className="question-box">
          <div className="question-header-row">
            <img src={question} alt="question" className="question-image" />
            <div>
              <h2 className="question-heading">Interview Question Bank</h2>
              <p className="question-subtext">
                Switch between resources and common interview questions by category.
              </p>
              
            </div>
          </div>

          {/* Only show questions tab now */}
          {(
            <>
              <div className="question-filter-row">
               
                <select
                  className="category-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All" style={{color: '#004d61'}}>All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="no-questions">No questions available for this category.</div>
              ) : (
                <div className="question-list">
                  {filteredQuestions.map((q, idx) => (
                    <QuestionCard key={idx} {...q} className="question-card" />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionBank;
