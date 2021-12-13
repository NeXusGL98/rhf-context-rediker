import React from "react";

export interface SubmitActionProps {
  submitText?: string;
}

const SubmitAction: React.FC<SubmitActionProps> = ({ submitText }) => {
  return (
    <div>
      <button type="submit">{submitText}</button>
    </div>
  );
};

SubmitAction.defaultProps = {
  submitText: "Guardar",
};
export default SubmitAction;
