
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Page404 from './pages/Page404'
import './App.css'
import { Router } from './Router'
import { Route } from './Route'

const AppRoutes = [
  {
    path: '/search/:query',
    Component: Search
  }
]

function App () {
  return (
    <>
      <main>
        <Router routes={AppRoutes} defaultComponent={Page404}>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
        </Router>
      </main>
    </>
  )
}

export default App
