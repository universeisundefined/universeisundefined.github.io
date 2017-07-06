$(function(){
$( "#message" ).resizable({maxHeight: 250,maxWidth: 288, minHeight: 38, minWidth: 288});
$("#contactformid").submit(function(){
var boolname =1;
var boolemail =1;
var namereg = /^[a-z]([0-9a-z_\s])+$/i;
var emailreg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var name = $("#contactname").val();
var email = $("#contactemail").val();
if (namereg.test(name) || name != "")
	{
	
	boolname = 1;
	$("#formnameerror").hide(100);
	}

else
{
	boolname = 0;
	$("#formnameerror").show(100);
	$("#contactname").addClass('err');
	

}
console.log(emailreg.test(email));
if (emailreg.test(email) || email != "")
	{
	boolemail = 1;
	$("#formemailerror").hide(100);

	}
else
{
	boolemail = 0;
	$("#formemailerror").show(100);
	$("#contactemail").addClass('err');

}

if(boolemail == 1 && boolname == 1) {
alert('Thank you ' + ' ' + name);
}
else {
return false;
}
});

});