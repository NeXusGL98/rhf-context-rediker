import React, { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { FormContext, FormContextProps } from "./form-context";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";

export interface FormProps<T extends Object = any> {
  submitForm: (data?: any) => Promise<any>;
  initialData: Partial<T>;
  validator: AnyObjectSchema;
}

const Form: React.FC<FormProps> = React.memo(
  ({ initialData, submitForm, validator, children }) => {
    const { reset, handleSubmit, register, formState, setValue } = useForm({
      resolver: yupResolver(validator),
      mode: "onChange",
    });

    const context: FormContextProps = useMemo(() => {
      return {
        initialData: initialData,
        register,
        reset,
        validator: validator,
        submitForm: submitForm,
        resetForm: reset,
        formState,
      };
    }, [initialData, submitForm, validator, register, reset, formState]);

    const setInitialData = useCallback(() => {
      for (const key in initialData) {
        setValue(key, initialData[key]);
      }
    }, [initialData,setValue]);
    
    useEffect(() => {
        setInitialData()
        return () => {
            reset()
        }
    }, [setInitialData,reset])

    const handleAsyncSubmittion = useCallback(
      async (formValues) => {
       await submitForm(formValues);
      },
      [submitForm],
    )

    return (
      <FormContext.Provider value={context}>
        <form noValidate onSubmit={handleSubmit(handleAsyncSubmittion)}>
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

export default Form;
