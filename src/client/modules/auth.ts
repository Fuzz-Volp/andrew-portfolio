import firebase from "firebase";
import { auth } from "../config/firebase";
import IAdmin from "../interfaces/admin";
import axios from "axios";
import config from "../config/config";
import logging from "../config/logging";

export const SignIn = (provider: firebase.auth.AuthProvider) =>
  new Promise<firebase.auth.UserCredential>((resolve, reject) => {
    auth
      .signInWithPopup(provider)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });

export const Authenticate = async (
  uid: string,
  name: string,
  fire_token: string,
  callback: (error: string | null, admin: IAdmin | null) => void
) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${config.server.url}/login`,
      data: {
        uid,
        name,
      },
      headers: { Authorization: `Bearer ${fire_token}` },
    });

    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 304
    ) {
      logging.info("Successfully authenticated");
      callback(null, response.data.admin);
    } else {
      logging.warn("unable to authenticate ");
      callback("unable to authenticate", null);
    }
  } catch (error) {
    logging.error(error);
    callback("unable to authenticate", null);
  }
};

export const Validate = async (
  fire_token: string,
  callback: (error: string | null, admin: IAdmin | null) => void
) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${config.server.url}/validate`,
      headers: { Authorization: `Bearer ${fire_token}` },
    });

    if (response.status === 200 || response.status === 304) {
      logging.info("Successfully validated");
      callback(null, response.data.admin);
    } else {
      logging.warn("unable to validate ");
      callback("unable to validate", null);
    }
  } catch (error) {
    logging.error(error);
    callback("unable to validate", null);
  }
};
