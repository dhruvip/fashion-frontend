import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => {
    return ({
        cartContainer: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100vw',
            height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        breadCrumps: {
            flexBasis: '100%'
        },
        cart: {
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.primary.main
        },
        checkout: {
            background: theme.palette.secondary.main
        }

    });
}

class Cart extends Component {
    render() {
        const { classes } = this.props
        return (<div className={classes.cartContainer}>
            <div className={this.breadCrumps}> dhruvi > cart</div>
            <div className={classes.cart}>C___A___R___T</div>
            <div className={classes.checkout}>Checkout</div>
        </div>)
    }
}

export default withStyles(styles,{withTheme: true})(Cart);
