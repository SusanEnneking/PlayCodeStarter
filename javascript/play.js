//using the revealing module pattern

var playJavascript = (function(){
	function changeWords(color){
    	var words = document.getElementById("words");
    	words.style.color = color;
	};
	// return public functions
	return {
		change : changeWords
	};
})();
