import { BUTTONS, EVENTS } from '../consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    // handling keypad events
    const isMainEvent = event.button === BUTTONS.primary
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === '_self' || target === undefined
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }
  return (
    <a onClick={handleClick} href={to} {...props} target={target} />
  )
}
