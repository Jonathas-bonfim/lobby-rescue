/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import DeliveryRecipientForm from '../../components/DeliveryRecipientForm';
import Footer from '../../components/Footer';
import Items from '../../components/Items';
import ResgateConfirmation from '../../components/ResgateConfirmation';
import theme from '../../styles/theme';
import { dataAPI } from '../../utils/Mock/dataApi';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import Welcome from '../../components/Welcome';
// Defina os schemas de validação para cada step
const itemsSchema = yup.object().shape({
  itemName: yup.string().required('O nome do item é obrigatório'),
  // Adicione mais campos conforme necessário
});

const deliveryRecipientSchema = yup.object().shape({
  recipientName: yup.string().required('O nome do destinatário é obrigatório'),
  // Adicione mais campos conforme necessário
});

const resgateConfirmationSchema = yup.object().shape({
  confirmation: yup.boolean().oneOf([true], 'A confirmação é obrigatória'),
  // Adicione mais campos conforme necessário
});

const Home = () => {
  const [step, setStep] = useState(1);

  // Configuração do react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger, // Para validar o formulário antes de avançar
  } = useForm<any>({
    resolver: yupResolver(
      step === 1 ? itemsSchema :
        step === 2 ? deliveryRecipientSchema :
          resgateConfirmationSchema
    ),
    mode: 'onChange', // Validação em tempo real
  });

  const handleNext = async () => {
    // const isStepValid = await trigger(); // Valida o formulário atual
    // if (isStepValid) {
    //   setStep((prevStep) => prevStep + 1);
    // }
    setStep((prevStep) => prevStep + 1);
  };

  // Função para voltar ao step anterior
  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Função para enviar o formulário final
  const onSubmit = (data: any) => {
    console.log('Dados do formulário:', data);
    alert('Formulário enviado com sucesso!');
  };

  useEffect(() => {
    console.log('JB | Step ', { step });
  }, [step])

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
        <>
          {/* {
          step === 1 &&
          <Items />
        }
        {
          step === 2 &&
          <DeliveryRecipientForm />
        }
        {
          step === 3 &&
          <ResgateConfirmation />
        }
        <NotFound /> */}
        </>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* {step === 0 && <Items control={control} errors={errors} />}
          {step === 1 && <DeliveryRecipientForm control={control} errors={errors} />}
          {step === 2 && <ResgateConfirmation control={control} errors={errors} />} */}
          {step === 1 && <Welcome />}
          {step === 2 && <Items />}
          {step === 3 && <DeliveryRecipientForm />}
          {step === 4 && <ResgateConfirmation />}

          {
            step === 1 ? (
              <PrimaryButton variant="contained" onClick={() => setStep(2)}>
                Começar!
              </PrimaryButton>
            ) : (

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
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
            )
          }
          {
            step === 4 && (
              <PrimaryButton variant="contained" onClick={() => setStep(1)}>
                Página inicial!
              </PrimaryButton>
            )
          }
        </form>
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