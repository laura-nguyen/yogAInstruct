import StretchesCam from "../../components/StretchesCam/StretchesCam";
import Timer from "../../components/Timer/Timer";
import "./WebcamPage.scss";

const WebcamPage = () => {
  return (
    <main className="session">
      <StretchesCam />
      <Timer />
    </main>
  );
};

export default WebcamPage;
