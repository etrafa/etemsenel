import { Animated } from "react-animated-css";

//images
import skillHtml from "../../../assets/skills/html5.png";
import skillCss from "../../../assets/skills/css3.png";
import skillJavascript from "../../../assets/skills/javascript.svg";
import skillBootstrap from "../../../assets/skills/boostrap.svg";
import skillReact from "../../../assets/skills/react.svg";
import skillTailwind from "../../../assets/skills/tailwindcss.png";
import skillNextJS from "../../../assets/skills/nextjs.png";
import skillFirebase from "../../../assets/skills/firebase.svg";
import skillGit from "../../../assets/skills/git.png";
import skillNpm from "../../../assets/skills/npm.svg";
import skillTypescript from "../../../assets/skills/typescript.svg";

const SkillsProps = (props) => {
  return (
    <Animated
      animationIn={props.animationName}
      animationInDuration={4000}
      className="py-12 lg:h-[calc(100vh_-_56px)] lg:flex lg:flex-col lg:justify-center lg:items-center lg:pb-40"
    >
      <section>
        <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
          SKILLS
        </h3>
        <picture className="mt-12 max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-24 items-center">
          <img className="w-24 h-24 mx-auto" src={skillHtml} alt="html icon" />
          <img className="w-24 h-24 mx-auto" src={skillCss} alt="css icon" />
          <img
            className="w-24 h-24 mx-auto"
            src={skillJavascript}
            alt="javascript icon"
          />
          <img
            className="w-24 h-24 mx-auto"
            src={skillTypescript}
            alt="typescript icon"
          />
          <img
            className="w-24 h-24 mx-auto"
            src={skillReact}
            alt="react icon"
          />
          <img
            className="w-32 h-32 mx-auto"
            src={skillNextJS}
            alt="bootstrap icon"
          />
          <img
            className="w-24 h-24 mx-auto"
            src={skillTailwind}
            alt="tailwind icon"
          />
          <img
            className="w-24 h-24 mx-auto"
            src={skillFirebase}
            alt="firebase icon"
          />

          <img className="w-24 h-24 mx-auto" src={skillGit} alt="git icon" />
          <img className="w-24 h-24 mx-auto" src={skillNpm} alt="npm icon" />
        </picture>
        <div></div>
      </section>
    </Animated>
  );
};

export default SkillsProps;
