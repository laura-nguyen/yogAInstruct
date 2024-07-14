# YogAInstruct

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/c59f26b0-a0b2-4a16-860d-d8cc44d54b53">


## Overview

YogAInstruct is an AI web application designed to help individuals integrate yoga and stretching routines into their daily lives. It trains users on yoga poses, educates them on their benefits, and provides real-time feedback to improve posture and overall well-being.

### Problem

Many people spend long hours sitting, leading to poor posture, back pain, and other health issues. Lack of movement and stretching can result in decreased productivity and long-term health problems. Yoga is an excellent way to improve mental and physical health without requiring any equipment, but there is often a lack of accessible, guided resources for beginners.

### User Profile

- **Desk/Remote Workers, and Fitness Beginners**:
- Looking for quick and effective yoga stretches to relieve the physical strain of sitting for long periods
- Wanting to improve their posture and reduce back pain
- Seeking guided yoga sessions that can be done at their desk without any special equipment
- Interested in tracking their progress and seeing improvements over time

### Features

- As a user, I want to receive real-time pose estimation to get instant feedback on my yoga pose form.
- As a user, I want access to a yoga pose library with detailed information on beginner yoga poses, including instructions, benefits, common mistakes, and general tips.
- As a user, I want to participate in guided sessions that provide structured yoga routines tailored for beginners.

## Implementation

### Tech Stack

- React
- SCSS
- Node.js
- Client libraries:
  - react
  - react-router
  - ml5.js
  - p5.js

### Sitemap

![image](https://github.com/user-attachments/assets/2fb7d625-20a7-4891-83d0-03e725c91be1)


- **Homepage**:
  - Welcome message
  - Overview of features
- **Instructions Page**:
  - Instructions on how to set up before starting a session (e.g., accept webcam permissions, ensure keypoints on body, perform pose)
- **Real-Time Session**:
  - Live video feed with pose estimation overlay
  - Real-time feedback and pose instructions
- **Yoga Pose Library**:
  - Information on 6 beginner poses
- **Yoga Pose Practice**:
  - Live video feed to practice an individual yoga pose
  - Real-time feedback and pose instructions
- **Yoga Pose Details**:
  - Details on individual yoga poses, including instructions, benefits, common mistakes, and general tips.

### Mockups

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/26588823-7c6f-45d2-aadc-d5d1ac381f59">
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/bc74b880-8563-44d0-bf71-060ea5177e11">
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/063849a9-0ca6-4c89-bcc5-619e31933e7d">

### Data

- Data is stored in JSON format. Here is a snippet of the client-side data structure:

  ```
  [
   {
    "id": "0",
    "english_name": "Tree",
    "sanskrit_name_adapted": "Vrksasana",
    "sanskrit_name": "Vṛkṣāsana",
    "pose_description": "Tree Pose is a balancing posture that strengthens the legs, ankles, and feet while improving flexibility and balance.",
    "pose_benefits": [
      "Strengthens the legs, ankles, and feet.",
      "Improves flexibility in the hips and knees.",
      "Improves balance."
    ],
    "image": "src/assets/images/tree pose.jpeg",
    "categories": ["Standing", "Balancing"],
    "instructions": [
      "Start standing tall with feet together.",
      "Shift weight onto one foot.",
      "Place the sole of the other foot on the inner thigh.",
      "Press hands together in prayer position at chest.",
      "Raise arms overhead with palms touching.",
      "Keep gaze forward and hold."
    ],
    "common_mistakes": [
      "Not aligning the hips",
      "Knee not pointing forward",
      "Shoulders not relaxed"
    ],
    "tips": [
      "Engage your core",
      "Keep your breathing steady",
      "Focus on a fixed point to maintain balance"
    ]
  },
   ...
  ]
  ```

### Endpoints and Auth

- No endpoints and auth will be used for this project.

## Roadmap

### Sprint 1: Initial Setup and Core Features

#### Project Setup

- Set up project structure and initial environment.
- Create client folder and initialize a React project.
- Initialize backend with Node.js and Express.

#### Library Testing

- Test the ml5 and p5 library for pose detection and visualization.

#### Data Collection and Model Training

- Collect data on keypoints for various yoga poses.
- Train the ML model using collected data to accurately detect yoga poses.

#### Real-Time Pose Estimation

- Deploy the trained model to detect yoga poses in real-time using TensorFlow.js and PoseNet.
- Implement real-time pose estimation and feedback.

### Sprint 2: User Interface and Core Pages

#### Homepage Development

- Create a welcoming homepage with an overview of features.
- Add call-to-action buttons (Sign Up, Log In).

#### Real-Time Session Page

- Develop the real-time session page with live video feed and pose estimation overlay.
- Provide real-time feedback and instructions during sessions.

#### Yoga Pose Library

- Implement a yoga pose library page with detailed information on beginner poses.
- Include instructions, benefits, and images for each pose.

#### Styling and User Experience

- Style the application using SCSS for a modern and responsive design.
- Ensure the user interface is intuitive and easy to navigate.

### Sprint 3: Final Touches

#### Final Testing and Refinement

- Conduct thorough testing to ensure all features work as expected.
- Refine the user experience based on feedback and testing results.
- Prepare the application for deployment.

### Deployment

- Deploy the client and server to a production environment.
- Ensure that all components are fully functional and accessible.

## Nice-to-haves

#### User Authentication (Nice-to-Have)

- Implement Sign Up and Log In functionality using Firebase Auth or JWT-based authentication.
- Create user registration and authentication forms.

#### Dashboard and Progress Tracking (Nice-to-Have)

- Develop a user dashboard to overview progress, quick stats, and goals.
- Implement functionality to track user progress and display past sessions.

#### Post-Session Summary (Nice-to-Have)

- Create a post-session summary page to provide feedback on session performance.

#### Timer (Nice-to-Have)

- Add social sharing features to allow users to share achievements on social media.
- Enable users to create and save custom yoga routines.
