import { useState } from "react";
import "./content.css";

export default function ContentMenu() {
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
        {openSections.includes("personal") && <PersonalInfo />}
      </div>

      {/*EDUCTION SECTION*/}
      <div className="container">
        <h2 
          onClick={() => toggleSection("education")}
          className="section-header"
        >
          Education
          <span className="toggle-icon">{openSections.includes("education") ? "−" : "+"}</span>
        </h2>
        {openSections.includes("education") && <EducationInfo />}
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


function PersonalInfo() {
  return (
    <>
      <h4>Full Name<span className="smallText"> (required)</span></h4>
      <input type="text" placeholder="Enter your first and last name..." required="true"/>
      <h4>Email<span className="smallText"> (required)</span></h4>
      <input type="email" placeholder="Enter your email..." />
      <h4>Phone Number<span className="smallText"> (required)</span></h4>
      <input type="tel" placeholder="Enter your telephone number..." />
      <h4>Location<span className="smallText"> (reccomended))</span></h4>
      <input type="text" placeholder="Enter your location..." />
    </>
  )
}

function EducationInfo() {
  // This component manages multiple education entries
  // It begins with an empty array of education entries
  const [educationEntries, setEducationEntries] = useState([]);

  const addEducation = () => {
    setEducationEntries([...educationEntries, { id: Date.now() }]);
  };

  const removeEducation = (id) => {
    setEducationEntries(educationEntries.filter(entry => entry.id !== id));
  };

  return (
    <div className="education-section">
      {educationEntries.map((entry) => (
        <div key={entry.id} className="education-entry">
          <div className="entry-header">
            <h3>Education Entry</h3>
            <button 
              onClick={() => removeEducation(entry.id)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
          <h4>School Name<span className="smallText"> (required)</span></h4>
          <input type="text" placeholder="Enter your school name..." required="true"/>

          <h4>Degree</h4>
          <input type="text" placeholder="Enter your degree..." />

          <div className="educationDates">
            <div>
              <h4>Start Date</h4>
              <input type="date" />
            </div>
            <div>
              <h4>End Date</h4>
              <input type="date" />
            </div>
          </div>
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
