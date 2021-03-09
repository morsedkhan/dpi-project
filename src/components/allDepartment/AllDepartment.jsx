import React from 'react';
import department from '../../components/home/department/department.module.css'
// import department from '.../home/department/department.module.css';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Computer from '../../assets/Department/computer (1).jpg'
import Civil from '../../assets/Department/civil.jpg'
import Power from '../../assets/Department/power.jpg'
import Capture from '../../assets/Department/electronics.jpg'
import { Container } from '@material-ui/core';
import { Col, Row, Button } from 'react-bootstrap';

import {
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Department = () => {
    const classes = useStyles();
    return (
        <div className={department.BgImage}>
            <Container>
                <br />
                <h3 style={{ textAlign: 'center', color: 'darkcyan', marginBottom: '-40px' }}>All Departments</h3>
                <div className={department.container}>
                    <Container>
                        <Row>
                            <Col xs={12} md={4}>
                                <div>
                                    <Card className={classes.root} style={{ width: '95%' }}>
                                        <Link to="/computer">

                                        <CardActionArea>
                                            <CardMedia style={{ height: '100%', width: '100%' }}
                                                component="img"
                                                alt="Contemplative Reptile"

                                                image={Computer}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center', color: 'darkcyan', fontSize: '19px' }}>
                                                    Department of  Computer
                                                 </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        </Link>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div>
                                    <Card className={classes.root} style={{ width: '95%' }}>
                                        <CardActionArea>
                                            <CardMedia style={{ height: '100%', width: '113%' }}
                                                component="img"
                                                alt="Contemplative Reptile"

                                                image={Civil}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>

                                                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center', color: 'darkcyan', fontSize: '19px' }}>
                                                    Civil Engineering

                                               </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div>
                                    <Card className={classes.root} style={{ width: '95%' }}>
                                        <CardActionArea>
                                            <CardMedia style={{ height: '100%', width: '100%' }}
                                                component="img"
                                                alt="Contemplative Reptile"

                                                image={Capture}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>

                                                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center', color: 'darkcyan', fontSize: '19px' }}>
                                                    Electronics Engineering
                                                  </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </Col>
                            <br/>
                            <Col xs={12} md={4} style={{marginTop:'10px'}}>
                                <div>
                                    <Card className={classes.root} style={{ width: '95%' }}>
                                        <CardActionArea>
                                            <CardMedia style={{ height: '100%', width: '93%' }}
                                                component="img"
                                                alt="Contemplative Reptile"

                                                image={Power}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="green" component="p" style={{ textAlign: 'center', color: 'darkcyan', fontSize: '19px' }}>
                                                    Power Engineering
                                                 </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <br />
            <br />
        </div>



    );
};

export default Department;