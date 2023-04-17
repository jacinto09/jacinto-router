import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
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
        <Router routes={AppRoutes} defaultComponent={Page404} />
      </main>
    </>
  )
}

export default App
