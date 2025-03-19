import { cnpj, cpf } from "cpf-cnpj-validator";
import * as yup from "yup";
import { RedeemCreationProps } from "../@types/redeemForm";

export type RedeemFormProps = RedeemCreationProps;

export const deliveryRecipientSchema = yup.object().shape({
  redeemer_document_number: yup
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .required("O CPF ou CNPJ é de preenchimento obrigatório")
    .test("cpf-cnpj-valid", "CPF ou CNPJ inválido", (value) => {
      if (!value) return false; // Se o valor for vazio, retorna falso
      return cpf.isValid(value) || cnpj.isValid(value); // Valida se é um CPF ou CNPJ válido
    }),
  redeemer_name: yup
    .string()
    .required("O nome é obrigatório")
    .max(50, "O nome pode conter no máximo 50 caracteres"),
  redeemer_email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório")
    .max(50, "O email pode ter no máximo 50 caracteres"),
  redeemer_zipcode: yup
    .string()
    .transform((value) => value.replace(/\D/g, ""))
    .required("O CEP é obrigatório")
    .length(8, "O CEP deve conter exatamente 8 dígitos"),
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
  items: yup.array().nullable(),
  extra_question_responses: yup.array().nullable(),
});

export const defaultValuesRedeemForm: RedeemFormProps = {
  redeemer_document_number: "",
  redeemer_name: "",
  redeemer_email: "",
  redeemer_zipcode: "",
  redeemer_street: "",
  redeemer_number: "",
  items: [],
  extra_question_responses: [],
  redeemer_complement: "",
  redeemer_neighborhood: "",
  redeemer_city: "",
  redeemer_state: "",
  redeemer_country: "",
};
