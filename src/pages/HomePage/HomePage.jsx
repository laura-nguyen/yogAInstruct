import "./HomePage.scss";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const yogaIcons = [
    "🧘‍♀️",
    "🧘🏿‍♂️",
    "🧘🏼‍♀️",
    "🧘🏽‍♂️",
    "🧘🏿‍♀️",
    "🧘🏼‍♂️",
    "🧘🏽‍♀️",
    "🧘🏾‍♂️",
    "🧘🏻‍♀️",
    "🧘🏾‍♂️",
    "🧘‍♀️",
    "🧘🏿‍♂️",
    "🧘🏼‍♀️",
    "🧘🏽‍♂️",
    "🧘🏿‍♀️",
    "🧘🏼‍♂️",
    "🧘🏽‍♀️",
    "🧘🏾‍♂️",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const heroIcon = document.getElementById("main__icon");

    const interval = setInterval(() => {
      heroIcon.innerHTML = yogaIcons[currentIndex];

      currentIndex++;

      if (currentIndex === yogaIcons.length) currentIndex = 0;
    }, 1000);

    return () => clearInterval(interval);
  }, [yogaIcons]);

  return (
    <>
      <main className="main">
        <div className="main__copy">
          <h5>Powered by AI 🌟</h5>
          <h1>Transform your day with your personal yoga trainer</h1>

          <p>
            Providing real-time feedback, guided sessions, and a library of
            beginner yoga exercises to improve posture, and enhance well-being.
          </p>
          <div className="main__cta-links">
            <NavLink to="/instructions">
              <button>Practice</button>
            </NavLink>
            <NavLink to="/poses" className="nav__link--non-button">
              Learn
            </NavLink>
          </div>
        </div>
        <div id="main__icon" className="main__icon">
          🧘🏻‍♀️
        </div>
      </main>

      <section className="about">
        <h2 className="about__header">Personal Guidance at Your Convenience</h2>
        <ul className="about__list">
          <li className="about__card">
            <div className="main__img">📚</div>

            <h4>Learn Beginner Poses</h4>
            <p>
              Our app guides you through beginner yoga poses and educates you on
              their benefits, making it easy for anyone to get started.
            </p>
          </li>
          <li className="about__card">
            <div className="main__img">⏳</div>

            <h4>Real-Time Countdown Timer</h4>
            <p>
              Hold each pose for the perfect duration with our real-time
              countdown timer, ensuring you get the most out of every session.
            </p>
          </li>
          <li className="about__card">
            <div className="main__img">✅</div>

            <h4>Get Instant Feedback</h4>
            <p>
              Experience guided sessions with instant feedback, powered by AI,
              to improve your posture and overall well-being right from your
              fingertips.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomePage;
