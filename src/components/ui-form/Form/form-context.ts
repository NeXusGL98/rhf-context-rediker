import { createContext } from "react";
import { FieldValues, FormState, UseFormRegister, UseFormReset } from "react-hook-form";
import { AnyObjectSchema } from "yup";

export interface FormContextProps<T = any> {
  initialData: Readonly<T>;
  validator: AnyObjectSchema;
  register: UseFormRegister<FieldValues>;
  reset: UseFormReset<FieldValues>
  formState: FormState<FieldValues>
  submitForm: (args:any) => Promise<boolean>;
  resetForm: () => void;
}

const defaultContextProps: Partial<FormContextProps<any>> = {
  initialData: {},
  validator: undefined
};


export const FormContext = createContext<FormContextProps<any>>(defaultContextProps as FormContextProps<any>)
