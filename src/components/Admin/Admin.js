import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Add, Delete } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';


import customTheme from '../Theme/Theme';
import ItemsTable from './ItemsTable';
import AddModal from './ItemAddModal';
import AdminContainer from './../../containers/AdminContainer';

const adminPageStyles = theme => {
    return ({
        root: {
            paddingLeft: '5%',
            paddingTop: '2%',
        },
        addButton: {
            right: '185px',
            top: '70px', 
            position: 'absolute'
        },
        adminTitle: {
            ...theme.typography.title,
            color: theme.palette.primary.main,
            paddingBottom: '20px'
        },
    });
};

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItemType: 'watch',
            open: false,
            watchesCol: ['Item Name', 'Item Id', 'Product Id', 'Brand Id', 'Item Model',' Retail Cost', 'Actions']
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
                    type: 'text',
                    required: true
                }, {
                    columnName: 'Item Id',
                    type: 'text',
                    required: true
                },{
                    columnName: 'Product Name',
                    type: 'dropdown',
                    required: true
                },{
                    columnName: 'Brand Name',
                    type: 'text',
                    required: true
                },{
                    columnName: 'Item Model',
                    type: 'text',
                    required: true
                },{
                    columnName: 'Retail Cost',
                    type: 'text',
                    required: true
                }];
            case 'default':
                return []
        }
    }

    setData = (data) => {
        // console.log('in admin');
        // console.log(data);
    };

    onAddModalSave = (newItem) => {
        console.log('admin:new add: ', newItem);
    }

    render() {
        const { classes } = this.props;
        return (<MuiThemeProvider theme={customTheme}>
            <AdminContainer stateHook={this.setData} />
            <div className={classes.root}>
                <div className={classes.adminTitle} style={{color: customTheme.palette.primary.main}} >
                    ADMIN
                </div>
                <ItemsTable columns={this.state.watchesCol}
                data={null}/>
                <Button
                    onClick={this.addItemModalOpen}
                    variant="fab" 
                    color="primary" 
                    aria-label="Add" 
                    className={classes.addButton}>
                    <Add />
                </Button>
                { this.state.open ? <AddModal isOpen={this.state.open}
                    onClose={this.addItemModalClose}
                    onSave={this.onAddModalSave}
                    formSchema={this.getFormSchema()}/> : <div />}
            </div>
        </MuiThemeProvider>);
    }
};

export default withStyles(adminPageStyles, { withTheme: true })(Admin);