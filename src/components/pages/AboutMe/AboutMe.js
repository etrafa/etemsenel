import AboutMeProps from "./AboutMeProps";

const AboutMe = ({ page }) => {
  return (
    <section>
      {page === 3 && <AboutMeProps animationName={"fadeIn"} />}
      {page === 4 && <AboutMeProps animationName={"fadeOut"} />}
    </section>
  );
};

export default AboutMe;
