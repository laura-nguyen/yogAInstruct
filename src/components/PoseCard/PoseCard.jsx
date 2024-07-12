import "./PoseCard.scss";
import { NavLink } from "react-router-dom";

const PoseCard = ({ pose }) => {
  const { image, english_name, pose_description } = pose;
  return (
    <div className="poses__card">
      <div className="card">
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
            <h4 className="name">{english_name}</h4>
            <p>{pose_description}</p>
          </div>
          <div className="card__btns">
            <NavLink to={`/practice/${pose.id}`}>
              <button className="card__button">Practice</button>
            </NavLink>
            <NavLink to="/poses" className="card__button--secondary">
              Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoseCard;
