import React,  {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import bugActionCreators from './bugActionCreators';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';


class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render (){
		let { bugs, addNew, toggle, removeClosed } = this.props;
		return  (
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit {...{addNew}} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		);
	}
}


export default connect(
	(state) => ({bugs : state.bugs}),
	(dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);