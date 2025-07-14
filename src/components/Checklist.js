import React, { useState, useEffect } from 'react';

const defaultItems = [
  'Update your resume',
  'Write a draft SOP',
  'Shortlist target companies',
  'Prepare for HR questions',
  'Practice technical interviews',
  'Apply to internships',
  'Follow up with companies',
];

const Checklist = () => {
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('internhub_checklist');
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('internhub_checklist', JSON.stringify(checked));
  }, [checked]);

  const toggle = idx => {
    setChecked(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div style={{ margin: '2rem 0' }}>
      <h3>Internship Preparation Checklist</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {defaultItems.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 8 }}>
            <label>
              <input
                type="checkbox"
                checked={checked.includes(idx)}
                onChange={() => toggle(idx)}
                style={{ marginRight: 8 }}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist; 