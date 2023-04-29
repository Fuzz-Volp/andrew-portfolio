import React from "react";
import IPageProps from "../../@types/page";
import Header from "../../components/Layout/Header";
import ArtList from "../../components/Art/ArtList";

export const Prints: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <div className="w-screen">
      <Header title="Prints" />
      <ArtList />
    </div>
  );
};
