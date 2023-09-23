import "./less/App.less"
import InputNumberForm from "./components/InputNumberForm/InputNumberForm"
import MyButton from "./components/UI/MyButton/MyButton"

import {useState} from "react"
function App() {

  const [number, setNumber] = useState(0)
  const [display, setDisplay] = useState(false)

  if(!display)
  return (
    <MyButton 
      onClick={ () => {setDisplay(true)} }
    >Enter Number</MyButton>
  )
  
  return (
    <>
      <InputNumberForm setDisplay={setDisplay} setNumber={setNumber}/>
    </>
  )
}

export default App