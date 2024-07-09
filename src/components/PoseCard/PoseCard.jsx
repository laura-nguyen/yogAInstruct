import "./PoseCard.scss";
import { NavLink } from "react-router-dom";

const PoseCard = ({ pose }) => {
  console.log(pose);
  return (
    <div className="poses__card">
      <div className="card">
        <img className="card__img" src={pose.image} alt="Lago di Braies" />

        <div className="card__details">
          <div className="card__tags">
            {pose.categories.map((category, index) => (
              <span key={index} className="tag">
                {category}
              </span>
            ))}
          </div>
          <h4 className="name">{pose.english_name}</h4>
          <span>{pose.sanskrit_name_adapted}</span>
          <p>{pose.pose_description}</p>
          <NavLink to="/practice/:poseId">
            <button className="card__button">Practice</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PoseCard;
