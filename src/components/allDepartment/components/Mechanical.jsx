import React from 'react';
import Footer from '../../home/footer/Footer';
import NavigationBar from '../../home/navbar/NavigationBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Achitecture from '../../../assets/allDepartment/machanicalEng.jpg'
import styles from './allDepartment.module.css'

const Mechanical = () => {
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
                                <h3 style={{ color: '#0F9292' }}>Department of Mechanical engineering</h3>
                                <p style={{ textAlign: 'justify' }}>
                                    Correspondence :

                                    Head of the Department,
                                    Department of Mechanical Technology,
                                    Dhaka Polytechnic Institute (DPI),
                                    Tejgaon.I/A, Dhaka -1208 . Bangladesh.
                                    Tel: (8802) 9116724, Fax: (8802) 9116724.
                                    Email: mechanical.dpi@gmail.com

                                    So, welcome to the Department of Mechanical Technology at DPI. We are proud to say that, in educational and industrial services, our excellence is our strength.

                                    Technology Introduction:
                                    The Department of Mechanical Technology is diverse in educational background, professional experience, and interests. The Department is committed to teaching and public service. A number of Department members hold graduate and undergraduate degrees in a variety of related fields. The Department is enriched each year by new regular Department appointees as well as return of Department after completing higher education and training abroad. This infusion of new teaching and scholarly talents adds freshness and vitality to the Department of Mechanical Technology.



                                    Message from Head of the Department:

                                    Welcome to the Department of Mechanical Technology, Dhaka Polytechnic Institute (DPI), The department has been the apex of mechanical engineering education and research in the country since it started to offer four year’s Diploma ’ degree in 1955.  At present, there are about twenty  highly qualified and dedicated teachers to prepare our students to meet the global engineering challenges of the twenty first century. The department is persistent in its effort to develop its students not only as competent engineers but also as creative and responsible members of the society.

                                    The department maintains 7 modern shop / laboratories for Diploma graduate instructions works.  The level of education is up-to-date, comparable to those of the best institutions of the country and justifiably appropriate to the needs of the Bangladesh.  The Department of Mechanical Technology is forming the technical backbone of the country to facilitate and sustain its rapidly developing industrial growth.
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

export default Mechanical;