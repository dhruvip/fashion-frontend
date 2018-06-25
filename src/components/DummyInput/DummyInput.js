import React, { Component } from 'react';
import './DummyInput.css';

export default class DummyInput extends Component{
    constructor(props){
		super(props);
		this.state = {
			dummy: 'test'
		}
	} 
    render() {
		return (<div>Hello there!!!!</div>);
    }
}