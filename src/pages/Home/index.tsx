import { Box, CircularProgress, Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form'; // Importe o FormProvider
import { RedeemPageProps } from '../../@types/reedemPages';
import { getRedeemPage } from '../../api/api';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import DeliveryRecipientForm from '../../components/DeliveryRecipientForm';
import Footer from '../../components/Footer';
import Items from '../../components/Items';
import NotFound from '../../components/NotFound';
import ResgateConfirmation from '../../components/ResgateConfirmation';
import Welcome from '../../components/Welcome';
import theme from '../../styles/theme';
import { dataAPI } from '../../utils/Mock/dataApi';

const Home = () => {
  const [step, setStep] = useState(1);

  const methods = useForm({
    mode: 'onChange',
  });

  const { handleSubmit, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data) => {

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
        backgroundColor: dataAPI.background_color ?? theme.palette.custom.backgroundBlue,
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
                  {step === 1 && <Welcome />}
                  {step === 2 && <Items />}
                  {step === 3 && <DeliveryRecipientForm />}
                  {step === 4 && <ResgateConfirmation />}

                  {step === 1 ? (
                    <PrimaryButton variant="contained" sx={{ marginTop: '2.5rem' }} onClick={handleNext}>
                      Começar!
                    </PrimaryButton>
                  ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '2.5rem' }}>
                      {step > 1 && step !== 4 && (
                        <SecondaryButton variant="contained" onClick={handleBack}>
                          Voltar
                        </SecondaryButton>
                      )}
                      {step < 4 && (
                        <PrimaryButton variant="contained" onClick={handleNext}>
                          Continuar
                        </PrimaryButton>
                      )}
                    </Box>
                  )}
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