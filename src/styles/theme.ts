import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      blueLobby: string;
      blueLobbyHover: string;
      blueLobbyBorder: string;
      backgroundBlue: string;
      backgroundLight: string;
      black: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      white: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      blueLobby?: string;
      blueLobbyHover?: string;
      blueLobbyBorder?: string;
      backgroundBlue?: string;
      backgroundLight?: string;
      black?: string;
      gray1?: string;
      gray2?: string;
      gray3?: string;
      gray4?: string;
      white?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#22007F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#353535",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#353535",
      secondary: "#64748B",
      disabled: "#B1B9C5",
    },
    background: {
      default: "#F4F4F4",
      paper: "#FFFFFF",
    },
    custom: {
      blueLobby: "#22007F",
      blueLobbyHover: "#3100B6",
      blueLobbyBorder: "#A073FF",
      backgroundBlue: "#EFF6FF",
      backgroundLight: "#F4F4F4",
      black: "#353535",
      gray1: "#64748B",
      gray2: "#B1B9C5",
      gray3: "#D8DCE2",
      gray4: "#F4F4F4",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

export default theme;
