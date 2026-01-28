import { Navigate, Route, Routes } from "react-router-dom";
import FormToDoList from "./formBasico/FormToDoList";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/form-todo" replace/>} />
      <Route path="/form-todo" element={<FormToDoList/>} />
    </Routes>
  )
}

export default App
