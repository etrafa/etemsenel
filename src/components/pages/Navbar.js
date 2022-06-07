import { useState } from "react";

const Navbar = ({ page, setPage }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="flex justify-between mx-10 pt-4">
      <div onClick={() => setPage(1)}>
        <h4 className="font-bungee text-4xl cursor-pointer text-white hover:text-main-pink-color">
          ES
        </h4>
      </div>
      {navbarOpen && (
        <div className="w-full flex bg-black fixed top-0 left-0 justify-center">
          <svg
            onClick={() => setNavbarOpen(false)}
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
              <div
                onClick={() => {
                  setPage(1);
                  setNavbarOpen(false);
                }}
              >
                <h4 className="font-bungee text-4xl cursor-pointer text-main-pink-color  text-center">
                  ES
                </h4>
              </div>
            </li>
            <li
              text-4xl
              onClick={() => {
                setPage(2);
                setNavbarOpen(false);
              }}
              className={
                page === 2
                  ? "mx-6 text-main-yellow-color hover:text-main-pink-color font-bold cursor-pointer text-4xl"
                  : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-4xl"
              }
            >
              About
            </li>
            <li
              onClick={() => {
                setPage(3);
                setNavbarOpen(false);
              }}
              className={
                page === 3
                  ? "mx-6 text-main-yellow-color hover:text-main-pink-color font-bold cursor-pointer text-4xl"
                  : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-4xl"
              }
            >
              Skills
            </li>
            <li
              onClick={() => {
                setPage(4);
                setNavbarOpen(false);
              }}
              className={
                page === 4
                  ? "mx-6 text-main-yellow-color hover:text-main-pink-color font-bold cursor-pointer text-4xl"
                  : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer text-4xl"
              }
            >
              Projects
            </li>
            <li
              onClick={() => {
                setPage(5);
                setNavbarOpen(false);
              }}
              className={
                page === 5
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
          onClick={() => setNavbarOpen(true)}
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
          onClick={() => setPage(2)}
          className={
            page === 2
              ? "mx-6 text-main-yellow-color font-bold cursor-pointer"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer"
          }
        >
          About
        </li>
        <li
          onClick={() => setPage(3)}
          className={
            page === 3
              ? "mx-6 text-main-yellow-color  font-bold cursor-pointer"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer"
          }
        >
          Skills
        </li>
        <li
          onClick={() => setPage(4)}
          className={
            page === 4
              ? "mx-6 text-main-yellow-color  font-bold cursor-pointer"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer"
          }
        >
          Projects
        </li>
        <li
          onClick={() => setPage(5)}
          className={
            page === 5
              ? "mx-6 text-main-yellow-color font-bold cursor-pointer"
              : "mx-6 text-white hover:text-main-pink-color font-bold cursor-pointer"
          }
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
