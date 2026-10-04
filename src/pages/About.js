import React from 'react'
import WomenImg from "../img/about/by_siwe_about.png"
import {Link} from "react-router-dom";
import { motion } from "framer-motion"
import { transition1 } from "../transitions"

const About = () => {
  return (
      <motion.section
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
               className={"flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16"}
          >

            {/*Image*/}
            <div
                className={"flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"}
            >
              <img
                  src={WomenImg}
              />
            </div>

            {/*Text*/}
            <motion.div
                className={"flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex-col justify-center items-center lg:items-center"}
                initial={{ opacity: 0, y: '-80%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-80%' }}
                transition={transition1}
            >
              <h1 className={"h1"}>
                About me
              </h1>
              <p className={"mb-12 max-w-sm"}>
                TODO - write bio
                my bio

                <br />
                <br />

                TODO - write bio second
                My bio second
              </p>

              <Link
                  to={"/portfolio"}
                  className={"btn"}
              >
                View my work
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
};

export default About;
