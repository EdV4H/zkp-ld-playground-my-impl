import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";

import ZkpLdPlayground from "./components/templates/ZkpLdPlayground";
import useIssuer from "./hooks/useIssuer";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const issuer = useIssuer();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <ZkpLdPlayground
        theme={theme}
        onThemeChange={(newTheme) => setTheme(newTheme)}
        exampleDocuments={issuer.exampleDocuments}
        exampleKeys={issuer.exampleKeys}
        inputDocument={issuer.inputDocument}
        issuerKey={issuer.issuerKey}
        onSelectInputDocument={issuer.handleInputDocumentSelect}
        onChangeInputDocument={issuer.handleInputDocumentChange}
        onSelectIssuerKey={issuer.handleIssuerKeySelect}
        onChangeIssuerKey={issuer.handleIssuerKeyChange}
      />
    </ThemeProvider>
  );
};

export default App;
