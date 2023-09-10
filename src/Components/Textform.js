import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleUpperClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Chnage");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container mt-5">
        <h1>
          {props.heading} - {text}
        </h1>
        <div className="my-3">
          <label htmlFor="Text" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>
          Convert To Uppercase
        </button>
      </div>
    </>
  );
}
