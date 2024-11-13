"use client";
import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

// const currentTheme = "dark";
const currentTheme = "light";
const theme = createTheme({
  palette: {
    mode: currentTheme === "dark" ? "dark" : "light",
    background: {
      default: currentTheme === "dark" ? "#0F1214" : "#fff",
      paper: currentTheme === "dark" ? "#fff" : "#0F1214",
    },
    text: {
      primary: currentTheme === "dark" ? "#B0B8C3" : "#404040",
      secondary: currentTheme === "dark" ? "#fff" : "#000",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      main: "#009688",
    },
  },
});

const CustomTheme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomTheme;
