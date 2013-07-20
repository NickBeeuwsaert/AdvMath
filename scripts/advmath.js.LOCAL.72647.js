//TODO: Clean this up later
(function(){
	var expression = document.querySelector(".expression");
	var log = document.querySelector(".log");
	var priorExpressions = [];
	var expressionIndex = 0;
	var currentExpression = undefined;
	var scope = {};
	scope.all_vars = function(){
		var variables = [];
		for(x in scope){
			if(scope.hasOwnProperty(x)){
				variables.push(x);
			}
		}
		return variables;
	};
	scope.all_vars.toString = function() {
		var ret_str = scope.all_vars().join(',');
		return ret_str;
	}
	scope.all_vars.help_string = "Returns a list of all variables";
	expression.addEventListener("keyup", function(evt){
		console.log(evt.keyCode);
		//up: 38, down: 40
		if(evt.keyCode == 13){ // Enter...
			var result = document.createElement("p");
			var message = document.createElement("span");
			priorExpressions.push(this.value);
			currentExpression = undefined;
			expressionIndex = 0;
			try {
				node = math.parse(this.value, scope);
				math_result = node.eval();
				result.appendChild(document.createTextNode(this.value));
				message.appendChild(document.createTextNode(math_result));
				result.appendChild(message);
				this.value = "";
			}catch(e){
				result.className+=" i";
				message.appendChild(document.createTextNode(this.value));
				result.appendChild(document.createTextNode(e.message+":"));
				result.appendChild(message);
				console.dir(e);
			}
			log.insertBefore(result, log.firstChild);

		}
		//Needs some work.
		/*else if(evt.keyCode == 38) { // up
			evt.preventDefault();
			if(currentExpression == undefined){
				currentExpression = this.value;
			}
			this.value = priorExpressions[expressionIndex>=priorExpressions.length?priorExpressions.length-1:expressionIndex++];
		}else if(evt.keyCode == 40) { // down
			evt.preventDefault();
			if(currentExpression == undefined){
				currentExpression = this.value;
			}
			if(expressionIndex > 0){
				expressionIndex --;
			}
			if(expressionIndex == 0 && currentExpression != undefined){
				this.value = currentExpression;
				currentExpression = undefined;
			}else{
				this.value = priorExpressions[expressionIndex];
			}

		}*/
	});
})();