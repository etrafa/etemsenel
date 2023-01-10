import SkillsProps from "./SkillsProps";

const Skills = ({ page }) => {
  return (
    <section>
      {page === 5 && <SkillsProps animationName="fadeIn" />}
      {page === 6 && <SkillsProps animationName="fadeOut" />}
    </section>
  );
};

export default Skills;
