import { useEffect, useRef, useState } from "react";

import projectTshirt from "../../../../assets/works/tshirt-2.png";
import tshirtVideo from "../../../../assets/works/test6.mov";

const TshirtApp = () => {
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
        E-Commerce App
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
          Router
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Redux
        </li>
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm lg:hidden"
        src={projectTshirt}
        alt="project preview"
      />
      <video
        className="hidden lg:block w-11/12 mx-auto my-6 rounded-extraSm hover:scale-125"
        ref={videoRef}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
        loop={true}
        muted={true}
        onEnded={onEndedLoop}
        src={tshirtVideo}
      ></video>
      <p className="font-overpass px-5 leading-34 font-normal">
        For this project, I created an e-commerce website which allows users
        search a product, sign-in, sign-out with a Google account and be able to
        checkout. I created the UI components with NextJS. I then styled the
        components using TailwindCSS. For this website, I created a database
        hosted by Firebase. Then by connecting my website to this database I
        displayed all the products on the UI. For this project, I preferred
        deploying my website on Vercel because I worked with NextJS.
      </p>
      <div className="flex justify-evenly mt-6">
        <a
          href="https://github.com/etrafa/e-commerce"
          target="_blank"
          rel="noreferrer"
        >
          <button className="w-34 h-10 mb-6 bg-black text-white font-bold font-overpass text-sm text-center hover:bg-main-yellow-color hover:text-black">
            Source Code
          </button>
        </a>
        <a
          href="https://e-commerce-five-umber.vercel.app/"
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

export default TshirtApp;
