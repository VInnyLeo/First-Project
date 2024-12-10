import { useState } from "react"

export default function useCounter() {

  const [count, setcount] = useState(0)
    //utilizando la funcion flecha lo q hacemos es q nos tome el valor actual y sume los 3 q estamos indicando
    //se esta afectando al estado actual 
  const handleClickPlus = () => {
    setcount(currentValue => currentValue + 1)
  }

  const handleClickLess = () => {
    setcount(currentValue => currentValue - 1)
  }

  return { count, handleClickPlus, handleClickLess}
  
}
