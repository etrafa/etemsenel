import "./index.css";

//components
import HomePage from "./components/pages/HomePage";
import Navbar from "./components/pages/Navbar";
import Contact from "./components/pages/Contact";
import Skills from "./components/pages/Skills";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import { useState } from "react";
import Arrows from "./components/Utilities/Arrows";
import Balloon from "./assets/balloon.png";

function App() {
  const [page, setPage] = useState(1);

  if (page > 10) {
    setPage(1);
  }
  if (page < 1) {
    setPage(9);
  }

  console.log(page);

  return (
    <main className={page === 1 ? "app" : "app-dark"}>
      <Navbar page={page} setPage={setPage} />
      <Arrows page={page} setPage={setPage} />
      <img
        className={
          page === 1
            ? "absolute w-28 bottom-0 left-20 balloon2"
            : "absolute w-28 bottom-0 left-20 balloon2"
        }
        src={Balloon}
        alt="balloon"
      />
      <img
        className={
          page === 1
            ? "absolute w-28 bottom-0 right-20 balloon hidden md:block"
            : "absolute w-28 bottom-0 right-20 balloon hidden md:block animate-ballonDarken"
        }
        src={Balloon}
        alt="balloon"
      />

      <button
        onClick={() => setPage(page + 1)}
        className="w-12 h-12 bg-white rounded-large lg:hidden absolute bottom-4 left-1/2 right-1/2 transfrom -translate-x-1/2 "
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

      <HomePage page={page} />
      <AboutMe page={page} />
      <Skills page={page} />
      <Projects page={page} />
      <Contact page={page} />
    </main>
  );
}

export default App;

// import "./index.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
// import HomePage from "./components/pages/HomePage";
// import Navbar from "./components/pages/Navbar";
// import Contact from "./components/pages/Contact";
// import Skills from "./components/pages/Skills";
// import AboutMe from "./components/pages/AboutMe";
// import Projects from "./components/pages/Projects";
// import { useState } from "react";
// import Arrows from "./components/Utilities/Arrows";
// import { ArrowContext } from "./components/context/ArrowContext";

// function App() {
//   const [page, setPage] = useState(1);
//   if (page > 5) {
//     setPage(1);
//   }
//   if (page < 1) {
//     setPage(5);
//   }

//   return (
//     <ArrowContext.Provider value={{ page, setPage }}>
//       <Router>
//         <div className="app">
//           <Navbar />
//           <Arrows />
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/arrows" element={<Arrows />} />
//             <Route path="/about" element={<AboutMe />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </Router>
//     </ArrowContext.Provider>
//   );
// }

// export default App;
