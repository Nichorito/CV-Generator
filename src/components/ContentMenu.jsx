import { useState } from "react";
import "./content.css";

export default function ContentMenu({ 
  personalInfo, 
  updatePersonalInfo, 
  educationEntries, 
  updateEducation, 
  experienceEntries,
  updateExperience,
  skills,
  updateSkills
}) {
  const [openSections, setOpenSections] = useState(["personal"]);

  // Function to toggle the visibility of sections
  // It adds the section to openSections if it's not there, or removes it if it is
  const toggleSection = (section) => {
    setOpenSections(prevSections => 
      prevSections.includes(section)
        ? prevSections.filter(s => s !== section)
        : [...prevSections, section]
    );
  };

  return (
    <div className="information">
      {/*PERSONAL SECTION*/}
      <div className="container">
        <h2 
          onClick={() => toggleSection("personal")}
          className="section-header"
        >
          Personal Information
          <span className="toggle-icon">{openSections.includes("personal") ? "−" : "+"}</span>
        </h2>
        {openSections.includes("personal") && <PersonalInfo 
          personalInfo={personalInfo} 
          updatePersonalInfo={updatePersonalInfo} 
        />}
      </div>

      {/*EDUCTION SECTION*/}
      <div className="container">
        <h2 onClick={() => toggleSection("education")} className="section-header">
          Education
          <span className="toggle-icon">{openSections.includes("education") ? "−" : "+"}</span>
        </h2>
        {openSections.includes("education") && (
          <EducationInfo 
            educationEntries={educationEntries}
            updateEducation={updateEducation}
          />
        )}
      </div>

      {/*EXPERIENCE SECTION*/}
      <div className="container">
        <h2 
          onClick={() => toggleSection("experience")}
          className="section-header"
        >
          Experience
          <span className="toggle-icon">{openSections.includes("experience") ? "−" : "+"}</span>
        </h2>
        {openSections.includes("experience") && <ExperienceInfo 
          experienceEntries={experienceEntries}
          updateExperience={updateExperience}
        />}
      </div>

      {/*SKILLS SECTION*/}
      <div className="container">
        <h2 
          onClick={() => toggleSection("skills")}
          className="section-header"
        >
          Skills
          <span className="toggle-icon">{openSections.includes("skills") ? "−" : "+"}</span>
        </h2>
      {openSections.includes("skills") && 
        <SkillsInfo 
          skills={skills}
          updateSkills={updateSkills}
        />
      }
      </div>
    </div>
  )
}


function PersonalInfo({ personalInfo, updatePersonalInfo }) {
  return (
    <>
      <h4>Full Name<span className="smallText"> (required)</span></h4>
      <input 
        type="text" 
        placeholder="Enter your first and last name..." 
        required="true"
        value={personalInfo.fullName}
        onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
      />
      <h4>Email<span className="smallText"> (required)</span></h4>
      <input 
        type="email" 
        placeholder="Enter your email..." 
        value={personalInfo.email}
        onChange={(e) => updatePersonalInfo('email', e.target.value)}
      />
      <h4>Phone Number<span className="smallText"> (required)</span></h4>
      <input 
        type="tel" 
        placeholder="Enter your telephone number..." 
        value={personalInfo.phone}
        onChange={(e) => updatePersonalInfo('phone', e.target.value)}
      />
      <h4>Website<span className="smallText"> (optional)</span></h4>
      <input 
        type="text" 
        placeholder="Enter your link..." 
        value={personalInfo.website}
        onChange={(e) => updatePersonalInfo('website', e.target.value)}
      />
      <h4>Location<span className="smallText"> (optional)</span></h4>
      <input 
        type="text" 
        placeholder="Enter your location..." 
        value={personalInfo.location}
        onChange={(e) => updatePersonalInfo('location', e.target.value)}
      />
    </>
  )
}

