// src/theme.ts
"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#030712",
      light: "#d1d5db",
      dark: "#1f2937",
      contrastText: "#f9fafb",
    },
    secondary: {
      main: "#ffffff",
      light: "#1f2937",
      dark: "#d1d5db",
      contrastText: "#030712",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
