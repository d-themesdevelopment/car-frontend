import { useState } from "react";
import MainMenu from "./partials/MainMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed w-full left-0 top-0 bg-white z-10 py-4 lg:py-0">
      <div className="container flex items-center justify-between">
        <div className="header-left flex items-center lg:space-x-10">
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="space-y-1 lg:hidden"
              onClick={(e) => {
                e.preventDefault();
                setToggle(!toggle);
              }}
            >
              <div className="w-5 h-[1px] bg-black"></div>
              <div className="w-5 h-[1px] bg-black"></div>
              <div className="w-5 h-[1px] bg-black"></div>
            </a>

            <h1 className="font-bold text-xl">TTB</h1>
          </div>

          <MainMenu toggle={toggle} setToggle={setToggle} />
        </div>

        <div className="header-right">
          <a href="#" className="text-black">
            <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 22l-8.3-8.3L22 22zM15.5 9c.1 3.5-2.6 6.4-6.1 6.5H9c-3.6 0-6.5-2.9-6.5-6.5S5.4 2.5 9 2.5s6.5 2.9 6.5 6.5c0 0 0 0 0 0z"
                fill="none"
                stroke="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
