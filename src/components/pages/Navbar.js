import { useState } from "react";

const Navbar = ({ page, setPage, setDownKeyOpen }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openNavbarHandler = () => {
    setNavbarOpen(true);
    setDownKeyOpen(false);
  };
  const closeNavbarHandler = (num) => {
    setNavbarOpen(false);
    setDownKeyOpen(true);
    setPage(num);
  };

  return (
    <nav className="flex justify-between mx-10 pt-4">
      <div onClick={() => setPage(1)}>
        <h4 className="font-bungee text-4xl cursor-pointer text-white hover:text-main-pink-color">
          ES
        </h4>
      </div>
      {navbarOpen && (
        <div className="w-full flex bg-black fixed top-0 left-0 justify-center z-50 animate-navAnimation">
          <svg
            onClick={closeNavbarHandler}
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white absolute right-4 top-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <ul className="flex flex-col h-screen justify-evenly">
            <li>
              <div onClick={() => closeNavbarHandler(1)}>
                <h4 className="font-bungee text-4xl cursor-pointer text-main-pink-color  text-center">
                  ES
                </h4>
              </div>
            </li>
            <li
              onClick={() => closeNavbarHandler(3)}
              className={
                page === 3
                  ? "mx-6 text-main-yellow-color hover:text-main-pink-color font-bold cursor-pointer text-4xl"
                  : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-4xl"
              }
            >
              About
            </li>
            <li
              onClick={() => closeNavbarHandler(5)}
              className={
                page === 5
                  ? "mx-6 text-main-yellow-color hover:text-main-pink-color font-bold cursor-pointer text-4xl"
                  : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-4xl"
              }
            >
              Skills
            </li>
            <li
              onClick={() => closeNavbarHandler(7)}
              className={
                page === 7
                  ? "mx-6 text-main-yellow-color hover:text-main-pink-color font-bold cursor-pointer text-4xl"
                  : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-4xl"
              }
            >
              Projects
            </li>
            <li
              onClick={() => closeNavbarHandler(9)}
              className={
                page === 9
                  ? "mx-6 text-main-yellow-color hover:text-main-pink-color font-bold cursor-pointer text-4xl"
                  : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-4xl"
              }
            >
              Contact
            </li>
          </ul>
        </div>
      )}
      <div className="lg:hidden text-white cursor-pointer hover:text-main-pink-color">
        <svg
          onClick={openNavbarHandler}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul className="hidden lg:flex">
        <li
          onClick={() => setPage(3)}
          className={
            page === 3
              ? "mx-6 text-main-yellow-color font-bold cursor-pointer text-lg"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-lg"
          }
        >
          About
        </li>
        <li
          onClick={() => setPage(5)}
          className={
            page === 5
              ? "mx-6 text-main-yellow-color  font-bold cursor-pointer text-lg"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-lg"
          }
        >
          Skills
        </li>
        <li
          onClick={() => setPage(7)}
          className={
            page === 7
              ? "mx-6 text-main-yellow-color  font-bold cursor-pointer text-lg"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-lg"
          }
        >
          Projects
        </li>
        <li
          onClick={() => setPage(9)}
          className={
            page === 9
              ? "mx-6 text-main-yellow-color font-bold cursor-pointer text-lg text-lg"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-lg"
          }
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
