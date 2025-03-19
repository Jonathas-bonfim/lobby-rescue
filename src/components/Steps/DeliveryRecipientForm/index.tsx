import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { ETypeProps } from '../../../@types/InputBaseProps';
import { ExtraQuestionResponseRedeemCreationProps, RedeemCreationProps } from '../../../@types/redeemForm';
import { RedeemPageProps } from '../../../@types/reedemPages';
import { ESteps } from '../../../@types/steps';
import { createRedeem, getRedeemPage } from '../../../api/api';
import theme from '../../../styles/theme';
import { CountriesMock } from '../../../utils/Mock/Countries';
import { StatesMock } from '../../../utils/Mock/States';
import { RedeemFormProps } from '../../../validation';
import NavigationButtons from '../../Buttons/NavigationButtons';
import DynamicInput from '../../Inputs/DynamicInput';
import SelectInput from '../../Inputs/SelectInput';
import TextInput from '../../Inputs/TextInput';
import { useSnackbar } from '../../Snackbar';

interface DeliveryRecipientFormProps {
  navigateToStep: (step: ESteps) => void;
}

const DeliveryRecipientForm: React.FC<DeliveryRecipientFormProps> = ({ navigateToStep }) => {
  const { data: redeemPageProps } = useQuery<RedeemPageProps>({
    queryKey: ['redeemPages'],
    queryFn: getRedeemPage,
  });

  const { handleSubmit, formState: { errors } } = useFormContext<RedeemFormProps>();
  const { showSnackbar } = useSnackbar();

  const onSubmit = async (data: RedeemFormProps) => {
    try {

      const transformedExtraQuestionResponses: ExtraQuestionResponseRedeemCreationProps[] = Object.entries(data.extra_question_responses || {}).map(([key, value]) => {
        const extraQuestionId = parseInt(key, 10);
        return {
          extra_question_id: extraQuestionId,
          answer: value.answer,
        };
      });

      const payload: RedeemCreationProps = {
        ...data,
        extra_question_responses: transformedExtraQuestionResponses,
      };

      const response = await createRedeem(payload);
      console.log('Resposta da API:', response);
      navigateToStep(ESteps.RESGATE_CONFIRMATION);
    } catch (error) {
      showSnackbar(`Erro ao enviar dados. Por favor, tente novamente. ${error}`);
    }
  };

  const handleNext = () => {
    if (Object.keys(errors).length > 0) {
      console.log('JB | Errors ', { errors });
      showSnackbar('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }
    handleSubmit(onSubmit)();
  };

  useEffect(() => {
    console.log('JB | Errors ', { errors });
  }, [errors]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)} // Corrigido aqui
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
          <TextInput name="redeemer_document_number" label="CPF ou CNPJ" placeholder='999.999.999-99' />
        </Grid>
        <Grid size={{ lg: 6, md: 12 }}>
          <TextInput name="redeemer_email" label="E-mail" />
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
          <TextInput name="redeemer_zipcode" label="CEP" placeholder='99.999-999' />
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
          <SelectInput options={CountriesMock} name="redeemer_country" label="País" />
        </Grid>
      </Grid>
      {
        redeemPageProps?.extra_questions &&
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
          {redeemPageProps?.extra_questions?.map((question) => {
            const normalizedAnswerType = question.answer_type.toUpperCase() as keyof typeof ETypeProps;
            return (
              <Grid key={question.id} size={{ lg: 6, md: 12 }}>
                <DynamicInput
                  type={ETypeProps[normalizedAnswerType]}
                  name={`extra_question_responses[${question.id}].answer`}
                  label={question.question}
                  options={question.options}
                />
              </Grid>
            );
          })}
        </Grid>
      }
      <NavigationButtons
        handleNextStep={handleNext}
        handlePrevStep={() => navigateToStep(ESteps.ITEMS)}
      />
    </Box>
  );
};

export default DeliveryRecipientForm;