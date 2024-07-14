<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/laura-nguyen/yogAInstruct">
    <img width="100%" alt="Screenshot 2024-07-14 at 1 31 48 PM" src="https://github.com/user-attachments/assets/bed65b6d-35b3-4295-aff2-01023a915cb3">

  </a>

<h3 align="center">yogAInstruct</h3>

  <p align="center">
    YogAInstruct is a web application designed to seamlessly integrate yoga and stretching routines into daily life. Leveraging AI, YogAInstruct offers real-time feedback and pose estimation to enhance posture and overall well-being.

  <br />
     <br />
    <a href="https://github.com/laura-nguyen/yogAInstruct"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/laura-nguyen/yogAInstruct">View Demo</a>
    ·
    <a href="https://github.com/laura-nguyen/yogAInstruct/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/laura-nguyen/yogAInstruct/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Screenshot](https://github.com/user-attachments/assets/8ebf1b1f-4d56-45ae-bd59-7994a0dbbb1e)


YogAInstruct is a web application designed to seamlessly integrate yoga and stretching routines into daily life. Leveraging AI, YogAInstruct offers real-time feedback and pose estimation to enhance posture and overall well-being.

The application is tailored for office workers, as well as fitness beginners, providing a convenient way to incorporate quick and effective yoga stretches to alleviate the physical strain caused by prolonged sitting. Users can access a comprehensive yoga pose library with detailed instructions, benefits, common mistakes, and tips. Additionally, YogAInstruct offers guided yoga sessions that require no special equipment, making it easy to practice yoga from the comfort of one's home or office.

With its user-friendly interface and personalized guidance, YogAInstruct aims to improve users' posture, reduce back pain, and promote a healthier, more balanced lifestyle.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

# Badges

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![p5.js](https://img.shields.io/badge/p5%20js-ED225D?style=for-the-badge&logo=p5dotjs&logoColor=white)](https://p5js.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![ml5.js](https://img.shields.io/badge/ml5.js-FF6F61?style=for-the-badge&logo=javascript&logoColor=white)](https://ml5js.org/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure you have npm installed. You can install it by running the following command:

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/laura-nguyen/yogAInstruct.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```js
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Starting a Session
#### Home Page:
- On the home page, click on the "Start Session" button to begin a guided yoga session.

#### Instructions Page:
- Follow the instructions on the screen to set up your webcam and ensure it has the necessary permissions.
- Make sure your body’s key points are visible to the camera for accurate pose detection.
  
#### Real-Time Session:
- Perform the yoga poses as guided by the app.
- The AI will provide real-time feedback on your form. If your pose is correct, you will see "Great Form!" along with a checkmark.
- If your pose is incorrect, you will receive specific feedback on how to adjust your form.

#### Completing the Session:
- After completing all poses in the session, a completion modal will appear congratulating you.
- Click "Back to Poses" to return to the Yoga Pose Library.

### Exploring the Yoga Pose Library
#### Yoga Pose Library:

- Access the Yoga Pose Library from the home page to explore various yoga poses.
- Each pose entry includes instructions, benefits, common mistakes, and tips.
#### Pose Details:

- Click on any pose to view detailed information about that pose.
- Learn about the specific benefits, common mistakes to avoid, and tips for perfecting the pose.
- Practicing Individual Poses

#### Practice Mode:
- From the Yoga Pose Library, select a pose and click "Practice" to enter practice mode.
- The app will provide real-time feedback as you practice the individual pose.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Initial set up 
- [x] Data collection and model training
- [x] User interface and core pages  
- [ ] User authentication
  - [ ] Dashboard
- [ ] Countdown timer when holding poses

See the [open issues](https://github.com/laura-nguyen/yogAInstruct/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Laura Nguyen - [@lauriananguyen](https://twitter.com/lauriananguyen) - hello@lauranguyen.me

Project Link: [https://github.com/laura-nguyen/yogAInstruct](https://github.com/laura-nguyen/yogAInstruct)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Brainstation](https://brainstation.io/)
- [Code to Career](https://codetocareer.ca/)
- Brainstation TAs, educators, and past students
- Fellow classmates
- [Icons8](https://icons8.com/)
- [Freepik - Flaticon](https://www.flaticon.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/laura-nguyen/yogAInstruct.svg?style=for-the-badge
[contributors-url]: https://github.com/laura-nguyen/yogAInstruct/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/laura-nguyen/yogAInstruct.svg?style=for-the-badge
[forks-url]: https://github.com/laura-nguyen/yogAInstruct/network/members
[stars-shield]: https://img.shields.io/github/stars/laura-nguyen/yogAInstruct.svg?style=for-the-badge
[stars-url]: https://github.com/laura-nguyen/yogAInstruct/stargazers
[issues-shield]: https://img.shields.io/github/issues/laura-nguyen/yogAInstruct.svg?style=for-the-badge
[issues-url]: https://github.com/laura-nguyen/yogAInstruct/issues
[license-shield]: https://img.shields.io/github/license/laura-nguyen/yogAInstruct.svg?style=for-the-badge
[license-url]: https://github.com/laura-nguyen/yogAInstruct/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/laura-nguyen

