import React from 'react';
import './App.css';
import Header from './components/header';
import WorkExperience from './components/workExrerience';
import SoftSkills from './components/softSkills';
import Footer from './components/footer';
function App() {
  return (
    <div className="page-contain App">
      <Header/>
      <WorkExperience/>
      <SoftSkills/>
      <Footer/>
    </div>
  );
}

export default App;
