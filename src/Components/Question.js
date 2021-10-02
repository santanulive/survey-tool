import React, { useState } from "react";

import "../App.css";
import "./css/Question.css";

import RemoveButton from "../UI/components/Button/RemoveButton";
import Option from "./Option";

const Question = () => {
  const [optionCount, setOptionCount] = useState(1);
  const [displayQuerstion, setDisplayQuestion] = useState(true);
  const optionArray = [];

  const optionAddHandler = (event) => {
    setOptionCount(event.target.value);
  };

  for (var i = 0; i < optionCount; i++) {
    optionArray[i] = i;
  }

  const removeQuestion = () =>{
    setDisplayQuestion(false);
  }

  return (
    <div className="app-question-container">
      {displayQuerstion && (
        <div>
          <div>
            <p>Enter the Question</p>
            <input type="text" className="app-question"></input>
            <p>Response Type</p>
            <select className="app-dropdown">
              <option>Single</option>
              <option>Multiple</option>
            </select>
            <p>Number of Options</p>
            <select className="app-dropdown" onChange={optionAddHandler}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <RemoveButton buttonText="x" onRemove={removeQuestion}/>
          </div>
          <div>
            <p>Enter Options</p>
            {optionArray.map(() => (
              <Option />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
