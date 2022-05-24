import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import useClickOutside from "../customHooks/useClickOutside";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setOpenMenu(false));
  return (
    <>
      <nav className="flex p-6 sm:p-0 text-primaryLightBlue lg:pt-10 lg:pl-[55px] justify-between items-center ">
        <img
          className="h-10 sm:h-12 sm:mr-8 sm:ml-[39px]"
          src="/images/shared/logo.svg"
          alt="logo"
        />
        <div className="relative flex-1 lg:block hidden ">
          <hr className="-right-[30px]  w-full z-50 border-gray-400  absolute " />
        </div>
        <div className="sm:flex sm:w-[450px] lg:w-2/3 w-full hidden lg:max-w-[830px] h-24 items-center backdrop-blur-lg bg-white bg-opacity-[4%]">
          <ul className="flex  w-full sm:mx-10 lg:ml-[123px] h-full lg:w-[542px] items-center justify-between">
            <li
              className={`tracking-[2.7px] h-full flex items-center before:transition-all before:duration-300 hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full ${
                pathname == "/" &&
                "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full :bottom-0"
              } `}
            >
              <Link to="/" className="flex font-body text-[14px] lg:text-base ">
                <span className="font-semibold mr-3 lg:block hidden">00</span>
                <span>HOME</span>
              </Link>
            </li>
            <li
              className={`tracking-[2.7px] h-full flex items-center  hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full ${
                pathname == "/destination" &&
                "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full :bottom-0"
              } `}
            >
              <Link
                to="/destination"
                className="flex font-body text-[14px] lg:text-base"
              >
                <span className="font-semibold mr-3 lg:block hidden">01</span>
                <span>DESTINATION</span>
              </Link>
            </li>
            <li
              className={`tracking-[2.7px] h-full flex items-center hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full ${
                pathname == "/crew" &&
                "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full :bottom-0"
              } `}
            >
              <Link
                to="/crew"
                className="flex font-body text-[14px] lg:text-base"
              >
                <span className="font-semibold mr-3 lg:block hidden">02</span>
                <span>CREW</span>
              </Link>
            </li>
            <li
              className={`tracking-[2.7px] h-full flex items-center hover:before:content-[''] hover:before:h-[3px] hover:before:absolute relative hover:before:bottom-0 hover:before:bg-white hover:before:bg-opacity-50 hover:before:block before:w-full ${
                pathname == "/technology" &&
                "after:content-[''] after:h-[3px] after:absolute relative after:bottom-0 after:bg-white after:block after:w-full :bottom-0"
              } `}
            >
              <Link
                to="/technology"
                className="flex font-body text-[14px] lg:text-base"
              >
                <span className="font-semibold mr-3 lg:block hidden">03</span>
                <span>TECHNOLOGY</span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="sm:hidden"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <img src="/images/shared/icon-hamburger.svg" alt="hamburger" />
        </button>
      </nav>
      <CSSTransition
        in={openMenu}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <div
          className={`absolute top-0 right-0 w-[67%] bg-white h-full backdrop-blur-lg bg-opacity-[4%] z-50`}
          ref={menuRef}
        >
          <div className="flex justify-end mt-8 mr-[26.5px]">
            <button
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <img
                className="h-[19px]"
                src="/images/shared/icon-close.svg"
                alt="close"
              />
            </button>
          </div>
          <ul className="mt-[65px] mx-8 space-y-8">
            <li>
              <Link
                to="/"
                className="flex text-[14px] lg:text-base"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <span className="font-semibold mr-3 lg:block ">00</span>
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="flex text-[14px] lg:text-base"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <span className="font-semibold mr-3 lg:block ">01</span>
                <span>DESTINATION</span>
              </Link>
            </li>
            <li>
              <Link
                to="/crew"
                className="flex text-[14px] lg:text-base"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <span className="font-semibold mr-3 lg:block ">02</span>
                <span>CREW</span>
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className="flex text-[14px] lg:text-base"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <span className="font-semibold mr-3 lg:block ">03</span>
                <span>TECHNOLOGY</span>
              </Link>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};

export default Navbar;
