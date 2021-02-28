import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import Imag1 from '../../../assets/dpi pictures/News and Events pic/news-1.jpg';
import Imag2 from '../../../assets/dpi pictures/News and Events pic/news-2.jpg';
import Imag3 from '../../../assets/dpi pictures/News and Events pic/news-3.jpg';
import Imag4 from '../../../assets/dpi pictures/News and Events pic/news-4.jpg';
import NewsDialoug from '../newsDialoug/NewsDialoug';
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
    const myData = [
        {
            img : Imag1,
            text : ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            date : '12/12/2021',
            dialoug : 'amar sonar banla'

        },
        {
            img : Imag2,
            text : ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            date : '12/12/2021',
            dialoug : 'ami tomay valobashi'
        },
        {
            img : Imag3,
            text : ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            date : '12/12/2021',
            dialoug : 'cirodin tomar akash tomar batash'
        },
        {
            img : Imag4,
            text : ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            date : '12/12/2021',
            dialoug : 'amar prane bajay bashi'
        },
    ]
    return (
        <div style={{ backgroundColor:'#D2D2D2', padding:'20px'}}>
        
            <div>
             <h3 style={{color: 'black'}}>News And Events</h3>
            </div>
            <div className={classes.root}>
                <Grid container spacing={2}>

                    {
                        myData.map((data,i)=>{
                            return (
                                <Grid key={i} item xs={12} md={6}>
                                <NewsDialoug output={data.dialoug}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={data.img}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                   {data.text}
                                        </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Button size="small" color="primary">
                                                {data.date}
                                        </Button>

                                        <Button size="small" color="primary">
                                                Share
                                        </Button>
                                        </CardActions>
                                    </Card>
                                
                                </NewsDialoug>
                                </Grid>
                            )
                        })
                    }
                    
                </Grid>
            </div>
        </div>
       
    );
}
