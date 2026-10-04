import React from 'react'

import Port_1 from "../img/portfolio/port_1.jpeg"
import Port_2 from "../img/portfolio/port_2.jpeg"
import Port_3 from "../img/portfolio/port_3.jpeg"
import Port_4 from "../img/portfolio/port_4.jpeg"
import {Link} from "react-router-dom"

import { motion } from "framer-motion"
import { transition1 } from "../transitions"

const Portfolio = () => {
  return <motion.section
      className={"section"}
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
  >
    <div
        className={"container mx-auto h-full relative"}
    >
      <div
          className={"flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"}
      >

        <motion.div
            className={"flex flex-col lg:items-start"}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
        >
          <h1 className={"h1"}>Portfolio</h1>
          <p className={"mb-12 max-w-sm"}>
            TODO - write portfolio
            my portfolio

            <br />
            <br />

            TODO - write portfolio second
            My portfolio second
          </p>
          <Link
              to={"/contact"}
              className={"btn mb-[30px] mx-auto lg:max-0"}
          >
            Hire Me
          </Link>
        </motion.div>

        <div
            className={"grid grid-cols-2 gap-1 lg:gap-2"}
        >

          <div
              className={"max-x-[250px] lg:max-x-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden"}
          >
            <img
                src={Port_1}
                alt={"Portfolio"}
                className={"object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"}
            />
          </div>

          <div
              className={"max-x-[250px] lg:max-x-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden"}
          >
            <img
                src={Port_2}
                alt={"Portfolio"}
                className={"object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"}
            />
          </div>

          <div
              className={"max-x-[250px] lg:max-x-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden"}
          >
            <img
                src={Port_3}
                alt={"Portfolio"}
                className={"object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"}
            />
          </div>

          <div
              className={"max-x-[250px] lg:max-x-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden"}
          >
            <img
                src={Port_4}
                alt={"Portfolio"}
                className={"object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"}
            />
          </div>

        </div>
      </div>

    </div>
  </motion.section>;
};

export default Portfolio;
