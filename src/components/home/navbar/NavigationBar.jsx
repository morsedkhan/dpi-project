import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../home.css'
import Logo from '../../../assets/logo.png'
import Oblic from '../../../assets/oblique.svg'
import Capture from '../../../assets/Capture.PNG'
import Marquee from '../marquee/Marquee'
import styles from './navigationBar.module.css'
const NavigationBar = () => {

    return (
        <>
            <Marquee></Marquee>
            <Navbar className={`${styles.navColorDesign} ${styles.topNavContainer} `} expand="lg" bg="white" mr-5>
                <div style={{ backgroundColor: 'white', marginTop: '-7px', marginLeft: '-16px', marginBottom: '-8px' }}>

                    <Navbar.Brand>
                        <img className={styles.whiteLogo} src={Capture} alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Brand href="#home">
                        <img style={{ height: '65px', width: '65px' }} src={Logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">
                        <img className={styles.imgDesign} src={Oblic} alt="logo" />
                    </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: '10px'}}>
                    <Container>
                        <Nav>
                            <Nav.Link  href="#home">Home</Nav.Link>
                            <NavDropdown style={{  color: 'white' }} title="About-Us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mission & Vision</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Citizen Charter</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Messages from Principal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Messages from Vice Principal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Administration</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">At a Glance DPI</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>

                            {/* <Nav.Link href="#link"></Nav.Link> */}
                            <NavDropdown style={{ }} title="Departments" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Architecture</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Civil</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Chemical & Food</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Computer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Electrical</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Environmental</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Mechanical</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Power (Automobile & RA)</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Mechanical.</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">NonTech Dept.</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown style={{ }} title="Student Info" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Architecture</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Civil</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Chemical & Food</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Computer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Electrical</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Environmental</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Mechanical</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Power (Automobile & RA)</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">NonTech Dept.</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Refrigeration</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Mechanical</NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown style={{ }} title="Academics" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Syllabus</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Academic Calendar</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Class Routine</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Result</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">R&D</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link style={{ }} href="#link">Digital Content</Nav.Link>
                            <Nav.Link href="#link">Album</Nav.Link>

                            <NavDropdown style={{ }} title="Job Placement" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">DPI Placement Cell</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Job Opportunity</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Job Seeker</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link style={{ }} href="#link">Contact Us</Nav.Link>


                        </Nav>
                    </Container>

                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
            
        </>

    );
};

export default NavigationBar