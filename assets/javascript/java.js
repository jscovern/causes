
$(document).ready(function(){
	$("#toggleContentOnClick").click(function() {
		$("ul").slideToggle();
		console.log("got in here");
	// console.log("made it into the div");
	});
});

// $('#toggle-content-onclick').click(function() {
  // $('#some_paragraph').slideToggle();
// });