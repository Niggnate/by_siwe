import React from 'react'
import { AnimatePresence } from "framer-motion"

import { Routes, Route, useLocation } from "react-router-dom"
import {About, Contact, Home, Portfolio} from "../pages";

const AnimRoutes = () => {
    const location = useLocation()
  return (
      <AnimatePresence initial={true} mode={"wait"}>
          <Routes key={location.pathname} location={location}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/contact" element={<Contact />} />
          </Routes>
      </AnimatePresence>
  )
};

export default AnimRoutes;
