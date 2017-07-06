$(function(){
var login=$("#loginid");
var register=$("#registerid");
loginregisterForm(login);
loginregisterForm(register);
});




function loginregisterForm(loginregisterval) {
loginregisterval.hover(function(){$(this).css('cursor','pointer');
$(this).removeClass('loginresgister');
$(this).addClass('loginresgisterhover');
},

function(){$(this).css('cursor','default');
$(this).addClass('loginresgister');
$(this).removeClass('loginresgisterhover');
}).click(function(){
var loginregisterbool = 0;
$("#email").val('');
$("#name").val('');
$("#password").val('');
$(".formerror").hide();
$(".greentick").hide();
if($(this).attr('id').search("login") != -1)
{
loginregisterbool=0;
$("#loginhide").hide();
$("#loginregisterbutton").attr("value","Login");

}
else
{
loginregisterbool=1;
$("#loginhide").show();
$("#loginregisterbutton").attr("value","Register");
}


$("#dialog-form").dialog({
      height: 250,
      width: 400,
});
loginregistervalidation(loginregisterbool);
});
}


function loginregistervalidation(loginregisterbool){
$(".text").each(function(){
$(this).keyup(function(){
var regExp;
var cmpValue;
if ($(this).attr('id') == "name"){
	regExp = /^[a-z]([0-9a-z_\s])+$/i;
	cmpValue = $("#name").val();
	if (regExp.test(cmpValue) && cmpValue != ""){
			$("#greentickName").show(200);
		}
		else
		{
			$("#greentickName").hide();
		}
}

else if ($(this).attr('id') == "email")
	{
	regExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	cmpValue = $("#email").val();
	if (regExp.test(cmpValue) && cmpValue != ""){
			$("#greentickEmail").show(200);
		}
		else
		{	
			$("#greentickEmail").hide();
		}
	}
else if ($(this).attr('id') == "password")
	{
	regExp = /^([0-9a-zA-Z])+$/;
	cmpValue = $("#password").val();
	if (regExp.test(cmpValue) && cmpValue != ""){
			$("#greentickPassword").show(200);
		}
		else
		{
			$("#greentickPassword").hide();
		}
	}

else {


}

});
});
$("#contactForm").submit(function(){

	if(loginregisterbool ==1){

		if($("#greentickName").is(":visible") && $("#greentickEmail").is(":visible") && $("#greentickPassword").is(":visible") )
			{
			alert('Registeration Success!');
			}

		else{
			
			$(".formerror").show();
			return false;
		}


}

else {

		if($("#greentickEmail").is(":visible") && $("#greentickPassword").is(":visible") )
		{
			alert('Login Success!');
		}

		else{
			
			$(".formerror").show();
			return false;
		}

	}
		

});


}