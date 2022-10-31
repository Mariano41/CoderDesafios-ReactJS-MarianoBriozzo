import CardWidget from '../img/cart.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { default as NavbarBootstrap } from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/logo.png';



const NavBar = () => {
    return (
        <div>
            <NavbarBootstrap bg="dark" variant='dark' expand="md">
                <Container>
                    <img className='logo' src={Logo} alt="Logo de Guitar House" />
                    <NavbarBootstrap.Brand src='' ></NavbarBootstrap.Brand>
                    <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarBootstrap.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Nosotros</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link">Accesorios</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <a href="">
                                <img className='cart' src={CardWidget} alt="" />
                            </a>
                        </Nav>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap >
        </div>
    )
}

export default NavBar;