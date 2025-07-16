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
        :root {
          --primary-color: #4a6bff;
          --secondary-color: #8e54e9;
          --accent-green: #44be7b;
          --accent-green-dark: #42a351;
          --accent-orange: #ff6b00;
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
        .question-wrapper {
          min-height: 100vh;
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
          max-width: 800px;
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
          color: var(--text-light);
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          text-align: left;
          letter-spacing: -0.5px;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .question-subtext {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.9);
          text-align: left;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .question-filter-row {
          width: 100%;
          max-width: 800px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1.5rem 0 1.5rem 0;
        }
        .category-select {
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          border: 1.5px solid var(--accent-green);
          font-size: 1rem;
          background: #fff;
          color: var(--accent-green-dark);
          box-shadow: 0 2px 8px rgba(68,190,123,0.08);
          transition: var(--transition);
        }
        .category-select:focus {
          border: 1.5px solid var(--accent-orange);
          color: var(--accent-orange);
          outline: none;
        }
        .question-list {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .question-card {
          background: var(--card-bg);
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-md);
          padding: 2rem 1.5rem;
          border-left: 4px solid var(--accent-green);
          color: var(--text-dark);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }
        .question-card:hover {
          box-shadow: 0 8px 24px rgba(255,107,0,0.13);
          border-left: 4px solid var(--accent-orange);
          transform: translateY(-4px) scale(1.01);
        }
        .no-questions {
          text-align: center;
          background: var(--card-bg);
          padding: 2.5rem 1.5rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow-sm);
          color: var(--accent-green-dark);
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .question-wrapper {
            padding: 1.5rem 1rem;
          }
          .question-heading {
            font-size: 1.5rem;
          }
          .question-list {
            gap: 0.7rem;
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
