import "./PoseCard.scss";
import { NavLink } from "react-router-dom";

const PoseCard = ({ pose }) => {
  const { id, image, english_name, pose_description } = pose;
  return (
    <div className="card">
      <div className="card__container">
        <img className="card__img" src={image} alt="yoga pose" />

        <div className="card__details">
          <div className="card__details-copy">
            <div className="card__tags">
              {pose.categories.map((category, index) => (
                <span key={index} className="tag">
                  {category}
                </span>
              ))}
            </div>
            <h4 className="card__name">{english_name}</h4>
            <p>{pose_description}</p>
          </div>
          <div className="card__btns">
            <NavLink to={`/practice/${pose.id}`}>
              <button className="card__button">Practice</button>
            </NavLink>
            <NavLink to={`/poses/${id}`} className="card__button--secondary">
              Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoseCard;
