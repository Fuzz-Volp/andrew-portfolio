import React from "react";
import { ArtProjects, GameProjects } from "../../components";

import Header from "../../components/Layout/Header";
import Navigation from "../../components/Layout/Navbar";
import IPageProps from "../../@types/page";
import AboutAuthor from "../../components/Home/AboutAuthor";
import Newsletter from "../../components/Layout/Newsletter";

export const Home: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <div className="w-screen">
      <Header title="Andrew Thompson Art" headline="Art comes in many forms" />
      <div className=" flex flex-col  items-start ">
        <ArtProjects />
      </div>
      <div className="flex flex-col items-end my-1">
        <GameProjects />
      </div>
      <div className="flex flex-col items-start">
        <AboutAuthor />
      </div>
      <Newsletter />
    </div>
  );
};
