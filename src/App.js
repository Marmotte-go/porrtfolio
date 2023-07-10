import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal, pink } from '@mui/material/colors';

import './App.css';
import Home from './pages/home/Home';


function App() {

  const theme = createTheme({
    palette: {
      primary: teal,
      secondary: pink,
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}

export default App;
