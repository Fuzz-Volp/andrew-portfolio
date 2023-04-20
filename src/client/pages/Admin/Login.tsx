import React, { useContext, useState } from "react";
import IPageProps from "../../interfaces/page";
import AdminContext from "../../contexts/admin";
import { useNavigate } from "react-router-dom";
import firebase from "firebase";
import { Authenticate, SignIn as SignInPopup } from "../../modules/auth";
import logging from "../../config/logging";
import CenterPiece from "../../components/CenterPiece/indext";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import ErrorText from "../../components/ErrorText";
import { Providers } from "../../config/firebase";
import LoadingComponent from "../../components/LoadingComponent";

export const Login: React.FunctionComponent<IPageProps> = (props) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const adminContext = useContext(AdminContext);
  const navigate = useNavigate();
  const loggedIn = window.location.pathname.includes("login");

  const SignIn = (provider: firebase.auth.AuthProvider) => {
    if (error !== "") setError("");

    setAuth(true);

    SignInPopup(provider)
      .then(async (result) => {
        logging.info(result);

        let admin = result.user;

        if (admin) {
          let uid = admin.uid;
          let name = admin.displayName;
          if (name) {
            try {
              let fire_token = await admin.getIdToken();
              Authenticate(uid, name, fire_token, (error, _admin) => {
                if (error) {
                  setError(error);
                  setAuth(false);
                } else if (_admin) {
                  adminContext.adminDispatch({
                    type: "login",
                    payload: { admin: _admin, fire_token },
                  });
                  navigate("/");
                }
              });
            } catch (error) {
              setError("invalid token");
              logging.error(error);
              setAuth(false);
            }
          } else {
            setError("The identity provider doesn't have a username");
            setAuth(false);
          }
        } else {
          setError(
            "the identity provider is missing a lot of necessary information. please try another account or provider"
          );
          setAuth(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setAuth(false);
      });
  };

  return (
    <CenterPiece>
      <Card>
        <CardHeader>{loggedIn ? "login" : "signup"}</CardHeader>
        <CardBody>
          <ErrorText error={error} />
          <Button
            block
            disabled={auth}
            onClick={() => SignIn(Providers.google)}
            style={{
              backgroundColor: "#ea4335",
              borderColor: "#ea4335",
            }}
          >
            <i className="fa-brands fa-google mr-2"></i> Sign{" "}
            {loggedIn ? "in" : "up"} with Google
          </Button>
          {auth && <LoadingComponent card={false} />}
        </CardBody>
      </Card>
    </CenterPiece>
  );
};
