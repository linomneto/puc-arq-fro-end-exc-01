import './menu.css';
import blogPhoto from './blog-photo.jpg';
import { Jumbotron, Container, Row, Col  } from 'reactstrap';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="PageHome">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Lino Melhado</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/sobre-mim/">Sobre Mim</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://github.com/linomneto">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://linkedin.com/in/linomneto">LinkedIn</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>&copy;2021</NavbarText>
        </Collapse>
      </Navbar>
      <Jumbotron>
        <Container>
          <Row>
            <Col className="text-right col-4">
              <img src={blogPhoto} className="blog-photo" />
            </Col>
            <Col className="text-left col-8">
              <h1>Lino Melhado</h1>
              <span>Aluno de pós-graduação em Arquitetura de Software Distribuído pela Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), graduado em Tecnologia em Análise e Desenvolvimento de Sistemas pela Faculdade Estadual de Campinas (UNICAMP).</span>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Header;