// var w = window,
// d = document,
// e = d.documentElement,
// g = d.getElementsByTagName('body')[0],
// bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


var parentBlock;
var dropdownBox;

$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

	$(".dropdown_item").each(function() {
		dropdownBox = $(this).find(".dropdown_content");
		if($(this).hasClass("active")) {
			dropdownBox.css({
				"display" : "block"
			});
		}
	});

	$(".dropdown_title").on("click", function(e) {
		e.preventDefault();
		parentBlock = $(this).closest(".dropdown_item");
		dropdownBox = parentBlock.find(".dropdown_content");
		if(dropdownBox.is(":hidden")) {
			dropdownBox.slideDown(300);
			parentBlock.addClass("active");
		} else {
			dropdownBox.slideUp(300);
			parentBlock.removeClass("active");
		}
	});

});