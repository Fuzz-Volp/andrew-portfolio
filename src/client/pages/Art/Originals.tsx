import React from "react";
import IPageProps from "../../@types/page";
import Header from "../../components/Layout/Header";

export const Originals: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <div className="w-screen">
      <Header title="Originals" />
    </div>
  );
};
