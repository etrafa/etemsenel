const HomePage = ({ page }) => {
  return page === 1 ? (
    <div className="mt-24 h-96 xl:mt-48 flex flex-col justify-center items-center">
      <h1 className="font-metro text-main-pink-color text-4xl md:block md:text-8xl text-center">
        Etem Senel
      </h1>
      <h4 className="text-4xl font-permanent text-white font-bold mt-6 tracking-wider text-center">
        Front-End Developer
      </h4>
    </div>
  ) : null;
};

export default HomePage;
