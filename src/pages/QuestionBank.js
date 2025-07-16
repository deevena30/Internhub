import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import question from '../assets/image-removebg-preview.png';
import questionBank from '../questionBank.json';

const QuestionBank = () => {
  const categories = Object.keys(questionBank);
  const [selectedCategory, setSelectedCategory] = useState('All');


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
        .question-wrapper {
          min-height: 100vh;
          background: linear-gradient(100deg, rgb(58, 136, 215) 0%, rgb(167, 104, 238) 100%);
          padding: 2.5rem 1.5rem;
          transition: margin-left 0.3s;
          margin-left: 0;
          font-family: Arial, sans-serif;
          color: #2C2C2C;
        }
        .body-sidebar-open .question-wrapper {
          margin-left: 240px;
        }
        @media (max-width: 900px) {
          .body-sidebar-open .question-wrapper {
            margin-left: 0;
          }
        }
        .question-header-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
          margin-bottom: 1.5rem;
        }
        .question-image {
          width: 120px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0;
        }
        .question-heading {
          color: #fff;
          font-size: 2.7rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
          text-align: left;
          letter-spacing: 1px;
          text-shadow: 0 10px 8px rgba(20, 19, 18, 0.2);
        }
        .question-subtext {
          font-size: 1.1rem;
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
          border: 1.5px solid #FF6B00;
          font-size: 1rem;
          background: #fff;
          color: #D84315;
          box-shadow: 0 2px 8px rgba(255,107,0,0.08);
          transition: border 0.2s;
        }
        .category-select:focus {
          border: 1.5px solid #3a88d7;
          outline: none;
        }
        .question-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .question-card {
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
        .no-questions {
          text-align: center;
          font-style: italic;
          color: #e0e7ff;
        }
        @media (max-width: 768px) {
          .question-wrapper {
            padding: 1.5rem 1rem;
          }
          .question-heading {
            font-size: 1.5rem;
            text-align: left !important;
          }
          .question-subtext {
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .question-wrapper {
            width: 100%;
            padding: 0.5rem;
          }
        }
      `}</style>
      <div className="question-wrapper">
        <div className="question-header-row">
          <img src={question} alt="question" className="question-image" />
          <div>
            <h2 className="question-heading">Interview Question Bank</h2>
            <p className="question-subtext">
              Switch between resources and common interview questions by category.
            </p>
          </div>
        </div>
        <div className="question-filter-row">
          <select
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All" style={{color: '#6c63ff'}}>All Categories</option>
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
      </div>
    </>
  );
};

export default QuestionBank;
