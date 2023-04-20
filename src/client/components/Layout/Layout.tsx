import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};
