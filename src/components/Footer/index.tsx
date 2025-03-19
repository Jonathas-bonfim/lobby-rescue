import { Box, Typography } from "@mui/material"
import { getCurrentYear } from "../../utils/CurrentYear"

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '20px',
        textAlign: 'center',
        color: '#64748B',
        paddingInline: '0.375rem'
      }}
    >
      <Typography>
        © {getCurrentYear()} · Empresa JB Tecnologia em parceria com a Lobby
      </Typography>
    </Box>
  )
}

export default Footer