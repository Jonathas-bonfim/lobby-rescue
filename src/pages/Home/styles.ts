import { SxProps, Theme } from "@mui/material/styles";

export const HomeContainer = (backgroundColor: string): SxProps<Theme> => ({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: backgroundColor,
  padding: "6.25rem 7.125rem",
  boxSizing: "border-box",
  "@media (max-width: 750px)": {
    padding: "1.125rem",
  },
});
