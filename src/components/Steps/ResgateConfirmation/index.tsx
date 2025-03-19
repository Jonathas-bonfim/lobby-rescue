import { Box, Container, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { RedeemPageProps } from "../../../@types/reedemPages";
import { getRedeemPage } from "../../../api/api";

const ResgateConfirmation: React.FC = () => {
  const { data: redeemPageProps } = useQuery<RedeemPageProps>({
    queryKey: ['redeemPages'],
    queryFn: getRedeemPage,
  });
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
          }}
        >
          <Box
            component="img"
            src={redeemPageProps?.logo_url ?? ''}
            sx={{
              maxWidth: '12rem',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: 'center'
            }}
          >
            Presente resgatado! 🎉🥳
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: "#546E7A" }}>
            Seu pedido está em andamento!
          </Typography>

          <Typography variant="body1" sx={{ mb: 6, color: "#78909C" }}>
            E não se preocupe, as alterações de status do envio chegam todas em seu e-mail!
          </Typography>
        </Paper>
      </Container>
    </Box >
  )
}

export default ResgateConfirmation