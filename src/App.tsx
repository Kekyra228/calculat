import { useState } from "react";
import "./App.css";

function App() {
  const meowSound = new Audio("/sound/meow.mp3");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["*", "/", "+", "-"];

  // const [currFirstValue, setCurrFirstValue] = useState("");
  // const [currSecondValue, setCurrSecondValue] = useState("");

  const [outputResult, setOutputResult] = useState<string>("");

  function calculateResult() {
    setOutputResult(eval(outputResult).toString());
  }

  function handleClearOutput() {
    setOutputResult("");
  }

  function handleCalculate() {
    calculateResult();
  }

  function handleClickNumber(val: string) {
    console.log(outputResult);
    const valueArr = outputResult.split("");

    if (
      operators.includes(val) &&
      operators.some((el) => valueArr.includes(el))
    ) {
      console.log("зашел");
      return;
    }
    setOutputResult(outputResult + val);
    // meowSound.play();
    //   console.log(currFirstValue);
    //   if (operators == "") {
    //     setCurrFirstValue(currFirstValue + val);
    //   } else {
    //     setCurrSecondValue(currSecondValue + val);
    //   }
  }

  return (
    <div className="container">
      <div className="calc">
        <form action="">
          <div className="display">
            <input type="text" value={outputResult} readOnly />
          </div>
          <div className="numbers">
            {numbers.map((val, key) => (
              <div
                id="number-val"
                key={key}
                onClick={() => handleClickNumber(val.toString())}
              >
                {val}
              </div>
            ))}
          </div>
          <div className="operators">
            {operators.map((val, key) => (
              <div
                id="operator-val"
                key={key}
                onClick={() => handleClickNumber(val)}
              >
                {val}
              </div>
            ))}
          </div>
          <div>
            <div onClick={handleCalculate}>=</div>
          </div>
          <div>
            <div onClick={handleClearOutput}>AC</div>
          </div>
          {/* <div>
            <input type="button" value="delete" />
          </div>
          <div>
            <input type="button" value="7" />
            <input type="button" value="8" />
            <input type="button" value="9" />
            <input type="button" value="*" />
          </div>
          <div>
            <input type="button" value="4" />
            <input type="button" value="5" />
            <input type="button" value="6" />
            <input type="button" value="+" />
          </div>
          <div>
            <input type="button" value="1" />
            <input type="button" value="2" />
            <input type="button" value="3" />
            <input type="button" value="-" />
          </div>
          <div>
            <input type="button" value="0" />
            <input type="button" value="00" />
            <input type="button" value="=" className="equality" />
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default App;
