import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import  "./navbarStyles.css"

function NavarBasic() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" >
        <img
            src={
              "https://fontmeme.com/permalink/240202/fd25bfc9825d0ce48aeeaad208e135b6.png"
            }
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="link">Home</Nav.Link>
            <Nav.Link href="/agenda" className="link">Agenda</Nav.Link>
            <Nav.Link href="/login" className="link">Login</Nav.Link>
            <Nav.Link href="/register" className="link">Register</Nav.Link>
            <Nav.Link href="/verify" className="link">Verify</Nav.Link>
            <Nav.Link href="/turno" className="link">Sacar Nuevo Turno</Nav.Link>
            <Nav.Link href="/user" className="link">Mi Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavarBasic;
