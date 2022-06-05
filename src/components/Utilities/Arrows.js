const Arrows = ({ page, setPage, prevText, nextText }) => {
  return (
    <div className="absolute w-full hidden lg:block top-1/2">
      <div className="group">
        <svg
          onClick={() => {
            setPage(page - 1);
          }}
          className="w-14 h-14 cursor-pointer fill-white hover:fill-black absolute top-1/2 transform left-4 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
        </svg>
        <span className="hidden group-hover:block absolute text-white group-hover:text-black top-1/2 transform left-20 -translate-y-1/2 font-bold text-lg">
          {page === 1 && "Contact"}
          {page === 2 && "Home"}
          {page === 3 && "About"}
          {page === 4 && "Skills"}
          {page === 5 && "Projects"}
        </span>
      </div>
      <div className="group">
        <svg
          onClick={() => {
            setPage(page + 1);
          }}
          className="w-14 h-14 cursor-pointer fill-white hover:fill-black absolute  transform right-8 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
        </svg>
        <span className="hidden group-hover:block absolute text-white group-hover:text-black top-1/2 transform right-24 -translate-y-1/2 font-bold text-lg">
          {page === 1 && "About"}
          {page === 2 && "Skills"}
          {page === 3 && "Projects"}
          {page === 4 && "Contact"}
          {page === 5 && "Home"}
        </span>
      </div>
    </div>
  );
};

export default Arrows;
