import Component from "./Component.js";

class InputText extends Component {
  type;

  constructor(parentElement, type, className) {
    super(parentElement, "input", className || "");
    this.element.type = type;
  }
}

export default InputText;
