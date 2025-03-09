import { ThemeProvider } from "@mui/material";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimaryButton>Continuar</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </ThemeProvider>
  )
}

export default App
