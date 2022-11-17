import React from "react";
import { Container} from "react-bootstrap";
import NavbarComponent from "../Navbar/Navbar";
import FooterComponent from "../Footer/Footer";
function Layout(props) {
  return (
    <Container fluid className="">
      <NavbarComponent />
      <Container className="min-vh-100">
      {props.children}
      </Container>
      <FooterComponent/>
    </Container>
  );
}

export default Layout;
