let bugService = {
	load : function(){
		return fetch('http://localhost:3030/bugs')
				.then(response => response.json())
	},
	addNew : function(bugName){
		let newBugData = {
				id : 0,
				name : bugName,
				isClosed : false,
				createdAt : new Date()
			};
		return	fetch('http://localhost:3030/bugs', {
				method : 'POST',
				body : JSON.stringify(newBugData),
				headers : {
					'content-type' : 'application/json'
                }
			}).then(response => response.json());
	},
	toggle : function(bugToToggle){
		bugToToggle.isClosed = !bugToToggle.isClosed;
		return fetch('http://localhost:3030/bugs/' + bugToToggle.id, {
				method : 'PUT',
				body : JSON.stringify(bugToToggle),
				headers : {
					'content-type' : 'application/json'
                }
			})
		.then(response => response.json());
	}
}
export default bugService;