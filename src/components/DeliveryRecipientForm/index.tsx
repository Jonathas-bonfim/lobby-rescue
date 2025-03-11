import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextInput from '../../components/Inputs/TextInput';
import theme from '../../styles/theme';

const schema = yup.object().shape({
  fullName: yup.string().required('Nome completo é obrigatório'),
  cpfCnpj: yup
    .string()
    .required('CPF ou CNPJ é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CPF ou CNPJ inválido'),
  cep: yup
    .string()
    .required('CEP é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  street: yup.string().required('Rua é obrigatória'),
  number: yup.string().required('Número é obrigatório'),
  complement: yup.string(),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('Estado é obrigatório'),
  country: yup.string().required('País é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
});

const DeliveryRecipientForm: React.FC = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('Dados do destinatário:', data);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          margin: '0 auto',
          padding: '2.5rem',
          gap: '2.5rem',
        }}
      >
        <Typography variant="h4" sx={{
          marginBottom: '2.5rem',
          textAlign: 'center',
          fontSize: '1.25rem',
          color: theme.palette.custom.black
        }}>
          Finalize o seu resgate
        </Typography>

        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h6" sx={{
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: '600',
              color: theme.palette.custom.black
            }}>
              Dados do destinatário
            </Typography>
          </Grid>
          <Grid size={12}>
            <TextInput name="fullName" label="Nome completo" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="cpfCnpj" label="CPF ou CNPJ" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="email" label="E-mail" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography variant="h6" sx={{
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: '600',
              color: theme.palette.custom.black
            }}>
              Endereço de entrega
            </Typography>
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="cep" label="CEP" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="street" label="Rua" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <TextInput name="number" label="Número" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <TextInput name="complement" label="Complemento" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="neighborhood" label="Bairro" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="city" label="Cidade" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <TextInput name="state" label="Estado" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <TextInput name="country" label="País" />
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default DeliveryRecipientForm;