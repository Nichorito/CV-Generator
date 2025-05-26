import { useState } from "react";
import "./content.css";

export default function ContentMenu({ 
  personalInfo, 
  updatePersonalInfo, 
  educationEntries, 
  updateEducation 
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
        {openSections.includes("experience") && <div>Experience content here</div>}
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
      {openSections.includes("skills") && <div>Skills content here</div>}
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
