import { Box, Container } from '@mui/material';
import DeliveryRecipientForm from '../../components/DeliveryRecipientForm';
import Footer from '../../components/Footer';
import theme from '../../styles/theme';
import { dataAPI } from '../../utils/Mock/dataApi';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
          justifyContent: 'flex-start',
          flex: 1,
          width: '100%',
          textAlign: 'center',
          backgroundColor: theme.palette.custom.white,
          borderRadius: '1.125rem',
          paddingBottom: '6rem',
        }}
      >
        {/* <Items /> */}
        <DeliveryRecipientForm />
      </Container>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          position: 'relative',
          bottom: 0,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;