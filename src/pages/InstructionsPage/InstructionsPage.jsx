import "./InstructionsPage.scss";
import cameraAsk from "./../../assets/images/camera-permission.png";
import { NavLink } from "react-router-dom";

const InstructionsPage = () => {
  return (
    <main className="instructions">
      <h1 className="instructions__header">Instructions</h1>
      <div className="instructions__list">
        <ul className="about__list">
          <li className="about__card">
            <div className="main__img">1️⃣</div>

            <p>Accept camera access and wait for the webcam to load.</p>
          </li>
          <li className="about__card">
            <div className="main__img">2️⃣</div>

            <p>Perform the pose and hold for 15 seconds.</p>
          </li>
          <li className="about__card">
            <div className="main__img">3️⃣</div>

            <p>
              The timer will restart if you make a mistake. Remember to breathe!
            </p>
          </li>
        </ul>
      </div>
      <div className="instructions__proceed">
        <NavLink to="/practice">
          <button>I'm ready!</button>
        </NavLink>
      </div>
    </main>
  );
};

export default InstructionsPage;
