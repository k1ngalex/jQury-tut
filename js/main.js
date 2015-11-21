var counter = 1;
var hash = "#";

$(document).on("mobileinit", function() {});
$(document).ready(function(ev) {
	console.log("local storage good" + JSON.stringify( hash + counter));
    $("#start").on("click", function(ev) {
    parseId = JSON.parse(localStorage.getItem("pageId"));
    $("#start").attr("href" , parseId );
	console.log("changes page" + parseId);
	if(parseId === null){
		localStorage.setItem("pageId", JSON.stringify( hash + counter));
	}
});
    
	//$("#start").on("pageinit", function(ev) {
		$(".nextPage").on("click", function(ev) {  
		if(counter < 9){
		counter += 1;
		}
		console.log("counts up" + counter);
		localStorage.setItem("pageId", JSON.stringify( hash + counter));
		});
	
    
	$(".backPage").on("click", function(ev) {
	console.log("counts down");
		counter -= 1;
	localStorage.setItem("pageId", JSON.stringify( hash + counter));
	});
});
