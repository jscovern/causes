
$(document).ready(function(){
	
	$("#toggleContentOnClick").click(function() {
		$("ul").slideToggle();
		console.log("got in here");

	// console.log("made it into the div");
	});
});


	$("#special").onClick(function(){
		$("#slideFir").slideToggle("slow");
		$("#slideSec").slideToggle("slow");
	});

// $('#toggle-content-onclick').click(function() {
  // $('#some_paragraph').slideToggle();
// });
//function newpage() {
/*	return "file:Users/ZumiBrown/causes/donationForms";
	
};
$("a.smallBox").click(function() {
	window.location="file:///Users/ZumiBrown/causes/donationForms";
});*/
