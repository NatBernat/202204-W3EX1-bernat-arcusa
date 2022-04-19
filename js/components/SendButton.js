import Component from "./Component.js";

class SendButton extends Component {
  text;

  action;

  isSubmit;

  constructor(parentElement, text, action, isSubmit = false) {
    super(parentElement, "button", "action-button");
    this.text = text;
    this.isSubmit = isSubmit;
    this.action = action;

    this.render();
    this.addListeners();
  }

  render() {
    this.element.textContent = this.text;
    this.element.type = this.isSumbmit ? "submit" : "button";
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}

export default SendButton;
