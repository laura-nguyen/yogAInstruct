import "./PoseDetails.scss";
import backIcon from "./../../assets/icons/back.png";
import { NavLink } from "react-router-dom";

const PoseDetails = ({ pose }) => {
  const {
    english_name,
    sanskrit_name,
    sanskrit_name_adapted,
    image,
    pose_description,
    pose_benefits,
    instructions,
    common_mistakes,
    tips,
  } = pose;

  return (
    <>
      <div className="pose-details__header">
        <NavLink to="/poses" className="pose-details__icon-link">
          <img
            className="pose-details__button--back"
            src={backIcon}
            alt="back icon"
          />
        </NavLink>
        <h1>{english_name}</h1>
      </div>
      <div className="pose-details__content">
        <div className="pose-details__content--left">
          <img
            className="pose-details__img"
            src={`/${image}`}
            alt="yoga pose"
          />
          <h4 className="pose-details__sanskrit">
            {sanskrit_name_adapted} | {sanskrit_name}
          </h4>
        </div>
        <div className="pose-details__content--right">
          {" "}
          <div className="card__tags card__tags--description">
            {pose.categories.map((category, index) => (
              <span key={index} className="tag tag--white">
                {category}
              </span>
            ))}
          </div>
          <p className="pose-details__description">{pose_description}</p>
        </div>
      </div>
      <div className="pose-details__grid">
        <div className="pose-details__card">
          <h2>Benefits</h2>
          <div className="pose-details__benefits">
            <ul>
              {pose_benefits.map((step, index) => (
                <li className="pose-details__list--unordered" key={index}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pose-details__card">
          <h2>Instructions</h2>
          <div className="pose-details__benefits">
            <ol className="pose-details__instructions">
              {instructions.map((step, index) => (
                <li className="pose-details__instructions-item" key={index}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="pose-details__card">
          <h2>Common Mistakes</h2>
          <div className="pose-details__benefits">
            <ul>
              {common_mistakes.map((step, index) => (
                <li className="pose-details__list--unordered" key={index}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pose-details__card">
          <h2>Tips</h2>
          <div className="pose-details__benefits">
            <ul>
              {tips.map((step, index) => (
                <li className="pose-details__list--unordered" key={index}>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoseDetails;
