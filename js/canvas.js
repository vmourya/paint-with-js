$(document).ready(function(){
	wrt=false;
	penColor='#FFFFFF';
	$('section').mousedown(function(e){
		wrt=true; penColor=$('input[name="penColor"]').val();
	});
	$('section').mousemove(function(e){
		if(wrt)$('section').append('<span style="background:'+ penColor +'; top:'+ e.pageY +'px; left:'+ e.pageX + 'px"></span>');//sz++; 
	}).mouseup(function(){
		wrt=false;
	});
});