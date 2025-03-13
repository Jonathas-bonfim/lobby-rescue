/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Control, FieldErrors } from "react-hook-form";

export interface InputBaseProps {
  name: string;
  label: ReactNode;
  control: Control<any>;
  errors: FieldErrors<any>;
  helperText?: string;
}

export enum ETypeProps {
  TEXT = "text",
  TEXT_AREA = "text_area",
  SELECT_ONE = "select_one",
  DATE = "date",
}
