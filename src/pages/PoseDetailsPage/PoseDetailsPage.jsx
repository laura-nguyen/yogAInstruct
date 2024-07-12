import "./PoseDetailsPage.scss";
import poses from "../../data/yoga_poses.json";
import PoseDetails from "../../components/PoseDetails/PoseDetails";
import { useParams } from "react-router-dom";

const PoseDetailsPage = () => {
  const { poseId } = useParams();
  const pose = poses[poseId];
  return (
    <main className="pose-details">
      <PoseDetails pose={pose} />
    </main>
  );
};

export default PoseDetailsPage;
