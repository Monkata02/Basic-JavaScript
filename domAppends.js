function createAndAppendElement(tagName, attributes, parentElement) {
  const element = document.createElement(tagName);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  parentElement.appendChild(element);
  return element;
}
