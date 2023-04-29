interface IRoute {
  path: string;
  name: string;
  element: any;
  icon: React.ComponentElement;
  exact: boolean;
}

export default { IRoute };
