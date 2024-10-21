import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-white font-bold text-2xl">
              {" "}
              <img src={Logo} alt="Logo" className="w-32" />{" "}
              <span>MERNify</span>
            </div>

            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/technology">Technology</a>
                </li>
                <li>
                  <a href="/galaxy">Galaxy</a>
                </li>
                <li>
                  <a href="/satelite">Satelite</a>
                </li>
              </ul>
            </div>
            <div>
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
