import { useEffect } from "react";
import "aframe";

export default function MenuInSpace({ onBackClick, onOptionClick }) {
  useEffect(() => {
    // Adding event listeners for all the boxes
    const option1Box = document.getElementById("option1");
    const option2Box = document.getElementById("option2");
    const option3Box = document.getElementById("option3");
    const backBox = document.getElementById("backButton");

    // Option 1 click
    option1Box.addEventListener("click", () => onOptionClick(1));
    option1Box.addEventListener("mouseenter", () =>
      option1Box.setAttribute("color", "red")
    );
    option1Box.addEventListener("mouseleave", () =>
      option1Box.setAttribute("color", "green")
    );

    // Option 2 click
    option2Box.addEventListener("click", () => onOptionClick(2));
    option2Box.addEventListener("mouseenter", () =>
      option2Box.setAttribute("color", "red")
    );
    option2Box.addEventListener("mouseleave", () =>
      option2Box.setAttribute("color", "green")
    );

    // Option 3 click
    option3Box.addEventListener("click", () => onOptionClick(3));
    option3Box.addEventListener("mouseenter", () =>
      option3Box.setAttribute("color", "red")
    );
    option3Box.addEventListener("mouseleave", () =>
      option3Box.setAttribute("color", "green")
    );

    // Back button click
    backBox.addEventListener("click", onBackClick);
    backBox.addEventListener("mouseenter", () =>
      backBox.setAttribute("color", "red")
    );
    backBox.addEventListener("mouseleave", () =>
      backBox.setAttribute("color", "orange")
    );

    // Cleanup on unmount
    return () => {
      option1Box.removeEventListener("click", () => onOptionClick(1));
      option2Box.removeEventListener("click", () => onOptionClick(2));
      option3Box.removeEventListener("click", () => onOptionClick(3));
      backBox.removeEventListener("click", onBackClick);
    };
  }, [onBackClick, onOptionClick]);

  return (
    <a-entity position="0 1.5 -5">
      {/* Menu Title */}
      <a-text
        value="Menu"
        position="0 1 0"
        align="center"
        color="#fff"
        scale="2 2 2"
      ></a-text>

      {/* Buttons in the 3D space */}
      <a-box
        id="option1"
        position="-1 0 0"
        width="0.5"
        height="0.2"
        depth="0.1"
        color="green"
        text="value: Option 1; color: white; align: center"
      ></a-box>

      <a-box
        id="option2"
        position="0 0 0"
        width="0.5"
        height="0.2"
        depth="0.1"
        color="green"
        text="value: Option 2; color: white; align: center"
      ></a-box>

      <a-box
        id="option3"
        position="1 0 0"
        width="0.5"
        height="0.2"
        depth="0.1"
        color="green"
        text="value: Option 3; color: white; align: center"
      ></a-box>

      {/* Back Button */}
      <a-box
        id="backButton"
        position="0 -1 0"
        width="0.5"
        height="0.2"
        depth="0.1"
        color="orange"
        text="value: Back; color: white; align: center"
      ></a-box>
    </a-entity>
  );
}
