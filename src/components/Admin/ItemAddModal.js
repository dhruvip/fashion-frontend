import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Clear from '@material-ui/icons/Clear';

const formStyles = theme => {
    return ({
        container: {
        //   display: 'flex',
        //   flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit,
          width: 200,
        },
        btnContainer: {
            display: 'flex',
        },
        button: {
            marginRight: '1.250em',
            marginTop: '1em'
        },
        menu: {
          width: 200,
        },
      });
};

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <Divider />
              <div className={classes.btnContainer}> 
                <Button variant="contained" color="primary" className={classes.button}>
                    Save
                </Button>
                <Button variant="contained" color="default" className={classes.button}>
                    Cancel
                </Button>
              </div>
            </form>);
    }
};

const AddItemForm = withStyles(formStyles)(Form);

const modalStyles = theme => {
    return ({
        paper: {
            position: 'absolute',
            width: theme.spacing.unit * 50,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing.unit * 4,
        },
        icon: {
            position: 'absolute',
            right: '1.250em',
            fontSize: 32,
        },
    });
};

class ItemAddModal extends Component {
    constructor(props) {
        super(props);
    }

    addItemModalOpen = () => {
        this.setState({open: true});
    }

    addItemModalClose = () => {
        this.setState({open: false});
        this.props.onClose('dhruvi');
    }

    componentWillMount() {
        this.setState({open: this.props.isOpen});
    }

    componentWillUnmount() {
        console.log('component did unmount');
    }

    render () {
        const { classes } = this.props;
        return (<Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.addItemModalClose}
        >
            <div className={classes.paper}
                style={{
                    top: `50%`,
                    left: `50%`,
                    transform: `translate(-50%, -50%)`,
                  }}>
            <div style={{display: 'flex'}}>
                <Typography variant="title" id="modal-title">
                    Add New Item
                </Typography>
                <Clear className={classes.icon}/>
            </div>
            <AddItemForm />
            </div>
        </Modal>);
    }
}

export default withStyles(modalStyles)(ItemAddModal)