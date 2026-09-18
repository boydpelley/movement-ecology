import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on every route change
  useEffect(() => { setExpanded(false); }, [location.pathname]);

  // Never go transparent while the menu is open
  const transparent = isHome && !scrolled && !expanded;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      expanded={expanded}
      onToggle={(next) => setExpanded(next)}
      className={`site-nav ${transparent ? 'nav-transparent' : 'nav-solid'}`}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="nav-brand">
          <span className="d-none d-lg-inline">
            Movement and Ecophysiology Research Group (MER)
          </span>
          <span className="d-lg-none">MER Group</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav" className="nav-right">
          <Nav className="nav-even" onClick={() => setExpanded(false)}>
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