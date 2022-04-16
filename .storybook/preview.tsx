import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme } from "../src/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
