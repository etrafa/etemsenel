import "./HomePage.css";

const HomePage = ({ page }) => {
  return page === 1 ? (
    <div className="flex w-full flex-col justify-center items-centers h-[calc(100vh_-_56px)]">
      <h1 className="font-metro text-main-pink-color text-8xl developer-name text-center lg:mb-8">
        Etem Senel
      </h1>
      <h4 className="text-center font-permanent text-white font-bold text-4xl lg:mb-8">
        Front-End Developer
      </h4>
    </div>
  ) : null;
};

export default HomePage;
// className="mt-24 h-96 xl:mt-48 flex flex-col justify-center items-center"
// className="text-4xl font-permanent text-white font-bold mt-6 tracking-wider text-center"
