import "./App.scss";
import Home from "./pages/home/Home";
import MyStory from "./pages/mystory/MyStory";
import { ThemeProvider } from "./context/ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mystory" element={<MyStory />} />
        </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
