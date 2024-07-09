import poses from "../../data/yoga_poses.json";
import PoseCard from "../../components/PoseCard/PoseCard";
import { useParams } from "react-router-dom";

export const PosesPage = () => {
  const poseId = useParams();
  return (
    <main className="instructions">
      <h1 className="instructions__header">Learn Yoga Poses</h1>
      <div className="poses__list">
        {poses.map((pose) => (
          <PoseCard key={pose.id} id={pose.id} pose={pose} />
        ))}
      </div>
    </main>
  );
};

export default PosesPage;
