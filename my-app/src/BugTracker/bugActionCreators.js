var bugActionCreators = {
	addNew : function(bugName){
		return { type : 'ADD_NEW', payload : bugName};
	},
	toggle : function(bugToToggle){
		return { type : 'TOGGLE' , payload : bugToToggle};
	},
	removeClosed : function(){
		return { type : 'REMOVE_CLOSED' };
	}
}
export default bugActionCreators;