import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../../assets/logo.png'
import Oblic from '../../../assets/oblique.svg'
import Capture from '../../../assets/Capture.PNG'
import Marquee from '../marquee/Marquee'
import styles from './navigationBar.module.css'
import {
    Link
} from "react-router-dom";
const NavigationBar = () => {

    return (
        <>
            <Marquee></Marquee>
            <Navbar className={`${styles.navColorDesign} ${styles.topNavContainer} `} expand="lg" bg="white" mr-5 style={{ marginTop: '-26px' }}>
                <div style={{ backgroundColor: 'white', marginTop: '-8px', marginLeft: '-16px', marginBottom: '-8px'}}>

                    <Navbar.Brand>
                        {/* <img className={styles.whiteLogo} src={Capture} alt="logo" /> */}
                    </Navbar.Brand>

                    <Link to="/home">
                        <Navbar.Brand href="#home">
                            <img style={{ height: '40px', marginTop: '10px' }} src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Brand href="#home">
                            <img className={styles.imgDesign} src={Oblic} alt="logo" />
                        </Navbar.Brand>
                    </Link>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: '10px', margin: 'auto' }}>
                    <Container>
                        <Nav style={{ }}>
                            {/* <Nav.Link href="/home">Home</Nav.Link> */}
                            <NavDropdown style={{ color: 'white' }} title="Home" id="basic-nav-dropdown" className={styles.navbarNav}>
                                <NavDropdown.Item to="/mission">Mission & Vision</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Citizen Charter</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Messages from Principal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Messages from Vice Principal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Administration</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">At a Glance DPI</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>

                            <Nav.Link href="/home">About Us</Nav.Link>

                            {/* <Nav.Link href="#link"></Nav.Link> */}
                            <NavDropdown className={styles.dropdownMenu} title="Departments" id="basic-nav-dropdown">
                                <div className={styles.dropdownContent}>
                                    <Link to="/architecture" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item to="/">Architecture</NavDropdown.Item>

                                    </Link>

                                    <Link to="/civil" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item href="/">Civil</NavDropdown.Item>
                                    </Link>

                                    <Link to="/chemicalAndFood" style={{textDecoration: "none"}}>

                                        <NavDropdown.Item href="/">Chemical & Food</NavDropdown.Item>

                                   </Link>
                                    <Link to="/computer" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item href="/">Computer</NavDropdown.Item>
                                    </Link>
                                    <Link to="/electrical" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item href="/">Electrical</NavDropdown.Item>
                                    </Link>
                                    <Link to="/electronics" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item href="/">Electronics</NavDropdown.Item>
                                    </Link>
                                    <Link to="/environmental" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item href="/">Environmental</NavDropdown.Item>
                                    </Link>
                                    <Link to="/mechanical" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item href="/">Mechanical</NavDropdown.Item>
                                    </Link>

                                    <Link to="/power" style={{ textDecoration: "none" }}>
                                        <NavDropdown.Item href="/">Power (Automobile & RA)</NavDropdown.Item>

                                    </Link>

                                    
                                    {/* <NavDropdown.Item href="#action/3.1">Mechanical.</NavDropdown.Item>  */}
                                    <NavDropdown.Item href="#action/3.1">NonTech Dept.</NavDropdown.Item>
                                </div>
                               
                            </NavDropdown>
                            <Nav.Link href="/home">Student Info</Nav.Link>
                            <Nav.Link href="/home">Academics</Nav.Link>

                        


                           

                            <Nav.Link style={{}} href="#link">Digital Content</Nav.Link>
                            <Nav.Link href="#link">Album</Nav.Link>

                            <Link to="/contactUs" style={{ textDecoration: "none" }}>
                                <Nav.Link style={{}} href="/">Contact Us</Nav.Link>

                            </Link>


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





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import Logo from '../../../assets/logo.png'
// import Oblic from '../../../assets/oblique.svg'
// import Capture from '../../../assets/Capture.PNG'
// import Marquee from '../marquee/Marquee'
// import styles from './navigationBar.module.css'
// import {
//     Link
// } from "react-router-dom";
// const NavigationBar = () => {

