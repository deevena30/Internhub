import React, { useState } from 'react';

const timelineData = [
  {
    title: '3–6 Months Before',
    tasks: [
      'Self-Reflection: Identify your skills, interests, and career goals to narrow down your internship search.',
      'Research: Explore different industries, companies, and specific roles that align with your interests.',
      'Networking: Connect with professionals in your field of interest through informational interviews and career fairs.',
      'Resume/Cover Letter: Create or update your resume and cover letter, tailoring them to specific internship opportunities.',
    ],
  },
  {
    title: '1–2 Months Before',
    tasks: [
      'Application Submission: Apply for internships through platforms like Handshake, LinkedIn, and company websites.',
      'Interview Preparation: Practice common interview questions, research the company, and prepare thoughtful questions.',
      'Follow-up: Send thank-you notes after interviews and follow up on applications.',
    ],
  },
  {
    title: 'During Internship',
    tasks: [
      'Onboarding: Understand your role, responsibilities, and expectations, and participate in training.',
      'Performance: Seek feedback regularly, ask questions, and demonstrate a proactive attitude.',
      'Networking: Connect with team members, attend company events, and build professional relationships.',
    ],
  },
  {
    title: 'After Internship',
    tasks: [
      'Feedback: Provide feedback to the company and request a letter of recommendation.',
      'Reflection: Reflect on your learning and update your resume with new skills and experiences.',
    ],
  },
];

const checklistData = {
  'Self-Assessment': [
    'Identify your skills, interests, and values.',
    'Determine your career goals and preferred work environment.',
  ],
  Research: [
    'Research industries and companies aligned with your interests.',
    'Understand company culture, mission, and values.',
    'Explore specific roles and responsibilities within the internship.',
  ],
  Application: [
    'Tailor your resume and cover letter for each opportunity.',
    'Prepare a strong portfolio of your work.',
    'Gather letters of recommendation.',
    'Submit applications before deadlines.',
  ],
  Interview: [
    'Practice common questions using the STAR method.',
    'Research the company and prepare insightful questions.',
    'Dress professionally and arrive on time.',
    'Send thank-you notes after the interview.',
  ],
  Onboarding: [
    'Understand your role and expectations.',
    'Participate in all training and onboarding sessions.',
  ],
  Performance: [
    'Seek regular feedback from your supervisor.',
    'Ask questions and participate in projects.',
    'Complete tasks and deliverables on time.',
  ],
  Networking: [
    'Connect with team members and other professionals.',
    'Attend company events and participate in networking.',
  ],
  'Post-Internship': [
    'Request a letter of recommendation.',
    'Provide feedback on your experience.',
    'Update your resume with new skills and accomplishments.',
  ],
};

export default function InternshipPlanner() {
  const [view, setView] = useState('timeline');
  const [checked, setChecked] = useState({});

  const toggleCheck = (section, index) => {
    const key = `${section}-${index}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <style>{`
        .timeline-wrapper {
          min-height: 100vh;
          background: linear-gradient(100deg, rgb(58, 136, 215) 0%, rgb(167, 104, 238) 100%);
          padding: 2.5rem 1.5rem;
          transition: margin-left 0.3s;
          margin-left: 0;
          font-family: Arial, sans-serif;
          color: #2C2C2C;
        }
        .body-sidebar-open .timeline-wrapper {
          margin-left: 240px;
        }
        @media (max-width: 900px) {
          .body-sidebar-open .timeline-wrapper {
            margin-left: 0;
          }
        }
        .toggle-buttons {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .toggle-buttons button {
          padding: 0.75rem 1.7rem;
          border-radius: 8px;
          background: linear-gradient(90deg,rgb(68, 190, 123),rgb(66, 163, 81));
          color: white;
          font-weight: 600;
          font-size: 1.08rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border: none;
          transition: background 0.3s, box-shadow 0.2s, transform 0.2s;
        }
        .toggle-buttons button.active, .toggle-buttons button:hover {
          background: linear-gradient(90deg, #FF6B00, #FFA000);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          transform: translateY(-2px) scale(1.04);
        }
        .heading {
          text-align: center;
          font-size: 2.7rem;
          color: #fff;
          font-weight: 900;
          margin-bottom: 2rem;
          letter-spacing: 1px;
          text-shadow: 0 10px 8px rgba(20, 19, 18, 0.2);
        }
        .section {
          margin-bottom: 2.5rem;
          background: rgba(255,255,255,0.95);
          border-left: 4px solid #FF6B00;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          padding: 2rem 1.5rem;
        }
        .section h3 {
          color: #D84315;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .section ul {
          padding-left: 1.2rem;
          color: #444;
          font-size: 1.05rem;
        }
        .section li {
          font-size: 1.05rem;
          color: #444;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: start;
        }
        input[type="checkbox"] {
          margin-right: 0.75rem;
          margin-top: 0.2rem;
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .timeline-wrapper {
            padding: 1.5rem 0.7rem;
          }
          .heading {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .timeline-wrapper {
            width: 100%;
            padding: 0.5rem;
          }
        }
      `}</style>
      <div className="timeline-wrapper">
        <div className="toggle-buttons">
          <button
            className={view === 'timeline' ? 'active' : ''}
            onClick={() => setView('timeline')}
          >
            View Timeline
          </button>
          <button
            className={view === 'checklist' ? 'active' : ''}
            onClick={() => setView('checklist')}
          >
            View Checklist
          </button>
        </div>
        {view === 'timeline' ? (
          <>
            <h2 className="heading">Internship Preparation Timeline</h2>
            {timelineData.map((phase, idx) => (
              <div className="section" key={idx}>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : (
          <>
            <h2 className="heading">Internship Preparation Checklist</h2>
            {Object.entries(checklistData).map(([section, tasks], idx) => (
              <div className="section" key={idx}>
                <h3>{section}</h3>
                <ul>
                  {tasks.map((task, i) => {
                    const key = `${section}-${i}`;
                    return (
                      <li key={i}>
                        <input
                          type="checkbox"
                          checked={checked[key] || false}
                          onChange={() => toggleCheck(section, i)}
                        />
                        {task}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
