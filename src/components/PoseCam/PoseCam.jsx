import { useRef, useEffect, useState } from "react";
import * as ml5 from "ml5";
import p5 from "p5";
import "./PoseCam.scss";
import { NavLink } from "react-router-dom";
import { refreshPage } from "./../../utils/helper.js";

const PoseCam = ({ pose }) => {
  const {
    id,
    english_name,
    image,
    pose_description,
    pose_benefits,
    instructions,
  } = pose;
  const canvasRef = useRef(null);

  const [poseLabel, setPoseLabel] = useState("Detecting Pose...");

  useEffect(() => {
    let video;
    let poseNet;
    let pose;
    let skeleton;
    let brain;
    let state = "waiting";
    let targetLabel;

    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(640, 480);
        if (canvasRef.current) {
          canvas.parent(canvasRef.current);
        }
        video = p.createCapture(p.VIDEO);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);

        let options = {
          inputs: 34,
          outputs: 7,
          task: "classification",
          debug: true,
        };
        brain = ml5.neuralNetwork(options);

        // use different models for each exercise

        const modelInfo = {
          model: "/model-" + `${id}` + "/model.json",
          metadata: "/model-" + `${id}` + "/model_meta.json",
          weights: "/model-" + `${id}` + "/model.weights.bin",
        };

        fetch(modelInfo.model)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Model JSON:", data);
            brain.load(modelInfo, brainLoaded);
          })
          .catch((error) => {
            console.error("Error loading model:", error);
          });
      };

      p.draw = () => {
        p.push();
        p.translate(video.width, 0);
        p.scale(-1, 1);
        p.image(video, 0, 0, video.width, video.height);
        // specifies stoke of pose lines
        if (pose) {
          for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            p.strokeWeight(2);
            p.stroke(0);
            p.line(a.position.x, a.position.y, b.position.x, b.position.y);
          }
          for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            p.fill(0);
            p.stroke(255);
            p.ellipse(x, y, 16, 16);
          }
        }
        p.pop();
      };
    };

    const myp5 = new p5(sketch);

    function modelLoaded() {
      console.log("poseNet ready");
    }

    function brainLoaded() {
      console.log("pose classification ready!");
      classifyPose();
    }

    function classifyPose() {
      if (pose) {
        let inputs = [];
        for (let i = 0; i < pose.keypoints.length; i++) {
          let x = pose.keypoints[i].position.x;
          let y = pose.keypoints[i].position.y;
          inputs.push(x);
          inputs.push(y);
        }
        brain.classify(inputs, gotResult);
      } else {
        setTimeout(classifyPose, 100);
      }
    }

    function gotResult(error, results) {
      if (results && results[0].confidence > 0.9) {
        setPoseLabel(results[0].label);
        if (results[0].label === "Great Form!") {
          document.body.classList.add("great-form");
        } else {
          document.body.classList.remove("great-form");
        }
      }
      classifyPose();
    }

    function gotPoses(poses) {
      if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
      }
    }

    return () => {
      if (video) {
        video.remove();
      }
      myp5.remove();
    };
  }, []);

  return (
    <>
      <h1>{english_name}</h1>
      <div className="cam-container">
        <div className="cam__content--left">
          <div ref={canvasRef}></div>
          <div
            className={`cam__feedback ${
              poseLabel === "Great Form!" ? "cam__feedback--success" : ""
            }`}
          >
            {poseLabel === "Great Form!" && "✅"} {poseLabel}
          </div>
        </div>

        <div className="cam__content--right">
          <img
            className="cam__img"
            src={`/${image}`}
            alt={`${english_name} pose`}
          />

          <ol className="cam__instructions">
            <h4>Step by Step</h4>
            {instructions.map((step, index) => (
              <li className="cam__instructions-step" key={index}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* <div className="cam__nav" onClick={refreshPage}>
        <NavLink to="/poses">
          <button>All Poses</button>
        </NavLink>
        <NavLink to={`/practice/${Number(id) + 1}`} onClick={refreshPage}>
          <button>Next Pose</button>
        </NavLink>
      </div> */}
    </>
  );
};

export default PoseCam;
