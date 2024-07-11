import "./SessionCamPage.scss";
import PoseCam from "../../components/PoseCam/PoseCam";
import poses from "../../data/yoga_poses.json";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import CompletionModal from "../../components/CompletionModal/CompletionModal";
import { refreshPage } from "./../../utils/helper.js";

const SessionCamPage = () => {
  const { poseId } = useParams();
  const pose = poses[poseId];
  const [showModal, setShowModal] = useState(false);

  const isLastPose = Number(poseId) === poses.length - 1;

  const handleNextClick = () => {
    if (isLastPose) {
      setShowModal(true);
    } else {
      refreshPage();
    }
  };

  return (
    <main className="session">
      <PoseCam pose={pose} />
      <div className="session__nav" onClick={handleNextClick}>
        {isLastPose ? (
          <button>All Done</button>
        ) : (
          <NavLink to={`/session/${Number(poseId) + 1}`}>
            <button>Next Pose</button>
          </NavLink>
        )}
      </div>
      <CompletionModal show={showModal} />
    </main>
  );
};

export default SessionCamPage;
