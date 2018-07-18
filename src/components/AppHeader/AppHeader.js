import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'relative'
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
});

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    renderAppHeader = () => {
        const { classes } = this.props;
        return (<AppBar elevation={1} className={classes.appBar}>
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography> Common Closet</Typography>
            </Toolbar>
        </AppBar>);
    };

    render() {
        return this.renderAppHeader();
    }
}

export default withStyles(styles)(AppHeader);