import PoseCam from "../../components/PoseCam/PoseCam";
import poses from "../../data/yoga_poses.json";
import { useParams } from "react-router-dom";
import Timer from "../../components/Timer/Timer";
import "./PoseCamPage.scss";

const PoseCamPage = () => {
  const { poseId } = useParams();
  const pose = poses[poseId];
  return (
    <main className="session">
      <PoseCam pose={pose} />
      {/* <Timer /> */}
    </main>
  );
};

export default PoseCamPage;
