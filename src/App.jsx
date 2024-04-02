import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";

function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jobs/:jobName" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default App;
