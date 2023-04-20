export default interface IAdmin {
  _id: string;
  uid: string;
  name: string;
}

export const DEFAULT_ADMIN: IAdmin = {
  _id: "",
  uid: "",
  name: "",
};

export const DEFAULT_FIRE_TOKEN = "";
