import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContentMenu from './components/ContentMenu'
import CustomizeMenu from './components/CustomizeMenu'

function App() {
  const [currentView, setCurrentView] = useState("content");

  const renderMenu = () => {
    switch(currentView) {
      case 'content':
        return <ContentMenu />
      case 'customize':
        return <CustomizeMenu />
      default:
        return <ContentMenu />
    }
  }

  return (
    <>
      <div className="main">
        <div className="left-side">
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
                <button className="button-clear"> 
                  <span>Clear</span>
                </button>
            </div>
          </div>
          { renderMenu() }
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
