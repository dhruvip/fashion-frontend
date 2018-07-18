import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AccessoriesList from '../../containers/Accessories_list';
import ActiveAccessory from '../../containers/Active_accessories';
import ItemsGrid from '../../containers/Items_grid/Items_grid';
import AppHeader from '../AppHeader/AppHeader';
import SideBar from '../SideBar/SideBar';


//MUI Theme imports and customization
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#4db6ac'
		},
		secondary: { 
			main: '#b9f6ca'
		},
	},
  	typography: {
		  fontFamily: ['Courier']
	  }
});

//This styles can be accessed through this.props.classes
const styles = theme => ({

});


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawer: false,
			login: false,
			theme: customTheme
		};
	}

	renderApp = () => {
		const { classes } = this.props;
		return (<MuiThemeProvider theme={this.state.theme}>
			<div>
				<AppHeader />
				{/* <SideBar /> */}
				<ItemsGrid />
			</div>
		</MuiThemeProvider>);
	};
	render() {
		return this.renderApp();
	}
}

export default withStyles(styles)(App);
