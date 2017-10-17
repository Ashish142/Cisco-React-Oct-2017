import React, { Component } from 'react';

class BugEdit extends Component{
	constructor(){
		super();
		this.onCreateClick = this.onCreateClick.bind(this);
	}
	onCreateClick(){
		let bugName = this.refs.txtBugName.value;
		this.props.addNew(bugName);
	}
	render(){
		return(
			<section className="edit">
				<label>Bug Name :</label>
				<input type="text" ref="txtBugName" />
				<input type="button" value="Create New" onClick={this.onCreateClick}/>
			</section>
		)
	}
}
export default BugEdit;