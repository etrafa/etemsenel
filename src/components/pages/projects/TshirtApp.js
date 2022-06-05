import projectTshirt from "../../../assets/works/tshirt-2.png";

const TshirtApp = () => {
  return (
    <div className="w-11/12 bg-white mt-12 mx-auto rounded-small">
      <h4 className="font-overpass text-main-header-color font-black text-4xl text-center pt-6">
        E-Commerce App
      </h4>
      <ul className="grid grid-cols-2 gap-y-6 my-12">
        <li className="w-32 h-8 border border-black mx-auto bg-main-yellow-color font-overpass text-center font-semibold pt-1">
          NextJS
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
      </ul>
      <img
        className="w-11/12 mx-auto my-6 rounded-extraSm"
        src={projectTshirt}
        alt="project preview"
      />
      <p className="font-overpass px-5 leading-34 font-normal">
        For this project, I created an e-commerce website which allows users
        search a product, sign-in, sign-out with a Google account and then
        finally be able to buy it. I created the UI components with the NextJS.
        I then styled the components using TailwindCSS. For this website, I
        created my own database hosted by Firebase. I then by connecting my
        website to this database I displayed all the products on the UI. For
        this project, I preferred deploying my website on Vercel because I
        worked with NextJS.
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

export default TshirtApp;
