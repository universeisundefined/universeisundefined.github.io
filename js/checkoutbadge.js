$(function(){
var checkoutbadgevalue=0;
$('.cartbtn').click(function(){
var x = Number($(this).parent().siblings().find(".spinner").val());
if(x != ""){
checkoutbadgevalue = checkoutbadgevalue + x;
$('#checkoutbadge' ).text(checkoutbadgevalue); 
$('#checkoutbadge' ).effect("bounce",500 );
}
});
});