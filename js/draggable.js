$(function(){
$(".fadeoutsmall").hover(
function(){
$(this).css('cursor','pointer');
var imgsrc = $(this).attr("src");
imgsrc =imgsrc.replace("thumb","thumbzoom");
$(this).attr("src",imgsrc);
},function(){$(this).css('cursor','default');
var imgsrc = $(this).attr("src");
imgsrc =imgsrc.replace("thumbzoom","thumb");
$(this).attr("src",imgsrc);
});
$(".imgdefault").click(function(){
$(this).find(".draggable" ).fadeIn(200).dialog();
$(".dragg").draggable();
});
});