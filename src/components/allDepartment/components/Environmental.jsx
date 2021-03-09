import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/Envt.jpg'
import styles from './allDepartment.module.css'

const Environmental = () => {
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
                                <h3 style={{ color: '#0F9292' }}>Department of Environmental engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Environmental Technology is one of the most sophisticated engineering in modern era. It is a famous department of the country which provide quality education and research about environmental protection and sustainability. Environmental Technology provide knowledge about air, water and soil quality and pollution, water treatment, wastewater treatment, air pollution control, noise control, soil pollution, solid waste management, water supply, biodiversity protection, environmental law, human health etc.to create better habitat for human and living being.We have modern laboratory and blended classroom to provide students skills, knowledge and social responsibilities. We have strong industry linkage to promote students for choosing better profession.We produce work-ready graduates for government, industry and community.
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

export default Environmental;