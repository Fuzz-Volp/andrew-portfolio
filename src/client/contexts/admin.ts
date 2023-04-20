import { createContext } from "react";
import IAdmin, { DEFAULT_ADMIN, DEFAULT_FIRE_TOKEN } from "../interfaces/admin";

export interface IAdminState {
  admin: IAdmin;
  fire_token: string;
}

export interface IAdminActions {
  type: "login" | "logout" | "authenticate";
  payload: IAdminState;
}

export const initialAdminState: IAdminState = {
  admin: DEFAULT_ADMIN,
  fire_token: DEFAULT_FIRE_TOKEN,
};

export const adminReducer = (state: IAdminState, action: IAdminActions) => {
  let admin = action.payload.admin;
  let fire_token = action.payload.fire_token;

  switch (action.type) {
    case "login":
      localStorage.setItem("fire_token", fire_token);
      return { admin, fire_token };

    case "logout":
      localStorage.removeItem("fire_token");
      return initialAdminState;

    default:
      return state;
  }
};

export interface IAdminContextProps {
  adminState: IAdminState;
  adminDispatch: React.Dispatch<IAdminActions>;
}

const AdminContext = createContext<IAdminContextProps>({
  adminState: initialAdminState,
  adminDispatch: () => {},
});

export const AdminContextConsumer = AdminContext.Consumer;
export const AdminContextProvider = AdminContext.Provider;
export default AdminContext;
