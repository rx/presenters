export function dispatchEventFromEvent(source, event) {
  const dispatcher = source.target || source.path[0];
  dispatcher.dispatchEvent(event);
}
