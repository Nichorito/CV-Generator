import { useState } from 'react'
import './App.css'
import ContentMenu from './components/ContentMenu'
import CustomizeMenu from './components/CustomizeMenu'
import CVComponent from './components/CVComponent'

function App() {
  // State for tracking which view is active (content or customize)
  const [currentView, setCurrentView] = useState("content");

  // Initial personal information
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Nicholas Sheppard',
    email: 'nsheppard999@gmail.com',
    phone: '(705) 527-7180',
    location: 'Montreal, QC',
    website: 'linkedin.com/in/nichorito/'
  });

  // Initial education entries
  const [educationEntries, setEducationEntries] = useState([
    {
      id: 1,
      schoolName: 'Concordia University',
      degree: 'B.Sci in Computer Science',
      startDate: 'Sept 2024',
      endDate: 'April 2027',
      location: 'Montreal, QC'
    },
    {
      id: 2,
      schoolName: 'Dalhousie University',
      degree: 'B.Eng in Mechanical Engineering',
      startDate: 'Sept 2021',
      endDate: 'April 2023',
      location: 'Halifax, NS'
    }
  ]);

  // Initial experience entries
  const [experienceEntries, setExperienceEntries] = useState([
    {
      id: 1,
      Title: 'Project Manager',
      Company: '',
      startDate: '',
      endDate: '',
      location: '',
      additionalInfo: ''
    },
    {
      id: 2,
      Title: 'Electrician',
      Company: '',
      startDate: '',
      endDate: '',
      location: '',
      additionalInfo: ''
    }
  ]);

  // Add clear function
  const clearAllData = () => {
    setPersonalInfo({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      website: ''
    });
    setEducationEntries([]);
    setExperienceEntries([]);
    setSkills([]);
  };

  // State for storing array of skills
  const [skills, setSkills] = useState([]);

  // Function to update skills array
  const updateSkills = (newSkills) => {
    setSkills(newSkills);
  };

  // Function to update personal info
  const updatePersonalInfo = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Function to update education entries
  const updateEducation = (entries) => {
    setEducationEntries(entries);
  };

  // Function to update experience entries
  const updateExperience = (entries) => {
    setExperienceEntries(entries);
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
                <button 
                  className="button-clear"
                  onClick={clearAllData}
                > 
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
            educationEntries={educationEntries}
            experienceEntries={experienceEntries} 
            skills={skills}                       
            updateSkills={updateSkills} 
          />

         
        </div>
      </div>
    </>
  )
}

export default App
