import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import question from '../assets/image-removebg-preview.png';
import questionBank from '../questionBank.json';

const QuestionBank = () => {
  const [activeTab, setActiveTab] = useState('questions');
  const [showITLinks, setShowITLinks] = useState(true);
  const [showDesignLinks, setShowDesignLinks] = useState(false);
  const [showFinanceLinks, setShowFinanceLinks] = useState(false);
  const [showCoreLinks, setShowCoreLinks] = useState(false);
  const [showAnalyticsLinks, setShowAnalyticsLinks] = useState(false);
  const [showQuantLinks, setShowQuantLinks] = useState(false);
  const [showProductLinks, setShowProductLinks] = useState(false);
  const [showConsultingLinks, setShowConsultingLinks] = useState(false);
  const [showFMCGLinks, setShowFMCGLinks] = useState(false);
  const [showStrategyLinks, setShowStrategyLinks] = useState(false);

  const categories = Object.keys(questionBank);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allQuestions = Object.entries(questionBank).flatMap(([category, qList]) =>
    qList.map((q) => ({ ...q, category }))
  );

  const filteredQuestions =
    selectedCategory === 'All'
      ? allQuestions
      : allQuestions.filter((q) => q.category === selectedCategory);

      const itTestLinks = [
        {
          name: 'TestDome',
          url: 'https://www.testdome.com/',
          summary: 'Timed tests in programming, databases, web dev, etc.',
        },
        {
          name: 'Mettl by Mercer',
          url: 'https://mettl.com/',
          summary: 'Industry-style assessments (used by companies for hiring)',
        },
        {
          name: 'DevSkiller',
          url: 'https://devskiller.com/',
          summary: 'Real-world IT tests (back-end, front-end, DB, QA, etc.)',
        },
        {
          name: 'Coding Ninjas Studio',
          url: 'https://www.naukri.com/code360/',
          summary: 'Mock tests, problem-solving, interview prep',
        },
      ];

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
        .tab-nav {
          display: flex;
          gap: 1.2rem;
          margin: 1.5rem 0;
          justify-content: center;
        }
        .tab-button {
          padding: 1.2rem 1.2rem;
          border-radius: 8px;
          border: none;
          background: white;
          color: var(--accent-green-dark);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        .tab-button.active {
          background: var(--accent-green-dark);
          color: white;
        }
        .tab-button:hover {
          background: var(--accent-orange);
          color: white;
        }
        .category-heading {
          font-size: 1.5rem;
          font-weight: 500;
          color: #f8f9fa;
          letter-spacing: -0.5px;
          margin-bottom: 1.2rem;
          position: relative;
          padding-bottom: 0.3rem;
          transition: color 1.25s cubic-bezier(.4,0,.2,1);
          text-shadow: 0 2px 8px rgba(44,34,59,0.12);
          cursor: pointer;
        }

        .category-heading::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 48px;
          height: 4px;
          background: linear-gradient(90deg, #44be7b, #ff6b00);
          border-radius: 2px;
          opacity: 0.85;
          transition: width 1.25s cubic-bezier(.4,0,.2,1), background 0.25s;
        }

        .category-heading:hover {
          
          text-shadow: 0 4px 16px rgba(68,190,123,0.12);
          transform: scale(1.05);
        }

        .category-heading:hover::after {
          width: 780px;
          background: linear-gradient(90deg, #ff6b00, #44be7b);
        }
        .arrow {
          transition: transform 0.3s ease;
        }
        .arrow.down {
          transform: rotate(90deg);
        }
        .test-link-card {
          background: var(--card-bg);
          border-left: 4px solid var(--accent-green);
          border-radius: var(--border-radius);
          padding: 1rem 1.5rem;
          box-shadow: var(--shadow-md);
          margin-bottom: 1rem;
          transition: var(--transition);
        }
        .test-link-card:hover {
          border-left-color: var(--accent-orange);
          box-shadow: var(--shadow-lg);
        }
        .test-link-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--accent-green-dark);
          text-decoration: none;
        }
        .test-link-summary {
          font-size: 0.95rem;
          color: #444;
          margin-top: 0.4rem;
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

        {/* Tabs */}
        <div className="tab-nav">
          <button
            className={`tab-button ${activeTab === 'questions' ? 'active' : ''}`}
            onClick={() => setActiveTab('questions')}
          >
            Question Bank
          </button>
          <button
            className={`tab-button ${activeTab === 'tests' ? 'active' : ''}`}
            onClick={() => setActiveTab('tests')}
          >
            Online Test Links
          </button>
        </div>

        {/* Question Bank Tab */}
        {activeTab === 'questions' && (
          <>
            <div className="question-filter-row">
              <select
                className="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All" style={{ color: '#6c63ff' }}>All Categories</option>
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

        {/* Online Test Links Tab */}
        {activeTab === 'tests' && (
  <div style={{ width: '100%', maxWidth: '800px' }}>
    {/* IT - Software */}
    <div className="category-heading" onClick={() => setShowITLinks(!showITLinks)}>
      <span className={`arrow ${showITLinks ? 'down' : ''}`}>▶</span>
      IT - Software
    </div>
    {showITLinks &&
      itTestLinks.map((link, idx) => (
        <div key={idx} className="test-link-card">
          <a
            href={link.url}
            className="test-link-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 {link.name}
          </a>
          <p className="test-link-summary">{link.summary}</p>
        </div>
      ))}

    {/* Design */}
    <div className="category-heading" onClick={() => setShowDesignLinks((prev) => !prev)}>
      <span className={`arrow ${showDesignLinks ? 'down' : ''}`}>▶</span>
      Design
    </div>
    {showDesignLinks &&
      [
        {
          name: 'Adobe Creative Skills Test',
          url: 'https://skillshop.exceedlms.com/student/catalog/list?category_ids=5381-adobe',
          summary: 'Free Adobe skill tests in Photoshop, Illustrator, etc.',
        },
        {
          name: 'Canva Design School',
          url: 'https://www.canva.com/designschool/courses/',
          summary: 'Interactive courses and quizzes on design principles and tools.',
        },
        {
          name: 'Designlab Test',
          url: 'https://designlab.com/',
          summary: 'Practical design challenges and UI/UX assessments.',
        },
      ].map((link, idx) => (
        <div key={`design-${idx}`} className="test-link-card">
          <a
            href={link.url}
            className="test-link-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 {link.name}
          </a>
          <p className="test-link-summary">{link.summary}</p>
        </div>
      ))}

    {/* Finance */}
    <div className="category-heading" onClick={() => setShowFinanceLinks((prev) => !prev)}>
      <span className={`arrow ${showFinanceLinks ? 'down' : ''}`}>▶</span>
      Finance
    </div>
    {showFinanceLinks &&
      [
        {
          name: 'Wall Street Mojo Quiz',
          url: 'https://www.wallstreetmojo.com/finance-quiz/',
          summary: 'Finance fundamentals quizzes: accounting, banking, etc.',
        },
        {
          name: 'Corporate Finance Institute (CFI)',
          url: 'https://courses.corporatefinanceinstitute.com/collections',
          summary: 'Certifications with finance assessments and skill checks.',
        },
        {
          name: 'EY Finance Test',
          url: 'https://www.ey.com/en_in/careers/virtual-experiences',
          summary: 'Practice simulations and financial tasks from EY.',
        },
      ].map((link, idx) => (
        <div key={`finance-${idx}`} className="test-link-card">
          <a
            href={link.url}
            className="test-link-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 {link.name}
          </a>
          <p className="test-link-summary">{link.summary}</p>
        </div>
      ))}

    {/* Core (Mechanical, Electrical, Civil) */}
    <div className="category-heading" onClick={() => setShowCoreLinks((prev) => !prev)}>
      <span className={`arrow ${showCoreLinks ? 'down' : ''}`}>▶</span>
      Core (Mechanical / Electrical / Civil)
    </div>
    {showCoreLinks &&
      [
        {
          name: 'Made Easy GATE Tests',
          url: 'https://www.madeeasy.in/OnlineTestSeries.aspx',
          summary: 'Subject-wise and full-length tests for core engineering branches.',
        },
        {
          name: 'NPTEL Mock Quizzes',
          url: 'https://swayam.gov.in/',
          summary: 'Engineering course assessments and quizzes by IITs.',
        },
        {
          name: 'ISRO / DRDO Prep - Gradeup',
          url: 'https://byjusexamprep.com/',
          summary: 'Mock tests for core govt. jobs in Mechanical, Electrical, Civil.',
        },
      ].map((link, idx) => (
        <div key={`core-${idx}`} className="test-link-card">
          <a
            href={link.url}
            className="test-link-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 {link.name}
          </a>
          <p className="test-link-summary">{link.summary}</p>
        </div>
      ))}
      {/* Analytics */}
<div className="category-heading" onClick={() => setShowAnalyticsLinks(prev => !prev)}>
  <span className={`arrow ${showAnalyticsLinks ? 'down' : ''}`}>▶</span>
  Analytics
</div>
{showAnalyticsLinks &&
  [
    {
      name: 'Kaggle – Analytics Competitions',
      url: 'https://www.kaggle.com/competitions',
      summary: 'Real-world data analytics competitions for all levels.',
    },
    {
      name: 'Analytics Vidhya – Practice Tests',
      url: 'https://datahack.analyticsvidhya.com/',
      summary: 'Data science, ML, SQL tests & case studies.',
    },
    {
      name: 'HackerRank – Data Analytics',
      url: 'https://www.hackerrank.com/skills-directory/data-analytics_basic',
      summary: 'SQL, statistics, and Excel tests in analytics domain.',
    },
  ].map((link, idx) => (
    <div key={`analytics-${idx}`} className="test-link-card">
      <a href={link.url} className="test-link-title" target="_blank" rel="noopener noreferrer">
        🔗 {link.name}
      </a>
      <p className="test-link-summary">{link.summary}</p>
    </div>
  ))
}
<div className="category-heading" onClick={() => setShowConsultingLinks(prev => !prev)}>
  <span className={`arrow ${showConsultingLinks ? 'down' : ''}`}>▶</span>
  Consulting
</div>
{showConsultingLinks &&
  [
    {
      name: 'PrepLounge – Case Interview Practice',
      url: 'https://www.preplounge.com/en/',
      summary: 'Live case practice platform for consulting interviews.',
    },
    {
      name: 'CaseCoach',
      url: 'https://casecoach.com/',
      summary: 'Case interview prep platform used by top consulting firms.',
    },
    {
      name: 'Victor Cheng’s Case Interview',
      url: 'https://www.caseinterview.com/',
      summary: 'Free frameworks, LOMS, and real consulting case walkthroughs.',
    },
  ].map((link, idx) => (
    <div key={`consulting-${idx}`} className="test-link-card">
      <a href={link.url} className="test-link-title" target="_blank" rel="noopener noreferrer">
        🔗 {link.name}
      </a>
      <p className="test-link-summary">{link.summary}</p>
    </div>
  ))
}
<div className="category-heading" onClick={() => setShowFMCGLinks(prev => !prev)}>
  <span className={`arrow ${showFMCGLinks ? 'down' : ''}`}>▶</span>
  FMCG
</div>
{showFMCGLinks &&
  [
    {
      name: 'Unilever Future Leaders Practice',
      url: 'https://www.unilever.com/careers/graduates/uflp/',
      summary: 'Simulations and tests from Unilever’s hiring process.',
    },
    {
      name: 'P&G Virtual Job Simulation',
      url: 'https://www.pgcareers.com/assessment-overview',
      summary: 'Online assessments including logical reasoning & business cases.',
    },
    {
      name: 'Nestlé Case Study Challenges',
      url: 'https://www.nestle.com/jobs/graduates-entry-level',
      summary: 'Explore real Nestlé brand case studies & test your skills.',
    },
  ].map((link, idx) => (
    <div key={`fmcg-${idx}`} className="test-link-card">
      <a href={link.url} className="test-link-title" target="_blank" rel="noopener noreferrer">
        🔗 {link.name}
      </a>
      <p className="test-link-summary">{link.summary}</p>
    </div>
  ))
}
<div className="category-heading" onClick={() => setShowStrategyLinks(prev => !prev)}>
  <span className={`arrow ${showStrategyLinks ? 'down' : ''}`}>▶</span>
  Strategy
</div>
{showStrategyLinks &&
  [
    {
      name: 'Strategy& Interview Guide',
      url: 'https://www.strategyand.pwc.com/gx/en/careers/campus/interview-prep.html',
      summary: 'Interview prep from PwC’s Strategy& arm with sample cases.',
    },
    {
      name: 'Roland Berger Case Study Training',
      url: 'https://www.rolandberger.com/en/Join-Our-Team/Interview-Process.html',
      summary: 'Business strategy case walkthroughs and examples.',
    },
    {
      name: 'IGotAnOffer – Strategy Roles',
      url: 'https://igotanoffer.com/blogs/mckinsey-case-interview-blog',
      summary: 'Crack strategy interviews with case prep and frameworks.',
    },
  ].map((link, idx) => (
    <div key={`strategy-${idx}`} className="test-link-card">
      <a href={link.url} className="test-link-title" target="_blank" rel="noopener noreferrer">
        🔗 {link.name}
      </a>
      <p className="test-link-summary">{link.summary}</p>
    </div>
  ))
}


{/* Quant */}
<div className="category-heading" onClick={() => setShowQuantLinks(prev => !prev)}>
  <span className={`arrow ${showQuantLinks ? 'down' : ''}`}>▶</span>
  Quant
</div>
{showQuantLinks &&
  [
    {
      name: 'iQuanta – Free Quizzes',
      url: 'https://www.iquanta.in/free-mock-tests/',
      summary: 'Aptitude, DILR, and Quant mocks for placements and CAT.',
    },
    {
      name: 'TCYOnline – Quantitative Aptitude',
      url: 'https://www.tcyonline.com/tests/quantitative-aptitude',
      summary: 'Hundreds of topic-wise aptitude quizzes.',
    },
    {
      name: 'GeeksforGeeks – Aptitude Quizzes',
      url: 'https://www.geeksforgeeks.org/tag/quantitative-aptitude/',
      summary: 'Quant + logical reasoning for technical and non-tech roles.',
    },
  ].map((link, idx) => (
    <div key={`quant-${idx}`} className="test-link-card">
      <a href={link.url} className="test-link-title" target="_blank" rel="noopener noreferrer">
        🔗 {link.name}
      </a>
      <p className="test-link-summary">{link.summary}</p>
    </div>
  ))
}

{/* Product Management */}
<div className="category-heading" onClick={() => setShowProductLinks(prev => !prev)}>
  <span className={`arrow ${showProductLinks ? 'down' : ''}`}>▶</span>
  Product
</div>
{showProductLinks &&
  [
    {
      name: 'Upraised Product Teardown',
      url: 'https://www.upraised.co/teardowns',
      summary: 'Practice product thinking through teardown challenges.',
    },
    {
      name: 'PM School by Rocketblocks',
      url: 'https://www.rocketblocks.me/pm-interview-prep.php',
      summary: 'Frameworks, mock PM interviews, quizzes.',
    },
    {
      name: 'Exponents PM Quizzes',
      url: 'https://www.tryexponent.com/product-management-interview-questions',
      summary: 'Product strategy, execution, and estimation questions.',
    },
  ].map((link, idx) => (
    <div key={`product-${idx}`} className="test-link-card">
      <a href={link.url} className="test-link-title" target="_blank" rel="noopener noreferrer">
        🔗 {link.name}
      </a>
      <p className="test-link-summary">{link.summary}</p>
    </div>
  ))
}
  </div>
)}


      </div>
    </>
  );
};

export default QuestionBank;
