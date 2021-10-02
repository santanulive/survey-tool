import "./css/Button.css";
import "./css/AddButton.css";

const AddButton=(props)=>{
    return(
        <button type="button" className="button add-button" onClick={props.onAddQuestion}>{props.buttonText}</button>
    )
}

export default AddButton;