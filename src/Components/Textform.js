import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpperClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = (props) => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleOnChange = (event) => {
    // console.log("On Chnage");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{
          color: props.mode == "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <label htmlFor="Text" className="form-label"></label>
          <textarea
            style={{
              backgroundColor: props.mode == "dark" ? "gray" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode == "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>

        <p>
          {text.split(" ").length} words
          <br />
          {text.length} Characters
          <br />
          {0.008 * text.split(" ").length} Minutes to read
        </p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