//     return (
//         <>
//             <Marquee></Marquee>
//             <Navbar className={`${styles.navColorDesign} ${styles.topNavContainer} `} expand="lg" bg="white" mr-5 style={{ marginTop: '-26px' }}>
//                 <div style={{ backgroundColor: 'white', marginTop: '-8px', marginLeft: '-16px', marginBottom: '-8px' }}>

//                     <Navbar.Brand>
//                         {/* <img className={styles.whiteLogo} src={Capture} alt="logo" /> */}
//                     </Navbar.Brand>

//                     <Link to="/home">
//                         <Navbar.Brand href="#home">
//                             <img style={{ height: '40px', marginTop: '10px' }} src={Logo} alt="logo" />
//                         </Navbar.Brand>
//                         <Navbar.Brand href="#home">
//                             <img className={styles.imgDesign} src={Oblic} alt="logo" />
//                         </Navbar.Brand>
//                     </Link>
//                 </div>

//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: '10px' }}>
//                     <Container>
//                         <Nav>
//                             <Nav.Link href="/home">Home</Nav.Link>
//                             <NavDropdown style={{ color: 'white' }} title="About-Us" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="/mission">Mission & Vision</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">Citizen Charter</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Messages from Principal</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Messages from Vice Principal</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Administration</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">At a Glance DPI</NavDropdown.Item>
//                                 {/* <NavDropdown.Divider /> */}
//                                 {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
//                             </NavDropdown>

//                             {/* <Nav.Link href="#link"></Nav.Link> */}
//                             <NavDropdown style={{}} title="Departments" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="/environmental">Architecture</NavDropdown.Item>
//                                 <NavDropdown.Item href="/civil">Civil</NavDropdown.Item>
//                                 <NavDropdown.Item href="/chemicalAndFood">Chemical & Food</NavDropdown.Item>
//                                 <NavDropdown.Item href="/computer">Computer</NavDropdown.Item>
//                                 <NavDropdown.Item href="/environmental">Electrical</NavDropdown.Item>
//                                 <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
//                                 <NavDropdown.Item href="/action/3.1">Environmental</NavDropdown.Item>
//                                 <NavDropdown.Item href="/mechanical">Mechanical</NavDropdown.Item>
//                                 <NavDropdown.Item href="/power">Power (Automobile & RA)</NavDropdown.Item>
//                                 {/* <NavDropdown.Item href="#action/3.1">Mechanical.</NavDropdown.Item>  */}
//                                 <NavDropdown.Item href="#action/3.1">NonTech Dept.</NavDropdown.Item>
//                             </NavDropdown>
//                             <Nav.Link href="/home">Student Info</Nav.Link>

//                             {/* <NavDropdown style={{}} title="Student Info" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1">Architecture</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Civil</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Chemical & Food</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Computer</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Electrical</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Electronics</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Environmental</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Mechanical</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Power (Automobile & RA)</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">NonTech Dept.</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Refrigeration</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Mechanical</NavDropdown.Item>
//                             </NavDropdown> */}


//                             <NavDropdown style={{}} title="Academics" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1">Syllabus</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Academic Calendar</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Class Routine</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Result</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">R&D</NavDropdown.Item>
//                             </NavDropdown>

//                             <Nav.Link style={{}} href="#link">Digital Content</Nav.Link>
//                             <Nav.Link href="#link">Album</Nav.Link>

//                             <NavDropdown style={{}} title="Job Placement" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1">DPI Placement Cell</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">Job Opportunity</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.3">Job Seeker</NavDropdown.Item>
//                             </NavDropdown>
//                             <Nav.Link style={{}} href="/contactUs">Contact Us</Nav.Link>


//                         </Nav>
//                     </Container>

//                     {/* <Form inline>
//                         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                         <Button variant="outline-success">Search</Button>
//                     </Form> */}
//                 </Navbar.Collapse>
//             </Navbar>

//         </>

//     );
// };

// export default NavigationBar