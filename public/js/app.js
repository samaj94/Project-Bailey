$(document).on("ready", function(){
var suggest = $("#suggested");
var retweet = $("#retweets");
var hover = $("#hover-columns");

var statehover = false;

retweet.on("mouseenter", function(e){
	if(statehover == 0){
	hover.addClass("on-hover");
	console.log("Test1");
	statehover = 1;
	}
});

retweet.on("mouseleave", function(e){
	hover.removeClass("on-hover");
	console.log("Test2");
	statehover = 0;
})
});