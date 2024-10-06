/* eslint-disable */
import { useEffect } from "react";
import "aframe";

export default function MenuInSpace({ onBackClick, onOptionClick }) {
  useEffect(() => {
    const option1Box = document.getElementById("option1");
    const option2Box = document.getElementById("option2");
    const option3Box = document.getElementById("option3");
    const backBox = document.getElementById("backButton");

    // Add mouseenter and mouseleave color change events
    const handleMouseEnter = (el, color) => el.setAttribute("color", color);
    const handleMouseLeave = (el, color) => el.setAttribute("color", color);

    // Option 1
    option1Box.addEventListener("click", () => onOptionClick(1));
    option1Box.addEventListener("mouseenter", () => handleMouseEnter(option1Box, "red"));
    option1Box.addEventListener("mouseleave", () => handleMouseLeave(option1Box, "green"));

    // Option 2
    option2Box.addEventListener("click", () => onOptionClick(2));
    option2Box.addEventListener("mouseenter", () => handleMouseEnter(option2Box, "red"));
    option2Box.addEventListener("mouseleave", () => handleMouseLeave(option2Box, "green"));

    // Option 3
    option3Box.addEventListener("click", () => onOptionClick(3));
    option3Box.addEventListener("mouseenter", () => handleMouseEnter(option3Box, "red"));
    option3Box.addEventListener("mouseleave", () => handleMouseLeave(option3Box, "green"));

    // Back button
    backBox.addEventListener("click", onBackClick);
    backBox.addEventListener("mouseenter", () => handleMouseEnter(backBox, "red"));
    backBox.addEventListener("mouseleave", () => handleMouseLeave(backBox, "orange"));

    return () => {
      // Cleanup listeners
      option1Box.removeEventListener("click", () => onOptionClick(1));
      option2Box.removeEventListener("click", () => onOptionClick(2));
      option3Box.removeEventListener("click", () => onOptionClick(3));
      backBox.removeEventListener("click", onBackClick);
    };
  }, [onBackClick, onOptionClick]);

  return (
    <a-entity position="0 1.5 -5" geometry="primitive: plane" material="color: black; opacity: 0.5" scale="3 2 1">
      {/* Title */}
      <a-text value="Menu" position="0 0.8 0" align="center" color="#fff" scale="1.5 1.5 1.5"></a-text>

      {/* Buttons */}
      <a-box
        id="option1"
        position="-0.6 0 0"
        width="0.4"
        height="0.2"
        depth="0.1"
        color="green"
        text="value: Option 1; color: white; align: center"
        class="clickable"
      ></a-box>

      <a-box
        id="option2"
        position="0 0 0"
        width="0.4"
        height="0.2"
        depth="0.1"
        color="green"
        text="value: Option 2; color: white; align: center"
        class="clickable"
      ></a-box>

      <a-box
        id="option3"
        position="0.6 0 0"
        width="0.4"
        height="0.2"
        depth="0.1"
        color="green"
        text="value: Option 3; color: white; align: center"
        class="clickable"
      ></a-box>

      {/* Back Button */}
      <a-box
        id="backButton"
        position="0 -0.5 0"
        width="0.6"
        height="0.2"
        depth="0.1"
        color="orange"
        text="value: Back; color: white; align: center"
        class="clickable"
      ></a-box>
    </a-entity>
  );
}
