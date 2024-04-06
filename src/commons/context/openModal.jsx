import { createContext, useEffect, useState } from 'react'

export const ModalContext = createContext({
  isVisible: false,
  toggleVisibility: () => {},
})

const ModalContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [pickedMovie, setPickedMovie] = useState()

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <ModalContext.Provider
      value={{ isVisible, toggleVisibility, pickedMovie, setPickedMovie }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
