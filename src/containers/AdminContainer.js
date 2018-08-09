import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import theme from './../components/Theme/Theme';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Add } from '@material-ui/icons';


import ItemsTable from './../components/Admin/ItemsTable';
import AddModal from './../components/Admin/ItemAddModal';
import AppHeader from './../components/AppHeader/AppHeader';

//actions
import { fetchAllItems, saveNewItem, deleteOneItem } from './../actions/index';
console.log(theme)

const adminPageStyles = theme => {
	console.log(theme)
	return ({
		root: {
			paddingLeft: '5%',
			paddingTop: '2%',
			position: 'relative'
		},
		addButton: {
			right: '185px',
			top: '70px', 
			position: 'absolute'
		},
		adminTitle: {
			color: theme.palette.primary.main,
			paddingBottom: '20px',
		},
	});
};

function mapStateToProps(state) {
	return {
		items: state.items,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		fetchAllItems: fetchAllItems,
		saveNewItem: saveNewItem,
		deleteOneItem: deleteOneItem
	}, dispatch);
}

class AdminContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItemType: 'watch',
			open: false
		};
	}
	addItemModalOpen = () => {
		this.setState({open: true});
	}

	addItemModalClose = () => {
		this.setState({open: false});
	}

	getFormSchema = () => {
		switch(this.state.selectedItemType) {
			case 'watch':
				return [{
					columnName: 'Item Name',
					modelName: 'itemName',
					type: 'text',
					required: true
				}, {
					columnName: 'Item Id',
					modelName: 'itemId',
					type: 'text',
					required: true
				},{
					columnName: 'Product Name',
					modelName: 'productId',
					type: 'text',
					required: true
				},{
					columnName: 'Brand Name',
					modelName: 'brandId',
					type: 'text',
					required: true
				},{
					columnName: 'Item Model',
					modelName: 'itemModel',
					type: 'text',
					required: true
				},{
					columnName: 'Retail Cost',
					modelName: 'itemRetailCost',
					type: 'text',
					required: true
				}];
			default:
				return []
		}
	}

	setData = (data) => {
		// console.log('in admin');
		// console.log(data);
	};

	onItemDelete = (itemToBeDeleted) => {
		console.log(itemToBeDeleted)
		this.props.deleteOneItem(itemToBeDeleted).then((d) => {
			console.log(d)
			this.props.fetchAllItems();
		},(e) => {
			console.log(e)
		})
	}

	onAddModalSave = (newItem) => {
		console.log('admin:new add: ', newItem);
		this.props.saveNewItem(newItem).then((d) =>{
			console.log(d)
			if (d.payload.status === 200) {
				console.log('save successful');
				this.props.fetchAllItems();
			}
		},(e)=>{
			console.log('err while saving')
		});
	}

	componentDidMount() {
		console.log(this.props)
		this.props.fetchAllItems().then((d)=>{
			console.log(d)
		},(e)=>{
			console.log(e)
		});        
	}

	render() {
		const { classes } = this.props;
		return (<div>
			<AppHeader />
			<div className={classes.root}>
				<Typography className={classes.adminTitle} >
					ADMIN
				</Typography>
				{ this.props.items ? <ItemsTable schema={this.getFormSchema()}
				data={this.props.items.data}
				onDelete={this.onItemDelete}/> : ''}
				<Button
					onClick={this.addItemModalOpen}
					variant="fab" 
					color="primary" 
					aria-label="Add" 
					className={classes.addButton}>
					<Add />
				</Button>
				{ this.state.open ? <AddModal 
					isOpen={this.state.open}
					onClose={this.addItemModalClose}
					onSave={this.onAddModalSave}
					formSchema={this.getFormSchema()}/> : <div />}
			</div>
		</div>);
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(adminPageStyles,{withTheme: true})(AdminContainer));
