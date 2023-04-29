import React from "react";
import IPageProps from "../../@types/page";
import Header from "../../components/Layout/Header";

export const Portfolio: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <div className="w-screen">
      <Header title="Portfolio" />
    </div>
  );
};
