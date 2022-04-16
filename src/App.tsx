import "./App.css";
import Editor from "@monaco-editor/react";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { useState } from "react";

import VcElements from "./components/organisms/VcElements";
import ZkpLdPgAppBar from "./components/organisms/ZkpLdPgAppBar";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <ZkpLdPgAppBar
        theme={theme}
        onThemeChange={(newTheme) => setTheme(newTheme)}
      />
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <VcElements />
        </Grid>
        <Grid item xs={5}>
          <Editor language="json" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
