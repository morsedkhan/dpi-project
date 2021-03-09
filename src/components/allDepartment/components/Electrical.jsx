import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/powerEng.jpg'
import styles from './allDepartment.module.css'

const Electrical = () => {
    return (
        <div>
            <NavigationBar />
            <div style={{ marginBottom: '50px', backgroundColor: '#F7F7F7', textAlign: 'center', }} className={styles.BgImageInNtc}>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <div>
                                <br />
                                <img style={{ width: '50%', height: 'auto', marginBottom: '25px', borderRadius: '5px' }} src={Achitecture} alt="" />
                                <h3 style={{ color: '#0F9292' }}>Department of Electrical engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Electricity was first discovered in the 1700s by Benjamin Franklin who performed the first electricity experiment in history. Since then, many others including Ampere, Faraday, Ohm, and Oersted managed to develop simple electrical devices after having understood the basic electrical principles. Much later, in 1904, Fleming’s diode opened a new horizon for the advent of electronic components.

                                    On the other hand, Electrical department started their journey namely electrical technology at Dhaka polytechnic Institute in 1960 (approx.). According to the rule of Bangladesh technical education board, Students get admission for four years diploma in Engineering program in the department after 10 years schooling. There are 18 faculty members, 9 technical and supporting staffs in this department. We have 4(four) well arrange and equipped modern lab .In every year 360 students are enrolled for both 1st and 2nd shift.

                                    After completion the Diploma-in-Engineering program, Students can go to job market or higher Education. For higher Education they can get admission in Dhaka University of Engineering and Technology (DUET), Gazipur or any other private or public University in home or aboard .They also gets admission for BSC in technical education degree in TTTC under the University of Dhaka.  The major job market of Electrical Diploma Graduates as a Sub-assistant Engineer in Electrical Power sector. They have also access in Electrical based industry such as Pharmaceutical industry, Re-rolling industry as well as all type of industries.

                                    Electrical Technology involves the maintenance, installation, testing and connection of electrical systems. Electrical work takes place in factories, industrial buildings, residential properties and other facilities. Learn how to work with the electrical systems of mechanical equipment used in businesses and industries. Construction Electricians read blueprints to install and maintain a building’s electrical system.
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default Electrical;