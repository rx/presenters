export function dispatchEventFromEvent(source, event) {
  const dispatcher = getEventTarget(source);
  dispatcher.dispatchEvent(event);
}

export function getEventTarget(event) {
  if (typeof event.composedPath === 'function') {
    const compTarget = event.composedPath()[0];

    if (compTarget) {
      return compTarget;
    }

    if (event.path && event.path[0]) {
      return event.path[0];
    }
  }

  return event.target;
}
