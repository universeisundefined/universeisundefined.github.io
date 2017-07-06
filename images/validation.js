$(function(){
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

		if($("#greentickName").is(":visible") && $("#greentickEmail").is(":visible") && $("#greentickPassword").is(":visible") )
			{
			alert('success');
		}

		else{
			
			$(".formerror").show();
			return false;
		}
		});

});