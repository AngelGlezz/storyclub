$(document).ready(function(){
	$("#buttonCover").click(function(){
		var mov = parseInt($(".cover").css("height"));
		$("body").animate({"scrollTop": mov}, 3000);
	});
});