import React from 'react';
import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';

const CustomNavbar = () => {
  return (
    <div>
      <React.Fragment>
        <Navbar expand="lg" dark bg="dark" mb="3">
          <Navbar.Brand href="#">Internet Shop</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor1" />
          <Collapse navbar id="navbarColor1">
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Cart 0</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Form.Input type="search" placeholder="Search" mr="sm-2" />
              <Button outline info my="2 sm-0">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
      </React.Fragment>
    </div>
  );
};

export default CustomNavbar;
