import Component from "./Component.js";

class ShownText extends Component {
  constructor(parentElement, className) {
    super(parentElement, "p", className || "");
  }
}

export default ShownText;
