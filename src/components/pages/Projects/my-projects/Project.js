import { useEffect, useRef, useState } from "react";

const Project = (props) => {
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
        {props.projectName}
      </h4>
      <ul className="grid grid-cols-2 gap-y-6 my-12">
        {props.technologies.map((technology) => (
          <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
            {technology}
          </li>
        ))}
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm lg:hidden"
        src={props.projectImage}
        alt="crypto preview"
      />
      <video
        className="hidden lg:block w-11/12 mx-auto my-6 rounded-extraSm hover:scale-125"
        ref={videoRef}
        onMouseOver={() => setFocus(true)}
        onMouseOut={() => setFocus(false)}
        loop={true}
        muted={true}
        onEnded={onEndedLoop}
        src={props.projectVideo}
      ></video>
      <p className="font-overpass px-5 leading-34 font-normal">
        {props.projectDescription}
      </p>
      <br className="hidden lg:block mb-2" />
      <br className="hidden lg:block mb-2" />
      <div className="flex justify-evenly mt-6 lg:mt-5">
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
      </div>
    </div>
  );
};

export default Project;
