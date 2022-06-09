import myCV from "../../assets/etemsenel-cv.pdf";
import { Animated } from "react-animated-css";

const AboutMe = ({ page }) => {
  return (
    <div>
      {page === 3 && (
        <Animated
          animationIn="fadeIn"
          animationInDuration={4000}
          className="py-20 flex flex-col justify-center items-center xl:blocks"
        >
          <section>
            <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
              ABOUT ME
            </h3>
            <article className="leading-9 mt-12 lg:leading-34 font-semibold text-sm lg:text-base text-white max-w-screen-lg mx-auto">
              <p className="px-12 lg:px-6 my-12">
                Hi, my name's Etem and I'm a front-end developer. My biggest
                passion is to challange my skills and thus learn everyday
                something new. I feel more than ready for my first dev role
                where I finally can show my skills.
              </p>
              <p className="px-12 lg:px-6 my-12">
                I'm pretty sure you would ask why I chose this career path?
                Well, my previous job was being a English language teacher. So,
                I really know students' weakness during learning and used to
                help them to get over that. During my coding times, I was both a
                student and a teacher of myself. And because I know there are
                still thousand of things to learn, as a teacher, I decided it is
                very good opportunity to expand my skills and challenge myself!
              </p>
              <p className="px-12 lg:px-6 my-12">
                When I'm not busy developing apps, I enjoy spending my time with
                my wife. I really enjoy drinking coffee and have a long
                conversation with her. I also like going for a long walks while
                listening my favorite musics. And sometimes rather than only
                listening songs, I prefer playing my guitar at home!
              </p>
            </article>
            <div className="block mx-auto w-full text-center">
              <a href={myCV} download>
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
      )}
      {page === 4 && (
        <Animated
          animationIn="fadeOut"
          animationInDuration={4000}
          className="py-20 flex flex-col justify-center items-center xl:blocks"
        >
          <section>
            <h3 className="text-3xl font-bold text-center font-metro text-main-pink-color">
              ABOUT ME
            </h3>
            <article className="leading-9 mt-12 lg:leading-34 font-semibold text-sm lg:text-base text-white max-w-screen-lg mx-auto">
              <p className="px-12 lg:px-6 my-12">
                Hi, my name's Etem and I'm a front-end developer. My biggest
                passion is to challange my skills and thus learn everyday
                something new. I feel more than ready for my first dev role
                where I finally can show my skills.
              </p>
              <p className="px-12 lg:px-6 my-12">
                I'm pretty sure you would ask why I chose this career path?
                Well, my previous job was being a English language teacher. So,
                I really know students' weakness during learning and used to
                help them to get over that. During my coding times, I was both a
                student and a teacher of myself. And because I know there are
                still thousand of things to learn, as a teacher, I decided it is
                very good opportunity to expand my skills and challenge myself!
              </p>
              <p className="px-12 lg:px-6 my-12">
                When I'm not busy developing apps, I enjoy spending my time with
                my wife. I really enjoy drinking coffee and have a long
                conversation with her. I also like going for a long walks while
                listening my favorite musics. And sometimes rather than only
                listening songs, I prefer playing my guitar at home!
              </p>
            </article>
            <div className="block mx-auto w-full text-center">
              <a href={myCV} download>
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
      )}
    </div>
  );
};

export default AboutMe;
