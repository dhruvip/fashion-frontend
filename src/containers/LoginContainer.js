import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { resetAuthToken } from './../actions';


function mapStateToProps(state) {
    return {
        ...state
    };
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        resetAuthToken: resetAuthToken
        }, dispatch);
}

const styles = theme => {
    console.log(theme)
    return({
        container: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            background: theme.palette.primary.main
        },
        loginBox: {
            background: theme.palette.secondary.main,
            position: 'fixed',
            top: '15%',
            left:'33.3%',
            width: '30%',
            minWidth: '31.875em',
            minHeight: '32.500em',
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        textField: {
            flexGrow: 0,
            width: '80%',
            height: '20%',
            marginTop: '0px',
            marginBottom: '0px',
        },
        logo: {
            ...theme.typography.headline,
            lineHeight: '8.35em',
            color: theme.palette.primary.dark
        },
        button:{
            paddingTop: '0.85em',
            color: theme.palette.secondary.main
        },
        forgotLogin:{
            textDecoration: 'none',
            paddingBottom: '0.938em',
            color: theme.palette.primary.dark,
            '&:hover': {
                textDecoration: 'underline'
             }
        },
        container1: {
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 0 0 0',
            position: 'relative',
            flex: '1 0 auto'
        }
    });
}

class LoginContainer extends Component {
    onSignIn = () => {
        this.props.resetAuthToken().then((tkn) => {
            console.log(tkn)
            document.cookie = "{authToken=" + tkn.payload.data.token+"}";
        },(e) => {

        });
    }
    render() {
        const { classes } = this.props;
        return (
			<div className={classes.container}>
                <div className={classes.loginBox}>
                <div className={classes.logo}>
                    CommonCLoset
                </div>
                <TextField
                    label="Email"
                    id="email"
                    defaultValue=""
                    className={classes.textField}
                    margin="none"
                    inputProps={{type:'email'}}
                    InputLabelProps={{
                        style: {
                            'fontSize': '1.2em'
                        }
                    }}
                />
                <TextField
                    label="Password"
                    id="passid"
                    defaultValue=""
                    className={classes.textField}
                    margin="none"
                    inputProps={{type:'password'}}
                    InputLabelProps={{
                        style: {
                            'fontSize': '1.2em'
                        }
                    }}
                />
                <Link to={`/forgot-password`} className={classes.forgotLogin}>Forgot Password?</Link>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.onSignIn}>
                    Sign In
                </Button>
                </div>
			</div>)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles,{withTheme: true})(LoginContainer));
