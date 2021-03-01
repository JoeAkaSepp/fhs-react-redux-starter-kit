import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import SignUp from "./SignUp";

class ToggleButton extends React.Component {
  state = { backgroundColor: "red" };
  toggleBackgroundColor = () => {
    this.setState({
      backgroundColor: this.state.backgroundColor === "red" ? "green" : "red",
    });
  };
  render() {
    return (
      <button
        onClick={this.toggleBackgroundColor}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        Click me
      </button>
    );
  }
}

const ToggleButtonHooks = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");
  return (
    <button
      onClick={() =>
        setBackgroundColor(backgroundColor === "red" ? "green" : "red")
      }
      style={{ backgroundColor: backgroundColor }}
    >
      Click me
    </button>
  );
};

storiesOf("ToggleButton", module)
  .add("ToggleButton", () => <ToggleButton />)
  .add("ToggleButtonHooks", () => <ToggleButtonHooks />);
