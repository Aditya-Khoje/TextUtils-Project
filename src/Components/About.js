import React, { useState } from "react";
import "./Footer.css";

export default function About(props) {
  const mystyle = {
    backgroundColor: props.mode == "dark" ? "#13466e" : "white",
    color: props.mode == "dark" ? "white" : "black",
  };
  return (
    <>
      <div className="com">
        <h1
          className="my-3"
          style={{
            backgroundColor: props.mode == "dark" ? "#042743" : "white",
            color: props.mode == "dark" ? "white" : "black",
          }}
        >
          About Us
        </h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  Textutils gives you a way to analyze your text quickly and
                  efficiently. Be it word count, character count.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  TextUtils is a free character counter tool that provides
                  instant character count & word count statistics for a given
                  text. TextUtils reports the number of words and characters.
                  Thus it is suitable for writing text with word/ character
                  limit.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  This word counter software works in any web browsers such as
                  Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                  count characters in facebook, blog, books, excel document, pdf
                  document, essays, etc.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
