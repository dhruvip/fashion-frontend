import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Cart from '@material-ui/icons/ShoppingCart';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';



const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'static'
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 10,
    },
});

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
          };
    } 

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    renderAppHeader = () => {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const { classes } = this.props;
        return (<AppBar elevation={1} className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.flex}> Common Closet</Typography>
                <div >
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                        className={classes.menuButton}
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                        className={classes.menuButton}
                    >
                        <Cart />
                    </IconButton>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-appbar"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <MenuList>
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                </div>
            </Toolbar>
        </AppBar>);
    };

    render() {
        return this.renderAppHeader();
    }
}

export default withStyles(styles)(AppHeader);