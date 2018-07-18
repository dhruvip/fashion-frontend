import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//material-ui
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

//actions
import fetchAllItems from '../../actions/index';
import { withStyles } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        width: 500,
        height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
};

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAllItems: fetchAllItems }, dispatch);
}

class ItemsGrid extends Component {
    constructor(props) {
        super(props);

    }

    GridListExampleSimple = () => {
        const { classes } = this.props;
        return this.props.items ? (
            <div className={classes.root}>
              <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div"></ListSubheader>
                </GridListTile>
                {this.props.items.data.map(tile => (
                  <GridListTile key={tile['_id']}>
                    <img src={tile.img} alt={tile.itemType} />
                    <GridListTileBar
                      title={tile.itemType}
                      subtitle={<span>by: {tile.itemCode}</span>}
                      actionIcon={
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>) : (<div>No data available.</div>);
    }

    componentDidMount() {
        this.props.fetchAllItems();        
    }

    render() {
        console.log('rendering grid', this.props.items);
        return this.GridListExampleSimple();
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ItemsGrid));
