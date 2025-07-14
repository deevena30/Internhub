import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ResumeBank from './pages/ResumeBank';
import Timeline from './pages/Timeline';
import QuestionBank from './pages/QuestionBank';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resumes" element={<ResumeBank />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/questions" element={<QuestionBank />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
