import { Box, Container } from '@mui/material';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';
import theme from '../../styles/theme';
import { dataAPI } from '../../utils/Mock/dataApi';
const Home = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: dataAPI.background_color ?? theme.palette.custom.backgroundBlue,
        padding: '100px 115.5px',
        boxSizing: 'border-box',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          backgroundColor: theme.palette.custom.white,
          borderRadius: '1.125rem',
          position: 'relative'
        }}
      >
        <Welcome />
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;