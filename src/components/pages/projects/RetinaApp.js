import projectRetina from "../../../assets/works/retina-2.png";

const RetinaApp = () => {
  return (
    <div className="w-11/12 bg-white mt-12 mx-auto rounded-small">
      <h4 className="font-overpass text-main-header-color font-black text-4xl text-center pt-6">
        Retina
      </h4>
      <ul className="grid grid-cols-2 gap-y-6 my-12">
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          React
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Tailwind
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          API
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Firebase
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Router
        </li>
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          Context API
        </li>
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm"
        src={projectRetina}
        alt="retina preview"
      />
      <p className="font-overpass px-5 leading-34 font-normal">
        I created a gallery app which allows users to be able to search keywords
        and find thousands of pictures, save them to their account and remove
        them on their list again. I connected Pexel API to my project. For the
        UI components I used React and for styling I used TailwindCSS. For the
        state management, I preferred using Context API provided by React. I
        then deployed my website on Github.
      </p>
      <div className="flex justify-evenly mt-6">
        <button className="w-34 h-10 mb-6 bg-black text-white font-bold font-overpass text-sm text-center">
          Source Code
        </button>
        <button className="w-34 h-10 mb-6 bg-main-pink-color text-white font-bold font-overpass text-sm text-center">
          View Demo
        </button>
      </div>
      <video className="hidden" src="works/crypto-new.mp4"></video>
    </div>
  );
};

export default RetinaApp;
