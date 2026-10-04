import React from 'react'
import WomenImg from "../img/contact/by_siwe_contact.png"
import { motion } from "framer-motion"
import { transition1 } from "../transitions"

const Contact = () => {
  return (
      <motion.section
          className={"section"}
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={transition1}
      >
        <div
            className={"container mx-auto h-full"}
        >
          <div
              className={"flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left"}
          >

            <motion.div
                className={"hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"}
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={transition1}
            >
            </motion.div>

            <div
                className={"lg:flex-1 lg:pt-32 px-4"}
            >
              <h1 className={"h1"}>Contact me</h1>
              <p className={"mb-12"}>I would love to hear from you.</p>
              <form className={"flex flex-col gap-y-4"}>
                <div
                    className={"flex gap-x-10"}
                >
                  <input
                      className={"outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"}
                      type="text"
                      placeholder="Your name..."
                  />

                  <input
                      className={"outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"}
                      type="email"
                      placeholder="Your email address..."
                  />
                </div>

                <input
                    className={"outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"}
                    type="text"
                    placeholder="Your message..."
                />

                <button
                    className={"btn mb-[30px] mx-auto lg:mx-0 self-start"}
                >
                  Send message
                </button>

              </form>
            </div>

            <motion.div
                className={"lg:flex-1"}
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ transition: transition1, duration: 1.5 }}
            >
              <img
                  src={WomenImg}
              />
            </motion.div>

          </div>
        </div>
      </motion.section>
  )
};

export default Contact;
