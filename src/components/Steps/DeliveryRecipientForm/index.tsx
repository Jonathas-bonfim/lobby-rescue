import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ETypeProps } from '../../../@types/InputBaseProps';
import { ESteps } from '../../../@types/steps';
import theme from '../../../styles/theme';
import { StatesMock } from '../../../utils/Mock/States';
import NavigationButtons from '../../Buttons/NavigationButtons';
import DynamicInput from '../../Inputs/DynamicInput';
import SelectInput from '../../Inputs/SelectInput';
import TextInput from '../../Inputs/TextInput';
import { useSnackbar } from '../../Snackbar';

// Esquema de validação Yup com os nomes dos campos atualizados
const deliveryRecipientSchema = yup.object().shape({
  redeemer_name: yup.string().required('O nome é obrigatório').max(50, 'O nome pode conter no máximo 50 caracteres'),
  redeemer_email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório').max(50, 'O email pode ter no máximo 50 caracteres'),
  redeemer_phone: yup.string().required('O telefone é obrigatório').max(11, 'O telefone pode conter no máximo 11 caracteres'),
  redeemer_zipcode: yup.string().required('O CEP é obrigatório').max(8, 'O CEP pode conter no máximo 8 caracteres'),
  redeemer_street: yup.string().required('A rua é obrigatória').max(50, 'A rua pode conter no máximo 50 caracteres'),
  redeemer_number: yup.string().required('O número é obrigatório').max(12, 'O número pode conter no máximo 12 caracteres'),
  redeemer_complement: yup.string().max(60, 'O Complemento pode conter no máximo 60 caracteres'),
  redeemer_neighborhood: yup.string().required('O bairro é obrigatório').max(30, 'O bairro pode conter no máximo 30 caracteres'),
  redeemer_city: yup.string().required('A cidade é obrigatória').max(60, 'A cidade pode conter no máximo 60 caracteres'),
  redeemer_state: yup.string().required('O estado é obrigatório'),
  redeemer_country: yup.string().required('O país é obrigatório'),
});

const extra_questions = [
  {
    id: 383,
    answer_type: "text",
    question: "Qual seu time favorito?",
    position: 1,
    options: [],
  },
  {
    id: 384,
    answer_type: "text_area",
    question: "Fale um pouco sobre você",
    position: 4,
    options: [],
  },
  {
    id: 385,
    answer_type: "select_one",
    question: "Você já participou de algum evento?",
    position: 3,
    options: ["Sim", "Não"],
  },
  {
    id: 386,
    answer_type: "date",
    question: "Data de nascimento",
    position: 2,
    options: [],
  },
];

interface DeliveryRecipientFormProps {
  navigateToStep: (step: ESteps) => void;
}

const DeliveryRecipientForm: React.FC<DeliveryRecipientFormProps> = ({ navigateToStep }) => {
  const methodsForm = useForm({
    resolver: yupResolver(deliveryRecipientSchema),
  });

  const { handleSubmit, formState: { errors } } = methodsForm;
  const { showSnackbar } = useSnackbar();

  const onSubmit = (data: unknown) => {
    console.log('Dados do destinatário:', data);
    navigateToStep(ESteps.RESGATE_CONFIRMATION);
  };

  const handleNext = () => {
    if (Object.keys(errors).length > 0) {
      showSnackbar('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }
    handleSubmit(onSubmit)();
  };

  useEffect(() => {
    console.log('JB | Errors ', { errors });
  }, [errors]);

  return (
    <FormProvider {...methodsForm}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
            <TextInput name="redeemer_name" label="Nome completo" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="redeemer_email" label="E-mail" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="redeemer_phone" label="Telefone" />
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
            <TextInput name="redeemer_zipcode" label="CEP" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="redeemer_street" label="Rua" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <TextInput name="redeemer_number" label="Número" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <TextInput name="redeemer_complement" label="Complemento" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="redeemer_neighborhood" label="Bairro" />
          </Grid>
          <Grid size={{ lg: 6, md: 12 }}>
            <TextInput name="redeemer_city" label="Cidade" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <SelectInput options={StatesMock} name="redeemer_state" label="Estado" />
          </Grid>
          <Grid size={{ lg: 3, md: 6 }}>
            <TextInput name="redeemer_country" label="País" />
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
              Perguntas Adicionais
            </Typography>
          </Grid>
          {extra_questions.map((question) => {
            const normalizedAnswerType = question.answer_type.toUpperCase() as keyof typeof ETypeProps;
            return (
              <Grid key={question.id} size={{ lg: 6, md: 12 }}>
                <DynamicInput
                  type={ETypeProps[normalizedAnswerType]}
                  name={`extra_question_responses[${question.id}].answer`} // Nome do campo atualizado
                  label={question.question}
                  options={question.options}
                />
              </Grid>
            );
          })}
        </Grid>

        <NavigationButtons
          handleNextStep={handleNext}
          handlePrevStep={() => navigateToStep(ESteps.ITEMS)}
        />
      </Box>
    </FormProvider>
  );
};

export default DeliveryRecipientForm;