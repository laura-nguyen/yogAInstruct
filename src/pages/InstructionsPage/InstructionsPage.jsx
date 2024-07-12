import "./InstructionsPage.scss";
import cameraAsk from "./../../assets/images/webcam-permission.png";
import webcamRight from "./../../assets/images/webcam-right.png";
import chairPose from "./../../assets/images/chair.jpeg";
import { NavLink } from "react-router-dom";

const InstructionsPage = () => {
  return (
    <main className="instructions">
      <h1 className="instructions__header">Instructions</h1>
      <div className="instructions__list">
        <ul className="instructions__steps">
          <li className="instructions__card">
            <div className="instructions__number">1️⃣</div>
            <p className="instructions__text">
              Accept camera access and wait for the webcam to load.
            </p>
            <img
              className="instructions__img"
              src={cameraAsk}
              alt="google chrome camera permissions"
            />
          </li>
          <li className="instructions__card">
            <div className="instructions__number">2️⃣</div>
            <p className="instructions__text">
              Make sure that the key points are visible on your body and there
              are no background distractions.
            </p>
            <div>
              <img
                className="instructions__img"
                src={webcamRight}
                alt="correct webcam alignment"
              />
            </div>
          </li>
          <li className="instructions__card">
            <div className="instructions__number">3️⃣</div>
            <p className="instructions__text">
              Follow the pose visual and mimic that on camera. You will get
              feedback on your form.
            </p>
            <img
              className="instructions__img"
              src={chairPose}
              alt="incorrect camera alignment"
            />
          </li>
        </ul>
      </div>
      <div className="instructions__proceed">
        <NavLink to="/session/0">
          <button>I'm ready!</button>
        </NavLink>
      </div>
    </main>
  );
};

export default InstructionsPage;
