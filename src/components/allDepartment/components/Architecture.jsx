import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/architech.jpg'
import styles from './allDepartment.module.css'

const Architecture = () => {
    return (
        <div>
            <NavigationBar />
            <div style={{ marginBottom: '50px', backgroundColor: '#F7F7F7', textAlign: 'center', }} className={styles.BgImageInNtc}>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <div>
                                <br />
                                <img style={{ width: '50%', height: '50%', marginBottom: '25px', borderRadius: '5px' }} src={Achitecture} alt="" />
                                <h3 style={{ color: '#0F9292' }}>Department of Architecture engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Dhaka polytechnic institute is the famous polytechnic in Bangladesh. This institute has 11 departments and Architecture is the top most one of them. Department of Architecture technology was established at Dhaka Polytechnic Institute in 1967. This department offered 4 years Diploma-in-Engineering program under Bangladesh Technical Education Board (BTEB) after 10 years schooling. The department currently has   09 faculty members (both full time and part time). 04 technical & support staff and 528* numbers of students. Every year 200 students admitted in this department. In our admission criteria, there are 20% seats reserved for female student, 15% for vocational and 5% for disable students. There are 2 seats for tribal & 2 seats for the freedom fighter’s child/grand-child in each group.

                                    After completion in Diploma-in-Engineering for higher education i.e. Bachelor degree program like Bachelor of Architecture and Bachelor of civil Engineering they can admit in DUET (Dhaka University of Engineering and technology, Gazipur or any other private or public University in home or abroad. A Diploma Architect works as a junior Architect in public and private organization.

                                    The major job fields for the Diploma Architects are – Consulting farm, Development Company, Real Estate Company and Construction Company etc. Almost 100% Diploma Architect are absorbed in these job field.
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

export default Architecture;