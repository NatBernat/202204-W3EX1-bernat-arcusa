/* eslint-disable no-unused-vars */
import Component from "./components/Component.js";
import InputText from "./components/InputText.js";
import SendButton from "./components/SendButton.js";
import ShownText from "./components/ShownText.js";

const bodyElement = document.querySelector("body");
const divComponentText = new Component(bodyElement, "div", "paragraph");
const paragraphContainer = document.querySelector(".paragraph");

const inputParagraphComponent = new InputText(
  paragraphContainer,
  "text",
  "paragraph__input"
);
const textInput = document.querySelector(".paragraph__input");
const paragraphElement = document.querySelector(".paragraph__output");
const paragraphButtonFunction = () => {
  paragraphElement.innerHTML = textInput.value;
};
const textButton = new SendButton(
  paragraphContainer,
  "Send",
  paragraphButtonFunction
);
const paragraphOutput = new ShownText(paragraphContainer, "paragraph__output");
