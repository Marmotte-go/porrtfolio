import "./App.scss";
import Home from "./pages/home/Home";
import { ThemeProvider } from "./context/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
