$(function(){
var output = "<ul>"
$("#mainContent h2").each(function(){
var tocvalue = $(this).text();
$(this).attr("id",tocvalue);
output+='<li>'
output+='<a href = "#' + tocvalue + '">' + tocvalue + '</a></li>';
});
output+='</ul>';
$("#toc").html(output);
});