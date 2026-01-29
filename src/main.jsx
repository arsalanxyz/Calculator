import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoMain2 from "./TodoPart2/1.TodoMain.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoMain2></TodoMain2>
  </StrictMode>,
);
