import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


const App = function () {
  const [userInput, setuserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const InputIsValid = userInput.duration >= 1;

  function handleData(key, value) {
    setuserInput(
      (PreviousInputData) => {
        return {
          ...PreviousInputData, [key]: value,

        }
      }
    )
  }


  return (
    <>

      <Header></Header>
      <UserInput DataChangeFunction={handleData} userInput={userInput} />
      {!InputIsValid && <p className="center">please enter valid input</p>}

      {InputIsValid && <Results userInput={userInput} />}

    </>
  )
}

export default App











