function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
}

async function execute_confirm(how_many){
		for(var j=0;j<how_many;j++){
			document.getElementsByClassName("list-group-item list-group-item-action lh-tight user-select-none unread ng-star-inserted")[0].click();
			await sleep(150);
			document.getElementsByClassName("btn btn-outline-success btn-sm px-lg-4 ng-star-inserted")[0].click();
			await sleep(500);
		}
}	

function confirm_messages(){
		var element = document.getElementsByClassName("badge rounded-pill bg-primary float-end ng-star-inserted")[1];
		var count = element.textContent;
		execute_confirm(10);	
}
confirm_messages();
