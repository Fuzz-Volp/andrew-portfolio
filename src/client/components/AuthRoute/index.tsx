import React, { useContext } from "react";
import { redirect } from "react-router-dom";
import AdminContext from "../../contexts/admin";
import logging from "../../config/logging";

export interface IAuthProps {
  children?: React.ReactNode;
}
//@ts-expect-error
const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  const { children } = props;

  const { admin } = useContext(AdminContext).adminState;

  if (admin._id === "") {
    logging.info("Unauthorized, redirecting ...");
    return redirect("/");
  } else {
    return <>{children}</>;
  }
};

export default Auth;
