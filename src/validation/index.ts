import * as yup from "yup";
import { RedeemCreationProps } from "../@types/redeemForm";

export interface RedeemFormProps extends RedeemCreationProps {
  id: number | null;
}
export const itemsSchema = yup.object().shape({
  selectedItems: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        quantity: yup.number().required().min(1),
      })
    )
    .required("Selecione pelo menos um item"),
});

export const deliveryRecipientSchema = yup.object().shape({
  recipientName: yup.string().required("O nome do destinatário é obrigatório"),
  recipientAddress: yup.string().required("O endereço é obrigatório"),
  recipientPhone: yup.string().required("O telefone é obrigatório"),
});

export const resgateConfirmationSchema = yup.object().shape({
  confirmation: yup.boolean().oneOf([true], "A confirmação é obrigatória"),
});

export const defaultValuesRedeemForm: RedeemFormProps = {
  id: null,
  redeemer_zipcode: "",
  items: [],
  extra_question_responses: [],
  redeemer_city: "",
  redeemer_complement: "",
  redeemer_country: "",
  redeemer_document_number: "",
  redeemer_email: "",
  redeemer_name: "",
  redeemer_neighborhood: "",
  redeemer_number: "",
  redeemer_phone: "",
  redeemer_state: "",
  redeemer_street: "",
};
