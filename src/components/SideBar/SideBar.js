import React, { Component } from 'react';


import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const classes = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    renderSideBar = () => {
        return (
            <div className={classes.root}>
              {/* <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                  <Typography variant="title" color="inherit" noWrap>
                    CommonCloset
                  </Typography>
                </Toolbar>
              </AppBar> */}
              <Drawer
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.toolbar} />
                <List>Dhruvi</List>
                <Divider />
                <List>Pandya</List>
              </Drawer>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography noWrap>{'Test Ignore'}</Typography>
              </main>
            </div>
          );
    };

    render() {
        return this.renderSideBar();
    }
}

export default withStyles(classes)(SideBar);