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

  if (page > 5) {
    setPage(1);
  }
  if (page < 1) {
    setPage(5);
  }

  return (
    <main className="app">
      <Navbar page={page} setPage={setPage} />
      <Arrows page={page} setPage={setPage} />
      <img
        className="absolute w-28 bottom-0 left-20 balloon"
        src={Balloon}
        alt="balloon"
      />
      <img
        className="absolute w-28 bottom-0 right-20 balloon"
        src={Balloon}
        alt="balloon"
      />
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
