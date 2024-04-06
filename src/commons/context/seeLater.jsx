import { createContext, useState } from 'react'

export const SeeLaterList = createContext({
  seeLaterList: [],
  addToLaterList: () => {},
})

const SeeLaterListProvider = ({ children }) => {
  const [seeLaterList, setSeeLaterList] = useState([])

  const addToLaterList = (movieId) => {
    const updatedSeeLaterList = [...seeLaterList, movieId]
    setSeeLaterList(updatedSeeLaterList)
  }

  return (
    <SeeLaterList.Provider value={{ seeLaterList, addToLaterList }}>
      {children}
    </SeeLaterList.Provider>
  )
}

export default SeeLaterListProvider
