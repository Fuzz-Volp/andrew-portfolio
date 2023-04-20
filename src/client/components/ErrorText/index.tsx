import React from "react";

export interface IErrorProps {
  error: string;
}

const ErrorText: React.FC<IErrorProps> = ({ error }) => {
  if (error === "") return null;

  return <small className="text-danger">{error}</small>;
};

export default ErrorText;
