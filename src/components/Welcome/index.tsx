import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import theme from '../../styles/theme';
import { dataAPI } from '../../utils/Mock/dataApi';
import PrimaryButton from '../Buttons/PrimaryButton';

const Welcome: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        gap: '2.5rem'
      }}
    >
      <Box
        component="img"
        src={dataAPI.logo_url}
        alt="Logo da empresa"
        sx={{
          width: '100%',
          maxHeight: '3.375rem',
          borderRadius: '8px',
          objectFit: 'contain',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          sx={{
            fontSize: '2.5rem',
            color: theme.palette.custom.black,
            marginBottom: '1.125rem',
          }}
        >
          {dataAPI.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.125rem',
            color: theme.palette.custom.gray1,
          }}
        >
          {dataAPI.welcome_title}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.125rem',
            color: theme.palette.custom.gray1,
          }}
        >
          {dataAPI.welcome_phrase}
        </Typography>
      </Box>

      <PrimaryButton variant="contained">
        Começar!
      </PrimaryButton>
    </Container>
  );
};

export default Welcome;