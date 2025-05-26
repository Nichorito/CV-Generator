import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div className="left-side">
          <div className="container">
            <h2>Personal Information</h2>
            {/* Add your input fields here */}
          </div>
          <div className="container">
            <h2>Education</h2>
            {/* Add your education fields here */}
          </div>
          <div className="container">
            <h2>Experience</h2>
            {/* Add your experience fields here */}
          </div>
        </div>
        <div className="right-side">
          <h1>Your CV</h1>
          <p>
            Your information will show up here
          </p>
          <p className="subtle">
            Eventually
          </p>
        </div>
      </div>
    </>
  )
}

export default App
