import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import TodoMain from './1.TodoMain.jsx'
// import CalculatorMain from './2.CalculatorMain.jsx'
import CalculatorMain from './calculatorPart2/CalculatorMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TodoMain/> */}
    {/* <CalculatorMain></CalculatorMain> */}
    <CalculatorMain></CalculatorMain>
  </StrictMode>,
)
