import React from 'react';
import department from './department.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Capture from '../../../assets/Homepage-Banner-04.png'
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Department = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className={department.container}>
                <Carousel responsive={responsive}

                >
                    <div>
                        <Card className={classes.root} style={{ width: '95%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={Capture}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Computer
                           </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.root} style={{ width: '95%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={Capture}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Computer
                           </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.root} style={{ width: '95%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={Capture}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Computer
                           </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card className={classes.root} style={{ width: '95%' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={Capture}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Computer
                           </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </Container>
       
    
    );
};

export default Department;