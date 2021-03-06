var sm = (function(){
	function createStore(reducer){
		var _reducer = reducer,
			init_action = { type : '@@INIT_ACTION'},
			_state = reducer(undefined, init_action),
			_subscribers = [];

		function getState(){
			return _state;
		}
		function subscribe(subscriptionFn){
			if (typeof subscriptionFn === 'function')
				_subscribers.push(subscriptionFn);
		}
		function trigger(){
			_subscribers.forEach(subscriptionFn => subscriptionFn());
		}
		function dispatch(action){
			var newState = _reducer(_state, action);
			if (newState !== _state){
				_state = newState;
				trigger();
			}
		}
		return {
			getState : getState,
			dispatch : dispatch,
			subscribe : subscribe
		};
	}
	function bindActionCreators(actions, dispatch){
		var result = {};
		for(let key in actions){
			result[key] = function(){
				let action = actions[key].apply(this, arguments);
				dispatch(action);
			}
		}
		return result;
	}
	return{
		createStore : createStore,
		bindActionCreators : bindActionCreators
	}
})();