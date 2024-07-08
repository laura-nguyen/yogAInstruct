import "./HomePage.scss";
import heroImage from "./../../assets/images/warrior ii.jpeg";
import ideaIcon from "./../../assets/images/idea.png";
import hourglassIcon from "./../../assets/images/hourglass.png";
import likeIcon from "./../../assets/images/like.png";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <div className="main__copy">
          <h5>Powered by AI 🌟</h5>
          <h1>Your Personal Yoga Trainer</h1>

          <p>
            Transform your day with your intelligent companion - providing
            real-time feedback, guided sessions, and a library of beginner yoga
            exercises to improve posture, and enhance well-being.
          </p>
          <div className="main__cta-links">
            <button>Practice</button>
            <a href="#about">Learn Poses</a>
          </div>
        </div>
        {/* <img className="main__img" src={heroImage} alt="" /> */}
      </main>

      <section className="about">
        <h2>Personal guidance at your convenience</h2>
        <ul className="about__list">
          <li className="about__card">
            <img
              className="main__img"
              src={ideaIcon}
              alt="icon of a lightblub floating on a book"
            />
            <h4>Learn Beginner Poses</h4>
            <p>
              Our app guides you through beginner yoga poses and educates you on
              their benefits, making it easy for anyone to get started.
            </p>
          </li>
          <li className="about__card">
            <img
              className="main__img"
              src={hourglassIcon}
              alt="hourglass icon"
            />
            <h4>Real-Time Countdown Timer</h4>
            <p>
              Hold each pose for the perfect duration with our real-time
              countdown timer, ensuring you get the most out of every session.
            </p>
          </li>
          <li className="about__card">
            <img
              className="main__img"
              src={likeIcon}
              alt="like with text bubbles icon"
            />
            <h4>Instant Feedback</h4>
            <p>
              Experience guided sessions with instant feedback, powered by AI,
              to improve your posture and overall well-being right from your
              fingertips.
            </p>
          </li>
        </ul>
      </section>

      <h1 className="bold">
        H1 The quick brown fox jumps over the lazy dog Bold{" "}
      </h1>
      <h2 className="semi-bold">
        H2 The quick brown fox jumps over the lazy dog SemiBold
      </h2>
      <h3 className="medium">
        H3 The quick brown fox jumps over the lazy dog Medium
      </h3>
      <h4 className="medium">
        H4 The quick brown fox jumps over the lazy dog medium
      </h4>
      <h5 className="medium">
        H5 The quick brown fox jumps over the lazy dog medium
      </h5>

      <p className="regular">
        p The quick brown fox jumps over the lazy dog Regular
      </p>
      <p className="extra-light">
        p The quick brown fox jumps over the lazy dog Extra Light
      </p>
      <button>Button The quick brown fox jumps over the lazy dog</button>
    </>
  );
};

export default HomePage;
