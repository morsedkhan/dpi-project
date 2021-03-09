import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/electrical.jpg'
import styles from './allDepartment.module.css'

const Electronics = () => {
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
                                <h3 style={{ color: '#0F9292' }}>Department of Electronics engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Electronics comprises the physics, engineering, technology and applications that deal with the emission, flow and control of electrons in vacuum and matter. It uses active devices to control electron flow by amplification and rectification, which distinguishes it from classical electrical engineering which uses passive effects such as resistance, capacitance and inductance to control current flow.

                                    Electronics has had a major effect on the development of modern society. The identification of the electron in 1897, along with the subsequent invention of the vacuum tube which could amplify and rectify small electrical signals, inaugurated the field of electronics and the electron age. This distinction started around 1906 with the invention by Lee De Forest of the triode, which made electrical amplification of weak radio signals and audio signals possible with a non-mechanical device. Until 1950, this field was called “radio technology” because its principal application was the design and theory of radio transmitters, receivers, and vacuum tubes.

                                    The term “solid-state electronics” emerged after the first working transistor was invented by William Shockley, Walter Houser Brattain and John Bardeen at Bell Labs in 1947. The MOSFET (MOS transistor) was later invented by Mohamed Atalla and Dawon Kahng at Bell Labs in 1959. The MOSFET was the first truly compact transistor that could be miniaturised and mass-produced for a wide range of uses, revolutionizing the electronics industry, and playing a central role in the microelectronics revolution and Digital Revolution. The MOSFET has since become the basic element in most modern electronic equipment, and is the most widely used electronic device in the world.

                                    Electronics is widely used in information processing, telecommunication, and signal processing. The ability of electronic devices to act as switches makes digital information-processing possible. Interconnection technologies such as circuit boards, electronics packaging technology, and other varied forms of communication infrastructure complete circuit functionality and transform the mixed electronic components into a regular working system, called an electronic system; examples are computers or control systems. An electronic system may be a component of another engineered system or a standalone device. As of 2019 most electronic devices use semiconductor components to perform electron control. Commonly, electronic devices contain circuitry consisting of active semiconductors supplemented with passive elements. Electronics deals with electrical circuits that involve active electrical components such as vacuum tubes, transistors, diodes, integrated circuits, optoelectronics, and sensors, associated passive electrical components, and interconnection technologies.

                                    The study of semiconductor devices and related technology is considered a branch of solid-state physics, whereas the design and construction of electronic circuits to solve practical problems come under electronics engineering. Electronics has branches as follows:

                                    Digital electronics

                                    Analogue electronics

                                    Microelectronics

                                    Circuit design

                                    Integrated circuits

                                    Power electronics

                                    Optoelectronics

                                    Semiconductor devices

                                    Embedded systems

                                    Audio electronics

                                    Telecommunications

                                    Nanoelectronics

                                    Bioelectronics ect.
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

export default Electronics;