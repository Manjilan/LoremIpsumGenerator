import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Lorem from "./Lorem";
import "./styles.css";

const App = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState();
  // const handleChange=(event)=>{
  //   event.preventDefault();
  // }
  const handleSubmit = event => {
    event.preventDefault();
    setNumberOfParagraphs(event.target.amount.value);
  };
  const copyText = () => {
    var content = document.getElementById("contentBox").textContent;
    navigator.clipboard.writeText(content);
    console.log("Copied");
    document.getElementById("copyButton").textContent = "Copied";
  };
  return (
    <section className="App">
      <h1>Lorem Ipsum Generator</h1>
      <Form handleSubmit={handleSubmit} />
      <Lorem paragraphs={numberOfParagraphs} />
      <button onClick={copyText} id="copyButton">
        Copy
      </button>
    </section>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
