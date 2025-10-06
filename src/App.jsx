import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import CategoryPage from './components/CategoryPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Profile />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 