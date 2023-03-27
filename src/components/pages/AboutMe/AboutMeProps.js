//import myCV from "../../../assets/etemsenel-cv.pdf";
import { Animated } from "react-animated-css";

const AboutMeProps = (props) => {
  return (
    <Animated
      animationIn={props.animationName}
      animationInDuration={4000}
      className="py-20 flex flex-col justify-center items-center xl:blocks"
    >
      <section>
        <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
          ABOUT ME
        </h3>
        <article className="leading-9 mt-12 lg:leading-34 font-semibold text-sm lg:text-base text-white max-w-screen-lg mx-auto">
          <p className="px-12 lg:px-6 my-12">
            My name is Etem Senel and I’m a front-end developer based in Kansas
            City. I have a passion for challenging myself and developing new
            skill sets. I’m eager to contribute to the industry and I feel more
            than ready to jump into my first dev role where I can learn and face
            new challenges every day.
          </p>
          <p className="px-12 lg:px-6 my-12">
            Before discovering my passion for web development I was in the
            education field. My background in education has given me skill sets
            that have translated very well into this new area of my life. For
            one I know how to effectively teach and teach myself which I believe
            is an invaluable skill set in an industry that is always changing.
            It has taught me the importance in optimization through efficient
            study habits and organization, the value of camaraderie, and an
            eagerness to learn more than I know today.
          </p>
          <p className="px-12 lg:px-6 my-12">
            When I’m not busy developing apps, I enjoy living slow. I enjoy
            spending time with my wife, spending time in nature, and I have a
            passion for exploring contemporary and traditional instruments and
            music.
          </p>
        </article>
        <div className="block mx-auto w-full text-center">
          <a
            href="https://drive.google.com/file/d/18LEIcvHsADYLrOb7akkc6aK4mpaak4Et/view"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-black bg-main-yellow-color font-medium rounded-lg text-sm px-5 mt-12 lg:mt-0 py-2.5 text-center inline-flex items-center mb-2 hover:bg-white">
              My Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </a>
        </div>
      </section>
    </Animated>
  );
};

export default AboutMeProps;
