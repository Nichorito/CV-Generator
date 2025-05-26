import { useState } from 'react'
import './App.css'
import ContentMenu from './components/ContentMenu'
import CustomizeMenu from './components/CustomizeMenu'
import CVComponent from './components/CVComponent'

function App() {
  // State for tracking which view is active (content or customize)
  const [currentView, setCurrentView] = useState("content");


  // State for storing all personal information
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: ''
  });

  // Function to update a specific field in personal info
  // Takes field name and new value as parameters
  const updatePersonalInfo = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,  // Spread existing personal info
      [field]: value  // Update only the specified field
    }));
  };


  // State for storing array of education entries
  const [educationEntries, setEducationEntries] = useState([]);

  // Function to update entire education entries array
  const updateEducation = (entries) => {
    setEducationEntries(entries);
  };


  // State for storing array of experience entries
  const [experienceEntries, setExperienceEntries] = useState([]);

  // Function to update entire experience entries array
  const updateExperience = (entries) => {
    setExperienceEntries(entries);
  };


  // State for storing array of skills
  const [skills, setSkills] = useState([]);

  // Function to update skills array
  const updateSkills = (newSkills) => {
    setSkills(newSkills);
  };



  // Conditional rendering function for the left side menu
  const renderMenu = () => {
    switch(currentView) {
      case 'content':
        // Pass all necessary props to ContentMenu
        return <ContentMenu 
          personalInfo={personalInfo}
          updatePersonalInfo={updatePersonalInfo}
          educationEntries={educationEntries}
          updateEducation={updateEducation}
          experienceEntries={experienceEntries} 
          updateExperience={updateExperience}   
          skills={skills}                       
          updateSkills={updateSkills}           
        />
      case 'customize':
        return <CustomizeMenu />
      default:
        return <ContentMenu 
          personalInfo={personalInfo}
          updatePersonalInfo={updatePersonalInfo}
          educationEntries={educationEntries}
          updateEducation={updateEducation}
          experienceEntries={experienceEntries}
          updateExperience={updateExperience}
          skills={skills}
          updateSkills={updateSkills}
        />
    }
  }

  return (
    <>
      <div className="main">
        {/* Left side - Input Forms */}
        <div className="left-side">
          {/* Navigation buttons */}
          <div className="options">
              <div className="button-group">
                <button 
                    className={`button-load square-button ${currentView === 'content' ? 'active' : ''}`}
                    onClick={() => setCurrentView('content')}
                  >
                    <span>Content</span>
                </button>
                <button 
                    className={`button-load square-button ${currentView === 'customize' ? 'active' : ''}`}
                    onClick={() => setCurrentView('customize')}
                  >
                    <span>Customize</span>
                </button>
                <button className="button-load">
                  <span>Load</span>
                </button>
                <button className="button-clear"> 
                  <span>Clear</span>
                </button>
            </div>
          </div>
          {/* Render either Content or Customize menu */}
          {renderMenu()}
        </div>

        {/* Right side - CV Preview */}
        <div className="right-side">
          <CVComponent
            personalInfo={personalInfo}
            updatePersonalInfo={updatePersonalInfo}
            educationEntries={educationEntries}
            updateEducation={updateEducation}
            experienceEntries={experienceEntries} 
            updateExperience={updateExperience}   
            skills={skills}                       
            updateSkills={updateSkills} 
          />

         
        </div>
      </div>
    </>
  )
}

export default App
