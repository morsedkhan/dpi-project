import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'
import styles from '../home/message/message.module.css'
import chancellor from '../../assets/chancellor.jpg'
import {

    Link
} from "react-router-dom";
import NavigationBar from '../home/navbar/NavigationBar';
import Footer from '../home/footer/Footer';
const Message = () => {
    return (
        <>
            <NavigationBar />
            <div style={{ marginBottom: '50px', backgroundColor: '#F7F7F7', textAlign: 'center', }}>
                <br />
                <div className={styles.bgImageInVcMsg}>
                    <Card className={styles.container} style={{ backgroundColor: '#fff', }}>

                        {/* <p className={styles.msgFrom}></p> */}

                        <h3 className={styles.chancellor}>Message from Principal</h3>
                        <br />

                        <img className={styles.chancellorImg} src={chancellor}
                            alt="" />



                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad corrupti nemo qui repellendus, saepe eaque eveniet asperiores nam, necessitatibus enim, quidem dicta id! Odit, at totam officiis repudiandae nisi atque excepturi sed corporis odio ea illum! Earum quasi ut sint ullam accusantium voluptatem, doloribus rem possimus debitis ducimus libero tempore impedit veritatis quibusdam dolorum quia reiciendis consequatur vel mollitia. Dolores in ipsum veritatis, ad, placeat vitae itaque, est assumenda a molestias accusamus fuga perspiciatis voluptates ratione tenetur quas? Consequuntur blanditiis excepturi laboriosam, quos fuga soluta nihil, odit aperiam minus a corporis voluptatibus velit quasi praesentium culpa tempore maxime hic.
                    {/* <Link to="/principalMsg">
                                <b style={{ fontSize: '16px', cursor: 'pointer' }}>  Read More</b>
                            </Link> */}
                        </p>

                    </Card>
                </div>
                <br/>
            </div>
            <Footer />

        </>
       
    );
};

export default Message;