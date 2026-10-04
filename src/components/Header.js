import React from 'react';

import {Socials, MobileNav} from "./index"
import Logo from "../img/header/logo.svg"
import {Link} from "react-router-dom";

const Header = () => {
  return (
      <header
          className={"bg-white bg-opacity-80 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center"}
      >
        <div className={"flex flex-col lg:flex-row lg:items-center w-full justify-between"}>
          <Link to={"/"}>
            <img
                src={Logo}
                alt={"Logo"}
                width={140}
                height={140}
            />
          </Link>
        {/*  nav - hidden: Show only on desktop mode  */}
            <nav
                className={"hidden xl:flex gap-x-12 font-semibold"}
            >
                {/*// Home*/}
                <Link
                    to={"/"}
                    className={"text-[#696c6d] hover:text-primary transition"}
                >
                    Home
                </Link>

                {/*// About*/}
                <Link
                    to={"/about"}
                    className={"text-[#696c6d] hover:text-primary transition"}
                >
                    About
                </Link>

                {/*// Portfolio*/}
                <Link
                    to={"/portfolio"}
                    className={"text-[#696c6d] hover:text-primary transition"}
                >
                    Portfolio
                </Link>

                {/*// Contact*/}
                <Link
                    to={"/contact"}
                    className={"text-[#696c6d] hover:text-primary transition"}
                >
                    Contact
                </Link>
            </nav>
        </div>
          {/*Socials*/}
          <Socials />
          {/*Mobile View*/}
          <MobileNav />
      </header>
  )
};

export default Header;
