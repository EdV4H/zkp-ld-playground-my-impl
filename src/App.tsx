import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import ZkpLdPgAppBar from "./components/organisms/ZkpLdPgAppBar";
import { lightTheme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <ZkpLdPgAppBar />
    </ThemeProvider>
  );
};

export default App;
