var spinnerActionCreators = {
	increment : function(value){
		return { type : 'INCREMENT', payload : value };
	},
	decrement : function(value){
		return { type : 'DECREMENT', payload : value};
	}
};
export default spinnerActionCreators;