import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Layout } from "./components";
import { About, Admin, Art, Contact, Games, Home } from "./pages";
import { Login } from "./pages/Admin/Login";
import {
  initialAdminState,
  adminReducer,
  AdminContextProvider,
} from "./contexts/admin";
import LoadingComponent from "./components/LoadingComponent";
import Auth from "./components/AuthRoute";
import { Validate } from "./modules/auth";
import logging from "./config/logging";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [adminState, adminDispatch] = useReducer(
    adminReducer,
    initialAdminState
  );
  const [loading, setLoading] = useState<boolean>(true);

  const [authStage, setAuthStage] = useState<string>(
    "Checking localstorage..."
  );

  useEffect(() => {
    CheckLocalStorageForCredentials;
  }, []);

  /**
   * check to see if we have a token.
   * if we do, verify it with the backend,
   * if we do not, we are logged out initially
   */
  const CheckLocalStorageForCredentials = () => {
    setAuthStage("Checking credentials ...");

    const fire_token = localStorage.getItem("fire_token");

    if (fire_token === null) {
      adminDispatch({ type: "logout", payload: initialAdminState });
      setAuthStage("No credentials found.");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      return Validate(fire_token, (error, admin) => {
        if (error) {
          logging.error(error);
          setAuthStage("No credentials found.");
          adminDispatch({ type: "logout", payload: initialAdminState });
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } else if (admin) {
          setAuthStage("Admin Authenticated");
          adminDispatch({ type: "login", payload: { admin, fire_token } });
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      });
    }
  };

  const adminContextValues = {
    adminState,
    adminDispatch,
  };

  // if (loading) {
  //   return <LoadingComponent>{authStage}</LoadingComponent>;
  // }

  return (
    <AdminContextProvider value={adminContextValues}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admins"
          element={
            <Auth>
              <Admin />
            </Auth>
          }
        />
        <Route path="/admins/login" element={<Login />} />
      </Routes>

      <Footer />
    </AdminContextProvider>
  );
};

export default App;
