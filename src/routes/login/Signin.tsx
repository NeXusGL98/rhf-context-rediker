import React from "react";
import Field from "../../components/ui-form/Field/Field";
import Form from "../../components/ui-form/Form/Form";
import SubmitAction from "../../components/ui-form/Form/Submit-action";
import { signinSchema } from "../../validators";

const Signin: React.FC<any> = () => {
  const handleSubmit: any = (val: any) => console.log(val);

  return (
    <div>
      <h1>Hi there</h1>

      <Form
        initialData={{}}
        submitForm={handleSubmit}
        validator={signinSchema}
      >
        <Field name="email" type="text" />
        <Field name="password" type="password" />
        <SubmitAction />
      </Form>
    </div>
  );
};

export default Signin;
