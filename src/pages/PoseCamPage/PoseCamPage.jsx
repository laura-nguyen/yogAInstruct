import PoseCam from "../../components/PoseCam/PoseCam";
import poses from "../../data/yoga_poses.json";
import { useParams } from "react-router-dom";
import "./PoseCamPage.scss";

const PoseCamPage = () => {
  const { poseId } = useParams();
  const pose = poses[poseId];
  return (
    <main className="practice">
      <PoseCam pose={pose} />
    </main>
  );
};

export default PoseCamPage;
