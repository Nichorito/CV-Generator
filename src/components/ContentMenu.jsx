import "./content.css";

export default function ContentMenu() {
  return (
    <div className="information">
      <div className="container">
        <h2>Personal Information</h2>
        <PersonalInfo />
      </div>
      <div className="container">
        <h2>Education</h2>
      </div>
      <div className="container">
        <h2>Experience</h2>
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
      <input type="email" placeholder="Email" />
    </>
  )
}