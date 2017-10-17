function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBug = { name : action.payload, isClosed : false};
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		let bugToToggle = action.payload,
			toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		let newState = currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE_CLOSED'){
		let newState = currentState.filter(bug => !bug.isClosed);
		return newState;
	}
	return currentState;
}
export default bugsReducer;