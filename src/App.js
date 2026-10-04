import React, {useContext} from 'react';

import { BrowserRouter as Router } from "react-router-dom"
import { motion } from "framer-motion"
import {AnimRoutes, Header} from "./components";
import {CursorContext} from "./context/CursorContext";

const App = () => {

    const { cursorVariants, cursorBackground } = useContext(CursorContext)

  return (
      <>
        <Router>
          <Header />
          <AnimRoutes />
        </Router>

        {/*<motion.div*/}
        {/*    className={"w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 transition rounded-full"}*/}
        {/*    variants={cursorVariants}*/}
        {/*    animate={cursorBackground}*/}
        {/*>*/}

        {/*</motion.div>*/}

      </>
  )
};

export default App;
