
import './App.css'
import { useEffect, useState } from 'react'
import { EVENTS } from '../consts'
function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}
function Home () {
  return (
    <div>
      <h1>Esta es la Home page</h1>
      <p>Haciendo un router</p>
      <button onClick={() => navigate('/about')}> Ir a about</button>
    </div>
  )
}
function About () {
  return (
    <div>
      <h1>Esta es la About page</h1>
      <p>Haciendo un router</p>
      <button onClick={() => navigate('/')}> Ir a Home</button>
    </div>
  )
}
function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])
  return (
    <>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </>
  )
}

export default App
