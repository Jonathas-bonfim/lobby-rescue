import { Box, CircularProgress, Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { RedeemPageProps } from '../../@types/reedemPages';
import { ESteps } from '../../@types/steps';
import { getRedeemPage } from '../../api/api';
import Footer from '../../components/Footer';
import NotFound from '../../components/NotFound';
import DeliveryRecipientForm from '../../components/Steps/DeliveryRecipientForm';
import Items from '../../components/Steps/Items';
import ResgateConfirmation from '../../components/Steps/ResgateConfirmation';
import Welcome from '../../components/Steps/Welcome';
import theme from '../../styles/theme';

const Home = () => {
  const [currentStep, setCurrentStep] = useState<ESteps>(ESteps.WELCOME);

  const methods = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const navigateToStep = (step: ESteps) => {
    setCurrentStep(step);
  };

  const onSubmit = () => { };

  const stepComponents = {
    [ESteps.WELCOME]: <Welcome navigateToStep={navigateToStep} />,
    [ESteps.ITEMS]: <Items navigateToStep={navigateToStep} />,
    [ESteps.DELIVERY_RECIPIENT]: <DeliveryRecipientForm navigateToStep={navigateToStep} />,
    [ESteps.RESGATE_CONFIRMATION]: <ResgateConfirmation />,
  };

  const { data: redeemPageProps, isLoading } = useQuery<RedeemPageProps>({
    queryKey: ['redeemPages'],
    queryFn: getRedeemPage,
  });

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: redeemPageProps?.background_color ?? theme.palette.custom.backgroundBlue,
        padding: '100px 115.5px',
        boxSizing: 'border-box',
      }}
    >
      {isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              width: '100%',
              textAlign: 'center',
              backgroundColor: theme.palette.custom.white,
              borderRadius: '1.125rem',
              paddingBottom: '6rem',
            }}
          >
            {redeemPageProps?.status === 'ACTIVE' ? (
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {React.cloneElement(stepComponents[currentStep], { navigateToStep })}
                </form>
              </FormProvider>
            ) : (
              <NotFound />
            )}
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
        </>
      )}
    </Box>
  );
};

export default Home;