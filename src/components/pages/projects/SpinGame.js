import { useEffect, useRef, useState } from "react";

import projectSpin from "../../../assets/works/spin-2.png";
import spinVideo from "../../../assets/works/spin-trivia-new.mp4";

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
    <div className="w-11/12 lg:w-8/12 bg-white mt-12 mx-auto rounded-small">
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
          Api
        </li>
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm lg:hidden"
        src={projectSpin}
        alt="spin-answer project preview"
      />
      <video
        className="hidden lg:block w-11/12 mx-auto my-6 rounded-extraSm hover:scale-125"
        ref={videoRef}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
        loop={true}
        muted={true}
        onEnded={onEndedLoop}
        src={spinVideo}
      ></video>
      <p className="font-overpass px-5 leading-34 font-normal">
        For this project, I created a game which allows users to spin the wheel
        and then answer the questions depending on the category of the question.
        I connected my website to the API, which is Trivia API. The problem is,
        some of the characters were not showing up on the screen and at the end
        I had to change all of those characters with human-readable letters. It
        was for sure very time consuming. Then as a last step, I deployed it on
        Github.
      </p>
      <div className="flex justify-evenly mt-6">
        <button className="w-34 h-10 mb-6 bg-black text-white font-bold font-overpass text-sm text-center">
          Source Code
        </button>
        <button className="w-34 h-10 mb-6 bg-main-pink-color text-white font-bold font-overpass text-sm text-center">
          View Demo
        </button>
      </div>
    </div>
  );
};

export default SpinGame;
