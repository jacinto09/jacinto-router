
import { Link } from '../Link'
export default function Home () {
  return (
    <div>
      <h1>Esta es la Home page</h1>
      <p>Haciendo un router</p>
      <Link to='/about'> Ir a about</Link>
      <Link to='/search/router'> Ir a search</Link>
    </div>
  )
}
