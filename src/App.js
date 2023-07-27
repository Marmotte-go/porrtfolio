import "./App.scss";
import Home from "./pages/home/Home";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
