import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import './ResumePreview.css';

const ResumePreview = () => {
  const { state } = useLocation();
  const { formData } = state;
  const resumeRef = useRef();

  const downloadResume = () => {
    const element = resumeRef.current;
    html2pdf()
      .from(element)
      .save('resume.pdf');
  };

  return (
    <div className="resume-preview">
      <h1>Resume Preview</h1>
      <div ref={resumeRef} className="resume-content">
        <h2>Professional Summary</h2>
        <p>{formData.professionalSummary}</p>
        
        <h2>Education Qualifications</h2>
        <p>{formData.education}</p>
        
        <h2>Academic and Non-Academic Skills</h2>
        <p>{formData.skills}</p>
        
        <h2>Career Objective</h2>
        <p>{formData.careerObjective}</p>
        
        <h2>Experience and Internships</h2>
        <p>{formData.experience}</p>
        
        <h2>Skills and Achievements</h2>
        <p>{formData.achievements}</p>
      </div>
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
};

export default ResumePreview;
