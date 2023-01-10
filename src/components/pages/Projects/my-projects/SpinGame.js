import { useEffect, useRef, useState } from "react";

import projectSpin from "../../../../assets/works/spin-2.png";
import spinVideo from "../../../../assets/works/test7.mov";

const SpinGame = () => {
  const videoRef = useRef(null);
  const [focus, setFocus] = useState(false);

  const loop = () => {
    videoRef.current.play();
  };

  const onEndedLoop = () => {
    if (focus) loop();
  };

  useEffect(() => {
    if (focus) loop();
    else {
      videoRef.current.pause();
    }
  }, [focus]);

  return (
    <div className="w-11/12 lg:w-8/12 bg-white mt-12 mx-auto rounded-small flex flex-col justify-between">
      <h4 className="font-overpass text-main-header-color font-black text-4xl text-center pt-6">
        Spin - Trivia Game
      </h4>
      <ul className="grid grid-cols-2 gap-y-6 my-12">
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          HTML 5
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          CSS 3
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Javascript
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          API
        </li>
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm lg:hidden"
        src={projectSpin}
        alt="spin-answer project preview"
      />
      <video
        className="hidden lg:block w-11/12 mx-auto my-6 rounded-extraSm hover:scale-125 mt-28"
        ref={videoRef}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
        loop={true}
        muted={true}
        onEnded={onEndedLoop}
        src={spinVideo}
      ></video>
      <p className="font-overpass px-5 leading-34 font-normal">
        For this project, I built a game which allows users to spin a wheel and
        answer questions in a category determined by the spinning wheel. The API
        I used in this project was Trivia API. During the process of building
        this app I ran into a problem. The API response didn’t format all of the
        characters into human readable letters which I then had to correct. Then
        I deployed it on GitHub.
      </p>
      <div className="flex justify-evenly mt-6">
        <a
          href="https://github.com/etrafa/quizGame"
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-34 h-10 mb-6 bg-black text-white font-bold font-overpass text-sm text-center hover:bg-main-yellow-color hover:text-black">
            Source Code
          </button>
        </a>
        <a
          href="https://etrafa.github.io/quizGame/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-34 h-10 mb-6 bg-main-pink-color text-white font-bold font-overpass text-sm text-center hover:bg-main-yellow-color hover:text-black">
            View Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default SpinGame;
