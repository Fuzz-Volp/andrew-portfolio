import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavbarBrand, Nav, NavbarText } from "reactstrap";
import AdminContext from "../../contexts/admin";
export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  // const adminContext = useContext(AdminContext);
  // const { admin } = adminContext.adminState;

  return (
    <Navbar color="light" light sticky="top" expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">
          🖌️
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <div>
            <NavbarText tag={Link} to="/games">
              Games
            </NavbarText>
            <NavbarText tag={Link} to="/art">
              Art
            </NavbarText>
            <NavbarText tag={Link} to="/about">
              About
            </NavbarText>
            <NavbarText tag={Link} to="/contact">
              Contact
            </NavbarText>
          </div>
        </Nav>
        <Nav className="mr-auto" navbar />
      </Container>
    </Navbar>
  );
};

export default Navigation;
