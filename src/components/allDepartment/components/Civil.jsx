import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/civil.jpg'
import styles from './allDepartment.module.css'

const Civil = () => {
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
                                <h3 style={{ color: '#0F9292' }}>Department of Civil engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    The department of civil technology was established at Dhaka Polytechnic Institute  in 1955 , This department offered  4 Years Diploma-in-Engineering program under The Bangladesh Technical Education Board after 10 Years Schooling . The department Currently has roughly 25 faculty members . 10 Technical & support staff and 1650 members of students 480 students per Year 240 for 1st shift 240 for 2nd shift. In our admission criteria, There are 20% Seats reserved for female student, 15% Seats reserved for vocational and 5% for disable students.

                                    After completion the Diploma-in-Engineering program, Students can go to job market or higher Education. For higher Education they can admitted  in Dhaka University of  Engineering and Technology ( DUET ).Gazipur or any other private or public University in home or aboard for Bachelor of civil Engineering  Technology . A Diploma civil graduate position as a Sub-assistant Engineer.

                                    The major job fields of a Civil Diploma Graduate are a Sub-assistant Engineer in Roads and high ways , public works Department , Water development board , Bangladesh inland water transport  authority.  power grid company of Bangladesh. Education Engineering Department, All city corporation, Local government Engineering Depertment, Survey of Bangladesh, PublicHealht, WASA ,BPDB,RAJUK and other Department.
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

export default Civil;