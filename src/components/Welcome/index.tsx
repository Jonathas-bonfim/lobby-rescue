import { Box, Container, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { RedeemPageProps } from '../../@types/reedemPages';
import { ESteps } from '../../@types/steps';
import { getRedeemPage } from '../../api/api';
import theme from '../../styles/theme';
import PrimaryButton from '../Buttons/PrimaryButton';

interface WelcomeProps {
  navigateToStep: (step: ESteps) => void;
}
const Welcome: React.FC<WelcomeProps> = ({ navigateToStep }) => {
  const { data: redeemPageProps } = useQuery<RedeemPageProps>({
    queryKey: ['redeemPages'],
    queryFn: getRedeemPage,
  });

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
        src={redeemPageProps?.logo_url}
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
          {redeemPageProps?.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.125rem',
            color: theme.palette.custom.gray1,
          }}
        >
          {redeemPageProps?.welcome_title}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.125rem',
            color: theme.palette.custom.gray1,
          }}
        >
          {redeemPageProps?.welcome_phrase}
        </Typography>
      </Box>
      <PrimaryButton
        variant="contained"
        sx={{ marginTop: "2.5rem" }}
        onClick={() => {
          navigateToStep(ESteps.ITEMS);
        }}
      >
        Começar!
      </PrimaryButton>
    </Container>
  );
};

export default Welcome;