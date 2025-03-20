import { Box, Button, Container, Paper, Typography } from "@mui/material"
import type React from "react"

import lobbyImage from "../../assets/images/lobby-logo.png"
import notFoundImagem from "../../assets/images/not-found.png"
import theme from "../../styles/theme"

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 2,
            textAlign: "center",
            bgcolor: "background.paper",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            component="img"
            src={lobbyImage}
            sx={{
              maxWidth: "12rem",
              width: "100%",
              height: "auto",
              objectFit: "contain",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
            }}
          />
          <Box
            component="img"
            src={notFoundImagem}
            sx={{
              width: '100%',
              height: "auto",
              objectFit: "contain",
              borderRadius: "0.5rem",
              marginBottom: "2rem",
              "@media (max-width: 750px)": {
                fontSize: "0.875rem",
              },
            }}
          />

          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: "#3F51B5",
            }}
          >
            Oops! Página não encontrada.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#78909C",
              maxWidth: "450px",
              mx: "auto",
            }}
          >
            Parece que você explorou demais, e acabou se perdendo.
          </Typography>

          <Button
            variant="contained"
            href="/"
            sx={{
              bgcolor: theme.palette.custom.blueLobby,
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: theme.palette.custom.blueLobby,
              },
            }}
          >
            Voltar para página inicial
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}

export default NotFound

