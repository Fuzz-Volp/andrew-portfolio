export default interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  auth: boolean;
  element: any;
  props?: any;
}
