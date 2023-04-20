import React from "react";
import { Container, Row, Col } from "reactstrap";

export interface IHeaderProps {
  height?: string;
  image?: string;
  title: string;
  headline: string;
  children?: React.ReactNode;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { children, height, image, headline, title } = props;
  const headerStyle = {
    background:
      "linear-gradient(rgba(36, 20, 38, 0.5), rgba(36, 39, 38, 0.5)), url(" +
      image +
      ") no-repeat center center",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: height,
  };
  return (
    <header style={headerStyle}>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
            <h2 className="mb-5 text-white">{headline}</h2>
            {children}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  height: "100%",
  image:
    "https://images.unsplash.com/photo-1488274319148-051ed60a9404?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80",
};

export default Header;
