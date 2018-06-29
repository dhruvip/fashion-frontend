import React, { Component } from 'react';
import './DummyInput.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class DummyInput extends Component{
    constructor(props){
		super(props);
	} 
    render() {
		return (<div>
				<AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
			</div>);
    };
}