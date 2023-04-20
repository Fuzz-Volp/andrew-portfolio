import React from "react";
import { AboutAuthor, ArtProjects, GameProjects } from "../components";
import { Container } from "reactstrap";
import Header from "../components/homepage/header/index";
import Navigation from "../components/navigation";
import IPageProps from "../interfaces/page";

export const Home: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <Container fluid className="p-0">
      <Navigation />
      <Header title="Andrew Thompson Art" headline="Art comes in many forms" />
      <Container>
        <ArtProjects />
        <GameProjects />
        <AboutAuthor />
      </Container>
    </Container>
  );
};
