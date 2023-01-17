import { Animated } from "react-animated-css";
import Project from "./my-projects/Project";

// assets
import cryptoImage from "../../../assets/works/cryptoImage.png";
import cryptoVideo from "../../../assets/works/cryptoVideo.mp4";
import bugTrackerImage from "../../../assets/works/bugTrackerImage.png";
import bugTrackerVideo from "../../../assets/works/bugTrackerVideo.mp4";
import eCommerceImage from "../../../assets/works/eCommerceImage.png";
import eCommerceVideo from "../../../assets/works/eCommerceVideo.mp4";
import retinaImage from "../../../assets/works/retinaImage.png";
import retinaVideo from "../../../assets/works/retinaVideo.mp4";
import triviaImage from "../../../assets/works/triviaGameImage.png";
import triviaVideo from "../../../assets/works/triviaGameVideo.mp4";

const ProjectsProps = (props) => {
  return (
    <Animated
      animationIn={props.animationName}
      animationInDuration={4000}
      className="py-12"
    >
      <section>
        <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
          PROJECTS
        </h3>
        <div className="lg:grid lg:grid-cols-2 max-w-screen-2xl mx-auto mb-8 lg:mb-0">
          <Project
            projectName="Crypto App"
            technologies={["React", "Bootstrap", "API", "Router", "ChartJS"]}
            projectImage={cryptoImage}
            projectVideo={cryptoVideo}
            projectDescription="This website was built by using React for UI components, and Bootstrap
            for styling. I then connected my website to a third-party currency API.
            To make it more attractive, I added a graph which allows users to see
            their cryptocurrency price history with a range of 24 hours and 3 years.
            I then deployed my website on Github."
            sourceCode="https://github.com/etrafa/crypto-app"
            demoLink="https://etrafa.github.io/crypto-app/"
          />

          <Project
            projectName="Bug Tracker"
            technologies={[
              "NextJS",
              "Typescript",
              "Tailwind",
              "Firebase",
              "Context API",
            ]}
            projectImage={bugTrackerImage}
            projectVideo={bugTrackerVideo}
            projectDescription="empty for now."
            sourceCode="https://github.com/etrafa/bug-tracker-typescript"
            demoLink="https://bug-tracker-el.vercel.app/"
          />

          <Project
            projectName="Shopify App"
            technologies={[
              "React",
              "Tailwind",
              "API",
              "Firebase",
              "Router",
              "Context API",
            ]}
            projectImage={eCommerceImage}
            projectVideo={eCommerceVideo}
            projectDescription=" For this project, I created an e-commerce website which allows users
            search a product, sign-in, sign-out with a Google account and be able to
            checkout. I created the UI components with NextJS. I then styled the
            components using TailwindCSS. For this website, I created a database
            hosted by Firebase. Then by connecting my website to this database I
            displayed all the products on the UI. For this project, I preferred
            deploying my website on Vercel because I worked with NextJS."
            sourceCode="https://github.com/etrafa/shopify"
            demoLink="https://elstore.vercel.app/"
          />

          <Project
            projectName="Retina"
            technologies={[
              "React",
              "Tailwind",
              "API",
              "Firebase",
              "Router",
              "Context API",
            ]}
            projectImage={retinaImage}
            projectVideo={retinaVideo}
            projectDescription=" I created a gallery app which allows users to be able to search keywords
            and find thousands of pictures, save them to their account and remove
            them from their list again. I connected Pexel API to my project. For the
            UI components I used React and for styling I used TailwindCSS. For the
            state management, I preferred using Context API provided by React. I
            then deployed my website on Firebase."
            sourceCode="https://github.com/etrafa/gallery-app"
            demoLink="https://photo-app-el.vercel.app/"
          />

          <Project
            projectName="Spin - Trivia Game"
            technologies={["HTML 5", "CSS 3", "Javascript", "API"]}
            projectImage={triviaImage}
            projectVideo={triviaVideo}
            projectDescription="For this project, I built a game which allows users to spin a wheel and
            answer questions in a category determined by the spinning wheel. The API
            I used in this project was Trivia API. During the process of building
            this app I ran into a problem. The API response didn’t format all of the
            characters into human readable letters which I then had to correct. Then
            I deployed it on GitHub."
            sourceCode="https://github.com/etrafa/spin-trivia"
            demoLink="https://etrafa.github.io/spin-trivia/"
          />
        </div>
      </section>
    </Animated>
  );
};

export default ProjectsProps;
