import { lazy, Suspense } from 'react'
import './App.css'
import { Router } from './Router'
import { Route } from './Route'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Search = lazy(() => import('./pages/Search'))
const Page404 = lazy(() => import('./pages/Page404'))

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
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={AppRoutes} defaultComponent={Page404}>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
