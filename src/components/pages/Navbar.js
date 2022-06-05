const Navbar = ({ setPage }) => {
  return (
    <nav className="flex justify-between mx-10 pt-4 ">
      <div onClick={() => setPage(1)}>
        <h4 className="font-bungee text-4xl cursor-pointer text-white">ES</h4>
      </div>
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
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
          className="mx-6 text-white font-bold cursor-pointer"
        >
          About
        </li>
        <li
          onClick={() => setPage(3)}
          className="mx-6 text-white font-bold cursor-pointer"
        >
          Skills
        </li>
        <li
          onClick={() => setPage(4)}
          className="mx-6 text-white font-bold cursor-pointer"
        >
          Projects
        </li>
        <li
          onClick={() => setPage(5)}
          className="mx-6 text-white font-bold cursor-pointer"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <nav className="flex justify-end items-center h-12 pt-10 list-none font-overpass font-black pr-16 text-white">
      <NavLink to="/about">
        <li className="px-16 text-2xl cursor-pointer hover:text-main-pink-color hover:underline">
          about
        </li>
      </NavLink>
      <NavLink to="/skills">
        <li className="px-16 text-2xl cursor-pointer hover:text-main-pink-color hover:underline">
          skills
        </li>
      </NavLink>
      <li className="px-16 text-2xl cursor-pointer hover:text-main-pink-color hover:underline">
        projects
      </li>
      <NavLink to="/contact">
        <li className="px-16 text-2xl cursor-pointer hover:text-main-pink-color hover:underline">
          contact
        </li>
      </NavLink>
    </nav> */
}
