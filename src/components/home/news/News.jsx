import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import ImageOne from '../../../assets/dpi pictures/News and Events pic/news-1.jpg';
import Imag2 from '../../../assets/dpi pictures/News and Events pic/news-2.jpg';
import Imag3 from '../../../assets/dpi pictures/News and Events pic/news-3.jpg';
import Imag4 from '../../../assets/dpi pictures/News and Events pic/news-3.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
    },
}));

export default function AutoGrid() {
    const classes = useStyles();
    // const classes = useStyles();

    return (
        <div style={{ backgroundColor:'#D2D2D2', padding:'20px'}}>
        
            <div>
             <h3 style={{color: 'black'}}>News And Events</h3>
            </div>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={ImageOne}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                              </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" color="primary">
                                    12/12/2021
                              </Button>

                                <Button size="small" color="primary">
                                    Share
                               </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Imag4}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                              </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" color="primary">
                                    02/02/2021
                              </Button>

                                <Button size="small" color="primary">
                                    Share
                               </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Imag2}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                              </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" color="primary">
                                    03/03/2021
                              </Button>

                                <Button size="small" color="primary">
                                    Share
                               </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={Imag3}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                              </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" color="primary">
                                    02/4/2021
                              </Button>

                                <Button size="small" color="primary">
                                    Share
                               </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
       
    );
}
