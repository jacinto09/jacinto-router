import { useEffect } from 'react'

function Search ({ routeParams }) {
  useEffect(() => {
    document.title = `Searched: ${routeParams.query}`
  }, [])
  return (
    <h1>Searched: {routeParams.query}</h1>
  )
}

export default Search
