/* eslint-disable no-new */
import SendButton from "../components/SendButton.js";

describe("Given SendButton component", () => {
  const myMock = jest.fn();
  describe("When it's instantiated", () => {
    test("Then it should render a button", () => {
      // Arrange
      const container = document.createElement("div");
      const textInputed = "Enviar";

      // Act
      new SendButton(container, textInputed, myMock, false);
      const expectedButton = container.querySelector("button");

      // Assert
      expect(expectedButton).not.toBeNull();
    });

    test("Then it should have an atribute value 'Enviar'", () => {
      // Arrange
      const container = document.createElement("div");
      const textInputed = "Enviar";

      // Act
      new SendButton(container, textInputed, myMock, false);
      const expectedButtonValue = container.querySelector("button").innerHTML;

      // Assert
      expect(expectedButtonValue).toBe(textInputed);
    });
  });
  describe("When click action is called", () => {
    test("Then it will call any given function", () => {
      // Arrange
      const container = document.createElement("div");
      const textInputed = "Enviar";

      // Act
      new SendButton(container, textInputed, myMock, false);
      const expectedButtonAction = container
        .querySelector("button")
        .addListeners();

      // Assert
      expect(expectedButtonAction).toBe(myMock);
    });
  });
});
