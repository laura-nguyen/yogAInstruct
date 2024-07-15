import poses from "../../data/yoga_poses.json";
import PoseCard from "../../components/PoseCard/PoseCard";
import "./PosesPage.scss";


export const PosesPage = () => {
  return (
    <main className="poses">
      <h1 className="poses__header">Learn Yoga Poses</h1>
      <div className="poses__list">
        {poses.map((pose) => (
          <PoseCard key={pose.id} id={pose.id} pose={pose} />
        ))}
      </div>
    </main>
  );
};

export default PosesPage;
