import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
