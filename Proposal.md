# Yoga AI

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

<img width="600" alt="Screenshot 2024-07-07 at 11 39 30 PM" src="https://github.com/laura-nguyen/desk-yoga-ai/assets/39463778/2279a2f2-84af-4546-8d3d-71bede4fe992">

#### Yoga Pose Library

<img width="600" alt="Screenshot 2024-07-07 at 11 43 59 PM" src="https://github.com/laura-nguyen/desk-yoga-ai/assets/39463778/0d8d4e74-8631-4723-bc8b-5d41d4cf1b0d">

#### Real-Time Session

<img width="600" alt="image" src="https://github.com/laura-nguyen/desk-yoga-ai/assets/39463778/42758bc9-4d99-40ea-b670-db0b02df58f7">

#### Nice-to-Haves

<img width="600" alt="image" src="https://github.com/laura-nguyen/desk-yoga-ai/assets/39463778/9b9e97b4-38a9-4820-b8c7-2b13983c11ff">

### Data

- No databases will be used for this project.

### Endpoints

- No endpoints will be used for this project,.

### Auth

- No auth will be used for this project.

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

## Nice-to-haves

- **Social Sharing**: Allow users to share their achievements on social media.
- **Additional Exercises**: Add more exercises, such as push-ups or full-body workouts.
- **User Profile**: View and edit personal information, set fitness goals, view session history.
- **Virtual Coaching**: Audio and visual guidance during sessions.
