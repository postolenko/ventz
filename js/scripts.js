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

	$("[data-popup-link]").on("click", function(e) {
    	e.preventDefault();
    	popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    	$("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $("body").addClass("fixed");
        $("[data-popup]").fadeIn(300);
    });

    $(".close_btn").on("click", function(e) {
    	e.preventDefault();
    	curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "")
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(this).closest("[data-popup]").fadeOut(300);
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
        	curTop = $("body").css("top");
	        curTop = Math.abs(parseInt(curTop, 10));
	        $("body").attr("style", "")
	        if (curTop !== 0) {
	            $("html").scrollTop(curTop);
	        }
	        $("body").removeClass("fixed");
			$("[data-popup]").fadeOut(300);
        }
    });

    $(".popup_sect").mouseup(function (e){
        hide_element = $(".popup_wrapp");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "")
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $("[data-popup]").fadeOut(300);
        }
    });

    $("#files").change(function() {
	  filename = this.files[0].name
	  $("label[for = "+$(this).attr("id")+"] span").text(filename);
	});

});