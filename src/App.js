import "./index.css";

//components
import HomePage from "./components/pages/HomePage/HomePage";
import Navbar from "./components/pages/Navbar";
import Contact from "./components/pages/Contact/Contact";
import Skills from "./components/pages/Skills/Skills";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Projects from "./components/pages/Projects/Projects";
import Arrows from "./components/Utilities/Arrows";
import Balloon from "./assets/balloon.png";

//react
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [downKeyOpen, setDownKeyOpen] = useState(true);

  if (page > 10) {
    setPage(1);
  }
  if (page < 1) {
    setPage(9);
  }

  const nextPageHandler = () => {
    setPage((prev) => prev + 1);
    setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 3000);
  };

  return (
    <main className={page === 1 ? "app" : "app-dark"}>
      <Navbar page={page} setPage={setPage} setDownKeyOpen={setDownKeyOpen} />
      <Arrows page={page} setPage={setPage} />
      <img
        className={page === 1 ? "balloon2" : "balloon2-dark"}
        src={Balloon}
        alt="balloon"
      />
      <img
        className={
          page === 1
            ? "balloon hidden md:block"
            : "balloon1-dark hidden md:block"
        }
        src={Balloon}
        alt="balloon"
      />

      {downKeyOpen && (
        <button
          onClick={nextPageHandler}
          className="w-12 h-12 bg-white rounded-large lg:hidden absolute bottom-4 left-1/2 right-1/2 transfrom -translate-x-1/2 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-center mx-auto animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      )}

      <HomePage page={page} />
      <AboutMe page={page} />
      <Skills page={page} />
      <Projects page={page} />
      <Contact page={page} />
    </main>
  );
}

export default App;
