import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../../assets/Homepage-Banner-04.png'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={Image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom>
                           Computer Departments In Visited In This Week   
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions style={{display: 'flex',justifyContent: 'space-between'}}>
                    <Button size="small" color="primary">
                        02/12/2021
                    </Button>

                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </>

    );
}
