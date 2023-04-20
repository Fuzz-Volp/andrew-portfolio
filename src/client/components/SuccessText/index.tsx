import React from "react";

export interface ISuccessProps {
  success: string;
}

const SuccessText: React.FC<ISuccessProps> = ({ success }) => {
  if (success === "") return null;

  return <small className="text-success">{success}</small>;
};

export default SuccessText;
