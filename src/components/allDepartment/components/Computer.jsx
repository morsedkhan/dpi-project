import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/cmt.jpg'
import styles from './allDepartment.module.css'

const Computer = () => {
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
                                <h3 style={{ color: '#0F9292' }}>Department of Computer engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    The department of Computer Technology was established at Dhaka Polytechnic Institute in 1995. This department offered 4 years Diploma-in-Engineering program under the Bangladesh Technical Education Board after 10 years schooling. The Department currently has roughly 15 faculty members (both full time and part time), 04 technical & support staff and 480 numbers of students (120 students per year, 60 for 1st and 60 for 2nd shift). In our admission criteria, there are 20% seats reserved for female student, 15% for Vocational and 5% for disable students.

                                    After completion the Diploma-in-Engineering Program, students can go to Job market or higher education. For higher education they can admitted in Dhaka University of Engineering and Technology (DUET), Gazipur or any other private or public university in home or abroad for Bachelor degree program like Bachelor of Computer Science & Engineering or Bachelor of Computer Science or Bachelor of Information Technology etc. A Diploma Computer graduate works as a Sub-assistant Engineer in public & private organization.
                                    The major job fields of a Computer Diploma Graduate are Computer Software & Hardware companies, Telecommunication companies, Teachers of TVET institutions, BPO industries, IT sector of all kind of Government and private organization as an IT Officer or Network support Engineer.
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

export default Computer;