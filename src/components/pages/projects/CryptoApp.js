import { useEffect, useRef, useState } from "react";
import projectCrypto from "../../../assets/works/crypto-5.png";
import cryptoVideo from "../../../assets/works/crypto-new.mp4";

const CryptoApp = () => {
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
        Crypto App
      </h4>
      <ul className="grid grid-cols-2 gap-y-6 my-12">
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          React
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Bootstrap
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          API
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Router
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          ChartJS
        </li>
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm lg:hidden"
        src={projectCrypto}
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
        src={cryptoVideo}
      ></video>
      <p className="font-overpass px-5 leading-34 font-normal">
        This website was built by using React for UI components, and Bootstrap
        for styling. I then connected my website to a third-party currency api.
        To make it more attractive, I added a graph which allows users to see
        their cryptocurrency price history with a range of 24 hours and 3 years.
        I then deployed my website on Github.
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

export default CryptoApp;
