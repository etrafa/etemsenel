import ProjectsProps from "./ProjectsProps";

const Projects = ({ page }) => {
  return (
    <section>
      {page === 7 && <ProjectsProps animationName={"fadeIn"} />}
      {page === 8 && <ProjectsProps animationName={"fadeOut"} />}
    </section>
  );
};

export default Projects;
