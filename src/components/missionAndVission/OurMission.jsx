import React from 'react';
import Footer from '../home/footer/Footer';
import NavigationBar from '../home/navbar/NavigationBar';
import Mission from '../../assets/Mission-01.png'
import Visson from '../../assets/Vision-01.png'
import { Col, Row, Container, Button } from 'react-bootstrap';


const OurMission = () => {
    return (
        <div>
            <NavigationBar />
            <div style={{ marginBottom: '50px', backgroundColor: '#F7F7F7', textAlign: 'center',}}>
                <br/>
                <Container >
                    <Row>
                        <Col xs={12} md={6}>
                           
                            <div>
                                <img style={{ width: '40%', height: 'auto' }} src={Mission} alt="" />
                                <h3>Our Mission</h3>
                                <p>Contemporary sustainable technical vocational Education and Training, Human Resource Development, Employment, Changing life style. Industrial expansion and national economic grouth.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div>
                                <img style={{ width: '40%', height: 'auto' }} src={Visson} alt="" />
                                <h3>Our Vision</h3>

                                <p>
                                    Execute the principals and action of works to ensure the standardized Diploma Engineering Educational and basic trade course Training.
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

export default OurMission;