import { useEffect, useRef, useState } from "react";

import {
  LeftArrowIcon,
  RefreshIcon,
  RightArrowIcon,
  SearchIcon,
} from "../../../Utilities/Icons";

const Project = (props) => {
  const videoRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const [page, setPage] = useState(1);

  const loop = () => {
    videoRef?.current?.play();
  };

  const onEndedLoop = () => {
    if (focus) loop();
  };

  useEffect(() => {
    if (focus) loop();
    else {
      videoRef?.current?.pause();
    }
  }, [focus]);

  return (
    <div className="w-11/12 lg:w-9/12 max-w-[35rem] mt-12 mx-auto relative bg-white min-h-[504px] max-h-[504px] hover:min-h-[600px] rounded-t-xl group ">
      <section className="border-b-[3px] border-black h-8 bg-[#9CD9C5] rounded-t-xl">
        <svg className="absolute group-hover:animate-shakeAnimation">
          <circle
            onClick={() => setPage(1)}
            className="cursor-pointer"
            cx="18"
            cy="15"
            r="6.6"
            stroke="#1A1A1A"
            stroke-width="2.8"
            fill="#EE5C54"
          />
          <circle
            onClick={() => setPage(2)}
            className="cursor-pointer"
            cx="39"
            cy="15"
            r="6.6"
            stroke="#1A1A1A"
            stroke-width="2.8"
            fill="#F8BD45"
          />
          <circle
            onClick={() => setPage(3)}
            className="cursor-pointer"
            cx="60"
            cy="15"
            r="6.6"
            stroke="#1A1A1A"
            stroke-width="2.8"
            fill="#5ECA41"
          />
        </svg>
      </section>
      <section className="w-full h-12 border-b-[3px] border-black flex justify-between items-center px-2.5 gap-x-3">
        <div className="flex">
          <LeftArrowIcon />
          <RightArrowIcon />
          <RefreshIcon />
        </div>
        <div className="w-8/12 h-8 border-[3px] border-black rounded-lg">
          <h2 className="font-overpass text-main-header-color font-black text-2xl pl-4">
            {props.projectName}
          </h2>
        </div>
        <SearchIcon />
      </section>

      {page === 1 && (
        <section className="w-full bg-gray-300">
          <div className="lg:hidden h-[26.5rem] bg-gray-800 w-full">
            <img
              className="w-[60%] md:w-5/12 max-w-[14rem] md:max-w-[20rem] pt-1.5 mx-auto rounded-extraSm"
              src={props.projectImage}
              alt="project overview"
            />
          </div>
          <video
            className="hidden lg:block h-full"
            ref={videoRef}
            onMouseOver={() => setFocus(true)}
            onMouseOut={() => setFocus(false)}
            loop={true}
            muted={true}
            onEnded={onEndedLoop}
            src={props.projectVideo}
          ></video>
        </section>
      )}

      {page === 2 && (
        <section className="mt-12">
          <h2 className="text-center font-pacifico text-3xl mt-4">
            Technologies
          </h2>
          <ul className="grid grid-cols-2 gap-y-6 my-12">
            {props.technologies.map((technology) => (
              <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
                {technology}
              </li>
            ))}
          </ul>
        </section>
      )}
      {page === 3 && (
        <section className="mt-12">
          <h2 className="text-center font-pacifico text-3xl mt-4">
            Description
          </h2>
          <p className="font-overpass p-5 leading-34 font-normal">
            {props.projectDescription}
          </p>
        </section>
      )}

      {page === 1 && (
        <section className="hidden group-hover:flex justify-evenly mt-8">
          <a href={props.sourceCode} target="_blank" rel="noreferrer">
            <button className="w-34 h-10 mb-6 bg-black text-white font-bold font-overpass text-sm text-center hover:bg-main-yellow-color hover:text-black">
              Source Code
            </button>
          </a>
          <a href={props.demoLink} target="_blank" rel="noreferrer">
            <button className="w-34 h-10 mb-6 bg-main-pink-color text-white font-bold font-overpass text-sm text-center hover:bg-main-yellow-color hover:text-black">
              View Demo
            </button>
          </a>
        </section>
      )}
    </div>
  );
};

export default Project;
