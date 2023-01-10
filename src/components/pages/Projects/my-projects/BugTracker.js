import React, { useEffect, useRef, useState } from "react";

import projectRetina from "../../../../assets/works/retina-2.png";
import bugTrackerVideo from "../../../../assets/works/test3.mov";

const BugTracker = () => {
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
        Bug Tracker
      </h4>
      <ul className="grid grid-cols-2 gap-y-6 my-12">
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          NextJS
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Typescript
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Tailwind
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Firebase
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Context API
        </li>
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm lg:hidden"
        src={projectRetina}
        alt="bug tracker preview"
      />
      <video
        className="hidden lg:block w-11/12 mx-auto my-6 rounded-extraSm hover:scale-125"
        ref={videoRef}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
        loop={true}
        muted={true}
        onEnded={onEndedLoop}
        src={bugTrackerVideo}
      ></video>
      <p className="font-overpass px-5 leading-34 font-normal">
        I created a gallery app which allows users to be able to search keywords
        and find thousands of pictures, save them to their account and remove
        them from their list again. I connected Pexel API to my project. For the
        UI components I used React and for styling I used TailwindCSS. For the
        state management, I preferred using Context API provided by React. I
        then deployed my website on Firebase.
      </p>
      <div className="flex justify-evenly mt-6">
        <a
          href="https://github.com/etrafa/bug-tracker-typescript"
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-34 h-10 mb-6 bg-black text-white font-bold font-overpass text-sm text-center hover:bg-main-yellow-color hover:text-black">
            Source Code
          </button>
        </a>
        <a
          href="https://bug-tracker-el.vercel.app/"
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

export default BugTracker;
