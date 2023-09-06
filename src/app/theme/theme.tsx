import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0c1f3f",
    },
    secondary: {
      main: "#ff0057",
    },
    background: {
      default: "#071636",
      paper: "#0c1f3f",
    },
    text: {
      primary: "#e4e4e4",
      secondary: "rgba(228,228,228,0.54)",
    },
    divider: "#042e60",
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});

export default theme;
