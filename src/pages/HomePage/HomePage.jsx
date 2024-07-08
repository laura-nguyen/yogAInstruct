import "./HomePage.scss";
import heroImage from "./../../assets/images/warrior ii.jpeg";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <div className="main__copy">
          <h1>Get Fit Anywhere, Anytime</h1>
          <p>
            Kick-start your fitness journey with Flexifit AI, your personal AI
            trainer that brings expert-guided workouts right to your home.
            Whether you're a busy professional or just starting your fitness
            journey, Flexifit AI offers tailored workout programs, real-time
            feedback, and progress tracking to help you achieve your fitness
            goals.
          </p>
          <button>Start Your Free Trial</button>
          <a href="#about">Learn More About Us</a>
        </div>
        <img className="main__img" src={heroImage} alt="" />
      </main>

      {/* <section className="about">
        <h2>Get Started in 3 Simple Steps</h2>
        <ul className="about__list">
          <li className="about__card">
            <img className="main__img" src={heroImage} alt="" />
            <h4>Sign Up and Set Your Goals</h4>
            <p>
              Create an account and tell us about your fitness goals and current
              fitness level.
            </p>
          </li>
          <li className="about__card">
            <img className="main__img" src={heroImage} alt="" />
            <h4>Follow Your Personalized Workout Plan</h4>
            <p>
              Get access to customized workout programs designed specifically
              for you. Follow along with real-time feedback to ensure proper
              form and maximize results.
            </p>
          </li>
          <li className="about__card">
            <img className="main__img" src={heroImage} alt="" />
            <h4>Track Your Progress and Stay Motivated</h4>
            <p>
              Monitor your progress with detailed analytics and reports.
              Celebrate your achievements and stay motivated with our built-in
              reward system.
            </p>
          </li>
        </ul>
      </section> */}

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
