//TODO: Clean this up later
(function(){
	var expression = document.querySelector(".expression");
	var log = document.querySelector(".log");
	expression.addEventListener("keydown", function(evt){

		if(evt.keyCode == 13){ // Enter...
			var result = document.createElement("p");
			var message = document.createElement("span");

			try {
				math_result = math.eval(this.value);
				result.appendChild(document.createTextNode(this.value));
				message.appendChild(document.createTextNode(math_result));
				result.appendChild(message);
				this.value = "";
			}catch(e){
				result.className+=" i";
				message.appendChild(document.createTextNode(this.value));
				result.appendChild(document.createTextNode(e.message+":"));
				result.appendChild(message);
				this.value = "";
			}
			log.insertBefore(result, log.firstChild);

		}
	});
})();
