$(function(){

setInterval("showphoto()",4000);

});

function showphoto() {
	var currP = $("#photoShow div.current");
	var nextP = currP.next();

	if (nextP.length == 0)
		{
		nextP = $("#photoShow div:first");
		} 

	currP.removeClass('current').addClass('previous');

	nextP.css({opacity:0.0}).addClass('current').animate({opacity:1.0},1000,
	function(){
		currP.removeClass('previous');
	});

	}