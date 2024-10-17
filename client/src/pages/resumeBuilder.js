import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './resumeBuilder.css';
import Header from '../components/Header';

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    professionalSummary: '',
    education: '',
    skills: '',
    careerObjective: '',
    experience: '',
    achievements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/ResumePreview', { state: { formData } }); // Use navigate
  };

  return (
    <div className="resume-builder">
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Professional Summary:</label>
          <textarea name="professionalSummary" value={formData.professionalSummary} onChange={handleChange} />
        </div>
        <div>
          <label>Education Qualifications:</label>
          <textarea name="education" value={formData.education} onChange={handleChange} />
        </div>
        <div>
          <label>Academic and Non-Academic Skills:</label>
          <textarea name="skills" value={formData.skills} onChange={handleChange} />
        </div>
        <div>
          <label>Career Objective:</label>
          <textarea name="careerObjective" value={formData.careerObjective} onChange={handleChange} />
        </div>
        <div>
          <label>Experience and Internships:</label>
          <textarea name="experience" value={formData.experience} onChange={handleChange} />
        </div>
        <div>
          <label>Skills and Achievements:</label>
          <textarea name="achievements" value={formData.achievements} onChange={handleChange} />
        </div>
        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
