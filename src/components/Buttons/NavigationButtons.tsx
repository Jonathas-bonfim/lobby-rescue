import { Box } from "@mui/material";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface NavigationButtonsProps {
  handlePrevStep: VoidFunction;
  handleNextStep: VoidFunction;
}
const NavigationButtons: React.FC<NavigationButtonsProps> = ({ handlePrevStep, handleNextStep }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <SecondaryButton variant="contained" onClick={handlePrevStep}>
        Voltar
      </SecondaryButton>
      <PrimaryButton variant="contained" onClick={handleNextStep}>
        Continuar
      </PrimaryButton>
    </Box>
  )
}

export default NavigationButtons