import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Add, Delete } from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';


import customTheme from '../Theme/Theme';
import ItemsTable from './ItemsTable';

const adminPageStyles = theme => {
    console.log(theme);    
    return ({
        root: {
            paddingLeft: '5%',
            paddingTop: '2%',
        },
        addButton: {
            right: '185px',
            top: '50px', 
            position: 'absolute'
        },
        adminTitle: {
            ...theme.typography.title,
            color: theme.palette.primary.main
        }
    });
};

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    addItemModalOpen = () => {
        this.setState({open: true});
    }

    addItemModalClose = () => {
        this.setState({open: false});
    }

    modalStyles = theme => {
        return ({
            paper: {
                position: 'absolute',
                width: theme.spacing.unit * 50,
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[5],
                padding: theme.spacing.unit * 4,
              },        
        });
    };

    renderModal = (styles) => {
        const { classes } = styles;
        return (<Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.addItemModalClose}
          >
            <div className={classes.paper}>
              <Typography variant="title" id="modal-title">
                Text in a modal
              </Typography>
              <Typography variant="subheading" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </div>
          </Modal>);
    }

    render() {
        const { classes } = this.props;
        return (<MuiThemeProvider theme={customTheme}>
            <div className={classes.root}>
                <div className={classes.adminTitle} >
                    ADMIN
                </div>
                <ItemsTable />
                <Button
                    onClick={this.addItemModalOpen}
                    variant="fab" 
                    color="primary" 
                    aria-label="Add" 
                    className={classes.addButton}>
                    <Add />
                </Button>
                { this.state.open ? withStyles(this.modalStyles)(this.renderModal()) : <div /> }
            </div>
        </MuiThemeProvider>);
    }
};

export default withStyles(adminPageStyles, { withTheme: true })(Admin);