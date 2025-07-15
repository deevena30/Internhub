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
        .container {
          background: linear-gradient(135deg,rgb(190, 199, 213),rgb(102, 211, 230));
          min-height: 100vh;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .toggle-buttons {
          margin-bottom: 2rem;
        }

        .toggle-buttons button {
          margin: 0 0.5rem;
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 8px;
          background-color: #007c91;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }

        .toggle-buttons button.active {
          background-color: #004d61;
        }

        .content-box {
          background: white;
          border-radius: 12px;
          padding: 2rem 2.5rem;
          max-width: 850px;
          width: 100%;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
        }

        .heading {
          text-align: center;
          font-size: 2rem;
          color: #004d61;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .section {
          margin-bottom: 2.5rem;
        }

        .section h3 {
          color: #007c91;
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .section ul {
          padding-left: 1.5rem;
        }

        .section li {
          font-size: 1rem;
          color: #333;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: start;
        }

        input[type="checkbox"] {
          margin-right: 0.75rem;
          margin-top: 0.2rem;
          transform: scale(1.2);
        }

        @media (min-width: 768px) {
          .container {
            margin-left: 240px; /* Match sidebar width */
            width: calc(100vw - 240px);
          }
        }
        @media (max-width: 768px) {
          .container {
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
          .content-box {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 1rem !important;
          }
        }
      `}</style>

      <div className="container">
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

        <div className="content-box">
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
      </div>
    </>
  );
}
