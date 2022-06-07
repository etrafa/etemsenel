import CryptoApp from "./projects/CryptoApp";
import RetinaApp from "./projects/RetinaApp";
import SpinGame from "./projects/SpinGame";
import TshirtApp from "./projects/TshirtApp";
import { Animated } from "react-animated-css";

const Projects = ({ page }) => {
  return (
    <div>
      {page === 7 && (
        <Animated
          animationIn="fadeIn"
          animationInDuration={4000}
          className="py-12"
        >
          <section>
            <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
              PROJECTS
            </h3>
            <div className="lg:grid lg:grid-cols-2 max-w-screen-2xl mx-auto mb-8 lg:mb-0">
              <CryptoApp />
              <TshirtApp />
              <RetinaApp />
              <SpinGame />
            </div>
          </section>
        </Animated>
      )}
      {page === 8 && (
        <Animated
          animationIn="fadeOut"
          animationInDuration={4000}
          className="py-12"
        >
          <section>
            <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
              PROJECTS
            </h3>
            <div className="lg:grid lg:grid-cols-2 max-w-screen-2xl mx-auto mb-8 lg:mb-0">
              <CryptoApp />
              <TshirtApp />
              <RetinaApp />
              <SpinGame />
            </div>
          </section>
        </Animated>
      )}
    </div>
  );
};

export default Projects;
