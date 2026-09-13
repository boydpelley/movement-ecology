import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Make the nav only semi transparent when NOT scrolled
  const transparent = isHome && !scrolled;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      collapseOnSelect
      className={`site-nav ${transparent ? 'nav-transparent' : 'nav-solid'}`}
    >
      <Container>
        <Navbar.Brand as={NavLink} to ="/" className="nav-brand">Movement and Ecophysiology Research Group (MER) </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav" className="nav-right">
          <Nav className="nav-even">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/our-group">Personnel</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Research</Nav.Link>
            <Nav.Link as={NavLink} to="/publications">Publications</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}