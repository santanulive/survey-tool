import "./css/Button.css";
import "./css/RemoveButton.css";

const RemoveButton = (props) => {
  return (
    <button
      type="button"
      className="button remove-button"
      onClick={props.onRemove}
    >
      {props.buttonText}
    </button>
  );
};

export default RemoveButton;
