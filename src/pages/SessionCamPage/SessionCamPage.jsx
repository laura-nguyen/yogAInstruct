import "./SessionCamPage.scss";
import PoseCam from "../../components/PoseCam/PoseCam";
import poses from "../../data/yoga_poses.json";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { refreshPage } from "./../../utils/helper.js";

const SessionCamPage = () => {
  const { poseId } = useParams();
  const pose = poses[poseId];
  return (
    <main className="session">
      <PoseCam pose={pose} />
      <div className="session__nav" onClick={refreshPage}>
        <NavLink to={`/session/${Number(poseId) + 1}`} onClick={refreshPage}>
          <button>Next Pose</button>
        </NavLink>
      </div>
    </main>
  );
};

export default SessionCamPage;
