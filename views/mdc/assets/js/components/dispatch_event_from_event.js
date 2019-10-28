export function dispatchEventFromEvent(source, event) {
  const dispatcher = getEventTarget(source);
  dispatcher.dispatchEvent(event);
}

export function getEventTarget(event) {
  if (typeof event.composedPath === 'function') {
    const path = event.composedPath();

    return path[0] || event.path[0];
  }

  return event.target;
}
