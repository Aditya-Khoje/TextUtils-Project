import React from "react";

export default function Textform(props) {
  return (
    <>
      <div className="container mt-5">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <label for="Text" className="form-label"></label>
          <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary">Convert To Uppercase</button>
      </div>
    </>
  );
}
