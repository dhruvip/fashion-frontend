import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => {
    console.log(theme)
    return ({
        root: {
            // ...theme.mixins.gutters(),
            // paddingTop: theme.spacing.unit * 2,
            // paddingBottom: theme.spacing.unit * 2,
            // marginTop: '0.625em',
            // marginLeft: '1.250em',
            // marginRight: '1.250em',
            // display: 'flex',
            // flexDirection: 'column',
            // flexWrap: 'wrap',
            // justifyContent: 'space-evenly',
            // // maxWidth: '62.500em',
            // maxHeight: '100vh'

        },
        card: {
            width: '18.750em',
            heigth: 'fit-content',
            minWidth: '10vw',
            maxWidth: '18.750em',
            flexGrow: 1,
            marginRight: '1em',
            marginBottom: '1em',
            flexBasis: '33.3%',
            cursor: 'pointer'
        },
        link: {
            textDecoration: 'none'
        }
    });
}
class DisplayGrid extends Component {
    render() {
        const { classes } = this.props;
        console.log()
        return (<div>
            <Paper className={classes.root} elevation={0}>
                { 
                    this.props.data.map((eachItem) => {
                        return (
                            <Link to={`/item/${eachItem['_id']}`} 
                            key={eachItem['_id']}
                            target="_blank" className={classes.link}>
                                <Card className={classes.card} >
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {eachItem.itemName}
                                            {eachItem.itemModel}
                                            {eachItem.itemRetailCost}
                                        </Typography>
                                        <Typography component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            ADD TO CART
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        );
                    })
                }
            </Paper>
        </div>);
    }
}

export default withStyles(styles)(DisplayGrid)