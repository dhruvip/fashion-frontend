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
        this.state = {};
        
        props.formSchema.map((field) => {
            this.state[field.columnName] = field.columnName;
        });
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        });
    }

    getFormFromSchema = () => {
        const { classes } = this.props;
        return this.props.formSchema.map((field, index) => {
            if (field.type === 'text') {
                return (<TextField
                    key={field.modelName+index}
                    id={field.columnName}
                    label={field.columnName}
                    className={classes.textField}
                    value={this.state[field.columnName]}
                    onChange={this.handleChange(field.columnName)}
                    margin="normal"
                  />)
            }
        });
    }

    onSave = () => {
        var newItem = {};
        this.props.formSchema.map((field) => {
            newItem[field.modelName] = this.state[field.columnName];
        });
        console.log('save in form')
        this.props.onSave(newItem);
        this.props.onCancel();
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
              { this.getFormFromSchema() }
              <Divider />
              <div className={classes.btnContainer}> 
                <Button variant="contained" color="primary" className={classes.button} onClick={this.onSave}>
                    Save
                </Button>
                <Button variant="contained" color="default" className={classes.button} onClick={this.props.onCancel}>
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
            cursor: 'pointer'
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
        // console.log('component did unmount');
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
                <Clear className={classes.icon} onClick={this.addItemModalClose}/>
            </div>
            <AddItemForm 
            onSave={this.props.onSave} 
            onCancel={this.addItemModalClose}
            formSchema={this.props.formSchema}/>
            </div>
        </Modal>);
    }
}

export default withStyles(modalStyles)(ItemAddModal)