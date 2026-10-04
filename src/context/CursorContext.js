import React, {createContext, useEffect} from 'react'

export const CursorContext = createContext()

const CursorProvider = ({ children }) => {

  const [cursorPosition, setCursorPosition] = React.useState({
    x: 0,
    y: 0
  })

  const [cursorBackground, setCursorBackground] = React.useState("default")

  useEffect(() => {
    const move = e => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mouseover", move)

    return () => {
      window.removeEventListener("mouseover", move)
    }
  }, [])

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 10,
      y: cursorPosition.y - 10,
      backgroundColor: '#0e1112'
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPosition.x - 72,
      y: cursorPosition.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: "difference"
    }
  }

  const mouseEnterHandler = () => {
    setCursorBackground("text")
  }

  const mouseLeaveHandler = () => {
    setCursorBackground("default")
  }

  return (
      <CursorContext.Provider value={{ cursorVariants, cursorBackground, mouseEnterHandler, mouseLeaveHandler }}>
        {children}
      </CursorContext.Provider>
  )
};

export default CursorProvider;
