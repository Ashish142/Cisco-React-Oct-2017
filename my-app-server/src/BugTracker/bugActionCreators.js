//async actions - functions as actions

import bugService from './bugService'
var bugActionCreators = {
	load : function(){
		return function(dispatch){
			bugService
				.load()
				.then(bugs => dispatch({type : 'LOADED', payload : bugs}))
		};
	},
	addNew : function(bugName){
		return function(dispatch){
			bugService
				.addNew(bugName)
				.then(newBug => dispatch({type : 'ADDED', payload : newBug}));
		};
	},
	toggle : function(bugToToggle){
		return function(dispatch){
			bugService
				.toggle(bugToToggle)
				.then(bug => dispatch({type : 'TOGGLED', payload : bug}));
		};
	},
	removeClosed : function(){
		return function(dispatch){
			return { type : 'REMOVE_CLOSED' };
		};
	}
}
export default bugActionCreators;