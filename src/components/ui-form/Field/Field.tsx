import React, { useContext} from "react";
import { FormContext } from "../Form/form-context";

export interface FieldProps {
  name: string;
  type?: string | undefined
}


const Field: React.FC<FieldProps> = ({ name, type,...rest }) => {
  const { register,formState:{errors} } = useContext(FormContext);

  console.log("Rendering for",name);

  return <React.Fragment>
    <label htmlFor={name}>{name}</label>
    <input type={type} {...rest} {...register(name)} />
    <p>{errors[name]?.message}</p>
  </React.Fragment>;
};

export default React.memo(Field);
