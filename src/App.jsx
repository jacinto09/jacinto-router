import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import { Router } from './Router'

const AppRoutes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/about',
    Component: About
  }
]

function App () {
  return (
    <>
      <main>
        <Router routes={AppRoutes} />
      </main>
    </>
  )
}

export default App
