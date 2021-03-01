import React from 'react';
import {Card, Row, Col} from 'react-bootstrap'
import styles from './message.module.css'
import chancellor from '../../../assets/chancellor.jpg'
const Message = () => {
    return (
        <div>
            <Card className={styles.container} style={{ backgroundColor: '#fff', }}>
                
                        <p className={styles.msgFrom}>Message from</p>
                        <h3 className={styles.chancellor}>Vice Principal</h3>
                    
                        <img className={styles.chancellorImg} src={chancellor}
                        alt=""/>
                    
                

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad corrupti nemo qui repellendus, saepe eaque eveniet asperiores nam, necessitatibus enim, quidem dicta id! Odit, at totam officiis repudiandae nisi atque excepturi sed corporis odio ea illum! Earum quasi ut sint ullam accusantium voluptatem, doloribus rem possimus debitis ducimus libero tempore impedit veritatis quibusdam dolorum quia reiciendis consequatur vel mollitia. Dolores in ipsum veritatis, ad, placeat vitae itaque, est assumenda a molestias accusamus fuga perspiciatis voluptates ratione tenetur quas? Consequuntur blanditiis excepturi laboriosam, quos fuga soluta nihil, odit aperiam minus a corporis voluptatibus velit quasi praesentium culpa tempore maxime hic.
                </p>
            </Card>
        </div>
    );
};

export default Message;