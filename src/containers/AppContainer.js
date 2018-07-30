import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemsGrid from './../components/App/Grid';
import AppHeader from './../components/AppHeader/AppHeader';
import SideBar from './../components/SideBar/SideBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import customTheme from './../components/Theme/Theme';

import { fetchAllItems } from './../actions/index';

const styles = theme => ({
    root: {
    }
});

function mapStateToProps(state) {
    return {
        items: state.items
    };
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchAllItems: fetchAllItems
        }, dispatch);
}


class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawer: false,
			login: false,
			theme: customTheme
		};
    }
    
    componentDidMount() {
        this.props.fetchAllItems().then((d) => {
            console.log(d.data);
        });
    }

	renderApp = () => {
		const { classes } = this.props;
		return (<MuiThemeProvider theme={this.state.theme}>
			<div className={classes.root}>
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

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(AppContainer));
