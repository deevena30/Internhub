import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ResumeBank from './pages/ResumeBank';
import Timeline from './pages/Timeline';
import QuestionBank from './pages/QuestionBank';
import Resources from './pages/Resources';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar (Navbar): Hidden on mobile */}
        <div className="hidden md:block fixed top-0 left-0 w-[240px] h-screen bg-white shadow-md z-20">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="w-full md:w-[calc(100vw-240px)] md:ml-[240px] p-6">

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resumes" element={<ResumeBank />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/questions" element={<QuestionBank />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
