import React, { useRef, useEffect } from "react";
import * as ml5 from "ml5";
import p5 from "p5";
import StretchesPage from "./pages/StretchesPage/StretchesPage";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let video;
    let poseNet;
    let pose;
    let skeleton;
    let brain;
    let poseLabel = "";
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
          outputs: 4,
          task: "classification",
          debug: true,
        };
        brain = ml5.neuralNetwork(options);

        const modelInfo = {
          model: "/model/model.json",
          metadata: "/model/model_meta.json",
          weights: "/model/model.weights.bin",
        };

        fetch(modelInfo.model)
          .then((response) => response.text())
          .then((text) => console.log(text))
          .catch((error) => console.error("Error loading model:", error));

        brain.load(modelInfo, brainLoaded);
      };

      p.draw = () => {
        p.push();
        p.translate(video.width, 0);
        p.scale(-1, 1);
        p.image(video, 0, 0, video.width, video.height);

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

        p.fill(255, 0, 255);
        p.noStroke();
        p.textSize(100);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(poseLabel, p.width / 2, p.height / 2);
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
      if (results && results[0].confidence > 0.75) {
        const sketchLabel = results[0].label.toUpperCase();
        if (sketchLabel === "A") {
          poseLabel = "overhead";
        } else if (sketchLabel === "B") {
          poseLabel = "right stretch";
        } else if (sketchLabel === "C") {
          poseLabel = "left stretch";
        } else {
          poseLabel = "overhead right stretch";
        }
      }
      classifyPose();
    }

    function gotPoses(poses) {
      if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
        if (state === "collecting") {
          let inputs = [];
          for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            inputs.push(x);
            inputs.push(y);
          }
          let target = [targetLabel];
          brain.addData(inputs, target);
        }
      }
    }

    return () => {
      // Clean up on component unmount
      if (video) {
        video.remove();
      }
      myp5.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default App;
