import "./css/Button.css";
import "./css/SubmitButton.css";

const SubmitButton = (props) => {
  return (
    <button
      type="submit"
      className="button submit-button"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};

export default SubmitButton;
