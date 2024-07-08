# Project Title
Yoga AI

## Overview

Yoga AI is an intelligent web application designed to help individuals integrate yoga and stretching routines into their daily lives. It trains users on yoga poses, educates them on their benefits, and provides a timer to hold poses for a specified duration. Utilizing AI and Machine Learning, Yoga AI offers guided sessions with real-time feedback and pose estimation to improve posture and overall well-being.

### Problem

Many people spend long hours sitting, leading to poor posture, back pain, and other health issues. Lack of movement and stretching can result in decreased productivity and long-term health problems. Yoga is an excellent way to improve mental and physical health without requiring any equipment, but there is often a lack of accessible, guided resources for beginners.

### User Profile
  
- **Desk/Remote Workers, and Fitness Beginners**:
- Looking for quick and effective yoga stretches to relieve the physical strain of sitting for long periods
- Wanting to improve their posture and reduce back pain
- Seeking guided yoga sessions that can be done at their desk without any special equipment
- Interested in tracking their progress and seeing improvements over time


### Features

- Real-time Pose Estimation: Using AI/ML to provide instant feedback on yoga pose form.
- Real-time Counter: Countdown while holding a pose.
- Yoga Pose Library: Detailed information on beginner yoga poses, including instructions, benefits, and Sanskrit names.
- Guided Sessions: Structured yoga sessions tailored for beginners.

## Implementation

### Tech Stack

- React
- SCSS
- Node.js
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - ml5.js
  - p5.js
- Server libraries:
  - express

### APIs

- Exercise Database API: To fetch exercise details and routines.

### Sitemap

- **Homepage**:
  - Welcome message
  - Overview of features
- **Real-Time Session**:
  - Live video feed with pose estimation overlay
  - Real-time feedback and instructions
- **Yoga Pose Library**:
  - Information on beginner poses
  
### Mockups

#### Home Page
![](home.png)

#### Yoga Pose Library 
![](register.png)

#### Real-Time Session
![](login.png)


### Data

- No databases will be used for this project

### Endpoints

**GET /poses**

- Retrieve a list of yoga poses with details.


Response:
```
[
   {
     "english_name": "Tree",
     "sanskrit_name_adapted": "Vrksasana",
     "sanskrit_name": "Vṛkṣāsana",
     "pose_description": "Tree Pose is a balancing posture that strengthens the legs, ankles, and feet while improving flexibility and balance.",
     "pose_benefits": "Strengthens the legs, ankles, and feet. Improves flexibility in the hips and knees. Improves balance.",
     "image": "URL_to_image",
     "categories": ["Standing Poses", "Balancing Poses"],
     "instructions": [
       "Start standing tall with feet together.",
       "Shift weight onto one foot.",
       "Place the sole of the other foot on the inner thigh.",
       "Press hands together in prayer position at chest.",
       "Raise arms overhead with palms touching.",
       "Keep gaze forward and hold."
     ]
   },
   ...
]
```

**GET /poses/:id**

- Retrieve a specific yoga pose by ID during the real time session.

Parameters:
- id: Pose id as number

Response:
```
{
   "english_name": "Tree",
   "sanskrit_name_adapted": "Vrksasana",
   "sanskrit_name": "Vṛkṣāsana",
   "pose_description": "Tree Pose is a balancing posture that strengthens the legs, ankles, and feet while improving flexibility and balance.",
   "pose_benefits": "Strengthens the legs, ankles, and feet. Improves flexibility in the hips and knees. Improves balance.",
   "image": "URL_to_image",
   "categories": ["Standing Poses", "Balancing Poses"],
   "instructions": [
     "Start standing tall with feet together.",
     "Shift weight onto one foot.",
     "Place the sole of the other foot on the inner thigh.",
     "Press hands together in prayer position at chest.",
     "Raise arms overhead with palms touching.",
     "Keep gaze forward and hold."
   ]
}
```


### Auth

- No auth will be used for this project

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

#### API Development
- Create an API for yoga poses.
  - `GET /api/yoga-poses`: Retrieve a list of yoga poses.
  - `GET /api/yoga-poses/:id`: Retrieve a specific yoga pose by ID.
- Create counter timer functionality to track pose durations.

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

### Sprint 3: Advanced Features and Final Touches

#### User Authentication (Nice-to-Have)
- Implement Sign Up and Log In functionality using Firebase Auth or JWT-based authentication.
- Create user registration and authentication forms.

#### Dashboard and Progress Tracking (Nice-to-Have)
- Develop a user dashboard to overview progress, quick stats, and goals.
- Implement functionality to track user progress and display past sessions.

#### Post-Session Summary (Nice-to-Have)
- Create a post-session summary page to provide feedback on session performance.

#### Social Sharing and Customization (Nice-to-Have)
- Add social sharing features to allow users to share achievements on social media.
- Enable users to create and save custom yoga routines.

#### Final Testing and Refinement
- Conduct thorough testing to ensure all features work as expected.
- Refine the user experience based on feedback and testing results.
- Prepare the application for deployment.

### Deployment
- Deploy the client and server to a production environment.
- Ensure that all components are fully functional and accessible.

### Nice-to-haves
- **Social Sharing**: Allow users to share their achievements on social media.
- **Additional Exercises**: Add more exercises, such as push-ups or full-body workouts.
- **User Profile**: View and edit personal information, set fitness goals, view session history.
- **Virtual Coaching**: Audio and visual guidance during sessions.
