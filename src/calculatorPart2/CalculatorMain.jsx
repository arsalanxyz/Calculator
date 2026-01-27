import styles from "./CalculatorMain.module.css";

import Display from "./components/Display";

import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function CalculatorMain() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalValue("");
    } else if (buttonName === "=") {
      const res = eval(calValue);
      setCalValue(res);
    } else {
      const newDisplayValue = calValue + buttonName;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayVal={calValue}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </center>
  );
}
export default CalculatorMain;
