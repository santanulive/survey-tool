import "../css/Body.css";
import CardHolder from "./CardHolder";
import AddButton from "../components/Button/AddButton";
import SubmitButton from "../components/Button/SubmitButton";

const Body = (props) => {
  return (
    <CardHolder>
      <div className="app-body">
        <AddButton buttonText={"+"} onAddQuestion={props.onAddQuestion} />
        <p className="app-body__title">Click To Add A New Question</p>
      </div>
      {props.questionList.length > 0 && (
        <div className="app-body app-body__button">
          <SubmitButton buttonText={"Submit"} onClick={props.onClick} />
        </div>
      )}
    </CardHolder>
  );
};

export default Body;
