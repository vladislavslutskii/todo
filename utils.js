export function createWrapper(type, childs = [], cssClass = []) {
  const element = document.createElement(type);
  element.classList.add(...cssClass);
  element.append(...childs);
  return element;
}

export function createElement(type, attributes = {}, cssClass = [], label) {
  const element = document.createElement(type);
  for (let attributeType in attributes) {
    element.setAttribute(attributeType, attributes[attributeType]);
  }
  element.classList.add(...cssClass);
  element.innerText = label;
  return element;
}