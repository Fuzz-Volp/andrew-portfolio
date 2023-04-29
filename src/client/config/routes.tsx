// import React from "react";
import {
  Home,
  Admin,
  About,
  Contact,
  Games,
  Originals,
  Portfolio,
  Prints,
} from "../pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import IRoute from "../@types/route";
import React from "react";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Games",
    path: "/games",
    element: <Games />,
    exact: true,
  },
  {
    icon: UserPlusIcon,
    name: "Originals",
    path: "/originals",
    element: <Originals />,
    exact: true,
  },
  {
    icon: UserPlusIcon,
    name: "Portfolio",
    path: "/Portfolio",
    element: <Portfolio />,
    exact: true,
  },
  {
    icon: UserPlusIcon,
    name: "Prints",
    path: "/prints",
    element: <Prints />,
    exact: true,
  },
  {
    icon: UserCircleIcon,
    name: "about",
    path: "/about",
    element: <About />,
    exact: true,
  },
  {
    icon: UserCircleIcon,
    name: "contact",
    path: "/contact",
    element: <Contact />,
    exact: true,
  },
  {
    icon: UserCircleIcon,
    name: "admin",
    path: "/admin",
    element: <Admin />,
    exact: true,
  },
];

export default routes;
