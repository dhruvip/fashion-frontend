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
        zIndex: theme.zIndex.drawer + 100,
        position: 'fixed',
        minWidth: 'auto'
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
        this.accountBtn = React.createRef();
        this.cartBtn = React.createRef();
        this.state = {
            accountBtnClick: false
          };
    } 

    handleAccountMenu = event => {
        this.accountBtn = event.currentTarget;   
        this.setState(state => ({ accountBtnClick: !state.accountBtnClick }));
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    renderAppHeader = () => {
        const { classes } = this.props;
        return (<AppBar elevation={1} className={classes.appBar}>
            <Toolbar>
                <Typography className={classes.flex}> Common Closet</Typography>
                <div >
                    <IconButton
                        onClick={this.handleAccountMenu}
                        className={classes.menuButton}
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        ref={this.cartBtn}
                        onClick={this.handleCartMenu}
                        className={classes.menuButton}
                    >
                        <Cart />
                    </IconButton>
                    <Popper open={this.state.accountBtnClick} anchorEl={this.accountBtn} 
                    anchororigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformorigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
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