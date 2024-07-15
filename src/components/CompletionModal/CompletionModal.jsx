import "./CompletionModal.scss";
import { NavLink } from "react-router-dom";
import closeIcon from "./../../assets/icons/exit.svg"; // Assuming you have a close icon SVG
import closeIcon from "./../../assets/icons/exit.svg";

const CompletionModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </button>
        <h1>🎉 Great Job!</h1>
        <p>You have completed all the poses.</p>
        <NavLink to="/poses">
          <button>Back to Poses</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CompletionModal;
