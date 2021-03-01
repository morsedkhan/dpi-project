import React from 'react';
import { Container } from 'react-bootstrap';
import { Button,  Col, Form, FormControl, Navbar, Row } from 'react-bootstrap';
// import './home.css'
import styles from './marquee.module.css'
const Marquee = () => {
    return (
        <div style={{ height: '40px', marginTop:'20px' }} >
        <Container>
            <Row>
                <Col xs={12} md={10}>
                        <div className="row " style={{height:'200px'}}>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <section className={`${styles.lastNews}  wow fadeInDown`} style={{ backgroundColor:'#76b8cc'}}>
                                    <div className={styles.newsWrapper}>
                                        <span className={`${styles.newsTitle}  delay-animated slidein`} style={{fontSize:'17px'}}>
                                            Highlighted
                                        </span>
                                    <div className={styles.topNews}>
                                        <marquee style={{marginTop:'11px', color:'#fff'}}>
                                            “ছাত্র-ছাত্রীদেরকে Digital Content ডাউনলোড করে পড়াশুনা অব্যাহত রাখার জন্য বলা যাচ্ছে”
                                    </marquee>

                                        </div>
                                    </div>
                            </section>
                        </div>
                    </div>
            </Col>
            <Col xs={4} md={2}>
                <Navbar className={styles.searchBoxDesign} variant="dark">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" style={{color:'#fff'}}>Search</Button>
                    </Form>


                </Navbar>
            </Col>
            </Row>
        </Container>


    </div>
            
    );
};

export default Marquee;