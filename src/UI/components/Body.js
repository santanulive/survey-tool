import "../css/Body.css";
import CardHolder from "./CardHolder";
import AddButton from "../components/Button/AddButton";

const Body = (props) => {
  return (
    <CardHolder>
      <div className="app-body">
        <AddButton buttonText={"+"} onAddQuestion={props.onAddQuestion}/>
        <p className="app-body__title">Click To Add A New Question</p>
      </div>
    </CardHolder>
  );
};

export default Body;
