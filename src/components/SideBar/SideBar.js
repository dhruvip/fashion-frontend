import React, { Component } from 'react';


import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import  { ListItem, ListItemIcon, ListItemText }  from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawer: {
    zIndex: 1,
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
		const { classes } = this.props;
        return (
			<Drawer
			className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
            >
				<div className={classes.toolbar} >
					<List>
						<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
						</ListItem>
						<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Something Else" />
						</ListItem>
					</List>
				</div>
			
			</Drawer>
        );
    };

    render() {
        return this.renderSideBar();
    }
}

export default withStyles(styles)(SideBar);