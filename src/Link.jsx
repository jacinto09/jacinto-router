import { EVENTS } from '../consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate(to)
  }
  return (
    <a onClick={handleClick} href={to} {...props} target={target} />
  )
}
