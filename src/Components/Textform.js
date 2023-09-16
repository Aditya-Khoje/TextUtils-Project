import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpperClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.setAlerti("Converted to Upper Case", "success");
  };
  const handleLowerClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.setAlerti("Converted to Lower Case", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.setAlerti("Removed Extra Spaces", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.setAlerti("Copied to Clipboard", "success");
    document.getSelection().removeAllRanges();
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.setAlerti("Cleared Text", "success");
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
              backgroundColor: props.mode == "dark" ? "#13466e" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpperClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerClick}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={clearText}
        >
          Clear Text
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
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words
          <br />
          {text.length} Characters
          <br />
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
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
