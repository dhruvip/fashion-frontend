import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectAccessories } from '../actions/action_select_accessories';

function mapStateToProps(state) {
    return {
        accessories: state.accessories
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectAccessories: selectAccessories },dispatch);
}

class AccessoriesList extends Component {
    constructor(props) {
        super(props);
    }
    renderList() {
        return this.props.accessories.map(accessories => {
          return (
            <li
              onClick={ () => this.props.selectAccessories(accessories) }
              key={accessories.itemCode}
              className="list-group-item"
            >
              {accessories.itemName}
            </li>
          );
        });
    }
    render() {
        if (!this.props.accessories) {
            return <ul />
        }
        
        return (
            <ul className='list-group col-sm-4'>
                { this.renderList() }
            </ul>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AccessoriesList);