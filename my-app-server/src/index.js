import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import bugsReducer from './BugTracker/bugsReducer';
import spinnerReducer from './Spinner/spinnerReducer';

import BugTracker from './BugTracker/BugTracker';
import Spinner from './Spinner/Spinner';

import registerServiceWorker from './registerServiceWorker';

let allReducers = combineReducers({
	bugs : bugsReducer,
	spinner : spinnerReducer
});

let store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<div>
			<BugTracker />
			<hr/>
			<Spinner />
		</div>
	</Provider>, 
	document.getElementById('root'));