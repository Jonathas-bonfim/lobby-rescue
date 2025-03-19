import { Box, Button, Container, Paper, Typography } from "@mui/material"
import type React from "react"

import lobbyImage from "../../assets/images/lobby-logo.png"

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        minHeight: "100vh",
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
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h1"
              component="span"
              sx={{
                color: "#F44336",
                fontWeight: "bold",
                fontSize: { xs: "3rem", md: "4rem" },
              }}
            >
              4
            </Typography>

            <Box
              sx={{
                width: { xs: 100, md: 120 },
                height: { xs: 100, md: 120 },
                bgcolor: "#E3F2FD",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 1,
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="/placeholder.svg?height=80&width=80"
                alt="Caranguejo com óculos escuros"
                sx={{
                  width: { xs: 70, md: 80 },
                  height: { xs: 70, md: 80 },
                }}
              />

              <Typography
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  color: "#3F51B5",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                ?
              </Typography>

              <Typography
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#3F51B5",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                ?
              </Typography>
            </Box>

            <Typography
              variant="h1"
              component="span"
              sx={{
                color: "#F44336",
                fontWeight: "bold",
                fontSize: { xs: "3rem", md: "4rem" },
              }}
            >
              4
            </Typography>
          </Box>

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
              bgcolor: "#3F51B5",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#303F9F",
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

