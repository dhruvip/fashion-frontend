import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import BreadCrump from './BreadCrump';

const itemStyles = theme => {
    return ({
        card: {
          display: "flex",
          marginTop: '2%',
          marginRight: '2%',
          marginLeft: '2%',
        },
        details: {
          display: "flex",
          flexDirection: "row"
        },
        content: {
          //flex: "1 0 auto",
          flexGrow: 2
        },
        cover: {
          width: 151,
          height: 151
        },
        controls: {
          display: "flex",
          alignItems: "center",
          paddingLeft: theme.spacing.unit,
          paddingBottom: theme.spacing.unit
        },
        playIcon: {
          height: 38,
          width: 38
        }

    });
}

class CartItem extends Component {
    render() {
        const { classes, theme } = this.props
        return (
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="headline">Live From Space</Typography>
                  <Typography variant="subheading" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                    Controls
                </div>
              </div>
            </Card>)
    }
}

const Cartitem = withStyles(itemStyles)(CartItem)

const styles = theme => {
    return ({
        cartContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            minWidth: '95vw',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingLeft: '3vh',
            paddingRight: '2vh',
            '@media (min-width:0px) and (orientation: landscape)':{
                minHeight: `calc(100vh - ${48}px - 2vh)`,    
                paddingTop: '2vh'            
            },
            '@media (min-width:600px)':{
                minHeight: `calc(100vh - ${64}px - 2vh)`,
                paddingTop: '2vh'            

            },
            minHeight: `calc(100vh - ${56}px - 2vh)`,
            paddingTop: '2vh',   
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
        breadCrumps: {
            // ...theme.mixins.toolbar,
            flexBasis: '100%',
            marginBottom: '5px'
        },
        cart: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            '@media (min-width:0px) and (orientation: landscape)':{
                minHeight: `calc(100vh - ${48}px - 2vh)`,    
            },
            '@media (min-width:600px)':{
                minHeight: `calc(100vh - ${64}px - 2vh)`,

            },
            minHeight: `calc(100vh - ${56}px - 2vh)`,
            flexBasis: '60%',
            // background: theme.palette.primary.main,
            alignSelf: 'flex-start',
            marginRight: '2%'
        },
        checkout: {
            flexGrow: 1,
            flexBasis: '20%',
            marginRight: '2%',
            marginTop: '2%',
            background: theme.palette.secondary.main
        }

    });
}

class Cart extends Component {
    render() {
        const { classes } = this.props
        return (<div className={classes.cartContainer}>
            <div className={classes.breadCrumps}> <BreadCrump crumps={['1','2','3']}/></div>
            <div className={classes.cart}>
                <Cartitem />
            </div>
            <div className={classes.checkout}>
                <Card >
                    <div>
                        <CardContent>
                            <Typography variant="headline">Live From Space</Typography>
                            <Typography variant="subheading" color="textSecondary">
                            Mac Miller
                            </Typography>
                            <IconButton aria-label="Play/pause">
                            <PlayArrowIcon className={classes.playIcon} />
                            </IconButton>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>)
    }
}

export default withStyles(styles,{withTheme: true})(Cart);