function EducationInfo({ educationEntries, updateEducation }) {
  const addEducation = () => {
    updateEducation([...educationEntries, {
      id: Date.now(),
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    }]);
  };

  const removeEducation = (id) => {
    updateEducation(educationEntries.filter(entry => entry.id !== id));
  };

  const updateEntry = (id, field, value) => {
    updateEducation(educationEntries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  return (
    <div className="education-section">
      {educationEntries.map((entry, index) => (
        <div key={entry.id} className="education-entry">
          <div className="entry-header">
            <h3>Entry {index + 1}</h3>
            <button 
              onClick={() => removeEducation(entry.id)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
          <h4>School Name<span className="smallText"> (required)</span></h4>
          <input 
            type="text" 
            placeholder="Enter your school name..." 
            required="true"
            value={entry.schoolName}
            onChange={(e) => updateEntry(entry.id, 'schoolName', e.target.value)}
          />

          <h4>Degree</h4>
          <input 
            type="text" 
            placeholder="Enter your degree..." 
            value={entry.degree}
            onChange={(e) => updateEntry(entry.id, 'degree', e.target.value)}
          />

          <div className="educationDates">
            <div>
              <h4>Start Date</h4>
              <input 
                type="date"
                value={entry.startDate}
                onChange={(e) => updateEntry(entry.id, 'startDate', e.target.value)}
              />
            </div>
            <div>
              <h4>End Date</h4>
              <input 
                type="date"
                value={entry.endDate}
                onChange={(e) => updateEntry(entry.id, 'endDate', e.target.value)}
              />
            </div>
          </div>

          <h4>Location</h4>
          <input 
            type="text" 
            placeholder="Enter the location of your school..." 
            value={entry.location}
            onChange={(e) => updateEntry(entry.id, 'location', e.target.value)}
          />
        </div>
      ))}
      <button 
        onClick={addEducation}
        className="add-button"
      >
        + Add Education
      </button>
    </div>
  );
}

function ExperienceInfo({ experienceEntries, updateExperience }) {
  const addExperience = () => {
    updateExperience([...experienceEntries, {
      id: Date.now(),
      Title: '',
      Company: '',
      startDate: '',
      endDate: '',
      additionalInfo: '',
      location: ''
    }]);
  };

  const removeExperience = (id) => {
    updateExperience(experienceEntries.filter(entry => entry.id !== id));
  };

  const updateEntry = (id, field, value) => {
    updateExperience(experienceEntries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  return (
    <div className="experience-section">
      {experienceEntries.map((entry, index) => (
        <div key={entry.id} className="experience-entry">
          <div className="entry-header">
            <h3>Entry {index + 1}</h3>
            <button 
              onClick={() => removeExperience(entry.id)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
          <h4>Job Title<span className="smallText"> (required)</span></h4>
          <input 
            type="text" 
            placeholder="Enter your job title..." 
            required="true"
            value={entry.Title}
            onChange={(e) => updateEntry(entry.id, 'Title', e.target.value)}
          />
          <h4>Company Name<span className="smallText"> (required)</span></h4>
          <input 
            type="text" 
            placeholder="Enter the company name..." 
            required="true"
            value={entry.Company}
            onChange={(e) => updateEntry(entry.id, 'Company', e.target.value)}
          />
          <div className="experienceDates">
            <div>
              <h4>Start Date</h4>
              <input 
                type="date"
                value={entry.startDate}
                onChange={(e) => updateEntry(entry.id, 'startDate', e.target.value)}
              />
            </div>
            <div>
              <h4>End Date</h4>
              <input 
                type="date"
                value={entry.endDate}
                onChange={(e) => updateEntry(entry.id, 'endDate', e.target.value)}
              />
            </div>
          </div>
          <h4>Location</h4>
          <input 
            type="text" 
            placeholder="Enter the location of your job..." 
            value={entry.location}
            onChange={(e) => updateEntry(entry.id, 'location', e.target.value)}
          />
          <h4>Additional Information</h4>
          <textarea 
            placeholder="Enter any additional information..." 
            value={entry.additionalInfo}
            onChange={(e) => updateEntry(entry.id, 'additionalInfo', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addExperience} className="add-button">+ Add Experience</button>
    </div>
  );
}

function SkillsInfo({ skills, updateSkills }) {
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill.trim()) {
      updateSkills([...skills, {
        id: Date.now(),
        name: newSkill.trim()
      }]);
      setNewSkill('');
    }
  };

  const removeSkill = (id) => {
    updateSkills(skills.filter(skill => skill.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addSkill();
    }
  };

  return (
    <div className="skills-section">
      <div className="skills-input">
        <input
          type="text"
          placeholder="Add a skill..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addSkill} className="add-button">Add</button>
      </div>
      <div className="skills-list">
        {skills.map(skill => (
          <div key={skill.id} className="skill-item">
            <span>• {skill.name}</span>
            <button 
              onClick={() => removeSkill(skill.id)}
              className="remove-skill-button"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}