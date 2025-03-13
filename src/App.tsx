import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Home from "./pages/Home";
import theme from "./styles/theme";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;