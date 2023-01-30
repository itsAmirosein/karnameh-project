import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Answers from "pages/answers";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:ID" element={<Answers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
