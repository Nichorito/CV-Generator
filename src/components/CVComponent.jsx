import './CVComponent.css'; 

export default function CVComponent({ 
  personalInfo, 
  educationEntries, 
  experienceEntries,
  skills
}) {
    return (
      <>
        <div className="cv-header">

            {/* Personal information section */}
            <h1>{personalInfo.fullName || ''}</h1>

            <div className="cv-contact-info">
            {personalInfo.email && <p>{personalInfo.email}</p>}
            {personalInfo.phone && <p>{personalInfo.phone}</p>}
            {personalInfo.website && <p>{personalInfo.website}</p>}
            {personalInfo.location && <p>{personalInfo.location}</p>}
            </div>
        </div>

        <div className="cv-body">
            {/* Education section */}
            {educationEntries.length > 0 && (
            <div className="cv-education">
                <h2 className="cv-subheader">Education</h2>
                {educationEntries.map(entry => (
                <div key={entry.id} className="cv-education-entry">
                    <h3>{entry.schoolName}</h3>
                    {entry.degree && <p>{entry.degree}</p>}
                    <div className="cv-education-details">
                    {entry.startDate && (
                        <span>
                        {new Date(entry.startDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            year: 'numeric' 
                        })}
                        {entry.endDate && ' - '}
                        {entry.endDate && new Date(entry.endDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            year: 'numeric' 
                        })}
                        </span>
                    )}
                    {entry.location && <span>{entry.location}</span>}
                    </div>
                </div>
                ))}
            </div>
            )}

            {/* Experience section */}
            {experienceEntries.length > 0 && (
            <div className="cv-experience">
                <h2 className="cv-subheader">Experience</h2>
                {experienceEntries.map(entry => (
                <div key={entry.id} className="cv-experience-entry">
                    <h3>{entry.Title}</h3>
                    <h4>{entry.Company}</h4>
                    <div className="cv-experience-details">
                    {entry.startDate && (
                        <span>
                        {new Date(entry.startDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            year: 'numeric' 
                        })}
                        {entry.endDate && ' - '}
                        {entry.endDate && new Date(entry.endDate).toLocaleDateString('en-US', { 
                            month: 'long', 
                            year: 'numeric' 
                        })}
                        </span>
                    )}
                    {entry.location && <span>{entry.location}</span>}
                    </div>
                    {entry.additionalInfo && <p>{entry.additionalInfo}</p>}
                </div>
                ))}
            </div>
            )}

            {/* Skills section */}
            {skills.length > 0 && (
            <div className="cv-skills">
                <h2 className="cv-subheader">Skills</h2>
                <div className="skills-list">
                {skills.map(skill => (
                    <span key={skill.id} className="skill-item">
                    {skill.name}
                    </span>
                ))}
                </div>
            </div>
            )}
        </div>
      </>
    );
}