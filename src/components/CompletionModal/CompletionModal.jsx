import "./CompletionModal.scss";
import { NavLink } from "react-router-dom";

const CompletionModal = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>🎉 Congratulations!</h2>
        <p>You have completed all the poses.</p>
        <NavLink to="/poses">
          <button>Back to Poses</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CompletionModal;
