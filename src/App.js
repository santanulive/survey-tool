import React, { useState } from "react";

import Header from "./UI/components/Header";
import Body from "./UI/components/Body";
import Question from "../src/Components/Question";
import SubmitButton from "../src/UI/components/Button/SubmitButton";

import "./App.css";

function App() {
  // const [questionList, setQuestionList] = useState([
  //   {
  //     key:null,
  //     questionName: "",
  //     optionList: [],
  //   }
  // ]);

  const [questionList, setQuestionList] = useState([]);

  const addQuestion = () => {
    setQuestionList((prevState) => {
      return [...prevState, <Question />];
    });
  };

  return (
    <form>
      <div>
        <Header />
        {questionList.map((question) => question)}
        <Body onAddQuestion={addQuestion} />
      </div>
      {questionList.length > 0 && (
        <div>
          <SubmitButton buttonText={"Submit"} />
        </div>
      )}
    </form>
  );
}

export default App;
