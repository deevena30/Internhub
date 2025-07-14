import React from 'react';

const QuestionCard = ({ question, answer, category, className = '' }) => {
  return (
    <div className={`question-card ${className}`}>
      <p style={{ fontWeight: 'bold' }}>Q: {question}</p>
      <p style={{ whiteSpace: 'pre-line', marginTop: '0.5rem' }}>{answer}</p>
      {category && <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#555' }}>Field: {category}</p>}
    </div>
  );
};

export default QuestionCard; 