const Arrows = ({ page, setPage }) => {
  const prevPageHandler = () => {
    setPage((prev) => prev - 2);
  };

  const nextPageHandler = () => {
    setPage((prev) => prev + 1);
    setTimeout(() => {
      setPage((prev) => prev + 1);
    }, 3000);
  };

  return (
    <div className="sticky w-full hidden lg:block top-1/2 z-50">
      <div className="group">
        <svg
          onClick={prevPageHandler}
          className={
            page === 1
              ? "w-14 h-14 cursor-pointer fill-white hover:fill-black absolute top-1/2 transform left-4 -translate-y-1/2"
              : "w-14 h-14 cursor-pointer fill-white hover:fill-main-pink-color absolute top-1/2 transform left-4 -translate-y-1/2"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
        </svg>
        <span
          className={
            page === 1
              ? "hidden group-hover:block absolute group-hover:animate-textAnimationLeftArrow text-white group-hover:text-black top-1/2 transform left-20 -translate-y-1/2 font-bold text-lg"
              : "hidden group-hover:block absolute group-hover:animate-textAnimationLeftArrow group-hover:text-white top-1/2 transform left-20 -translate-y-1/2 font-bold text-lg"
          }
        >
          {page === 1 && "Contact"}
          {page === 3 && "Home"}
          {page === 5 && "About"}
          {page === 7 && "Skills"}
          {page === 9 && "Projects"}
        </span>
      </div>
      <div className="group">
        <svg
          onClick={nextPageHandler}
          className={
            page === 1
              ? "w-14 h-14 cursor-pointer fill-white hover:fill-black absolute  transform right-8 -translate-y-1/2"
              : "w-14 h-14 cursor-pointer fill-white hover:fill-main-pink-color absolute  transform right-8 -translate-y-1/2"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
        </svg>
        <span
          className={
            page === 1
              ? "hidden group-hover:block absolute group-hover:animate-textAnimationRightArrow text-white group-hover:text-black top-1/2 transform right-24 -translate-y-1/2 font-bold text-lg"
              : "hidden group-hover:block absolute group-hover:animate-textAnimationRightArrow group-hover:text-white top-1/2 transform right-24 -translate-y-1/2 font-bold text-lg"
          }
        >
          {page === 1 && "About"}
          {page === 3 && "Skills"}
          {page === 5 && "Projects"}
          {page === 7 && "Contact"}
          {page === 9 && "Home"}
        </span>
      </div>
    </div>
  );
};

export default Arrows;
