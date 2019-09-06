import React from 'react';
import './App.css';
import Header from './components/header';
import WorkExperience from './components/workExrerience';
import SoftSkills from './components/softSkills';
function App() {
  return (
    <div className="page-contain App">
      <Header/>
      <WorkExperience/>
      <SoftSkills/>
    </div>
  );
}

export default App;
