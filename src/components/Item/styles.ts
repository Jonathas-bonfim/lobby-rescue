import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ItemContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  border: "1px solid #E0E0E0",
  borderRadius: "6px",
  padding: "1rem",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease",
  "&:hover": {
    border: `1px solid ${theme.palette.custom.blueLobbyBorder}`,
  },
}));

export const SizeButton = styled(Button)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    minWidth: "2rem",
    padding: "0.25rem 0.5rem",
    border: `1px solid ${
      selected
        ? theme.palette.custom.blueLobbyBorder
        : theme.palette.custom.gray3
    }`,
    borderRadius: "0.25rem",
    backgroundColor: selected
      ? theme.palette.custom.blueLobbyBorder
      : "transparent",
    color: selected ? theme.palette.custom.white : theme.palette.custom.black,
    "&:hover": {
      backgroundColor: theme.palette.custom.blueLobbyBorder,
      color: theme.palette.custom.white,
    },
  })
);
