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
      Company: 'Pomerleau Inc',
      startDate: 'April 2023',
      endDate: 'Sept 2023',
      location: 'Moncton, NB',
      additionalInfo: "• Assisted superintendents and engineers in day-to-day activities \n• Prepared subcontracts and scopes of work / specifications for tendering to subcontractors \n• Developed look ahead schedules and budget reports \n• Developed construction site policies"
    },
    {
      id: 2,
      Title: 'Electrician',
      Company: 'Netco Electric',
      startDate: 'Sept 2023',
      endDate: 'April 2024',
      location: 'Moncton, NB',
      additionalInfo: '• Reviewed blueprints and created riser diagrams for over 30 solid block walls in the detention area of a new RCMP building. Working closely with the masons to ensure that all outlets, lightswitches, data points, security systems, and fire alarm systems were installed at proper heights and distances \n• Installed and troubleshot various types of electrical systems and panels \n• Experience with electrical systems, blueprint/shop drawing review, planning, and conduit fitting'
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
  const [skills, setSkills] = useState([
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Node.js' },
    { id: 4, name: 'HTML' },
    { id: 5, name: 'CSS' },
    { id: 6, name: 'Python' },
    { id: 7, name: 'C#' },
    { id: 8, name: 'C' },
    { id: 9, name: 'FireCrawl API' },
    { id: 10, name: 'AWS' },
    { id: 11, name: 'Git' },
    { id: 15, name: 'YOLOv8' },
    { id: 16, name: 'Unity' },
    { id: 17, name: '3D Modelling' },
    { id: 18, name: 'Blender' },
  ]);

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
