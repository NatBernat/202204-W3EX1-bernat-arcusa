/* import InputText from "./components/InputText.js";
import SendButton from "./components/SendButton.js";
import ShownText from "./components/ShownText.js";

const containerElement = document.querySelector(".container");

const textInput = new InputText(containerElement);
const button = new SendButton(
  containerElement,
  "Send",
  () => {
    const printedText = new ShownText();
  },
  true
);
 */

import Component from "./components/Component.js";
import InputText from "./components/InputText.js";
import SendButton from "./components/SendButton.js";
import ShownText from "./components/ShownText.js";

const bodyElement = document.querySelector("body");
const divComponent = new Component(bodyElement, "div", "paragraph");
const paragraphContainer = document.querySelector(".paragraph");

const inputParagraphComponent = new InputText(
  paragraphContainer,
  "text",
  "paragraph__input"
);

const textInput = document.querySelector(".paragraph__input");
const buttonFunction = () => {
  paragraphElement.innerHTML = textInput.value;
};
const textButton = new SendButton(paragraphContainer, "Send", buttonFunction);

const paragraphOutput = new ShownText(paragraphContainer, "paragraph__output");
const paragraphElement = document.querySelector(".paragraph__output");
