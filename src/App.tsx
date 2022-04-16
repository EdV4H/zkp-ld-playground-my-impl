import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import ZkpLdPgAppBar from "./components/organisms/ZkpLdPgAppBar";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ZkpLdPgAppBar />
    </ThemeProvider>
  );
};

export default App;
