export default function CustomizeMenu({ fontFamily, setFontFamily, headerColor, setHeaderColor }) {
  return (
    <div className="information">
      <div className="container">
        <h2>Font</h2>
        <select 
          value={fontFamily} 
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Roboto, sans-serif">Roboto</option>
        </select>
      </div>
      <div className="container">
        <h2>Header Color</h2>
        <input 
          type="color" 
          value={headerColor}
          onChange={(e) => setHeaderColor(e.target.value)}
        />
      </div>
    </div>
  )
}