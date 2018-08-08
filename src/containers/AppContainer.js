import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemsGrid from './../components/App/Grid';
import AppHeader from './../components/AppHeader/AppHeader';
// import SideBar from './../components/SideBar/SideBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import customTheme from './../components/Theme/Theme';

import { fetchAllItems } from './../actions/index';

const styles = theme => ({
    root: {
		minHeight: '100%',
		display: 'flex',

	},
	container: {
		maxWidth: '100vw',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '70px',
		margin: '0 0 0 0',
		position: 'relative',
		flex: '1 0 auto'
	}
});

function mapStateToProps(state) {
    return {
        ...state
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
		};
    }
    
    componentDidMount() {
		console.log(this.props)
		this.props.fetchAllItems();
    }

	renderApp = () => {
		console.log(this.props.items)
		this.props.items.data[0].itemModel = 'qwertyuio erdtghjkl; ertyuio dfghjkl fsgdsdfgczsjk dsjfcjfuiewiruehuifh kuasdhkajwheruiahkwurfhiuwecfiuewgfkugicukebfkue jewydygJKWGEIDUEGDYUKDVUKYEWVBCDBWE';
		const { classes } = this.props;
		return (<MuiThemeProvider theme={customTheme}>
			<div className={classes.root}>
				<AppHeader />
				<div className={classes.container}>
					{/* <SideBar /> */}
					<ItemsGrid data={this.props.items.data}/>
				</div>
                
			</div>
		</MuiThemeProvider>);
	};
	render() {
		console.log(this.props.items)
		if (!this.props.items) {
			return <div />;
		}
		return this.renderApp();
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles,{withTheme: true})(AppContainer));
