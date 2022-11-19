import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import {Container} from 'react-bootstrap';

function WebsiteLayout() {
  return (
    <div>
      <Container fluid>
        <Header />
        <Container className="min-vh-100">
          <Outlet />
        </Container>
        <Footer />
      </Container>
    </div>
  );
}

export default WebsiteLayout;
