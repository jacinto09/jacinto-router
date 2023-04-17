import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Router } from './Router'
import { getCurrentPath } from './utils'
import { Route } from './Route'
import { Link } from './Link'

vi.mock('./utils', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  it('should render wout problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })
  it('should render 404', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getAllByText('404')).toBeTruthy()
  })
  it('should render home', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]
    render(<Router routes={routes} />)
    expect(screen.getAllByText('About')).toBeTruthy()
  })
  it('should navigate using link', async () => {
    getCurrentPath.mockReturnValueOnce('/')
    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>)
    screen.getByText('Go to About').click()
    const aboutTitle = await screen.findByText('About')
    expect(aboutTitle).toBeTruthy()
  })
})
