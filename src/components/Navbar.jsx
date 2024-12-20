import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(prevShow => !prevShow);
    // console.log("Menu active state:", !show); // Menampilkan status toggle
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false); // Menutup menu saat scroll
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let scrollActive = scroll
    ? "py-5 shadow bg-[rgba(255,255,255,0.4)] backdrop-blur-[10px] fixed top-0 left-0 w-full"
    : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive} z-10`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between w-full">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold">Dwi Lestari Amelia</h1>
          </div>

          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full 
              md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-[50vh] 
              transform -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 
              font-bold text-white transition-all duration-300`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line text-3xl md:hidden block"></i>
              <a href="#home" className="font-medium opacity-75 link link-hover hover:text-sky-500">Home</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-3xl md:hidden block"></i>
              <a href="#about" className="font-medium opacity-75 link link-hover hover:text-sky-500">About</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-image-line text-3xl md:hidden block"></i>
              <a href="#projects" className="font-medium opacity-75 link link-hover hover:text-sky-500">Projects</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-phone-line text-3xl md:hidden block"></i>
              <a href="#contact" className="font-medium opacity-75 link link-hover hover:text-sky-500">Contact</a>
            </li>
          </ul>

          <div className="social flex items-center gap-2">
            <a
              href="#social"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-600 transition-all hidden sm:block"
            >
              Let&apos;s connect!
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
