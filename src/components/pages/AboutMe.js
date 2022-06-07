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
                <button className="text-white bg-[#050708] font-medium rounded-lg text-sm px-5 mt-12 lg:mt-0 py-2.5 text-center inline-flex items-center mb-2">
                  My Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
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
                <button className="text-white bg-[#050708] font-medium rounded-lg text-sm px-5 mt-12 lg:mt-0 py-2.5 text-center inline-flex items-center mb-2">
                  My Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
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
