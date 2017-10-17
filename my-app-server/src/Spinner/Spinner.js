import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import spinnerActionCreators from './spinnerActionCreators';
import { connect } from 'react-redux';

class Spinner extends React.Component{
	constructor(){
		super();
		this.onIncrementClick = this.onIncrementClick.bind(this);
		this.onDecrementClick = this.onDecrementClick.bind(this);
	}
	onIncrementClick(){
		let value = parseInt(this.refs.txtValue.value, 10);
		this.props.increment(value)
	}
	onDecrementClick(){
		let value = parseInt(this.refs.txtValue.value, 10);
		this.props.decrement(value);
	}
	render(){
		var spinnerValue = this.props.value;
		return(
			<div>
				<input type="text" ref="txtValue" />
				<input type="button" value="Decrement" onClick={this.onDecrementClick}/>
				<span>[ {spinnerValue} ]</span>
				<input type="button" value="Increment" onClick={this.onIncrementClick}/>
			</div>
		)
	}
}

export default connect(
	(state) => ({value : state.spinner}),
	(dispatch) => bindActionCreators(spinnerActionCreators, dispatch)
)(Spinner);
