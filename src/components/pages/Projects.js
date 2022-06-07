import CryptoApp from "./projects/CryptoApp";
import RetinaApp from "./projects/RetinaApp";
import SpinGame from "./projects/SpinGame";
import TshirtApp from "./projects/TshirtApp";

const Projects = ({ page }) => {
  return page === 4 ? (
    <section className="py-12">
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
  ) : null;
};

export default Projects;
