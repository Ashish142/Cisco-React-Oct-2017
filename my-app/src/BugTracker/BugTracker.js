import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import bugActionCreators from './bugActionCreators';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';


let BugTracker = ({ bugs, addNew, toggle, removeClosed }) => (
	<div>
		<BugStats bugs={bugs} />
		<BugSort />
		<BugEdit {...{addNew}} />
		<BugList {...{bugs, toggle, removeClosed}} />
	</div>
);

export default connect(
	(state) => ({bugs : state.bugs}),
	(dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);