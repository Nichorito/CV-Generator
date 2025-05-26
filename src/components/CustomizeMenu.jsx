export default function CustomizeMenu() {
  return (
    <div className="information">
      <div className="container">
        <h2>Theme</h2>
        <select>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="container">
        <h2>Font</h2>
        <select>
          <option value="arial">Arial</option>
          <option value="times">Times New Roman</option>
        </select>
      </div>
    </div>
  )
}