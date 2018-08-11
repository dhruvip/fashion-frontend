import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => {
    return({
        crumpContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            height: 'fit-content',
            background: theme.palette.primary.light
        },
        crumLink: {
            ...theme.typography.headline,
            color: theme.palette.primary.dark,
            cursor: 'pointer',
            paddingLeft: '0.750em',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    });
}

class BreadCrump extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            crumps:[]
        }
    }

    componentWillMount() {
        console.log('componentWillMount breadcrump', this.props)
        this.setState({ crumps: this.props.crumps})
    }

    componentWillUpdate(nextProps) {
        console.log('componentWillUnmount breadcrump')
        this.setState({ crumps: nextProps.crumps})
    }

    render() {
        const { classes } = this.props;
        return (<div className={classes.crumpContainer}>
            {   
                this.state.crumps.map((eachCrump, index) => {
                    return (<div key={`crump${index}`}>
                        <Typography className={classes.crumLink}
                            onClick={()=>console.log('crumlink clicked')}
                            >
                            Dhruvi Pandya  {this.state.crumps[index+1] ? '>' : ''}
                        </Typography>
                        </div>);
                })
            }
        </div>);
    }
}

export default withStyles(styles)(BreadCrump);
