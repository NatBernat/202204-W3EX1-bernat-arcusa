class Component {
  element;

  constructor(parentElement, element, className) {
    this.element = document.createElement(element);
    this.element.className = className;
    parentElement.append(this.element);
  }
}

export default Component;
