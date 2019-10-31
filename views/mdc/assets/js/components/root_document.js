export default function getRoot(element) {
  if (element.parentNode === null) return element;

  return getRoot(element.parentNode);
}
