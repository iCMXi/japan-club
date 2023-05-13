import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./test";

import Home from "./layers/home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
