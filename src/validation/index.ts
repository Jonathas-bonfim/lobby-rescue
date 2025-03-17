import * as yup from "yup";
import { RedeemCreationProps } from "../@types/redeemForm";

export interface RedeemFormProps extends RedeemCreationProps {
  id: number | null;
}
export const deliveryRecipientSchema = yup.object().shape({
  redeemer_name: yup
    .string()
    .required("O nome é obrigatório")
    .max(50, "O nome pode conter no máximo 50 caracteres"),
  redeemer_email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório")
    .max(50, "O email pode ter no máximo 50 caracteres"),
  redeemer_phone: yup
    .string()
    .required("O telefone é obrigatório")
    .max(11, "O telefone pode conter no máximo 11 caracteres"),
  redeemer_zipcode: yup
    .string()
    .required("O CEP é obrigatório")
    .max(8, "O CEP pode conter no máximo 8 caracteres"),
  redeemer_street: yup
    .string()
    .required("A rua é obrigatória")
    .max(50, "A rua pode conter no máximo 50 caracteres"),
  redeemer_number: yup
    .string()
    .required("O número é obrigatório")
    .max(12, "O número pode conter no máximo 12 caracteres"),
  redeemer_complement: yup
    .string()
    .max(60, "O Complemento pode conter no máximo 60 caracteres"),
  redeemer_neighborhood: yup
    .string()
    .required("O bairro é obrigatório")
    .max(30, "O bairro pode conter no máximo 30 caracteres"),
  redeemer_city: yup
    .string()
    .required("A cidade é obrigatória")
    .max(60, "A cidade pode conter no máximo 60 caracteres"),
  redeemer_state: yup.string().required("O estado é obrigatório"),
  redeemer_country: yup.string().required("O país é obrigatório"),
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
