import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/foood.jpg'
import styles from './allDepartment.module.css'

const ChemicalAndFood = () => {
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
                                <h3 style={{ color: '#0F9292' }}>Department of power engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    The department of power engineering technology was established at Dhaka Polytechnic Institute in 1955, This department offered 4 Years Diploma-in-Engineering program under The Bangladesh Technical Education Board and entry qualification is SSC or equivalent (10 Years Schooling). The department currently has roughly 12 faculty members, 5 Technical & support staff 3 Office Assistant, 2 Driver and 2050 members of students. There are 20% reserve seat for female students, 15% for Vocational and 5% for Disable students. Automobile and Refrigeration and Air-condition Technology also run under the Power Technology. Now Department of Power has 100 seats (Group A-50 & Group B-50) in each shift per Technology and total entry is 1200 per year.

                                    Power Department has two well-furnishedworkshop with modern Equipment’s.

                                    After completion the Diploma-in-Engineering program, Students can go to job market or higher Education. For higher Education they can admitted in Dhaka University of Engineering and Technology (DUET). Gazipur or any other private or public University in home or aboard for Bachelor of Mechanical Engineering. A Diploma Power graduate position as a Sub-assistant Engineer.

                                    The major job fields of a Power Diploma Graduate are a Sub-assistant Engineer in government and non-government power generation, transmission, distribution, automobile Industry, WASA, BPDB, RAJUK, EGCB, PGCB, DPDC Roads and Highway, Bangladesh Railway and other Departments and some of them also become Entrepreneur.
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

export default ChemicalAndFood;