import { useState } from 'react'
import './App.css'
import RatingCard from './Components/RatingCard'
import ThankYou from './Components/ThankYou'

function App() {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [enableCompleteButton, setEnableCompleteButton] = useState<boolean>(false);
  const total : number = 5;

  const handleInput = (inputNum : number) : void => {
    setInputNumber(inputNum);
  }

  const handleComplete = () => {
    setEnableCompleteButton(true)
  }

  return (
    <div className="App">
      {
        (enableCompleteButton && (inputNumber != 0)) 
          ? <ThankYou select={inputNumber} total={total} /> 
          : <RatingCard total={total} handleComplete={handleComplete} handleInput={handleInput} />
      }
    </div>
  )
}

export default App
