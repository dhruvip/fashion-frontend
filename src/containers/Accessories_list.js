import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        accessories: state.accessories
    };
}

class AccessoriesList extends Component {
    constructor(props) {
        super(props);
    }
    renderList() {
        return this.props.accessories.map(accessories => {
          return (
            <li
              key={accessories.itemCode}
              className="list-group-item"
            >
              {accessories.itemName}
            </li>
          );
        });
    }
    render() {
        return (
            <ul className='list-group col-sm-4'>
                { this.renderList() }
            </ul>
        );
    }
}

export default connect(mapStateToProps)(AccessoriesList);