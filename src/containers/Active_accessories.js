import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        activeItem: state.activeAccessories
    };
}

class ActiveAccessories extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.activeItem) {
            console.log(this.props.activeItem);
        }
        // return this.props.activeItem ? (<div>
        //     <ul>
        //         <li>
        //             {this.props.activeItem.itemCode}
        //         </li>
        //         <li>
        //             {this.props.activeItem.itemName}
        //         </li>
        //     </ul>
        // </div>) : (<div></div>);
        return <div></div>;
    }
} 

export default connect(mapStateToProps)(ActiveAccessories);