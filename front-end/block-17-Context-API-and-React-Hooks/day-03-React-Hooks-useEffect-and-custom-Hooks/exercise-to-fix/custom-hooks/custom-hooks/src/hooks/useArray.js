import { useState } from "react";

const useArray = () => {
  const [lists, setLists] = useState([])

  const handleClick = (value) => {
    setLists([...lists, value])

  }
  return { lists, handleClick }
}

export default useArray;
