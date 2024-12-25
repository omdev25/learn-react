import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <Navbar
            expand="lg"
            className={`${
                isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
        >
            <Container>
                <Navbar.Brand href="#" className={isDarkTheme ? 'text-light' : 'text-dark'}>
                    Navbar scroll
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className={isDarkTheme ? 'text-light' : 'text-dark'}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="#action2" className={isDarkTheme ? 'text-light' : 'text-dark'}>
                            About
                        </Nav.Link>
                        <NavDropdown
                            title="Contact"
                            id="navbarScrollingDropdown"
                            className={isDarkTheme ? 'text-light' : 'text-dark'}
                        >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant={isDarkTheme ? 'outline-light' : 'outline-success'}>
                            Search
                        </Button>
                    </Form>
                    <Button
                        variant={isDarkTheme ? 'light' : 'dark'}
                        className="ms-3"
                        onClick={toggleTheme}>
                        {isDarkTheme ? 'Light Mode' : <svg viewBox="0 0 24 24" width="24" height="24" class="toggleIcon_oIOL darkToggleIcon_ekgs"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
