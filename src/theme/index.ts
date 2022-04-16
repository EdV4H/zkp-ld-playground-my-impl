import { PaletteColorOptions, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface CustomPalette {
    issuer: PaletteColorOptions;
    holder: PaletteColorOptions;
    verifier: PaletteColorOptions;
    verifiableDataRegistry: PaletteColorOptions;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends CustomPalette {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    issuer: true;
    holder: true;
    verifier: true;
    verifiableDataRegistry: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string, contrastColor?: string) =>
  augmentColor({ color: { main: mainColor, contrastText: contrastColor } });

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    issuer: createColor("#ff9800", "#fff"),
    holder: createColor("#3f51b5"),
    verifier: createColor("#4caf50", "#fff"),
    verifiableDataRegistry: createColor("#f44336"),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    issuer: createColor("#ff9800", "#fff"),
    holder: createColor("#3f51b5"),
    verifier: createColor("#4caf50", "#fff"),
    verifiableDataRegistry: createColor("#f44336"),
  },
});
