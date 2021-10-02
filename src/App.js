import React, { useState } from "react";

import Header from "./UI/components/Header";
import Body from "./UI/components/Body";
import Question from "../src/Components/Question";
import QuestionList from "../src/Components/QuestionList";

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

  const submitQuestionSet = () => {};

  return (
    <form>
      <div>
        <Header />
        <QuestionList questionList={questionList}/>
        <Body
          onAddQuestion={addQuestion}
          questionList={questionList}
          onClick={submitQuestionSet}
        />
      </div>
    </form>
  );
}

export default App;
