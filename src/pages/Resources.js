import React from 'react';

export default function Resources() {
  return (
    <>
      <style>{`
        .resource-wrapper {
          min-height: 100vh;
          background: linear-gradient(100deg, rgb(58, 136, 215) 0%, rgb(167, 104, 238) 100%);
          padding: 2.5rem 1.5rem;
          transition: margin-left 0.3s;
          margin-left: 0;
          font-family: Arial, sans-serif;
          color: #2C2C2C;
        }
        .body-sidebar-open .resource-wrapper {
          margin-left: 240px;
        }
        @media (max-width: 900px) {
          .body-sidebar-open .resource-wrapper {
            margin-left: 0;
          }
        }
        .resource-heading {
          color: #fff;
          font-size: 2.7rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          text-align: center;
          letter-spacing: 1px;
          text-shadow: 0 10px 8px rgba(20, 19, 18, 0.2);
        }
        .resource-section {
          width: 100%;
        }
        .resource-section details {
          background: rgba(255,255,255,0.95);
          border-left: 4px solid rgb(98, 194, 130);
          border-radius: 16px;
          padding: 1.5rem 1.5rem 1rem 1.5rem;
          margin: 1.5rem 0;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          color: #444;
          transition: all 0.3s ease;
        }
        .resource-section details:hover {
          background: rgb(206, 246, 219);
          transform: scale(1.01);
          box-shadow: 0 2px 10px rgba(255,107,0,0.08);
        }
        .resource-section summary {
          cursor: pointer;
          font-size: 1.1rem;
          color: #D84315;
          font-weight: 600;
        }
        .resource-section p {
          margin-left: 1.5rem;
          font-size: 0.98rem;
          color: #444;
        }
        .resource-section a {
          color: #444;
          text-decoration: underline;
          font-weight: 500;
        }
        .resource-section a:hover {
          color: #FF5722;
        }
        @media (max-width: 768px) {
          .resource-wrapper {
            padding: 1.5rem 1rem;
          }
          .resource-heading {
            font-size: 1.5rem;
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .resource-wrapper {
            width: 100%;
            padding: 0.5rem;
          }
        }
      `}</style>
      <div className="resource-wrapper">
        <h2 className="resource-heading">Resources</h2>
        <div className="resource-section">
          <div style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: '#e0e7ff', textShadow: '0 1px 4px rgba(58,136,215,0.10)' }}>
            This resource is prepared by Career Cell, IIT Bombay{' '}
            <a
              href="https://docs.google.com/document/d/1yp6UlGVGSvgXZv1ma7PN86jo3WvnTA46QclH7Ieo4_s/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold' }}
            >
              click here
            </a>
          </div>
          {/* --- IT-Software --- */}
          <details>
            <summary> IT-Software</summary>
            <p><a href="https://github.com/blind75/Blind75" target="_blank" rel="noopener noreferrer">Blind 75 DSA – Most asked coding questions for interviews</a></p>
            <p><a href="https://leetcode.com/problemset/top-interview-questions/" target="_blank" rel="noopener noreferrer">LeetCode – Top Interview Questions Practice Set</a></p>
            <p><a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" target="_blank" rel="noopener noreferrer">Striver’s SDE Sheet – Roadmap for coding interviews</a></p>
            <p><a href="https://www.youtube.com/c/GateSmasher" target="_blank" rel="noopener noreferrer">Gate Smashers – DBMS, OS, OOP, CN simplified</a></p>
            <p><a href="https://github.com/donnemartin/system-design-primer" target="_blank" rel="noopener noreferrer">System Design Primer – Fundamentals of scalable systems</a></p>
            <p><a href="https://github.com/topics/student-projects" target="_blank" rel="noopener noreferrer">GitHub – Sample projects for students</a></p>
          </details>
          {/* --- Finance --- */}
          <details>
            <summary>Finance</summary>
            <p><a href="https://www.investopedia.com" target="_blank" rel="noopener noreferrer">Investopedia – Learn financial concepts, terms, and ratios</a></p>
            <p><a href="https://courses.corporatefinanceinstitute.com" target="_blank" rel="noopener noreferrer">CFI – Finance modeling, valuation & Excel certifications</a></p>
            <p><a href="https://www.coursera.org/learn/financial-markets-global" target="_blank" rel="noopener noreferrer">Yale’s Financial Markets (Coursera) – Understand global markets</a></p>
            <p><a href="https://www.wallstreetprep.com/self-study-programs/excel-crash-course/" target="_blank" rel="noopener noreferrer">Wall Street Prep – Excel crash course for finance</a></p>
            <p><a href="https://www.macabacus.com/" target="_blank" rel="noopener noreferrer">Macabacus – Excel/PowerPoint templates and finance tools</a></p>
            <p><a href="https://breakingintowallstreet.com" target="_blank" rel="noopener noreferrer">BIWS – Training for valuation, M&A, and DCF modeling</a></p>
            <p><a href="https://pages.stern.nyu.edu/~adamodar/" target="_blank" rel="noopener noreferrer">Aswath Damodaran’s Classes – Free valuation lectures & tools</a></p>
            <p><a href="https://mergersandinquisitions.com/" target="_blank" rel="noopener noreferrer">M&I – Investment banking interview prep and resume tips</a></p>
            <p><a href="https://www.vault.com/" target="_blank" rel="noopener noreferrer">Vault – Finance firm guides & interview questions</a></p>
            <p><a href="https://www.wallstreetoasis.com/" target="_blank" rel="noopener noreferrer">WSO – Real intern interview experiences and advice</a></p>
            <p><a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer">Glassdoor – Search company-specific finance interview Qs</a></p>
          </details>
          {/* --- Design --- */}
          <details>
            <summary>Design</summary>
            <p><a href="https://www.bestfolios.com/" target="_blank" rel="noopener noreferrer">Bestfolios – Portfolio examples from top design interns</a></p>
            <p><a href="https://uxfol.io/" target="_blank" rel="noopener noreferrer">UXfolio – Build UX case studies with portfolio templates</a></p>
            <p><a href="https://www.notion.so/templates/portfolio" target="_blank" rel="noopener noreferrer">Notion Portfolio Templates – Create a quick clean showcase</a></p>
            <p><a href="https://www.figma.com/community/file/1080562762323470121" target="_blank" rel="noopener noreferrer">Figma Design Interview Prep File – Product thinking, critique, whiteboarding</a></p>
            <p><a href="https://refactoringui.com/" target="_blank" rel="noopener noreferrer">Refactoring UI – Design explanation frameworks</a></p>
            <p><a href="https://sharpen.design/" target="_blank" rel="noopener noreferrer">Sharpen – Random UX/UI challenge generator</a></p>
            <p><a href="https://uxtools.co/challenges" target="_blank" rel="noopener noreferrer">UXTools Challenge – Simulated interview-level challenges</a></p>
            <p><a href="https://www.designerhangout.co/" target="_blank" rel="noopener noreferrer">Designer Hangout – Intern experience sharing & Slack group</a></p>
            <p><a href="https://medium.com/tag/design-intern" target="_blank" rel="noopener noreferrer">Medium – Real design internship experience stories</a></p>
          </details>
          {/* --- Analytics --- */}
          <details>
            <summary>Analytics</summary>
            <p><a href="https://www.interviewquery.com/" target="_blank" rel="noopener noreferrer">Interview Query – Real analytics interview Qs (SQL, stats, case-based)</a></p>
            <p><a href="https://www.glassdoor.com/Interview/analytics-intern-interview-questions-SRCH_KO0,16.htm" target="_blank" rel="noopener noreferrer">Glassdoor – Analyst intern interview Qs (company-wise)</a></p>
            <p><a href="https://mode.com/sql-tutorial/" target="_blank" rel="noopener noreferrer">Mode Analytics SQL Tutorial – Practical SQL for analysts</a></p>
            <p><a href="https://www.stratascratch.com/" target="_blank" rel="noopener noreferrer">StrataScratch – SQL/Python problems from real analytics roles</a></p>
            <p><a href="https://datalemur.com/" target="_blank" rel="noopener noreferrer">DataLemur – Short interview-style SQL/statistics problems</a></p>
            <p><a href="https://www.analyticsvidhya.com/blog/category/case-study/" target="_blank" rel="noopener noreferrer">Analytics Vidhya – Case study archive for business problem solving</a></p>
            <p><a href="https://www.mckinsey.com/careers/interviewing" target="_blank" rel="noopener noreferrer">McKinsey Case Library – Improve your structured thinking</a></p>
            <p><a href="https://www.notion.so/Complete-Data-Science-Portfolio-Guide-1ec56b621e1f4ac0a5d1e313e0e9f1bb" target="_blank" rel="noopener noreferrer">Notion – Data Science/Analytics Portfolio Guide</a></p>
            <p><a href="https://www.mavenanalytics.io/blog/data-analyst-resume-tips" target="_blank" rel="noopener noreferrer">Maven Analytics – Resume tips tailored to analyst roles</a></p>
          </details>
          {/* --- Quant --- */}
          <details>
            <summary>Quant</summary>
            <p><a href="https://www.amazon.in/Heard-Street-Quantitative-Interview-Preparation/dp/1503242538" target="_blank" rel="noopener noreferrer">Heard on the Street – Classic quant interview book (math, puzzles, probability)</a></p>
            <p><a href="https://www.glassdoor.com/Interview/quant-interview-questions-SRCH_KO0,5.htm" target="_blank" rel="noopener noreferrer">Glassdoor – Real quant interview questions (Jane Street, DE Shaw, etc.)</a></p>
            <p><a href="https://leetcode.com/tag/probability-and-statistics/" target="_blank" rel="noopener noreferrer">LeetCode – Math & probability problems for coding rounds</a></p>
            <p><a href="https://projecteuler.net/" target="_blank" rel="noopener noreferrer">Project Euler – Programming-based math challenges</a></p>
            <p><a href="https://www.math.columbia.edu/~woit/quant.pdf" target="_blank" rel="noopener noreferrer">Columbia – Quant puzzles PDF (logic + math)</a></p>
            <p><a href="https://mfe.baruch.cuny.edu/wp-content/uploads/2020/02/Baruch-MFE-Quant-Interview-Questions.pdf" target="_blank" rel="noopener noreferrer">Baruch MFE – Quant interview Qs PDF collection</a></p>
            <p><a href="https://www.quantnet.com/mfe-programs-ranking/" target="_blank" rel="noopener noreferrer">QuantNet Guide – Programs & skill expectations</a></p>
            <p><a href="https://www.reddit.com/r/quant/comments/ehnt3j/quant_resume_advice/" target="_blank" rel="noopener noreferrer">r/quant – Resume tips and insights from quant community</a></p>
          </details>
          {/* --- Product & Strategy --- */}
          <details>
            <summary>Product & Strategy</summary>
            <p><a href="https://www.amazon.in/Decode-Conquer-Answers-Product-Management/dp/0998120428" target="_blank" rel="noopener noreferrer">Decode and Conquer – PM interview framework book (CIRCLES, metrics, tradeoffs)</a></p>
            <p><a href="https://www.tryexponent.com/pm" target="_blank" rel="noopener noreferrer">Exponent – PM mock interviews and real product questions</a></p>
            <p><a href="https://productalliance.com/blogs/resources" target="_blank" rel="noopener noreferrer">Product Alliance – Free PM interview guide (product sense, execution)</a></p>
            <p><a href="https://docs.google.com/document/d/1dlTEt6FgDnKLTG9H9HBOucYIazZdvMgxPIyLD_Ww6rY/edit" target="_blank" rel="noopener noreferrer">Lewis Lin’s PM Interview Cheat Sheet – Covers product, tech, metrics, and strategy</a></p>
            <p><a href="https://www.amazon.in/Case-Interview-Secrets-Consulting-Interview/dp/0984183523" target="_blank" rel="noopener noreferrer">Case Interview Secrets by Victor Cheng – Strategy & business case prep</a></p>
            <p><a href="https://www.craftingcases.com/" target="_blank" rel="noopener noreferrer">Crafting Cases – Strategy case studies with breakdowns</a></p>
            <p><a href="https://www.preplounge.com/" target="_blank" rel="noopener noreferrer">PrepLounge – Peer case practice + strategy case library</a></p>
            <p><a href="https://www.rocketblocks.me/" target="_blank" rel="noopener noreferrer">RocketBlocks – Strategy, PM & consulting drills</a></p>
            <p><a href="https://igotanoffer.com/pages/interview-preparation" target="_blank" rel="noopener noreferrer">IGotAnOffer – Frameworks for PM, strategy & product interviews</a></p>
          </details>
          {/* --- Consulting --- */}
          <details>
            <summary>Consulting</summary>
            <p><a href="https://www.amazon.in/Case-Interview-Secrets-Consulting-Interview/dp/0984183523" target="_blank" rel="noopener noreferrer">Case Interview Secrets by Victor Cheng – Best book for case frameworks and logic</a></p>
            <p><a href="https://www.amazon.in/Crack-Case-System-Complete-Interviews/dp/0974442844" target="_blank" rel="noopener noreferrer">Crack the Case System by David Ohrvall – Step-by-step approach to handling cases</a></p>
            <p><a href="https://www.amazon.in/Case-Point-Complete-Interview-Preparation/dp/0986370746" target="_blank" rel="noopener noreferrer">Case in Point by Marc Cosentino – Standard frameworks for interview cases</a></p>
            <p><a href="https://www.preplounge.com" target="_blank" rel="noopener noreferrer">PrepLounge – Large case library + peer case practice platform</a></p>
            <p><a href="https://www.craftingcases.com" target="_blank" rel="noopener noreferrer">Crafting Cases – Advanced strategy and profitability case breakdowns</a></p>
            <p><a href="https://casecoach.com" target="_blank" rel="noopener noreferrer">CaseCoach – Complete McKinsey-style case and fit prep</a></p>
            <p><a href="https://managementconsulted.com" target="_blank" rel="noopener noreferrer">Management Consulted – Company-specific guides and case banks (free & paid)</a></p>
            <p><a href="https://www.caseinterview.com/case-interview" target="_blank" rel="noopener noreferrer">Victor Cheng Free Case Interview Videos – Explains MECE, math, frameworks</a></p>
            <p><a href="https://igotanoffer.com/blogs/mckinsey-case-interview-blog/resume-for-consulting" target="_blank" rel="noopener noreferrer">Consulting Resume & Cover Letter Guide – For MBB/Kearney/ATK roles</a></p>
          </details>
          {/* --- FMCG --- */}
          <details>
            <summary>FMCG</summary>
            <p><a href="https://unstop.com/competitions" target="_blank" rel="noopener noreferrer">Unstop (Dare2Compete) – Past case studies from HUL, Nestlé, Reckitt, etc.</a></p>
            <p><a href="https://www.youtube.com/@Marketing360in" target="_blank" rel="noopener noreferrer">Marketing360 (YouTube) – Brand strategy breakdowns and marketing concepts</a></p>
            <p><a href="https://managementconsulted.com/brand-manager-interview/" target="_blank" rel="noopener noreferrer">Brand Manager Case Interview Guide – Role-based FMCG interview prep</a></p>
            <p><a href="https://insideiim.com/interviews/fmcg" target="_blank" rel="noopener noreferrer">InsideIIM – FMCG interview experiences from IIMs, IITs, and more</a></p>
            <p><a href="https://www.vault.com" target="_blank" rel="noopener noreferrer">Vault Guide to Top Consumer Product Companies – Company overviews & values</a></p>
            <p><a href="https://www.instagram.com/madovermarketing/" target="_blank" rel="noopener noreferrer">Mad Over Marketing (MOM) – Branding, ads, and consumer insight examples</a></p>
            <p><a href="https://tbcy.in" target="_blank" rel="noopener noreferrer">The Brand Called You – Podcast with top FMCG leaders</a></p>
          </details>
          {/* --- Core --- */}
          <details>
            <summary>Core</summary>
            <p><a href="https://www.madeeasy.in" target="_blank" rel="noopener noreferrer">Made Easy Notes – Quick revision PDFs for core subjects (Thermo, SOM, Circuits, etc.)</a></p>
            <p><a href="https://practice.geeksforgeeks.org/explore" target="_blank" rel="noopener noreferrer">GeeksforGeeks – Core subject problems for Mech, EEE, Civil, ECE</a></p>
            <p><a href="https://gateoverflow.in" target="_blank" rel="noopener noreferrer">GATE Overflow – Topic-wise previous year technical questions</a></p>
            <p><a href="https://insideiim.com/interviews/core" target="_blank" rel="noopener noreferrer">InsideIIM – Core internship experiences from IITs (Tata Steel, L&T, DRDO)</a></p>
            <p><a href="https://unstop.com/competitions" target="_blank" rel="noopener noreferrer">Unstop – Core domain challenges and case competitions</a></p>
            <p><a href="https://www.careers360.com" target="_blank" rel="noopener noreferrer">Careers360 – Resume and HR preparation for core internships</a></p>
          </details>
        </div>
      </div>
    </>
  );
} 