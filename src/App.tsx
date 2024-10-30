import { useState } from "react";
import "./App.css";

function App() {
  const meowSound = new Audio("/sound/meow.mp3");
  const clickSound = new Audio("/sound/click.mp3");

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["*", "/", "+", "-"];

  const [outputResult, setOutputResult] = useState<string>("");

  function calculateResult() {
    setOutputResult(eval(outputResult).toString());
  }

  function handleClearOutput() {
    setOutputResult("");
  }

  function handleCalculate() {
    if (outputResult === "") {
      return;
    }
    calculateResult();
    meowSound.play();
  }

  function handleClickNumber(val: string) {
    clickSound.play();

    const valueArr = outputResult.split("");
    if (
      operators.includes(val) &&
      operators.some((el) => valueArr.includes(el))
    ) {
      return;
    }
    setOutputResult(outputResult + val);

    //   console.log(currFirstValue);
    //   if (operators == "") {
    //     setCurrFirstValue(currFirstValue + val);
    //   } else {
    //     setCurrSecondValue(currSecondValue + val);
    //   }
  }

  return (
    <div className="container">
      <div className="calculator-wrapper">
        <div>
          <img src="images/cat.png" alt="cat" className="cat" />
        </div>
        <div className="calc">
          <form action="">
            <div className="display">
              <input type="text" value={outputResult} readOnly />
            </div>
            <div className="buttons-container">
              <div onClick={handleClearOutput} className="clear">
                AC
              </div>

              {operators.map((val, key) => (
                <div
                  id="operator-val"
                  key={key}
                  onClick={() => handleClickNumber(val)}
                >
                  {val}
                </div>
              ))}

              {numbers.reverse().map((val, key) => (
                <div
                  id="number-val"
                  key={key}
                  onClick={() => handleClickNumber(val.toString())}
                >
                  {val}
                </div>
              ))}
              <div onClick={handleCalculate} className="equals">
                {" "}
                =
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
