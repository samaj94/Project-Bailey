$(document).on("ready", function(){
var suggest = $("#suggested");
var retweet = $("#retweets");
var smallhead = $("#testthis");
var hover = $("#hover-columns");
var rlink = $("#retweet-this");
var statehover = false;
rlink.style.opacity = "0";

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

smallhead.on("mouseenter", function(e){
	rlink.style.opacity = "1";	
})

});