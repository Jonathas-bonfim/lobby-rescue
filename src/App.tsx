import { ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
